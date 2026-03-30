import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import cardiologyBg from "../../assets/images/hero/Provider_Credentialing.webp";
import Secudal from "../../components/practicelaunch/secudal";
const ProviderCredential = () => {
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
      title: "Lengthy Application Process",
      desc: "Credentialing applications with insurance payers take 90–180 days, delaying practice revenue and preventing providers from seeing patients.",
      impact: "Lost revenue of $50K–$150K per provider during credentialing delays"
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
            <div className="col-md-6">
              <h1
                className="fw-bold"
                style={{
                  fontSize: "48px",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                  color: "#ffffff",
                }}
              >
                Provider Credentialing & Enrolment
              </h1>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "18px",
                  color: "#e0f2fe",
                  letterSpacing: "-1px",
                }}
              >
                Payer Enrolment Services
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  color: "#f0f0f0",
                }}
              >
                Handle all payer Enrolment, CAQH setup, and revalidation to keep your providers in-network and payment-ready. Our experts manage every step—applications, follow-ups, and compliance—so you can focus on patient care and uninterrupted revenue.
              </p>
              <button
                className="btn"
                style={{
                  background: "#5CBDAA",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "18px",
                  padding: "14px 35px",
                  borderRadius: "12px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.background = "#5CBDAA")}
                onMouseOut={(e) => (e.target.style.background = "#5CBDAA")}
                onClick={() => navigate("/contact")}
              >
                Start Credentialing Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#fff", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "2.1rem",
            marginBottom: 10,
            letterSpacing: "-1px"
          }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Common Challenges</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>We Solve</span>
          </h2>
          <p style={{
            textAlign: "center",
            color: "#444",
            fontSize: "1.08rem",
            marginBottom: 40,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            Provider credentialing delays cost practices significant revenue. These challenges extend Enrolment timelines and create payment disruptions.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            {challenges.map((item, idx) => (
              <div
                key={idx}
                className="col-12 col-md-6 col-lg-3"
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  padding: "32px 24px 24px 24px",
                  margin: "12px 0",
                  minHeight: 340,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  border: "1.5px solid #f3f4f6"
                }}
              >
                {item.icon}
                <h3 style={{
                  fontWeight: 700,
                  fontSize: "1.13rem",
                  marginBottom: 10,
                  color: "#222"
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: "#444",
                  fontSize: "1.01rem",
                  marginBottom: 18,
                  minHeight: 70
                }}>
                  {item.desc}
                </p>
                <div style={{
                  background: "#fee2e2",
                  color: "#b91c1c",
                  borderRadius: 8,
                  padding: "8px 12px",
                  fontSize: "0.98rem",
                  fontWeight: 500,
                  marginTop: "auto"
                }}>
                  <b>Impact:</b> {item.impact}
                </div>
              </div>
            ))}
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
      <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>How Hired Billing Support</span>{' '}
      <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Delivers Results</span>
    </h2>
    <p style={{
      textAlign: "center",
      color: "#444",
      fontSize: "1.08rem",
      marginBottom: 40,
      maxWidth: 700,
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      Our comprehensive solutions combine expertise, technology, and proven processes to accelerate your payer Enrolment and credentialing success.
    </p>
    <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
      {/* Card 1 */}
      <div className="col-12 col-md-6 col-lg-3"
        style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          padding: "32px 24px 24px 24px",
          margin: "12px 0",
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "1.5px solid #e0e7ef"
        }}>
        <span style={{
          background: "#e0f2fe",
          color: "#2563eb",
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
            <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="none"/>
            <path d="M12 7v5l3 3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#222" }}>
          Expedited Credentialing Process
        </h3>
        <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 16 }}>
          Expert credentialing specialists who know payer requirements ensure complete, accurate submissions—submitted quickly the first time.
        </p>
        <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li>Average 60–90 day credentialing timelines</li>
          <li>Complete application accuracy prevents delays</li>
          <li>Dual payer relationships expedite processing</li>
          <li>Parallel processing of multiple payers</li>
        </ul>
      </div>
      {/* Card 2 */}
      <div className="col-12 col-md-6 col-lg-3"
        style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          padding: "32px 24px 24px 24px",
          margin: "12px 0",
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "1.5px solid #e0e7ef"
        }}>
        <span style={{
          background: "#e0f2fe",
          color: "#0ea5e9",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Lightning SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M13 2L3 14h7v8l8-12h-7z" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
          </svg>
        </span>
        <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#222" }}>
          CAQH Profile Management
        </h3>
        <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 16 }}>
          Comprehensive CAQH profile setup and ongoing maintenance keeps provider information current and accessible to all payers.
        </p>
        <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li>Initial CAQH profile creation and optimization</li>
          <li>Quarterly profile attestation and updates</li>
          <li>Licenses and certifications tracked</li>
          <li>Proactive document upload and management</li>
        </ul>
      </div>
      {/* Card 3 */}
      <div className="col-12 col-md-6 col-lg-3"
        style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          padding: "32px 24px 24px 24px",
          margin: "12px 0",
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "1.5px solid #e0e7ef"
        }}>
        <span style={{
          background: "#e0f2fe",
          color: "#2563eb",
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
            <rect x="3" y="5" width="18" height="16" rx="3" stroke="#2563eb" strokeWidth="2" fill="none"/>
            <path d="M16 3v4M8 3v4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 9h18" stroke="#2563eb" strokeWidth="2"/>
          </svg>
        </span>
        <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#222" }}>
          Re-Credentialing Tracking
        </h3>
        <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 16 }}>
          Automated tracking system monitors all re-credentialing deadlines and initiates renewal process well in advance to prevent lapses.
        </p>
        <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li>Deadline tracking prevents Enrolment lapses</li>
          <li>120-day advance renewal initiation</li>
          <li>Zero interruption in payer eligibility</li>
          <li>Complete audit trail of all renewals</li>
        </ul>
      </div>
      {/* Card 4 */}
      <div className="col-12 col-md-6 col-lg-3"
        style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          padding: "32px 24px 24px 24px",
          margin: "12px 0",
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "1.5px solid #e0e7ef"
        }}>
        <span style={{
          background: "#e0f2fe",
          color: "#0ea5e9",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 16,
        }}>
          {/* Chart/Support SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
            <path d="M8 14l3 3 5-5" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#222" }}>
          Comprehensive Enrolment Support
        </h3>
        <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 16 }}>
          End-to-end support for all credentialing and revalidation needs, including commercial payers, Medicare, Medicaid, and hospital panel Enrolment.
        </p>
        <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li>All commercial payer credentialing</li>
          <li>Medicare and Medicaid Enrolment</li>
          <li>Hospital and facility paneling</li>
          <li>Specialty-specific payer networks</li>
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
      "Working with HBS has been a game-changer. The team is professional, responsive, and has streamlined our billing operations seamlessly."
    </blockquote>
    <hr style={{
      border: "none",
      borderTop: "1px solid #e5e7eb",
      margin: "24px 0"
    }} />
    <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "1.05rem" }}>
      Herma Thompson PMHNP-BC
    </div>
   
  </div>
</section>

 <Secudal />
    </>
  );
};

export default ProviderCredential;