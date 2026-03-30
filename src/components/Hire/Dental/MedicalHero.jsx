import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../../assets/images/hero/banner/Medical-banner.webp"; // Import your local hero image

const MedicalHero = () => {
  const [headerPad, setHeaderPad] = useState('80px');
  useLayoutEffect(() => {
    const headerEl = document.querySelector('.site_header_1');
    if (headerEl) {
      setHeaderPad(headerEl.offsetHeight + 16 + 'px'); // 16px extra for spacing
    }
    const handleResize = () => {
      const headerEl = document.querySelector('.site_header_1');
      if (headerEl) {
        setHeaderPad(headerEl.offsetHeight + 16 + 'px');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section
      className="hero-section d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "75vh",
        paddingTop: headerPad,
        paddingBottom: "80px",
        color: "#fff", 
      }}
    >
      <div className="container position-relative z-3">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-10 col-12">
            <div className="pe-lg-4">

              {/* Top Small Label */}
              <div className="mb-3">
                <small
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                  }}
                >
                  Starting From $10/Hr
                </small>
              </div>

              {/* Heading */}
              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "42px",
                  lineHeight: "1.2",
                  color: "#fff",
                }}
              >
                Hire Remote Medical Staff with HBS
              </h1>

              {/* Paragraph */}
              <p
                className="lead mb-4"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  maxWidth: "650px",
                }}
              >
                Boost your practice with HIPAA-aligned virtual medical talent
                from HBS. Cut hiring costs by up to 70%, reduce workload for your team,
                and scale your operations quickly without compromising quality.
              </p>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="btn btn-lg"
                style={{
                  background: "#fff",
                  borderRadius: "30px",
                  padding: "12px 35px",
                  fontWeight: "600",
                  color: "#00A651",
                  border: "none",
                }}
              >
                 Get A Talent
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* RESPONSIVE FIXES */}
      <style>
        {`
          @media (max-width: 992px) {
            .hero-section {
              min-height: 65vh;
              padding-top: 60px;
              padding-bottom: 60px;
              text-align: center;
            }

            .hero-section h1 {
              font-size: 32px !important;
            }

            .hero-section p {
              font-size: 16px !important;
            }
          }

          @media (max-width: 576px) {
            .hero-section {
              padding-top: 40px;
              padding-bottom: 40px;
            }

            .hero-section h1 {
              font-size: 26px !important;
            }

            .hero-section p {
              font-size: 15px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default MedicalHero;
