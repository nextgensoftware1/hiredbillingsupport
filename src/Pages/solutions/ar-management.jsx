import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import cardiologyBg from "../../assets/images/hero/AR_Management.webp";
import Secudal from "../../components/practicelaunch/secudal";


const ARManagement = () => {
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
      title: "Aging AR & Slow Collections",
      desc: "Outstanding receivables over 60 days cripple cash flow and increase bad debt risk. Our team accelerates collections and reduces AR days.",
      impact: "Faster payments, improved cash flow, and less write-off risk."
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
      title: "Complex Documentation Requirements",
      desc: "Each payer requires unique forms, supporting documents, and verification methods creating administrative complexity and errors.",
      impact: "Incomplete applications get rejected, extending timeline by months"
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
      title: "Re-Credentialing Lapses",
      desc: "Missed re-credentialing deadlines cause provider Enrolment to lapse, halting all claim payments until re-Enrolment is complete.",
      impact: "Complete payment stoppage until re-credentialing is completed"
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
      title: "CAQH Profile Maintenance",
      desc: "Keeping CAQH profiles current with licenses, certifications, and practice information requires constant monitoring and updates.",
      impact: "Outdated CAQH data delays all payer credentialing processes"
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
      title: "Missed Enrolment Deadlines",
      desc: "Missing payer or revalidation deadlines can result in network termination and loss of billing privileges until re-Enrolment.",
      impact: "Risk of being out-of-network and losing patient revenue"
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
      desc: "Failure to maintain up-to-date credentials and documentation can lead to compliance violations and payer audits.",
      impact: "Potential fines, penalties, and audit exposure"
    }
  ];

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
                AR Management & Cash Flow Optimization
              </h1>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: 18, color: "#e0f2fe", letterSpacing: "-0.5px" }}>
                Accelerate Collections. Reduce Bad Debt. Improve Financial Health.
              </h2>
              <p style={{ fontSize: "1.18rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
                Our AR management experts leverage analytics, automation, and proven follow-up strategies to resolve outstanding receivables, reduce AR days, and maximize your practice’s cash flow. Let us turn your aging AR into working capital.
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
                Get a Free AR Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#fff", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Denial Management</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Challenges</span>
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Claim denials drain revenue and resources from healthcare organizations. Our denial management experts solve the root causes and recover lost revenue.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>High Denial Rates</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>15–20% of claims are denied on first submission, requiring costly rework and delaying revenue.</p>
              <div style={{ background: "#fee2e2", color: "#b91c1c", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Administrative burden and delayed cash flow.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Lack of Denial Tracking</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Without systematic tracking, denied claims go unworked and revenue is lost forever.</p>
              <div style={{ background: "#fef9c3", color: "#b45309", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Unworked denials mean permanent revenue loss.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Ineffective Appeals</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Generic appeals and missing documentation result in low overturn rates and wasted effort.</p>
              <div style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Low appeal success leaves money unrecovered.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Recurring Denials</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Root causes go unaddressed, so the same denials keep happening and draining resources.</p>
              <div style={{ background: "#fee2e2", color: "#b91c1c", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Preventable denials create a costly cycle.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Resource Drain</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Staff spends excessive time on denials instead of proactive prevention and current claims.</p>
              <div style={{ background: "#fef9c3", color: "#b45309", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> High admin costs and staff burnout.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Lost Revenue</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Up to 65% of denied claims are never reworked due to time, resources, or missed deadlines.</p>
              <div style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Permanent revenue loss from abandoned claims.
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section style={{ background: "#f8fafc", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Our Medical Coding</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solutions</span>
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            We deliver end-to-end coding services that drive accuracy, compliance, and revenue for your practice—no matter your specialty or size.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>ICD-10-CM Diagnosis Coding</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Accurate, specific diagnosis coding that supports medical necessity and maximizes reimbursement for every encounter.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Complete diagnosis coding</li>
                <li>Specificity optimization</li>
                <li>Medical necessity support</li>
                <li>Payer-specific requirements</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>CPT & HCPCS Procedure Coding</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Accurate procedure coding with proper modifiers ensures correct payment for all services rendered.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>CPT code selection</li>
                <li>HCPCS coding</li>
                <li>Modifier application</li>
                <li>Bundling and unbundling rules</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Coding Audits & Compliance</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Regular coding audits identify areas for improvement and ensure ongoing compliance with regulations.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Internal coding audits</li>
                <li>Compliance reviews</li>
                <li>Documentation improvement</li>
                <li>Risk assessment</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Specialty-Specific Coding</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Expert coders with specialty certifications understand the unique coding requirements of your practice.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Surgery coding</li>
                <li>E&M optimization</li>
                <li>Anesthesia coding</li>
                <li>Radiology and pathology</li>
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
      <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Comprehensive Service</span>{' '}
      <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Features</span>
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
          Initial Credentialing
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Complete credentialing application preparation and submission for new providers joining your practice.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Application completion</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Document gathering</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Primary source verification</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Payer submission and follow-up</li>
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
          CAQH Profile Setup
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Comprehensive CAQH database profile creation and ongoing maintenance for all participating providers.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Profile creation</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Document upload</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Quarterly attestation</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Update management</li>
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
          Re-Credentialing Services
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Proactive monitoring and automated reminders for all re-credentialing requirements and renewals.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Deadline tracking</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Renewal initiation</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Continuous attestation</li>
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
          Network Expansion
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Strategic Enrolment with additional payer networks to expand your market and increase patient access.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Network applications</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Contract negotiation support</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Multi-payer coordination</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Specialty networks</li>
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
      “Partnering with Hired Billing Support gave us peace of mind. Our billing is cleaner, our staff works on patient care instead of paperwork, and we are now capturing more appointments than ever.”
    </blockquote>
    <hr style={{
      border: "none",
      borderTop: "1px solid #e5e7eb",
      margin: "24px 0"
    }} />
    <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "1.05rem" }}>
      Dr Ruth - Edwin DMD/MS
    </div>
  
 
  </div>
</section>

 <Secudal />
    </>
  );
};

export default ARManagement;