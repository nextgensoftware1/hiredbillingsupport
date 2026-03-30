import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import heroGif from '../assets/images/hero/hero_gif.gif';

const Squares = ({
  direction = 'diagonal',
  speed = 0.5,
  borderColor = 'rgba(255, 255, 255, 0.1)',
  squareSize = 40,
  hoverFillColor = 'rgba(255, 255, 255, 0.05)',
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef();
  const numSquaresY = useRef();
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (hoveredSquare.current) {
            const elapsedTime = Date.now() - hoveredSquare.current.timestamp;
            const fadeOutDuration = 1000;
            const opacity = Math.max(0, 1 - elapsedTime / fadeOutDuration);

            if (
              Math.floor((x - startX) / squareSize) === hoveredSquare.current.x &&
              Math.floor((y - startY) / squareSize) === hoveredSquare.current.y
            ) {
              ctx.fillStyle = `rgba(255,255,255,${opacity * 0.15})`;
              ctx.fillRect(squareX - 1, squareY - 1, squareSize + 2, squareSize + 2);

              ctx.fillStyle = `rgba(255,255,255,${opacity * 0.1})`;
              ctx.fillRect(squareX, squareY, squareSize, squareSize);
            }
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );

      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(1, 'rgba(0,0,0,0.3)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);

      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = event => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const relativeX = mouseX + (gridOffset.current.x % squareSize);
      const relativeY = mouseY + (gridOffset.current.y % squareSize);

      const hoveredSquareX = Math.floor(relativeX / squareSize);
      const hoveredSquareY = Math.floor(relativeY / squareSize);

      hoveredSquare.current = {
        x: hoveredSquareX,
        y: hoveredSquareY,
        timestamp: Date.now(),
      };
    };

    const handleMouseLeave = () => {
      hoveredSquare.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'all',
        cursor: 'default',
      }}
    />
  );
};

// --- Slider data: exact homepage content (7 slides) ---
const heroSlides = [
  {
    headline: 'Healthcare Operations & Revenue Cycle Management - Simplified',
    subtext:
      'Hired Billing Support (HBS) provides healthcare organizations with enterprise-grade credentialing, billing, and administrative support to streamline operations and improve financial performance.',
    cta: 'Schedule a Consultation',
    ctaLink: '/contact',
  },
  {
    headline: 'A Strategic MSO Partner for Healthcare Organizations',
    subtext:
      'We help medical practices, behavioral health clinics, laboratories, and healthcare startups build compliant and scalable operational infrastructure - allowing providers to focus on patient care while we manage the administrative complexity.',
    cta: 'Explore Our Solutions',
    ctaLink: '/services',
  },
  {
    headline: 'Faster Credentialing. Faster Access to Insurance Networks.',
    subtext:
      'Our credentialing experts manage provider enrollment with Medicare, Medicaid, and commercial payers while maintaining CAQH profiles, revalidations, and ongoing compliance tracking.',
    cta: 'Start Credentialing',
    ctaLink: '/contact',
  },
  {
    headline: 'Optimize Your Revenue Cycle from Eligibility to Payment',
    subtext:
      'HBS provides complete revenue cycle management services including eligibility verification, claim submission, payment posting, denial management, and financial reporting.',
    cta: 'Improve Revenue Performance',
    ctaLink: '/contact',
  },
  {
    headline: 'Recover Lost Revenue with Advanced A/R Management',
    subtext:
      "Our specialized Accounts Receivable recovery strategies identify aging claims, payer delays, and unresolved denials to recover outstanding reimbursements and strengthen your practice's cash flow.",
    cta: 'Recover Outstanding Claims',
    ctaLink: '/contact',
  },
  {
    headline: 'Smarter Billing. Faster Collections.',
    subtext:
      'Through accurate coding validation, proactive claim monitoring, and strategic payer follow-ups, we help healthcare organizations reduce denials and accelerate collections.',
    cta: 'Strengthen Billing Operations',
    ctaLink: '/contact',
  },
  {
    headline: 'Operational Infrastructure for Growing Healthcare Practices',
    subtext:
      'Whether launching a new healthcare organization or expanding an established practice, HBS provides the operational support, compliance structure, and administrative expertise required to scale successfully.',
    cta: 'Partner With HBS',
    ctaLink: '/contact',
  },
];

// Inline styles — infinite left-to-right loop, refined & professional
const sliderStyles = `
  .hero_slider_viewport {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .hero_slider_track {
    display: flex;
    will-change: transform;
  }

  .hero_slider_track.animated {
    transition: transform 0.75s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .hero_slide_item {
    min-width: 100%;
    width: 100%;
    flex-shrink: 0;
  }

  /* --- Title sizing — controlled, consistent across all slides --- */
  .slide_title {
    font-size: clamp(22px, 2.6vw, 32px) !important;
    line-height: 1.35 !important;
    font-weight: 700 !important;
    letter-spacing: -0.3px !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
    color: #ffffff !important;
  }
  .slide_title strong {
    font-size: inherit !important;
    font-weight: 800 !important;
    color: #ffffff !important;
    display: block;
  }

  /* --- Description sizing --- */
  .slide_desc {
    font-size: clamp(13px, 1.3vw, 15px) !important;
    line-height: 1.7 !important;
    color: rgba(255,255,255,0.78) !important;
    margin-bottom: 18px !important;
    max-width: 480px;
  }

  /* --- Badge sizing --- */
  .slide_badge {
    font-size: 12px !important;
    letter-spacing: 0.3px;
  }

  /* Smooth fade+slide from left for content inside active slide */
  @keyframes slideContentIn {
    from { opacity: 0; transform: translateX(-22px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .hero_slide_item.is_active .slide_title {
    animation: slideContentIn 0.55s 0.08s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .hero_slide_item.is_active .slide_desc {
    animation: slideContentIn 0.55s 0.17s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .hero_slide_item.is_active .slide_cta {
    animation: slideContentIn 0.55s 0.26s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  /* Stats pills */
  .slide_stats {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
    margin-bottom: 4px;
  }
  .slide_stat_pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.09);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 6px;
    padding: 5px 12px;
    font-size: 12px;
    font-weight: 600;
    color: rgba(255,255,255,0.92);
    white-space: nowrap;
    letter-spacing: 0.2px;
  }
  .slide_stat_pill i {
    font-size: 10px;
    color: rgba(255,255,255,0.6);
  }

  /* Dots — active dot stretches into a pill */
  .hero_slide_dots {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 20px;
  }
  .hero_slide_dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background 0.35s ease, width 0.35s ease, border-radius 0.35s ease;
  }
  .hero_slide_dot.active {
    background: rgba(255,255,255,0.9);
    width: 22px;
    border-radius: 4px;
  }
`;

function Hero() {
  const [headerPad, setHeaderPad] = useState('9px');
  // trackIndex goes 0 → 1 → 2 → ... → N → (jump back to 0 silently)
  // We append a clone of slide[0] at the end so the transition to it looks real,
  // then instantly snap back to position 0 without animation.
  const [trackIndex, setTrackIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const totalSlides = heroSlides.length;
  // real slide index (dots + is_active) — wraps naturally
  const currentSlide = trackIndex % totalSlides;

  // Auto-advance every 5 seconds, always moving left-to-right
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimated(true);
      setTrackIndex(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // When we land on the cloned slide (index === totalSlides), snap silently back to 0
  useEffect(() => {
    if (trackIndex === totalSlides) {
      const timer = setTimeout(() => {
        setAnimated(false);           // disable transition
        setTrackIndex(0);             // jump to real slide 0
      }, 680); // just after the 0.65s transition finishes
      return () => clearTimeout(timer);
    }
  }, [trackIndex, totalSlides]);

  const goToSlide = (idx) => {
    setAnimated(true);
    setTrackIndex(idx);
  };

  useLayoutEffect(() => {
    const headerEl = document.querySelector('.site_header_1');
    if (headerEl) setHeaderPad(headerEl.offsetHeight + 16 + 'px');
    const handleResize = () => {
      const el = document.querySelector('.site_header_1');
      if (el) setHeaderPad(el.offsetHeight + 16 + 'px');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slides to render = real slides + clone of first slide at the end
  const renderSlides = [...heroSlides, heroSlides[0]];

  return (
    <section
      className="hero_section"
      style={{ position: 'relative', overflow: 'hidden', paddingTop: headerPad }}
    >
      <style>{sliderStyles}</style>

      {/* Animated Squares Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="rgba(255, 255, 255, 0.12)"
          squareSize={40}
          hoverFillColor="rgba(255,255,255,0.1)"
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">

          {/* Left Content — Infinite Left-to-Right Slider */}
          <div className="col-lg-6">
            <div className="hero_content">

              <div className="hero_slider_viewport">
                <div
                  className={`hero_slider_track${animated ? ' animated' : ''}`}
                  style={{ transform: `translateX(-${trackIndex * 100}%)` }}
                >
                  {renderSlides.map((slide, idx) => {
                    const isActive = (idx % totalSlides) === currentSlide && idx === trackIndex;
                    return (
                      <div
                        key={idx}
                        className={`hero_slide_item${isActive ? ' is_active' : ''}`}
                      >
                        {/* Title */}
                        <h1 className="hero_title slide_title">
                          {slide.headline}
                        </h1>

                        {/* Description */}
                        <p className="hero_description slide_desc">
                          {slide.subtext}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Buttons — static */}
              {/* <div className="hero_buttons">
                <Link to="/contact" className="btn btn-primary">
                  <span className="btn_label" data-text="Hire Talent">Hire Talent</span>
                  <i className="btn_icon fas fa-arrow-right"></i>
                </Link>
                <Link to="/services" className="btn btn-outline-light">
                  <span className="btn_label" style={{ color: 'white' }} data-text="Our Services">Our Services</span>
                </Link>
              </div> */}

              {/* Trust badge — static */}
              <div className="hero_trust_indicator mt-3">
                <div className="trust_badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>HIPAA Compliant</span>
                </div>
              </div>

              {/* Dot indicators — based on real slide count */}
              <div className="hero_slide_dots">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`hero_slide_dot${currentSlide === idx ? ' active' : ''}`}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>


              {/* Two static buttons below slider */}
              <div className="hero_buttons d-flex gap-3 mt-4" style={{ justifyContent: 'flex-start' }}>
                <Link
                  to="/cost-roi"
                  className="btn btn-primary"
                  style={{
                    minWidth: 180,
                    fontSize: '1.05rem',
                    padding: '10px 28px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '0.5px',
                  }}
                >
                  <span className="btn_label" style={{padding: '0 2px'}}>
                    COST &amp; ROI EVALUATOR
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline-light"
                  style={{
                    minWidth: 180,
                    fontSize: '1.05rem',
                    padding: '10px 28px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    color: '#fff',
                    border: '2px solid #fff',
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '0.5px',
                  }}
                >
                  <span className="btn_label" style={{padding: '0 2px'}}>
                    CONTACT US
                  </span>
                </Link>
              </div>

            </div>
          </div>

          {/* Right Content — completely unchanged */}
          <div className="col-lg-6">
            <div
              className="hero_cards_wrapper"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '450px' }}
            >
              <img
                src={heroGif}
                alt="hero visual"
                style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '20px', objectFit: 'cover' }}
              />
              <div className="floating_shapes">
                <div className="shape shape_1"></div>
                <div className="shape shape_2"></div>
                <div className="shape shape_3"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;