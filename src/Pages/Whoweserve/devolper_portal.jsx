import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import cardiologyBg from "../../assets/images/hero/devolper_portal.webp";
import Secudal from "../../components/practicelaunch/secudal";


const Devolperportal = () => {
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
            <div className="col-md-7">
              <h1 className="fw-bold" style={{ fontSize: "2.8rem", lineHeight: 1.15, marginBottom: 18, color: "#fff", fontWeight: 900, letterSpacing: "-1.5px", textShadow: "0 2px 10px rgba(0,0,0,0.10)" }}>
                Developer Portal
              </h1>
              <p style={{ fontSize: "1.18rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
                Seamlessly integrate your applications with Hired Billing Support's robust suite of APIs. Access comprehensive developer resources, interactive documentation, and expert support to build powerful healthcare solutions.
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
                  letterSpacing: "0.5px",
                  marginRight: "10px"
                }}
                onMouseOver={e => (e.target.style.background = "#54A1D9")}
                onMouseOut={e => (e.target.style.background = "#5CBDAA")}
                onClick={() => navigate("/contact")}
              >
                Get Started
              </button>
              <button
                className="btn"
                style={{
                  background: "transparent",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.15rem",
                  padding: "16px 44px",
                  borderRadius: "12px",
                  border: "2px solid #fff",
                  transition: "all 0.3s",
                  letterSpacing: "0.5px"
                }}
                onMouseOver={e => { e.target.style.background = "#fff"; e.target.style.color = "#5CBDAA"; }}
                onMouseOut={e => { e.target.style.background = "transparent"; e.target.style.color = "#fff"; }}
                onClick={() => navigate("/contact")}
              >
                Explore Docs
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            API Categories
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Explore our comprehensive suite of APIs designed to streamline your healthcare workflows.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px", margin: "12px 0", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Eligibility & Benefits</h3>
              <p style={{ color: "#444", fontSize: "1.01rem" }}>Verify patient insurance coverage and benefits in real-time.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px", margin: "12px 0", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Claims Processing</h3>
              <p style={{ color: "#444", fontSize: "1.01rem" }}>Submit, track, and manage claims electronically.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px", margin: "12px 0", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Provider Management</h3>
              <p style={{ color: "#444", fontSize: "1.01rem" }}>Manage provider data and credentialing information.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            Developer Resources
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Everything you need to build with HBS APIs.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px", margin: "12px 0", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>API Documentation</h3>
              <p style={{ color: "#444", fontSize: "1.01rem" }}>Interactive documentation, code samples, and tutorials.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px", margin: "12px 0", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>SDKs & Libraries</h3>
              <p style={{ color: "#444", fontSize: "1.01rem" }}>Official libraries for popular programming languages.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px", margin: "12px 0", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Support</h3>
              <p style={{ color: "#444", fontSize: "1.01rem" }}>Get help from our developer support team.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            Use Cases
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            See what you can build with our APIs.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px", margin: "12px 0", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Automate Insurance Verification</h3>
              <p style={{ color: "#444", fontSize: "1.01rem" }}>Instantly verify patient eligibility and benefits to reduce claim denials.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px", margin: "12px 0", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Streamline Claim Submission</h3>
              <p style={{ color: "#444", fontSize: "1.01rem" }}>Submit claims electronically and track their status in real-time.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px", margin: "12px 0", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Build Custom Reports</h3>
              <p style={{ color: "#444", fontSize: "1.01rem" }}>Create custom reports and dashboards to monitor your revenue cycle.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#54A1D9", padding: "60px 0", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: 900, fontSize: "2.2rem", marginBottom: 18, letterSpacing: "-1px" }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: "1.18rem", lineHeight: 1.7, marginBottom: 32, opacity: 0.98, letterSpacing: "0.2px" }}>
            Explore our documentation or contact us for a demo.
          </p>
          <button
            className="btn"
            style={{
              background: "#fff",
              color: "#54A1D9",
              fontWeight: "bold",
              fontSize: "1.15rem",
              padding: "16px 44px",
              borderRadius: "12px",
              border: "none",
              transition: "all 0.3s",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              letterSpacing: "0.5px",
              marginRight: "10px"
            }}
            onClick={() => navigate("/contact")}
          >
            Explore Docs
          </button>
          <button
            className="btn"
            style={{
              background: "transparent",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.15rem",
              padding: "16px 44px",
              borderRadius: "12px",
              border: "2px solid #fff",
              transition: "all 0.3s",
              letterSpacing: "0.5px"
            }}
             onMouseOver={e => { e.target.style.background = "#fff"; e.target.style.color = "#5CBDAA"; }}
             onMouseOut={e => { e.target.style.background = "transparent"; e.target.style.color = "#fff"; }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </section>

      <Secudal />
    </>
  );
};

export default Devolperportal;