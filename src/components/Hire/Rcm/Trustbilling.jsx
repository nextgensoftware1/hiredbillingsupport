
import React from "react";
import { FaCheckCircle, FaChartBar, FaArrowUp } from "react-icons/fa";



const Trustbilling = () => {
  const stats = [
    {
      percentage: "Almost 99%",
      label: "Clean claim ratio",
      icon: <FaCheckCircle />,
    },
    {
      percentage: "About 97.35%",
      label: "1st submission pass rate",
      icon: <FaChartBar />,
    },
    {
      percentage: "Up to 30%",
      label: "Revenue Increase",
      icon: <FaArrowUp />,
    },
  ];

  return (
    <>
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold mb-3"
            style={{
              color: "#000",
              fontSize: "2.5rem",
              lineHeight: "1.3",
            }}
          >
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Trust Your Billing To The Company That Ranks In
            </span>

            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '2.5rem'
              }}
            >
              &nbsp;"Top 10 Medical Billing Companies"
            </span>
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="p-5 rounded-4 text-white h-100"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, #00C853 0%, #1976D2 100%)"
                      : "linear-gradient(135deg, #1976D2 0%, #00C853 100%)",
                  boxShadow: "0 12px 32px rgba(25, 118, 210, 0.18)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(25, 118, 210, 0.28)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(25, 118, 210, 0.18)";
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <h3
                    className="fw-bold mb-0"
                    style={{
                      fontSize: "3.2rem",
                      color: "#fff",
                      textShadow: "0 2px 8px rgba(0,0,0,0.10)",
                    }}
                  >
                    {stat.percentage}
                  </h3>
                  <div
                    style={{
                      fontSize: "2.8rem",
                      color: "#fff",
                      opacity: 0.95,
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    color: "#fff",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ New Logo Section */}
        {/* <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
          <img
            src={googleLogo}
            alt="Google"
            style={{ width: "200px", height: "auto" }}
          />
          <img
            src={trustpilotLogo}
            alt="Trustpilot"
            style={{ width: "200px", height: "auto" }}
          />
          <img
            src={serchenLogo}
            alt="Serchen"
            style={{ width: "200px", height: "auto" }}
          />
          <img
            src={oncLogo}
            alt="ONC"
            style={{ width: "200px", height: "auto" }}
          />
        </div> */}
      </div>

      <style>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 1.8rem !important;
          }
          .col-lg-4 h3 {
            font-size: 2.2rem !important;
          }
          .p-5 {
            padding: 1.5rem !important;
          }
          img {
            width: 150px !important;
          }
        }
      `}</style>
    </section>


    <section className="py-5 bg-light">
      <div className="container">
        <div className="trustbilling-flex" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
          {/* Left Column */}
          <div className="trustbilling-left" style={{ flex: '1 1 400px', minWidth: '320px', maxWidth: '700px' }}>
            <h2 className="fw-bold mb-3">
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                The Only
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                &nbsp;Medical Billing Company
              </span>

              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                &nbsp;Uniting Tech & Expertise to Meet Provider’s Vision
              </span>
            </h2>
            <p className="text-muted mb-4">
              Our USA-based healthcare revenue cycle management company helps
              individual and institutional providers navigate the tight spots of
              patient billing and coding via modern medical billing services.
            </p>
            <div className="trustbilling-features" style={{ display: 'flex', gap: '2rem' }}>
              <ul className="list-unstyled" style={{ margin: 0 }}>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Patient Verification</li>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Claim Scrubbing</li>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Claim Submission</li>
              </ul>
              <ul className="list-unstyled" style={{ margin: 0 }}>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Revenue Cycle Management</li>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />A/R Recovery</li>
                <li className="mb-2"><FaCheckCircle className="text-primary me-2" />Fast Reimbursement</li>
              </ul>
            </div>
          </div>
          {/* Right Column */}
          <div className="trustbilling-right" style={{ display: 'flex', flexDirection: 'row', gap: '2rem', flex: '1 1 320px', minWidth: '320px', justifyContent: 'center', alignItems: 'stretch' }}>
            {/* Card 1 */}
            <div className="card shadow-sm border-0 p-4" style={{ borderRadius: '15px', width: '100%', maxWidth: '320px', minWidth: '260px', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '5px solid #1abc9c', justifyContent: 'center', height: '100%' }}>
              <div className="badge text-white px-3 py-2 mb-3" style={{ backgroundColor: '#1abc9c', fontWeight: 500, fontSize: '1rem' }}>
                Happiness Score
              </div>
              <h1 className="fw-bold display-4" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: '#1abc9c' }}>96%</h1>
              <p className="text-muted text-center" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                Based on a 4.8-star rating from 350+ providers across the states.
              </p>
              {/* <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: '1rem', color: '#1abc9c' }}>
                See testimonials &rarr;
              </a> */}
            </div>
            {/* Card 2 */}
            <div className="card shadow-sm border-0 p-4" style={{ borderRadius: '15px', width: '100%', maxWidth: '320px', minWidth: '260px', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '5px solid #3498db', justifyContent: 'center', height: '100%' }}>
              <div className="badge text-white px-3 py-2 mb-3" style={{ backgroundColor: '#3498db', fontWeight: 500, fontSize: '1rem' }}>
                Billing Experts
              </div>
              <h1 className="fw-bold display-4" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: '#3498db' }}>1.2k+</h1>
              <p className="text-muted text-center" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                CMRS, RHIA, CPB certified medical billers and coders for every specialty.
              </p>
              {/* <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: '1rem', color: '#3498db' }}>
                About us &rarr;
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>


      <section
        className="py-5"
        style={{
          backgroundColor: "#3498db",
          borderRadius: "15px",
          margin: "2rem auto",
          width: "90%",
        }}
      >
        <div className="container text-white">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-3 mb-md-0 text-center text-md-start">
              Experience HBS medical billing for as low as{' '}
              <span style={{ color: "#1abc9c" }}>2.49%</span>
            </h3>
            <button
              className="btn fw-semibold px-4 py-2"
              style={{
                border: "2px solid #1abc9c",
                borderRadius: "25px",
                color: "#1abc9c",
                background: "transparent",
                transition: "all 0.3s ease",
              }}
              onMouseOver={e => {
                e.target.style.background = "#1abc9c";
                e.target.style.color = "#fff";
              }}
              onMouseOut={e => {
                e.target.style.background = "transparent";
                e.target.style.color = "#1abc9c";
              }}
            >
              Book a Demo
            </button>
          </div>

          <p className="mb-4 text-center text-md-start" style={{ color: '#eaf6fb' }}>
            Over 1500 healthcare practices trust HBS for reliable, secure, and efficient medical billing. Let’s connect and elevate your revenue cycle.
          </p>

          <hr
            style={{
              borderTop: "2px solid #1abc9c",
              opacity: 1,
              width: "100%",
              marginBottom: "2rem",
            }}
          />

          <div className="row text-center text-md-start">
            <div className="col-md-3 col-sm-6 mb-3">
              <FaCheckCircle className="me-2" color="#1abc9c" />
              Instant insurance coverage verification for every patient.
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <FaCheckCircle className="me-2" color="#1abc9c" />
              HIPAA-compliant billing for maximum data security.
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <FaCheckCircle className="me-2" color="#1abc9c" />
              24/7 claim submission and support for your practice.
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <FaCheckCircle className="me-2" color="#1abc9c" />
              98% claim reimbursement rate for healthy cash flow.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trustbilling;
