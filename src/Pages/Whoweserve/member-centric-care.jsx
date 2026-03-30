import { useState, useLayoutEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import cardiologyBg from "../../assets/images/hero/member-centric-care.webp";
import Secudal from "../../components/practicelaunch/secudal";

// Styles used by feature cards
const cardStyle = { background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '24px', margin: '12px 0', minHeight: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f3f4f6' };
const cardTitleStyle = { fontWeight: 800, fontSize: '1.15rem', marginBottom: 10, color: '#0f3f3a' };
const cardTextStyle = { color: '#444', fontSize: '1.01rem', marginBottom: 16 };
const ctaStyle = { background: '#5CBDAA', color: '#fff', fontWeight: '600', fontSize: '0.95rem', padding: '8px 18px', borderRadius: 8, border: 'none' };


const MemberCentricCare = () => {
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
                Member-Centric Care
              </h1>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: 18, color: "#e0f2fe", letterSpacing: "-0.5px" }}>
                Centered on access, coordination, and outcomes
              </h2>
              <p style={{ fontSize: "1.18rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
                We design member-first programs that improve access, streamline care coordination, and strengthen long-term outcomes across your community of clinics and partners.
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
                Learn about Member-Centric Care
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            Member Access & Navigation
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 820, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Tools and workflows to help members find care, navigate referrals, and access services quickly while providing teams with real-time visibility into referral pathways.
          </p>

          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Member access visibility</h3>
              <p style={cardTextStyle}>Identify nearby providers and monitor member referral trends to improve access and reduce wait times.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Contact about Member-Centric Care</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Real-time referrals & status</h3>
              <p style={cardTextStyle}>Give staff live visibility into referral status, scheduling opportunities, and actionable next steps to reduce delays and follow-up loops.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Contact about Member-Centric Care</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Reduce administrative burden</h3>
              <p style={cardTextStyle}>Surface only the information care teams need to act, reducing manual work and accelerating member appointments.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Contact about Member-Centric Care</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Improved interoperability</h3>
              <p style={cardTextStyle}>Standardized interfaces and mappings reduce errors and improve the accuracy of referrals and test results across partners.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Contact about Member-Centric Care</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Service tiers</h3>
              <p style={cardTextStyle}>Flexible service tiers matched to member volume and organizational needs, with clear SLAs for access and follow-up.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Contact about Member-Centric Care</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Healthcare partner interfaces</h3>
              <p style={cardTextStyle}>Streamlined interfaces for labs, imaging centers, and partners to support smooth member journeys.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Contact about Member-Centric Care</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Provider connections</h3>
              <p style={cardTextStyle}>Find and connect with ordering providers and monitor referral effectiveness for better member outcomes.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Contact about Member-Centric Care</button>
            </div>

            <div className="col-12 col-md-6 col-lg-4" style={cardStyle}>
              <h3 style={cardTitleStyle}>Member-Centric Care</h3>
              <p style={cardTextStyle}>Start improving member access, coordination, and experience across your network of clinics and partners.</p>
              <button className="btn" style={ctaStyle} onClick={() => navigate('/contact')}>Contact about Member-Centric Care</button>
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
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Member Data Integration</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 12 }}>
                Our platform connects payer and provider systems to deliver timely member data and actionable insights — reducing administrative overhead and improving care decisions.
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
                Learn More About Member-Centric Care
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: '#f8fbfb', color: '#0b1724' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1">
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Improve Member Care Coordination</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 12 }}>
                We implement member-centric workflows that reduce manual effort, accelerate information flow, and support better outcomes across the care continuum.
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
                Contact Our Team About Member-Centric Care
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

export default MemberCentricCare;