
import React, { useRef, useEffect, useState } from 'react';
import './CountUpStats.css';
const stats = [
  {
    value: 30,
    suffix: '%',
    label: 'SG&A Savings (MSO Alliance avg.)'
  },
  {
    value: 99,
    suffix: '%',
    label: 'Clean-claim Rate (post-pod)'
  },
  {
    value: 43,
    suffix: 'x',
    label: 'AR Hub ROI (Year 1)'
  }
];

function formatValue(val, prefix = '', suffix = '', statIdx = 0) {
  // For $50M, show as $50M+
  if (statIdx === 1) {
    return `${prefix}${val}${suffix}`;
  }
  // For others, use comma formatting
  return prefix + val.toLocaleString() + (suffix || '');
}

const CountUpStats = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visible) {
            setVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [visible]);

  useEffect(() => {
    if (visible) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 1200;
        const frameRate = 60;
        const totalFrames = Math.round((duration / 1000) * frameRate);
        let frame = 0;
        function animate() {
          frame++;
          const progress = Math.min(frame / totalFrames, 1);
          const current = Math.round(progress * end);
          setCounts(c => {
            const copy = [...c];
            copy[i] = current;
            return copy;
          });
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCounts(c => {
              const copy = [...c];
              copy[i] = end;
              return copy;
            });
          }
        }
        animate();
      });
    }
  }, [visible]);

  return (
    <section className="bg-light pt-5" ref={sectionRef}>
      <div className="container">
        <div className="  text-center">
          <h2 style={{ fontWeight: 'bold' }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Performance&nbsp;
            </span>

            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Benchmarks
            </span>
          </h2>
        </div>
        <div className="countup-stats-container">
          {stats.map((stat, i) => (
            <div className="countup-stat" key={i}>
              <span className="countup-value">
                {formatValue(counts[i] >= stat.value ? stat.value : counts[i], stat.prefix, stat.suffix, i)}
              </span>
              <div className="countup-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountUpStats;

