import { useState, useLayoutEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import cardiologyBg from "../../assets/images/hero/medical-order-transmission.webp";
import Secudal from "../../components/practicelaunch/secudal";

// Styles used by feature cards
const cardStyle = { background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '24px', margin: '12px 0', minHeight: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f3f4f6' };
const cardTitleStyle = { fontWeight: 800, fontSize: '1.15rem', marginBottom: 10, color: '#0f3f3a' };
const cardTextStyle = { color: '#444', fontSize: '1.01rem', marginBottom: 16 };
const ctaStyle = { background: '#5CBDAA', color: '#fff', fontWeight: '600', fontSize: '0.95rem', padding: '8px 18px', borderRadius: 8, border: 'none' };


const MedicalOrderTransmission = () => {
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
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div className="row align-items-start">
            <div className="col-md-7">
              <h1 className="fw-bold" style={{ fontSize: "2.8rem", lineHeight: 1.15, marginBottom: 18, color: "#fff", fontWeight: 900, letterSpacing: "-1.5px", textShadow: "0 2px 10px rgba(0,0,0,0.10)" }}>
                HBS Coordinator Core
              </h1>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: 18, color: "#e0f2fe", letterSpacing: "-0.5px" }}>
                Care coordination simplified
              </h2>
              <p style={{ fontSize: "1.18rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
                Make it easier for labs, imaging centers, and others to receive patient referrals. Hired Billing Support streamlines order flow and provides visibility into your network of ordering providers.
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
                Get Hired Billing Support
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            Gain network visibility
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 820, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Use our network to identify nearby physicians you could be working with. You can also monitor your business’s performance using our tracking features.
          </p>

          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Gain network visibility</h3>
              <p style={cardTextStyle}>Use our network to identify nearby physicians you could be working with. You can also monitor your business’s performance using our tracking features.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Get HBS Coordinator Core</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Real-time orders access</h3>
              <p style={cardTextStyle}>Enable your staff to take a proactive approach to scheduling patient referrals and managing work. Hired Billing Support also offers visibility into our growing network of providers, referral management reporting, and access to Compendium Self-Management.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Get Hired Billing Support</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Less busy-work</h3>
              <p style={cardTextStyle}>Get only the relevant clinical, billing, and demographic information, along with eligibility status, the first time your facility receives an order.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Get HBS Coordinator Core</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Easier interoperability</h3>
              <p style={cardTextStyle}>Hired Billing Support includes laboratory, imaging, and durable medical equipment (DME) order interfaces for most clients. Achieve a higher first-pass clean order rate and improve test results labeling by mapping your compendiums and Ask on Order Entry questions (AOEs).</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Get Hired Billing Support</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Service levels</h3>
              <p style={cardTextStyle}>Access different features and pricing packages based on the number of orders you receive from providers on the Hired Billing Support Network.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Get Hired Billing Support</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Hired Billing Support Healthcare Integration</h3>
              <p style={cardTextStyle}>Easier interoperability and streamlined order interfaces for labs, imaging centers, and DME partners.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Get Hired Billing Support</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Hired Billing Support Physician Network</h3>
              <p style={cardTextStyle}>Use our network tools to find and connect with ordering providers and monitor referral performance.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Get Hired Billing Support</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Get Hired Billing Support</h3>
              <p style={cardTextStyle}>Start streamlining order transmission, improve referral visibility, and reduce manual work for your receiving facilities.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Get Hired Billing Support</button>
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
                Hired Billing Support Payer connects payer and provider systems to deliver timely clinical data and actionable insights — reducing administrative overhead and improving care decisioning.
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
                At Hired Billing Support, we implement Hired Billing Support Payer-powered workflows that reduce manual effort, accelerate information flow, and support better outcomes across the care continuum.
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

export default MedicalOrderTransmission;