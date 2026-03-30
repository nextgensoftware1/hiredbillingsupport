import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import cardiologyBg from "../../assets/images/hero/analytics-reporting.webp";
import Secudal from "../../components/practicelaunch/secudal";


const AnalyticsReporting = () => {
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
                Unlock Actionable Insights with Advanced Analytics & Reporting
              </h1>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: 18, color: "#e0f2fe", letterSpacing: "-0.5px" }}>
                Transform Data into Decisions. Drive Performance. Maximize Revenue.
              </h2>
              <p style={{ fontSize: "1.18rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
                Our analytics experts help you consolidate data, automate reporting, and uncover hidden trends. Gain a competitive edge with interactive dashboards, predictive insights, and performance benchmarks tailored to your practice.
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
                Request a Data Analysis
              </button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#fff", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Common Reporting</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Challenges</span>
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Disconnected data sources and manual processes often lead to inaccurate, delayed, and incomplete insights, hindering strategic decision-making.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Fragmented Data Silos</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Data spread across EHRs, billing systems, and other platforms makes a unified view of performance impossible.</p>
              <div style={{ background: "#fee2e2", color: "#b91c1c", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Incomplete analysis and missed revenue opportunities.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Manual & Error-Prone Reporting</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Staff spend hours manually compiling spreadsheets, leading to errors and outdated information.</p>
              <div style={{ background: "#fef9c3", color: "#b45309", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Wasted resources and decisions based on flawed data.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Lack of Real-Time Insights</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>By the time reports are ready, the data is often stale, preventing proactive adjustments.</p>
              <div style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Reactive problem-solving instead of proactive strategy.
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section style={{ background: "#f8fafc", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Our Analytics & Reporting</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solutions</span>
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            We provide a comprehensive suite of services to turn your raw data into a strategic asset, driving efficiency and growth.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Unified Data Platform</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>We centralize your financial, clinical, and operational data into a single source of truth for reliable reporting.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>EHR & PM system integration</li>
                <li>Data cleansing & normalization</li>
                <li>Secure, cloud-based repository</li>
                <li>Scalable architecture</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Interactive Dashboards & Visualizations</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Explore your data with dynamic, easy-to-understand visualizations that highlight key performance indicators.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Role-based dashboards</li>
                <li>Drill-down capabilities</li>
                <li>Trend & variance analysis</li>
                <li>Performance scorecards</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Automated & Custom Reporting</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Eliminate manual work with automated report generation and a custom report builder for ad-hoc analysis.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Scheduled report delivery</li>
                <li>Custom report templates</li>
                <li>Payer & provider productivity</li>
                <li>Denial & A/R analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Secudal />
    </>
  );
};

export default AnalyticsReporting;