import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import smallPracticesBg from "../../assets/images/hero/Practice01.webp";
import Secudal from "../../components/practicelaunch/secudal";


const MediumLargeMedicalPractices = () => {
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

  const challenges = [
    {
      icon: (
        <span style={{
          background: "#fee2e2",
          color: "#ef4444",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Clock SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" fill="none"/>
            <path d="M12 7v5l3 3" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      ),
      title: "Limited Billing Expertise",
      desc: "Small practices lack dedicated billing staff with specialized knowledge of RCM, resulting in claim errors and delays. Our billing team brings proven expertise to maximize revenue.",
      impact: "Improved accuracy, faster collections, and higher revenue capture."
    },
    {
      icon: (
        <span style={{
          background: "#fef9c3",
          color: "#f59e42",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Warning SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 4L2 20h20L12 4z" stroke="#f59e42" strokeWidth="2" fill="none"/>
            <circle cx="12" cy="16" r="1" fill="#f59e42"/>
            <rect x="11" y="10" width="2" height="4" rx="1" fill="#f59e42"/>
          </svg>
        </span>
      ),
      title: "High Claim Denial Rates",
      desc: "Claims are denied due to coding errors, incomplete documentation, and payer-specific requirements. Without proper denial management, revenue is permanently lost.",
      impact: "Lost revenue and administrative burden consuming staff time."
    },
    {
      icon: (
        <span style={{
          background: "#fee2e2",
          color: "#ef4444",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Dollar SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" fill="none"/>
            <path d="M12 8v8M9.5 10.5C9.5 9.11929 10.6193 8 12 8C13.3807 8 14.5 9.11929 14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 14.1193 9.5 15.5C9.5 16.8807 10.6193 18 12 18C13.3807 18 14.5 16.8807 14.5 15.5" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      ),
      title: "Poor Cash Flow Management",
      desc: "Without proper claims tracking and follow-up, outstanding receivables grow and cash flow becomes unpredictable. This impacts operations and growth.",
      impact: "Stable cash flow with predictable revenue and better financial planning."
    },
    {
      icon: (
        <span style={{
          background: "#fef9c3",
          color: "#f59e42",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Document SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="3" stroke="#f59e42" strokeWidth="2" fill="none"/>
            <rect x="8" y="8" width="8" height="2" rx="1" fill="#f59e42"/>
            <rect x="8" y="12" width="5" height="2" rx="1" fill="#f59e42"/>
          </svg>
        </span>
      ),
      title: "Time-Consuming Administrative Work",
      desc: "Clinical staff spend countless hours on billing instead of patient care. Monthly reconciliation, insurance verification, and follow-ups drain productivity.",
      impact: "Staff refocused on patient care with 15+ hours per week recovered."
    },
    {
      icon: (
        <span style={{
          background: "#fee2e2",
          color: "#ef4444",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Calendar SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="3" stroke="#ef4444" strokeWidth="2" fill="none"/>
            <path d="M16 3v4M8 3v4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 9h18" stroke="#ef4444" strokeWidth="2"/>
          </svg>
        </span>
      ),
      title: "No Financial Visibility",
      desc: "Without real-time dashboards and reporting, you don't know practice profitability, aging AR, or performance trends. This leads to reactive decisions. Our reporting gives visibility to drive growth.",
      impact: "Better decisions with real-time insights and actionable KPIs."
    },
    {
      icon: (
        <span style={{
          background: "#fef9c3",
          color: "#f59e42",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Shield/Compliance SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="#f59e42" strokeWidth="2" fill="none"/>
            <path d="M9.5 13l2 2 3-4" stroke="#f59e42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      ),
      title: "Compliance & Regulatory Risks",
      desc: "Small practices struggle to stay compliant with evolving billing regulations. Non-compliance risks audits, fines, and operational disruption.",
      impact: "Full compliance with reduced audit and violation risk."
    }
  ];

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${smallPracticesBg})`,
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
                Enterprise RCM Solutions for Medium to Large Medical Practices
              </h1>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: 18, color: "#e0f2fe", letterSpacing: "-0.5px" }}>
                Scalable Revenue Cycle Management. Multi-Location Support. Advanced Analytics.
              </h2>
              <p style={{ fontSize: "1.18rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
                Managing billing across multiple providers, locations, and specialties requires expert-level RCM infrastructure. We deliver scalable solutions for practices with 10+ providers, handling millions in claims volume while maintaining 98%+ clean claim rates and reducing administrative overhead by 40%.
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
                Schedule Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#fff", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            Complex RCM Challenges Medium-Large Practices Face
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Multi-location practices with diverse specialties face unique billing complexities. From managing high claim volumes to coordinating billing across locations to maintaining compliance—operational scale brings significant RCM challenges.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Multi-Location Coordination</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Managing billing across multiple locations with different payer contracts, billing systems, and staff creates coordination gaps and revenue leakage.</p>
              <div style={{ background: "#fee2e2", color: "#b91c1c", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Inconsistent processes and lost revenue opportunities.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>High Claims Volume Complexity</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Processing thousands of claims monthly across multiple specialties requires sophisticated workflow management and quality control systems.</p>
              <div style={{ background: "#fef9c3", color: "#b45309", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Bottlenecks, errors, and delayed cash flow.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Staff Training & Turnover</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Large billing teams require continuous training on payer updates, specialty-specific coding, and system changes. Turnover disrupts operations and requires costly retraining.</p>
              <div style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Knowledge gaps, inconsistent quality, and higher costs.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Limited Data Visibility</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Without enterprise-level analytics and real-time dashboards, leadership can't identify performance trends, problem areas, or growth opportunities across locations.</p>
              <div style={{ background: "#fee2e2", color: "#b91c1c", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Reactive management and missed optimization opportunities.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Payer Contract Complexity</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Managing dozens of payer contracts with varying requirements, fee schedules, and authorization rules creates administrative complexity and underpayment risk.</p>
              <div style={{ background: "#fef9c3", color: "#b45309", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Revenue leakage and compliance exposure.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Scalability Limitations</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Adding new locations or providers strains existing billing infrastructure. Without scalable systems and processes, growth becomes operationally challenging.</p>
              <div style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Growth constraints and operational inefficiency.
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section style={{ background: "#f8fafc", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            Enterprise-Grade RCM Services
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Comprehensive revenue cycle management designed for multi-location practices with complex billing needs. Scalable solutions that grow with your practice.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>High-Volume Claims Processing</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Scalable claims processing infrastructure handling thousands of claims monthly across multiple locations, specialties, and payer contracts with 98%+ accuracy.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Multi-location claim coordination</li>
                <li>Specialty-specific billing expertise</li>
                <li>Automated claim scrubbing and validation</li>
                <li>Priority payment tracking and follow-up</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Enterprise Denial Management</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Advanced denial prevention and recovery programs with systematic root cause analysis, payer-specific workflows, and coordinated appeals across all locations.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Centralized denial tracking and analytics</li>
                <li>Predictive denial prevention strategies</li>
                <li>Multi-tier appeal workflows</li>
                <li>Payer relationship management</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Advanced Analytics & Business Intelligence</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Enterprise-level reporting with real-time dashboards, predictive analytics, and multi-location performance comparisons to drive strategic decision-making.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Executive KPI dashboards</li>
                <li>Location and provider-level analytics</li>
                <li>Predictive revenue forecasting</li>
                <li>Payer performance analysis</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Compliance & Audit Management</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Enterprise compliance programs with ongoing audits, risk assessment, and standardized protocols to protect your multi-location practice from regulatory exposure.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Multi-location compliance monitoring</li>
                <li>Internal audit programs</li>
                <li>Regulatory change management</li>
                <li>Staff training and certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


<section style={{ background: "#f8fafc", padding: "60px 0 40px 0" }}>
  <div className="container">
    <h2 style={{
      textAlign: "center",
      fontWeight: 700,
      fontSize: "2.1rem",
      marginBottom: 10,
      letterSpacing: "-1px"
    }}>
      Comprehensive Service Features
    </h2>
    <p style={{
      textAlign: "center",
      color: "#4b5563",
      fontSize: "1.08rem",
      marginBottom: 40,
      maxWidth: 700,
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      Every component managed with precision and expertise.
    </p>
    <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
      {/* Card 1 */}
      <div className="col-12 col-md-6 col-lg-3"
        style={{
          background: "#54A1D9",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          padding: "32px 24px 24px 24px",
          margin: "12px 0",
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "none"
        }}>
        <span style={{
          background: "#0ea5e9",
          color: "#fff",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Document SVG */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
            <rect x="8" y="8" width="8" height="2" rx="1" fill="#fff"/>
            <rect x="8" y="12" width="5" height="2" rx="1" fill="#fff"/>
          </svg>
        </span>
        <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#fff" }}>
          Claims Submission & Processing
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Scalable claims processing infrastructure handling high volumes across multiple locations with automated workflows and quality controls.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Multi-location claim coordination</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Automated claim scrubbing</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Real-time status dashboards</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Integrated payment reconciliation</li>
        </ul>
      </div>
      {/* Card 2 */}
      <div className="col-12 col-md-6 col-lg-3"
        style={{
          background: "#54A1D9",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          padding: "32px 24px 24px 24px",
          margin: "12px 0",
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "none"
        }}>
        <span style={{
          background: "#0ea5e9",
          color: "#fff",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Refresh SVG */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 12a8 8 0 1 1 8 8" stroke="#fff" strokeWidth="2" fill="none"/>
            <path d="M4 4v5h5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#fff" }}>
          Denial Recovery & Appeals
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Enterprise denial management with centralized tracking, predictive analytics, and systematic root cause elimination across all locations.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Centralized denial management platform</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Predictive denial prevention</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Multi-tier appeal workflows</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Cross-location trend analysis</li>
        </ul>
      </div>
      {/* Card 3 */}
      <div className="col-12 col-md-6 col-lg-3"
        style={{
          background: "#54A1D9",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          padding: "32px 24px 24px 24px",
          margin: "12px 0",
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "none"
        }}>
        <span style={{
          background: "#0ea5e9",
          color: "#fff",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Calendar SVG */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
            <path d="M16 3v4M8 3v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 9h18" stroke="#fff" strokeWidth="2"/>
          </svg>
        </span>
        <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#fff" }}>
          Insurance Verification & Eligibility
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Automated eligibility verification integrated across all locations ensuring accurate coverage information before every visit.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Automated real-time verification</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Multi-payer contract tracking</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Authorization management</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Standardized verification workflows</li>
        </ul>
      </div>
      {/* Card 4 */}
      <div className="col-12 col-md-6 col-lg-3"
        style={{
          background: "#54A1D9",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          padding: "32px 24px 24px 24px",
          margin: "12px 0",
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "none"
        }}>
        <span style={{
          background: "#0ea5e9",
          color: "#fff",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Network SVG */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill="none"/>
            <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#fff" }}>
          Revenue Analytics & Reporting
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Executive-level business intelligence with multi-location analytics, predictive forecasting, and strategic performance insights.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Multi-location comparison dashboards</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Provider and specialty-level analytics</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Predictive revenue modeling</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Payer mix optimization insights</li>
        </ul>
      </div>
    </div>
  </div>
</section>



<section style={{
  background: "#fff",
  padding: "48px 0",
  display: "flex",
  justifyContent: "center"
}}>
  <div style={{
    maxWidth: 700,
    width: "100%",
    margin: "0 auto",
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    padding: "40px 32px 32px 32px",
    textAlign: "center",
    border: "1px solid #f3f4f6"
  }}>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24
    }}>
      {/* User SVG */}
      <span style={{
        background: "#e0f2fe",
        color: "#2563eb",
        borderRadius: "50%",
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 28
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="8" r="4" stroke="#2563eb" strokeWidth="2" fill="none"/>
          <path d="M4 20c0-3.333 2.667-6 8-6s8 2.667 8 6" stroke="#2563eb" strokeWidth="2" fill="none"/>
        </svg>
      </span>
    </div>
    <blockquote style={{
      fontSize: "1.25rem",
      color: "#374151",
      fontStyle: "italic",
      marginBottom: 24,
      lineHeight: 1.5,
      fontWeight: 400
    }}>
      "Scaling from 8 to 15 providers across three locations was straining our billing department. HBS implemented enterprise-level RCM infrastructure that handles our complexity seamlessly. We're processing 3,500+ claims monthly with 98% clean claim rates, reduced A/R days by 22%, and leadership finally has the real-time analytics we need to make strategic decisions."
    </blockquote>
    <hr style={{
      border: "none",
      borderTop: "1px solid #e5e7eb",
      margin: "24px 0"
    }} />
    <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "1.05rem" }}>
      Sarah Martinez, CEO - Multi-Location Healthcare Group
    </div>
  
 
  </div>
</section>

 <Secudal />
    </>
  );
};

export default MediumLargeMedicalPractices;