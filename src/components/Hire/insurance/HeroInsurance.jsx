import { Link } from "react-router-dom";
import bannerImage from "../../../assets/images/hero/banner/inshurance-banner.webp"; // Replace with insurance banner if needed
import { useState, useLayoutEffect } from "react";
const InsuranceHero = () => {
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
                Remote Insurance Agent Staffing  
              </h1>
              <h5
                className="mb-4"
                style={{
                  // fontSize: "20px",
                  lineHeight: "1.4",
                  color: "#fff",
                }}
              >
                Strengthen a Single
                Revenue-Cycle Link Without Re-engineering Your Whole Billing
                Team
              </h5>

              {/* Short Paragraph */}
              <p
                className="lead mb-4"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  maxWidth: "650px",
                }}
              >
                Modern practices lose time and revenue when a specific
                insurance task-eligibility checks, prior-auth requests, denial
                follow-ups-starts to bottleneck the entire revenue cycle.
                Hired Billing Support (HBS) offers a Remote Insurance Agent
                model: dedicated, HIPAA-trained specialists who plug into one
                subdivisional domain of your RCM operation and lift its
                performance to enterprise standard, whether you're a
                three-provider clinic or a regional health system.
              </p>

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
              <Link
                to="/cost-evaluation"
                className="btn btn-lg ms-3"
                style={{
                  background: "transparent",
                  borderRadius: "30px",
                  padding: "12px 35px",
                  fontWeight: "600",
                  color: "#fff",
                  border: "2px solid #fff",
                }}
              >
                Cost Evaluation 
              </Link>

            </div>
          </div>
        </div>
      </div>

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

export default InsuranceHero;