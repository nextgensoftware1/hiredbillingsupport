
import React, { useState, useLayoutEffect } from "react";


const PricingHero = () => {
  const [headerPad, setHeaderPad] = useState(60);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector("header");
      if (header) {
        setHeaderPad(header.offsetHeight + 20);
      } else {
        setHeaderPad(60);
      }
    }
    updatePad();
    window.addEventListener("resize", updatePad);
    return () => window.removeEventListener("resize", updatePad);
  }, []);

  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center position-relative"
      style={{
        backgroundColor: 'var(--bs-primary)',
        overflow: 'hidden',
        paddingTop: headerPad,
        paddingBottom: 0,
      }}
      id="hero"
    >
      {/* Overlay for contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(0deg, rgba(var(--bs-primary-rgb),0.95), rgba(0,0,0,0.20))',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 2, minHeight: '400px' }}>
        <div className="hero-content text-center py-5">
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: '2.5rem',
              color: 'var(--bs-white)',
              lineHeight: '1.2',
              textShadow: '0 2px 8px rgba(0,0,0,0.18)',
            }}
          >
            Remote Staffing Pricing - Save<br />upto 70% in Payroll
          </h1>
          <p
            className="lead mt-3"
            style={{
              color: 'rgba(255,255,255,0.92)',
              fontWeight: 500,
              fontSize: '1.15rem',
              textShadow: '0 1px 2px rgba(0,0,0,0.10)',
            }}
          >
            Hiring remote talent can significantly reduce overhead costs by up to 70%<br />compared to hiring an in-house employee.
          </p>
        </div>
      </div>

      {/* Responsive & Animation Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translate3d(0, 40px, 0); }
            to { opacity: 1; transform: none; }
          }

          .hero-content {
            animation: fadeInUp 1s ease-in-out;
          }

          @media (max-width: 992px) {
            .hero-section {
              min-height: 260px !important;
              border-radius: 1rem;
              margin: 16px 0;
              text-align: center;
            }
            .hero-content h1 {
              font-size: 1.5rem;
            }
            .hero-content p {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default PricingHero;
