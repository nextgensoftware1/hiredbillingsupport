import React from 'react';

// Import HBS logos (drop the image files into src/assets/images/hbs logos/)
import l1 from '../assets/images/hbs logos/1.png';
import l2 from '../assets/images/hbs logos/2.png';
import l3 from '../assets/images/hbs logos/3.png';
import l4 from '../assets/images/hbs logos/4.png';
import l5 from '../assets/images/hbs logos/5.png';
import l6 from '../assets/images/hbs logos/6.png';
import l7 from '../assets/images/hbs logos/7.png';
import l8 from '../assets/images/hbs logos/8.png';
import l9 from '../assets/images/hbs logos/9.png';
import l10 from '../assets/images/hbs logos/10.png';
import l12 from '../assets/images/hbs logos/12.png';
import l13 from '../assets/images/hbs logos/13.png';
import l14 from '../assets/images/hbs logos/14.png';
import l15 from '../assets/images/hbs logos/15.png';
import l16 from '../assets/images/hbs logos/16.png';
import l17 from '../assets/images/hbs logos/17.png';
import l18 from '../assets/images/hbs logos/18.png';
import l19 from '../assets/images/hbs logos/19.png';
import l20 from '../assets/images/hbs logos/20.png';
import l21 from '../assets/images/hbs logos/21.png';
import l23 from '../assets/images/hbs logos/23.png';
import l24 from '../assets/images/hbs logos/24.png';
import l25 from '../assets/images/hbs logos/25.png';
import l26 from '../assets/images/hbs logos/26.png';
import l27 from '../assets/images/hbs logos/27.png';
import l28 from '../assets/images/hbs logos/28.png';
import l29 from '../assets/images/hbs logos/29.png';
import l30 from '../assets/images/hbs logos/30.png';
import l31 from '../assets/images/hbs logos/31.png';
import l32 from '../assets/images/hbs logos/32.png';

const LogosLoop = ({ speed = 20 }) => {
  const logos = [
    l1,
    l2,
    l3,
    l4,
    l5,
    l6,
    l7,
    l8,
    l9,
    l10,
    l12,
    l13,
    l14,
    l15,
    l16,
    l17,
    l18,
    l19,
    l20,
    l21,
    l23,
    l24,
    l25,
    l26,
    l27,
    l28,
    l29,
    l30,
    l31,
    l32,
  ];

  // Duplicate the list so the animation appears seamless
  const loopLogos = [...logos, ...logos];

  return (
    <section className="py-4" aria-label="Client logos">
      <div className="container">
        <div className="logo-loop-wrapper" style={{ overflow: 'hidden' }}>
          <div
            className="logo-loop"
            style={{
              display: 'flex',
              gap: '48px',
              alignItems: 'center',
              animation: `scroll ${speed}s linear infinite`,
            }}
          >
            {loopLogos.map((src, idx) => (
              <div
                key={idx}
                className="logo-item"
                style={{
                  flex: '0 0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '160px',
                }}
              >
                <img src={src} alt={`client-logo-${idx}`} style={{ maxHeight: '48px', width: 'auto' }} loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .logo-loop-wrapper { position: relative; }
          .logo-loop { will-change: transform; }


          @media (max-width: 768px) {
            .logo-loop { gap: 24px; }
            .logo-item { min-width: 110px; }
            .logo-item img { max-height: 36px; }
          }
        `}
      </style>
    </section>
  );
};

export default LogosLoop;
