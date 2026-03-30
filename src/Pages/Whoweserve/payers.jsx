import { useState, useLayoutEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import cardiologyBg from "../../assets/images/hero/payers.webp";
import Secudal from "../../components/practicelaunch/secudal";
// Styles used by feature cards
const cardStyle = { background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '24px', margin: '12px 0', minHeight: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f3f4f6' };
const cardTitleStyle = { fontWeight: 800, fontSize: '1.15rem', marginBottom: 10, color: '#0f3f3a' };
const cardTextStyle = { color: '#444', fontSize: '1.01rem', marginBottom: 16 };
const ctaStyle = { background: '#5CBDAA', color: '#fff', fontWeight: '600', fontSize: '0.95rem', padding: '8px 18px', borderRadius: 8, border: 'none' };

const Payers = () => {
  const navigate = useNavigate();
  const [headerPad, setHeaderPad] = useState(120);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector('header');
      const infoBar = document.querySelector('.top-info-bar');
      let pad = 120;
      if (header) pad = header.offsetHeight;
      if (infoBar) pad += infoBar.offsetHeight;
      setHeaderPad(pad + 30); // add extra space for shadow/overlap
    }
    updatePad();
    window.addEventListener('resize', updatePad);
    return () => window.removeEventListener('resize', updatePad);
  }, []);



  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={cardiologyBg} />
      </Helmet>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${cardiologyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: `${headerPad}px 0 70px 0`,
          color: "#fff",
          position: "relative",
          fontFamily: "Arial, sans-serif",
          minHeight: "500px",
        }}
      >
        {/* Responsive preload: browser will choose best format/width from srcset */}
        <img
          src={`/optimized/hero/payer03-768.webp`}
          srcSet={
            `/optimized/hero/payer03-480.webp 480w, /optimized/hero/payer03-768.webp 768w, /optimized/hero/payer03-1024.webp 1024w, /optimized/hero/payer03-1440.webp 1440w`
          }
          sizes="(max-width: 600px) 480px, (max-width: 1024px) 768px, 1024px"
          alt=""
          aria-hidden="true"
          style={{ display: 'none' }}
          loading="eager"
        />
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div className="row align-items-start">
            <div className="col-md-7">
              <h1 className="fw-bold" style={{ fontSize: "2.8rem", lineHeight: 1.15, marginBottom: 18, color: "#fff", fontWeight: 900, letterSpacing: "-1.5px", textShadow: "0 2px 10px rgba(0,0,0,0.10)" }}>
                Payer Solutions
              </h1>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: 18, color: "#e0f2fe", letterSpacing: "-0.5px" }}>
                Robust clinical data exchange for optimal care decisions
              </h2>
              <p style={{ fontSize: "1.18rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
                HBS Payer enables the exchange of clinical data and insights between payers and providers to help support optimal care decisions while relieving burdensome administrative processes. At Hired Billing Support, we implement HBS Payer-powered workflows to streamline data exchange, reduce manual effort, and improve care coordination across the continuum.
              </p>
              <button
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
                  letterSpacing: "0.5px"
                }}
                onMouseOver={e => (e.target.style.background = "#54A1D9")}
                onMouseOut={e => (e.target.style.background = "#5CBDAA")}
                onClick={() => navigate("/contact")}
              >
                Get a Free Coding Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            Fast, accurate data exchange from day one
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 820, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Connect to thousands of healthcare providers when you go live with HBS Payer solutions. Our cloud-based, single-instance platform enables near real-time sharing of critical information across the largest open network in healthcare.
          </p>

          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Care Gaps</h3>
              <p style={cardTextStyle}>Help providers address open care gaps by surfacing clinical data directly within their workflows.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Talk with our team</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Diagnosis Gaps</h3>
              <p style={cardTextStyle}>Support diagnosis gap review by surfacing suspected and potential diagnosis information in the moment of care.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Talk with our team</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Health Plan Data Exchange</h3>
              <p style={cardTextStyle}>Receive clinical information in the form of a CCD whenever a member's encounter is closed.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Talk with our team</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Medical Electronic Prior Authorization</h3>
              <p style={cardTextStyle}>                Connect to Hired Billing Support's network of providers to streamline and automate a full end-to-end prior authorization process.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Talk with our team</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>ADT Notifications</h3>
              <p style={cardTextStyle}>Alert providers about member admission, discharge and transfer activity to help support transitions of care.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Talk with our team</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Quality Program Advancement</h3>
              <p style={cardTextStyle}>Help providers succeed in your quality programs by leveraging Hired Billing Support to drive improved quality performance.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Talk with our team</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Provider Network Directory</h3>
              <p style={cardTextStyle}>Improve the referral process by surfacing provider network designation, cost and quality ratings information in the ordering workflow.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Talk with our team</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Appointment Notifications</h3>
              <p style={cardTextStyle}>Receive member appointment activity to help coordinate care and minimize duplicative outreach.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Talk with our team</button>
            </div>
          </div>
        </div>
      </section>

      
      
      
     
      <section className="py-5" style={{ background: '#ffffff', color: '#0b1724' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={cardiologyBg} alt="Clinical Data Exchange" style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 30px rgba(2,6,23,0.06)' }} />
            </div>
            <div className="col-md-6">
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Seamless Data Integration</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 12 }}>
                HBS Payer connects payer and provider systems to deliver timely clinical data and actionable insights — reducing administrative overhead and improving care decisioning.
              </p>
              <ul style={{ paddingLeft: 18, marginBottom: 18 }}>
                <li>Real-time clinical summaries and problem lists</li>
                <li>Standards-based exchange (HL7 / FHIR) for interoperability</li>
                <li>Reduced manual reconciliation and faster adjudication</li>
              </ul>
              <button
                className="btn"
                style={{
                  background: '#5CBDAA',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  padding: '12px 28px',
                  borderRadius: '10px',
                  border: 'none'
                }}
                onClick={() => navigate('/contact')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: '#f8fbfb', color: '#0b1724' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1">
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Improve Care Coordination</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 12 }}>
                At Hired Billing Support, we implement HBS Payer-powered workflows that reduce manual effort, accelerate information flow, and support better outcomes across the care continuum.
              </p>
              <ul style={{ paddingLeft: 18, marginBottom: 18 }}>
                <li>Automated clinical data routing to the right care teams</li>
                <li>Reduced prior-authorization delays with richer clinical context</li>
                <li>Actionable insights to support utilization and quality programs</li>
              </ul>
              <button
                className="btn"
                style={{
                  background: '#5CBDAA',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  padding: '12px 28px',
                  borderRadius: '10px',
                  border: 'none'
                }}
                onClick={() => navigate('/contact')}
              >
                Contact Our Team
              </button>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={cardiologyBg} alt="Care Coordination" style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 30px rgba(2,6,23,0.04)' }} />
            </div>
          </div>
        </div>
      </section>

      <Secudal />
    </>
  );
};

export default Payers;