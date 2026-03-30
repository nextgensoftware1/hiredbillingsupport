
import React, { useState, useLayoutEffect } from "react";
import bg1 from "../../assets/images/hero/Practice01.webp";

const Hero = () => {
  const [headerPad, setHeaderPad] = useState(80);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector('header');
      const infoBar = document.querySelector('.top-info-bar');
      let pad = 80;
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
      className="hero-section position-relative d-flex align-items-center"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: `${headerPad}px 0 70px 0`,
        minHeight: "500px",
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 100%)",
          zIndex: 1,
        }}
      ></div>
      <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: 1100 }}>
        <div className="row align-items-center">
          <div className="col-md-7">
            <h1 className="fw-bold" style={{ fontSize: "2.7rem", lineHeight: 1.13, marginBottom: 18, color: "#fff", fontWeight: 900, letterSpacing: "-1.5px", textShadow: "0 2px 10px rgba(0,0,0,0.10)" }}>
              Launch Your Medical Practice <br />
              <span style={{ color: "#5CBDAA" }}>With Confidence</span>
            </h1>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: 18, color: "#e0f2fe", letterSpacing: "-0.5px" }}>
              Your Complete Practice Launch Guide
            </h2>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
              Your comprehensive roadmap to starting a successful medical practice with HBS. From credentialing to billing setup, compliance to financial planning—we have got you covered.
            </p>
            <a
              href="/contact"
              className="btn"
              style={{
                background: "#5CBDAA",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.15rem",
                padding: "16px 44px",
                borderRadius: "12px",
                border: "none",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: "0 10px 30px rgba(92, 189, 170, 0.18)",
                letterSpacing: "0.5px",
                textDecoration: "none",
              }}
              onMouseOver={e => (e.target.style.background = "#54A1D9")}
              onMouseOut={e => (e.target.style.background = "#5CBDAA")}
            >
              Get Your Launch Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

