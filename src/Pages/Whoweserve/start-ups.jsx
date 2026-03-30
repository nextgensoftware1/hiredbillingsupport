import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import startUpsBg from "../../assets/images/hero/start-ups.webp";
import Secudal from "../../components/practicelaunch/secudal";


const StartUps = () => {
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
      title: "Limited Operational Bandwidth",
      desc: "Early-stage teams juggle growth, product, and client delivery at once, causing execution bottlenecks and missed priorities.",
      impact: "Slower growth and delayed go-to-market milestones."
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
      title: "Unstructured Processes",
      desc: "Without defined SOPs, startups rely on ad-hoc workflows that create inconsistency, rework, and quality gaps.",
      impact: "Higher error rates and lower team efficiency."
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
      title: "Cash Flow Pressure",
      desc: "Inconsistent billing follow-up and delayed collections create unpredictable cash flow during critical growth phases.",
      impact: "Shorter runway and reduced ability to scale."
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
      title: "Reporting & Visibility Gaps",
      desc: "Founders often lack reliable KPI dashboards to track delivery, productivity, and financial health in real time.",
      impact: "Reactive decision-making and missed growth signals."
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
      title: "Scaling Without Controls",
      desc: "Rapid hiring and client growth can outpace governance, leading to inconsistent execution and customer experience.",
      impact: "Operational instability during expansion."
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
      title: "Compliance Readiness Challenges",
      desc: "Startups often need stronger documentation and process controls to meet client, legal, and industry expectations.",
      impact: "Higher risk exposure and slower enterprise onboarding."
    }
  ];

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${startUpsBg})`,
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
                Startup Operations & Growth Support
              </h1>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: 18, color: "#e0f2fe", letterSpacing: "-0.5px" }}>
                Build Systems. Improve Execution. Scale With Confidence.
              </h2>
              <p style={{ fontSize: "1.18rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
                We help startups design reliable workflows, improve team productivity, and build scalable operating systems. From process setup to KPI reporting, our support enables founders to focus on growth while operations run smoothly.
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
                Get Startup Support
              </button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#fff", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            Why Startups Need Operational Structure
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            Startups move fast, but sustainable growth requires strong systems. With structured operations, clear accountability, and real-time metrics, your team can scale delivery without sacrificing quality.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Execution Inconsistency</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>When teams work without standardized workflows, outcomes vary and quality becomes unpredictable.</p>
              <div style={{ background: "#fee2e2", color: "#b91c1c", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Increased rework and slower customer delivery.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Process Bottlenecks</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Manual handoffs and unclear ownership create delays that reduce throughput and team speed.</p>
              <div style={{ background: "#fef9c3", color: "#b45309", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Slower launch cycles and delayed revenue realization.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Resource Overstretch</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Small teams handling too many priorities lose focus on strategic initiatives and customer success.</p>
              <div style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Reduced productivity and missed growth opportunities.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Limited Visibility</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Without clear dashboards, founders lack insight into team performance, quality, and operational risk.</p>
              <div style={{ background: "#fee2e2", color: "#b91c1c", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Slower decisions and weaker operational control.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Scaling Challenges</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>As demand increases, startups need repeatable systems to scale operations without increasing chaos.</p>
              <div style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Growth stalls when systems don’t scale with demand.
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Governance Readiness</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Investors and enterprise clients expect operational discipline, documentation, and measurable controls.</p>
              <div style={{ background: "#fef9c3", color: "#b45309", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
                <b>Impact:</b> Better readiness for reviews, clients, and strategic growth.
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section style={{ background: "#f8fafc", padding: "60px 0 40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.2rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
            Our Startup Support Solutions
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
            We provide startup-ready operational support that improves execution, strengthens accountability, and enables scalable growth.
          </p>
          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Process Design & SOP Setup</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Build clear, repeatable workflows that reduce ambiguity and improve team consistency.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Workflow mapping</li>
                <li>SOP documentation</li>
                <li>Role clarity setup</li>
                <li>Quality checkpoints</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>KPI Tracking & Reporting</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Create actionable dashboards to monitor productivity, quality, and delivery performance.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>KPI framework setup</li>
                <li>Weekly performance reviews</li>
                <li>Trend analysis</li>
                <li>Founder-ready summaries</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Team Coordination & QA Oversight</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Improve handoffs, accountability, and quality control across teams and workflows.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Cross-team alignment</li>
                <li>Issue escalation workflows</li>
                <li>QA review cycles</li>
                <li>Corrective action tracking</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Scalable Growth Operations</h3>
              <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Set up operational controls that scale as your clients, team, and complexity increase.</p>
              <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
                <li>Capacity planning</li>
                <li>Process scalability design</li>
                <li>Growth-readiness governance</li>
                <li>Operational playbooks</li>
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
      Startup Success Framework
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
      Core capabilities startups need to execute, scale, and perform with confidence.
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
          Launch Operations Setup
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Establish the foundational workflows, owners, and controls needed for predictable day-to-day execution.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Process baseline design</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Role ownership mapping</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> SOP rollout</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Execution checkpoints</li>
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
          Performance Operating Rhythm
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Build a weekly operating cadence with clear KPIs, priorities, and action ownership.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> KPI dashboards</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Weekly review system</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Priority tracking</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Performance accountability</li>
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
          Team Enablement & Quality
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Equip teams with quality standards, review loops, and coaching to improve execution consistency.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> QA scorecards</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Team calibration</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Continuous coaching</li>
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
          Scale Readiness Program
        </h3>
        <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
          Prepare your operations to scale reliably as client volume, team size, and delivery complexity grow.
        </p>
        <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Capacity planning</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Process scalability checks</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Governance structure</li>
          <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Growth risk controls</li>
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
      HBS helped us build structure without slowing down growth. Our startup now runs with clearer ownership, faster execution, and better performance visibility.
    </blockquote>
    <hr style={{
      border: "none",
      borderTop: "1px solid #e5e7eb",
      margin: "24px 0"
    }} />
    <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "1.05rem" }}>
      Alex Rivera, Startup Founder
    </div>
   
  
  
  </div>
</section>

 <Secudal />
    </>
  );
};

export default StartUps;