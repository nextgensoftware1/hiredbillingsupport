
import { useState, useLayoutEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import cardiologyBg from "../../assets/images/hero/aging_ar.webp";
import Secudal from "../../components/practicelaunch/secudal";

const AgingAR = () => {
  const navigate = useNavigate();
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

  const agingReasons = [
    "Partial payments from insurance companies",
    "Incorrect claim submissions or coding errors",
    "Missing documentation or medical records requests",
    "Coordination of benefits issues",
    "Denials that were never properly appealed",
    "Secondary insurance not billed",
    "Claims that fell outside the regular billing follow-up process",
  ];

  const solutions = [
    "Comprehensive review of aging accounts receivable",
    "Identification of unpaid and underpaid claims",
    "Insurance follow-up and payer communication",
    "Claim resubmissions where allowed",
    "Appeal preparation and submission for denied claims",
    "Coordination with secondary or tertiary payers",
    "Documentation and record review when required",
  ];

  const process = [
    {
      title: "AR Assessment",
      desc: "We begin with a detailed review of your aging accounts receivable, focusing on claims that have been outstanding for extended periods.",
    },
    {
      title: "Claim Investigation",
      desc: "Each claim is analyzed to determine why payment was delayed or denied. This includes reviewing payer responses, coding details, and billing history.",
    },
    {
      title: "Insurance Follow-Up",
      desc: "Our team contacts payers directly to verify claim status, correct billing issues, and initiate reprocessing when possible.",
    },
    {
      title: "Appeals & Resubmissions",
      desc: "When claims were incorrectly denied or partially paid, we prepare and submit appeals supported by the appropriate documentation.",
    },
    {
      title: "Revenue Recovery",
      desc: "Payments recovered from these efforts are documented and reported back to your practice.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <Helmet>
        <link rel="preload" as="image" href={cardiologyBg} />
      </Helmet>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${cardiologyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: `${headerPad}px 0 80px`,
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="col-lg-7">
            <h1 className="fw-bold mb-3 text-white">
              Old & Aging Accounts Receivable Recovery
            </h1>

            <h3 className="mb-4 text-white">
              Recover Revenue Your Practice Thought Was Lost
            </h3>

            <p>
              In many medical practices, thousands of dollars remain tied up in
              unpaid or partially paid claims that are months or even years old.
              These claims often fall outside the daily billing workflow.
            </p>

            <p>
              At Hired Billing Support (HBS), we specialize in identifying,
              analyzing, and recovering these aging claims. Our team works
              through your historical Accounts Receivable to locate unpaid
              balances and pursue reimbursement that may still be collectible.
            </p>

            <p className="mb-4">
              Many practices are surprised to discover that claims from one to
              five years ago can still be recovered when handled correctly.
            </p>

            <button
              className="btn"
              style={{
                background: "#5CBDAA",
                color: "#fff",
                padding: "14px 40px",
                borderRadius: 12,
                fontWeight: "600",
              }}
              onClick={() => navigate("/contact")}
            >
              Schedule AR Recovery Assessment
            </button>
          </div>
        </div>
      </section>

      {/* WHY AGING AR */}
      <section className="py-5 bg-white">
        <div className="container">

          <h2 className="text-center fw-bold mb-3">
            <span style={{ background: ' #3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Why Aging Accounts Receivable
            </span>
            <span style={{ background: ' #1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              &nbsp;Happens
            </span>
          </h2>

          <p className="text-center mb-5">
            Over time, practices accumulate claims that remain unpaid due to
            several common issues.
          </p>

          <div className="row">
            {agingReasons.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: 30,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    height: "100%",
                  }}
                >
                  <p className="mb-0">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-4">
            Because billing teams focus on current claims and daily operations,
            older accounts are often overlooked — leaving valuable revenue
            uncollected.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-5" style={{ background: "#f8fafc" }}>
        <div className="container">

          <h2 className="text-center fw-bold mb-4">
            <span style={{ background: ' #3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Our Solution: Strategic AR
            </span>
            <span style={{ background: ' #1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              &nbsp;Recovery
            </span>
          </h2>

          <p className="text-center mb-5">
            HBS provides a structured recovery process designed to
            systematically review and pursue aging claims.
          </p>

          <div className="row">
            {solutions.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div
                  style={{
                    background: "#fff",
                    padding: 28,
                    borderRadius: 16,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    height: "100%",
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-4">
            Our goal is simple: recover revenue that your practice has already
            earned.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-5 bg-white">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            <span style={{ background: ' #3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              How Our Recovery
            </span>
            <span style={{ background: ' #1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              &nbsp;Process Works
            </span>
          </h2>

          <div className="row">
            {process.map((step, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: 28,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    height: "100%",
                  }}
                >
                  <h5 className="fw-bold mb-2">
                    {index + 1}. {step.title}
                  </h5>
                  <p className="mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="py-5" style={{ background: "#f8fafc" }}>
        <div className="container text-center">

          <h2 className="fw-bold mb-4">
            <span style={{ background: ' #3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Example
            </span>
            <span style={{ background: ' #1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              &nbsp;Scenario
            </span>
          </h2>

          <p>
            A multi-specialty clinic had more than $280,000 in accounts
            receivable older than two years. Most of these claims had been
            considered uncollectible.
          </p>

          <p>
            After reviewing the accounts, our team identified multiple issues
            including secondary insurance not billed and claims incorrectly
            denied.
          </p>

          <p className="fw-bold">
            Within several months, the practice recovered over $95,000 in
            previously unpaid claims.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 bg-white text-center">
        <div className="container">

          <h2 className="fw-bold mb-3">
            <span style={{ background: ' #3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Start Recovering Your
            </span>
            <span style={{ background: ' #1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              &nbsp;Outstanding Revenue
            </span>
          </h2>

          <p className="mb-4">
            If your practice has claims that have remained unpaid for months or
            even years, there may still be opportunities for recovery.
          </p>

          <button
            className="btn"
            style={{
              background: "#5CBDAA",
              color: "#fff",
              padding: "14px 40px",
              borderRadius: 12,
              fontWeight: "600",
            }}
            onClick={() => navigate("/contact")}
          >
            Contact Us to Schedule an AR Recovery Assessment
          </button>
        </div>
      </section>

      <Secudal />
    </>
  );
};

export default AgingAR;

