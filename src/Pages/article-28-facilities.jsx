import "@fortawesome/fontawesome-free/css/all.min.css";
import CountUpStats from "../components/CountUpStats";
import Emr from '../components/Hire/Emr';
import React, { useState, useLayoutEffect } from "react";

const ArticleFacilitiesPage = () => {
  const [headerPad, setHeaderPad] = useState(100);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector("header");
      if (header) {
        setHeaderPad(header.offsetHeight + 30);
      } else {
        setHeaderPad(100);
      }
    }
    updatePad();
    window.addEventListener("resize", updatePad);
    return () => window.removeEventListener("resize", updatePad);
  }, []);

  return (
    <>
      {/* Hero Section - matches Case Study style */}
      <style>{`
        .article-hero-section {
          background: linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%);
          color: white;
          padding: ${headerPad}px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }
        .article-hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: moveBackground 20s linear infinite;
        }
        @keyframes moveBackground {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .article-hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(253, 183, 20, 0.1) 0%, transparent 100%);
        }
        .article-hero-content {
          position: relative;
          z-index: 2;
          animation: fadeInUp 0.8s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .article-hero-section h1 {
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 24px;
          text-shadow: 2px 4px 8px rgba(0,0,0,0.2);
          letter-spacing: -1px;
        }
        .article-hero-section .lead {
          font-size: 24px;
          font-weight: 300;
          opacity: 0.95;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .article-hero-section {
            padding: 60px 0;
          }
          .article-hero-section h1 {
            font-size: 36px;
          }
          .article-hero-section .lead {
            font-size: 18px;
          }
        }
      `}</style>
      <section className="article-hero-section">
        <div className="container">
          <div className="article-hero-content">
            <h1 style={{color:"white"}}>Article 28 Facilities</h1>
            <p className="lead">Learn how Article 28 accredited healthcare facilities in New York achieve compliance, operational excellence, and maximize reimbursements with expert support from HBS.</p>
          </div>
        </div>
      </section>
   
      <section
  className="py-5 mt-5"
  style={{
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="container py-5">
    <div className="row align-items-start g-4">
      {/* LEFT SIDE - TEXT CONTENT */}
      <div
        className="col-lg-6 p-5 rounded-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          border: "2px solid #00b14f",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3
          className="fw-bold mb-4"
          style={{ color: "#0b155b", fontSize: "1.8rem" }}
        >
          Article 28 Facilities No-Fault Collection Provider
        </h3>

        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          Article 28 is a public health law for regulating and recognizing
          accreditation of public health care facilities so that the facilities
          are legally licensed and run. Article 28 provides that certain
          facilities are licensed to perform particular types of procedures
          which for other reasons might not lawfully be performed. Article 28
          does not only relate to hospitals, however; it also covers surgical
          centres and nursing homes.
        </p>

        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          High standards of health care services for the state of New York is
          embodied in Article 28. It helps to establish that public healthcare
          facilities are operative and actual. Thus, accreditation with regards
          to the Article 28 process implies that a facility works in accordance
          with the tightest of standards. Coding and billing under Article 28
          can be more complicated than even for a medical facility that has not
          yet met the designation.
        </p>

        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          The team from The Hired Billing Services has years of experience of
          handling a case with such big claims behind a healthcare provider, so
          they have the required knowledge and experience to take on these
          claims when they are filed on behalf of the healthcare facility.
        </p>

        <h5 className="fw-bold mt-4 mb-2" style={{ color: "#0b155b" }}>
          Understanding the No-Fault Insurance Law
        </h5>
        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          However, because the services healthcare professionals who are
          accredited under Article 28 provide are more expensive, to some
          degree, this is because they have to be willing to pay the bills to
          ensure that high standards of care are met. As Article 28 facilities
          provide a higher cost of care, the carriers are very interested in
          controlling those costs, so more scrutiny is put on them.
        </p>

        <h5 className="fw-bold mt-4 mb-3" style={{ color: "#0b155b" }}>
          Common Reimbursement Denials Under New York’s No-Fault Laws
        </h5>
        <p className="text-dark" style={{ fontSize: "0.95rem" }}>
          However, in some cases the insurance companies are reluctant to pay
          out these bills. However, there can be many reasons why they will deny
          your No-Fault claim and the most common reasons here are as follows
          below.
        </p>

        <ul className="text-dark" style={{ fontSize: "0.95rem" }}>
          <li>
            <strong>Lack of Medical Necessity:</strong> The most common denial
            is that the insurer simply says the treatment provided by your
            facility was not “reasonable and necessary” and therefore, it is not
            covered under the No-Fault law. The insurers will collaborate with
            an independent physician to generate a peer review-based medical
            denial claiming the care was unnecessary.
          </li>
          <li className="mt-2">
            <strong>Independent Medical Exam Findings:</strong> An IME
            (Independent Medical Exam) is another way insurance companies
            “verify” a patient’s condition before paying your claims. The
            examining physician might rule that the patient’s recovery is
            complete or minimize injuries. Insurance companies will deny claims
            referring to that opinion.
          </li>
          <li className="mt-2">
            <strong>Missing Documentation:</strong> To get reimbursed, you must
            supply the insurance company with detailed documentation of care.
            Ignoring verification requests, even unjustified ones, can result in
            permanent claim denial. Always ensure every facility claim includes
            full supporting documentation.
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE - CONTACT FORM */}
      <div className="col-lg-6 d-flex justify-content-center">
        <div
          className="p-5 w-100 rounded-4"
          style={{
            maxWidth: "520px",
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e5e5",
          }}
        >
          <h4
            className="fw-bold text-center mb-4"
            style={{ color: "#0b155b", fontSize: "1.5rem" }}
          >
            Hurry Now & Get Free RCM Audit
          </h4>

          <form>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Subject"
                className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message (optional)"
                rows="4"
                className="form-control rounded-4 px-4 py-3 border-success shadow-sm"
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <button
              type="button"
              className="btn w-100 text-white fw-semibold rounded-pill py-3"
              style={{
                background:
                  "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)",
                border: "none",
                fontSize: "1rem",
                letterSpacing: "0.4px",
                boxShadow: "0 4px 12px rgba(0, 177, 79, 0.3)",
              }}
            >
              Submit
            </button>
          </form>

          {/* TEXT BELOW FORM */}
          <div className="mt-4">
            <p
              className="text-dark"
              style={{ fontSize: "0.9rem", textAlign: "justify" }}
            >
              If your patient was injured in a car accident, your healthcare
              facility bill should be paid by the automobile insurance carrier.
              Once upon a time, New York’s No-Fault Insurance Law was created to
              ensure that car accident victims didn’t depend on who was at
              fault, for quality medical care. Just for this compensation of
              your No-Fault bills, you will have to file a No-Fault claim with
              the patient’s insurance company. If you file a claim, your facility
              is entitled to be reimbursed for all “reasonable and necessary”
              treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
             <CountUpStats/>
              <Emr />

    </>
  );
};

export default ArticleFacilitiesPage;
