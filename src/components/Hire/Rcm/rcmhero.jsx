import bg1 from '../../../assets/images/hero/RCM01.webp';
import { useState, useLayoutEffect } from 'react';

const HeroSection = () => {
  const [headerPad, setHeaderPad] = useState(120);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector('header');
      const infoBar = document.querySelector('.top-info-bar');
      let pad = 120;
      if (header) pad = header.offsetHeight;
      if (infoBar) pad += infoBar.offsetHeight;
      setHeaderPad(pad + 30);
    }
    updatePad();
    window.addEventListener('resize', updatePad);
    return () => window.removeEventListener('resize', updatePad);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        background: `linear-gradient(rgba(16,24,39,0.68), rgba(16,24,39,0.68)), url(${bg1}) center/cover no-repeat`,
        padding: `${headerPad}px 0 70px 0`,
        color: "#fff",
        position: "relative",
        minHeight: "520px",
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        <div className="row align-items-start">
          <div className="col-md-6">
            <h1
              className="fw-bold"
              style={{
                fontSize: "48px",
                lineHeight: "1.2",
                marginBottom: "20px",
                color: "#fff",
                textShadow: "0 2px 12px rgba(0,0,0,0.18)",
              }}
            >
              End-to-End RCM <br />
              <span style={{ fontWeight: 600, color: '#e0f2fe' }}>Services for</span> <br />
              <span style={{ color: "#00b14f" }}>Hospitals &amp; Groups</span>
            </h1>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 600,
                marginBottom: "18px",
                color: "#e0f2fe",
                letterSpacing: "-1px",
              }}
            >
              Revenue Cycle Management
            </h2>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                marginBottom: "30px",
                color: "#f0f0f0",
                maxWidth: 500,
              }}
            >
              We maximize clean claims, reduce denials, and accelerate reimbursements — working inside your EHR/PM with audit-ready workflows.
            </p>
            <a
              href="/contact"
              className="btn"
              style={{
                background: "#5CBDAA",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "18px",
                padding: "14px 35px",
                borderRadius: "12px",
                border: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                textDecoration: "none",
                display: "inline-block"
              }}
              onMouseOver={e => e.target.style.background = '#4cae9b'}
              onMouseOut={e => e.target.style.background = '#5CBDAA'}
            >
              Schedule Free Demo
            </a>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
