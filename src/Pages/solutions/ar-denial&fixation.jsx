import { useState, useLayoutEffect } from "react";
import denialBg1 from "../../assets/images/hero/AR_Denial.webp";
import Secudal from "../../components/practicelaunch/secudal";

const ARDenialFixation = () => {
  const [headerPad, setHeaderPad] = useState(120);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector("header");
      const infoBar = document.querySelector(".top-info-bar");

      let pad = 120;
      if (header) pad = header.offsetHeight;
      if (infoBar) pad += infoBar.offsetHeight;

      setHeaderPad(pad + 30);
    }

    updatePad();
    window.addEventListener("resize", updatePad);
    return () => window.removeEventListener("resize", updatePad);
  }, []);

  // Challenges
  const challenges = [
    {
      title: "High Volume of Denied Claims",
      desc: "A significant portion of AR is tied up in denied claims, creating backlogs and reducing clean claim rates across key payers.",
      impact: "Cash flow slows, and revenue recognition becomes inconsistent month to month.",
    },
    {
      title: "Unresolved Root Causes",
      desc: "Recurring denials signal gaps in eligibility checks, coding accuracy, authorization capture, and documentation quality.",
      impact: "Avoidable denials continue to repeat, increasing rework and staffing cost.",
    },
    {
      title: "Ineffective or Delayed Appeals",
      desc: "Appeals are filed late, lack the right clinical evidence, or are not prioritized based on dollars at risk.",
      impact: "Revenue is never recovered and timely filing limits are missed.",
    },
    {
      title: "Staff Overload & Burnout",
      desc: "Manual follow-ups and repeated rework increase staff pressure and delay other critical revenue cycle tasks.",
      impact: "Higher admin cost and slower AR turnaround times.",
    },
    {
      title: "Permanent Revenue Loss",
      desc: "Claims that are not corrected and resubmitted in time fall outside payer limits.",
      impact: "Permanent revenue loss and reduced margins.",
    },
    {
      title: "Complex Documentation",
      desc: "Each payer has different documentation rules, which increases the risk of missing required evidence.",
      impact: "Processing delays and more requests for information.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundImage: `url(${denialBg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: `${headerPad}px 0 80px`,
          color: "#fff",
          minHeight: "480px",
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <h1 style={{ fontSize: "2.6rem", fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
            AR Denial & Fixation Services
          </h1>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: 16, color: "#e0f2fe" }}>
            Recover Revenue. Reduce Repeat Denials. Protect Cash Flow.
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 720, marginBottom: 28 }}>
            We combine denial analytics, payer-specific workflows, and disciplined
            follow-ups to resolve current denials and prevent future revenue loss.
            Our teams focus on root-cause correction, appeal success, and faster
            AR turnaround.
          </p>
          <a
            href="/contact"
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
              display: "inline-block",
              textDecoration: "none"
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#54A1D9")}
            onMouseOut={e => (e.currentTarget.style.background = "#5CBDAA")}
          >
            Request Assessment
          </a>
        </div>
      </section>

      {/* CHALLENGES */}
      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.1rem", marginBottom: 12, color: "#0f3f3a" }}>
            Why AR Denials Persist
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.05rem", marginBottom: 32, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
            Denials continue when documentation, eligibility, and appeal workflows are not aligned.
            We isolate denial trends, quantify impact, and close the gaps that drive rework.
          </p>

          <div className="row">
            {challenges.map((item, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card p-3 h-100" style={{ borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
                  <h5 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 8, color: "#0f3f3a" }}>{item.title}</h5>
                  <p style={{ color: "#444", fontSize: "1rem", marginBottom: 14 }}>{item.desc}</p>
                  <div style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: 8, padding: "8px 12px", fontSize: "0.95rem", fontWeight: 600, marginTop: "auto" }}>
                    <b>Impact:</b> {item.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section style={{ background: "#f8fafc", padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.1rem", marginBottom: 12, color: "#0f3f3a" }}>
            Our Solutions
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.05rem", marginBottom: 32, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
            We deliver end-to-end denial management that strengthens documentation, improves appeal success,
            and prevents repeat denials through clear, repeatable workflows.
          </p>
          <div className="row mt-2" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-md-4" style={{ background: "#fff", borderRadius: 16, padding: "28px 22px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #e0e7ef" }}>
              <h5 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 10, color: "#0f3f3a" }}>Root Cause Analysis</h5>
              <p style={{ color: "#444", fontSize: "1rem" }}>
                Identify denial drivers by payer, code, and site of service, then correct upstream issues to
                reduce repeat denials and improve first-pass approvals.
              </p>
            </div>
            <div className="col-md-4" style={{ background: "#fff", borderRadius: 16, padding: "28px 22px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #e0e7ef" }}>
              <h5 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 10, color: "#0f3f3a" }}>Denial Appeals</h5>
              <p style={{ color: "#444", fontSize: "1rem" }}>
                Build complete appeal packets, track deadlines, and prioritize high-value claims to recover
                revenue quickly and consistently.
              </p>
            </div>
            <div className="col-md-4" style={{ background: "#fff", borderRadius: 16, padding: "28px 22px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #e0e7ef" }}>
              <h5 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 10, color: "#0f3f3a" }}>Prevention</h5>
              <p style={{ color: "#444", fontSize: "1rem" }}>
                Implement payer-specific checks, staff coaching, and workflow improvements to reduce denial
                rates and protect future cash flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.1rem", marginBottom: 12, color: "#0f3f3a" }}>
            Service Features
          </h2>
          <p style={{ textAlign: "center", color: "#444", fontSize: "1.05rem", marginBottom: 32, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
            Our AR denial program includes the operational controls and documentation support needed to improve
            payer outcomes and maintain long-term compliance.
          </p>

          <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <div className="col-md-3" style={{ background: "#fff", borderRadius: 16, padding: "24px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
              <h6 style={{ fontWeight: 800, fontSize: "1.02rem", marginBottom: 8, color: "#0f3f3a" }}>Initial Credentialing</h6>
              <p style={{ color: "#444", fontSize: "0.98rem" }}>
                Verify provider enrollment details to reduce payer denials linked to credentialing issues.
              </p>
            </div>
            <div className="col-md-3" style={{ background: "#fff", borderRadius: 16, padding: "24px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
              <h6 style={{ fontWeight: 800, fontSize: "1.02rem", marginBottom: 8, color: "#0f3f3a" }}>CAQH Setup</h6>
              <p style={{ color: "#444", fontSize: "0.98rem" }}>
                Maintain complete CAQH profiles so payer validation is fast and consistent.
              </p>
            </div>
            <div className="col-md-3" style={{ background: "#fff", borderRadius: 16, padding: "24px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
              <h6 style={{ fontWeight: 800, fontSize: "1.02rem", marginBottom: 8, color: "#0f3f3a" }}>Re-Credentialing</h6>
              <p style={{ color: "#444", fontSize: "0.98rem" }}>
                Track deadlines and prevent payer lapses that can trigger retroactive denials.
              </p>
            </div>
            <div className="col-md-3" style={{ background: "#fff", borderRadius: 16, padding: "24px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
              <h6 style={{ fontWeight: 800, fontSize: "1.02rem", marginBottom: 8, color: "#0f3f3a" }}>Network Expansion</h6>
              <p style={{ color: "#444", fontSize: "0.98rem" }}>
                Add payers strategically to reduce out-of-network denials and improve coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: "50px 0", textAlign: "center" }}>
        <div className="container">
          <blockquote style={{ fontSize: "1.2rem", color: "#374151", fontStyle: "italic", marginBottom: 18 }}>
            “We improved revenue, shortened AR days, and reduced denials significantly within the first quarter.”
          </blockquote>
          <p style={{ fontWeight: 700, color: "#1e293b" }}>
            Dr Ruth
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "50px 0" }}>
        <p style={{ maxWidth: 760, margin: "0 auto 16px", color: "#444", fontSize: "1.05rem" }}>
          Get a focused review of your denial trends, top payer issues, and the fastest opportunities to
          recover revenue and reduce repeat denials.
        </p>
        <a
          href="/contact"
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
            display: "inline-block",
            textDecoration: "none"
          }}
          onMouseOver={e => (e.currentTarget.style.background = "#54A1D9")}
          onMouseOut={e => (e.currentTarget.style.background = "#5CBDAA")}
        >
          Get Free Assessment
        </a>
      </section>

      <Secudal />
    </>
  );
};

export default ARDenialFixation;