// import React from "react";
// import medicalClaimsImage from "../../../assets/images/services/medical-claims-billing.png";

// const MedicalClaimsBilling = () => {
//   return (
//     <section className="py-5" style={{ backgroundColor: "#fff", marginTop: "100px" }}>
//       <div className="container">
//         {/* Section Heading */}
//         <div className="text-center mb-4">
//           <h2 className="fw-bold" style={{ color: "#0b155b" }}>
//             Medical Claims Billing Service
//           </h2>
//           <p >
//             We boost healthcare income with quick, uncut reimbursements.
//           </p>
//         </div>

//         {/* Row Content */}
//         <div className="row align-items-start">
//           {/* Left Image */}
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <img
//               src={medicalClaimsImage}
//               alt="Medical Claims Billing"
//               className="img-fluid"
//             />
//           </div>

//           {/* Right Column - Features */}
//           <div className="col-lg-6">
//             <div className="mb-4">
//               <h6 className="fw-bold" style={{ color: "#6c757d" }}>
//                 Secure claim data transmission
//               </h6>
//               <p >
//                 Safest encryption and least-privilege access protect PHI end-to-end.
//               </p>
//             </div>
//             <div className="mb-4">
//               <h6 className="fw-bold" style={{ color: "#6c757d" }}>
//                 Increase revenue
//               </h6>
//               <p >
//                 Higher first-pass approvals and fewer write-offs raise net collections.
//               </p>
//             </div>
//             <div className="mb-4">
//               <h6 className="fw-bold" style={{ color: "#6c757d" }}>
//                 Instant claim submission
//               </h6>
//               <p >
//                 Same-day charge review, payer edits, and electronic submission.
//               </p>
//             </div>
//             <div className="mb-4">
//               <h6 className="fw-bold" style={{ color: "#6c757d" }}>
//                 Claim follow-up &amp; resolution
//               </h6>
//               <p >
//                 Systematic status checks, corrections, and timely appeals until paid.
//               </p>
//             </div>

//             {/* Button */}
//             <a
//               href="https://hiredbillingsupport.com/schedule-a-demo/"
//               className="btn text-white px-4 py-2"
//               style={{
//                 background: "linear-gradient(90deg, #00b14f, #0cc4d9)",
//                 border: "none",
//                 borderRadius: "25px",
//               }}
//             >
//               Book Free Consultation →
//             </a>
//           </div>
//         </div>

//         {/* Bottom Content Section */}
//         <div className="row mt-5">
//           <div className="col-12">
//             <h5 className="fw-bold mb-3" style={{ color: "#6c757d" }}>
//               When "good enough" isn't enough, bring in specialists
//             </h5>
//             <p className="text-secondary mb-3">
//               We recover dollars left in edits and denials with 24/7 oversight.
//               Commercial payers? Medicare/Medicaid? We maintain playbooks by
//               payer and code family so the right fix happens quickly—refiles,
//               corrected claims, or appeals with evidence.
//             </p>
//             <p >
//               We coordinate tightly with provider teams, so reimbursement
//               forms (e.g., CMS-1500, UB-04) and supporting notes are complete.
//               The result: fewer stalls, faster payments, clearer reporting.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MedicalClaimsBilling;

import React from "react";
import medicalClaimsImage from "../../../assets/images/services/medical-claims-billing.png";

const MedicalClaimsBilling = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#fff", marginTop: "100px" }}>
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#0b155b" }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Medical Claims Billing
            </span>

            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              &nbsp;Service
            </span>
          </h2>
          <p >
            We boost healthcare income with quick, uncut reimbursements.
          </p>
        </div>

        {/* Row Content */}
        <div className="row align-items-start">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={medicalClaimsImage}
              alt="Medical Claims Billing"
              className="img-fluid"
            />
          </div>

          {/* Right Column - Features */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h6 className="fw-bold" style={{ color: "#6c757d" }}>
                The team that makes medical claims painless
              </h6>
              <p >
                Managing claims is hard when accuracy, documentation, and payers all move at once. 
                Our billing specialists front-load eligibility and documentation, scrub charges, 
                and submit the claim correctly the first time—so cash arrives faster.
              </p>
              <p >
                We reconcile encounters, validate coding/modifiers, attach what payers require, 
                and file electronically. Then we work the queues daily so every claim reaches the 
                insurer and gets fully reimbursed.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold" style={{ color: "#6c757d" }}>
                Secure claim data transmission
              </h6>
              <p >
                Safest encryption and least-privilege access protect PHI end-to-end.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold" style={{ color: "#6c757d" }}>
                Increase revenue
              </h6>
              <p >
                Higher first-pass approvals and fewer write-offs raise net collections.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold" style={{ color: "#6c757d" }}>
                Instant claim submission
              </h6>
              <p >
                Same-day charge review, payer edits, and electronic submission.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold" style={{ color: "#6c757d" }}>
                Claim follow-up &amp; resolution
              </h6>
              <p >
                Systematic status checks, corrections, and timely appeals until paid.
              </p>
            </div>

            {/* Button */}
            <a
              href="/contact"
              className="btn text-white px-4 py-2"
              style={{
                background: "linear-gradient(90deg, #00b14f, #0cc4d9)",
                border: "none",
                borderRadius: "25px",
                textDecoration: "none"
              }}
            >
              Book Free Consultation →
            </a>
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h5 className="fw-bold mb-3" style={{ color: "#6c757d" }}>
              When “good enough” isn’t enough, bring in specialists
            </h5>
            <p className=" mb-3">
              We recover dollars left in edits and denials with 24/7 oversight. Commercial payers? 
              Medicare/Medicaid? We maintain playbooks by payer and code family so the right fix happens 
              quickly—refiles, corrected claims, or appeals with evidence.
            </p>
            <p >
              We coordinate tightly with provider teams, so reimbursement forms (e.g., CMS-1500, UB-04) 
              and supporting notes are complete. The result: fewer stalls, faster payments, clearer reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalClaimsBilling;
