// import doctorBg from "../../../assets/images/services/rcm-banner.png"; // ✅ use your own background image path

// const WhyChooseSection = () => {
//   return (
//     <section
//       className="py-5"
//       style={{
//         backgroundImage: `url(${doctorBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="container py-5">
//         <div className="row align-items-start g-4">
//           {/* LEFT SIDE - TEXT CONTENT */}
//           <div
//             className="col-lg-6 p-5 rounded-4"
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.9)",
//               border: "2px solid #00b14f",
//               boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
//               backdropFilter: "blur(4px)",
//             }}
//           >
//             <h3
//               className="fw-bold mb-4"
//               style={{ color: "#0b155b", fontSize: "1.8rem" }}
//             >
//               Why Practices Choose Our RCM?
//             </h3>

//             <div className="mb-4">
//               <h6 className="fw-bold mb-2" style={{ color: "#0b155b" }}>
//                 Front-loaded accuracy (before the claim goes out)
//               </h6>
//               <p className="mb-1" style={{ color: "#000000", fontSize: "0.95rem" }}>
//                 We catch issues at the source so claims are clean on first submission:
//                 eligibility & benefits, COB, medical necessity, coding/modifiers,
//                 required attachments (notes, labs, imaging), and payer-specific forms.
//               </p>
//               <p className="fw-semibold" style={{ color: "#00b14f" }}>
//                 Outcome: higher first-pass rate, fewer reworks, faster payments.
//               </p>
//             </div>

//             <div className="mb-4">
//               <h6 className="fw-bold mb-2" style={{ color: "#0b155b" }}>
//                 Denial-prevention playbooks (by payer + code family)
//               </h6>
//               <p className="mb-1" style={{ color: "#000000", fontSize: "0.95rem" }}>
//                 We maintain checklists and edit rules per payer and service line (e.g.,
//                 cardiology, ortho). Each denial code maps to a standard fix, owner, and SLA.
//               </p>
//               <p className="fw-semibold" style={{ color: "#00b14f" }}>
//                 Outcome: measurable drop in top denial categories (COB, missing info,
//                 non-covered, prior auth).
//               </p>
//             </div>

//             <div className="mb-4">
//               <h6 className="fw-bold mb-2" style={{ color: "#0b155b" }}>
//                 Daily production + QA tied to KPIs
//               </h6>
//               <p className="mb-1" style={{ color: "#000000", fontSize: "0.95rem" }}>
//                 Your team gets end-of-day logs and a weekly dashboard: submissions,
//                 rejections, denials by reason, TAT, FPR, DSO/A/R aging, appeal outcomes.
//                 QA samples validate accuracy of charge entry, coding, and documentation.
//               </p>
//               <p className="fw-semibold" style={{ color: "#00b14f" }}>
//                 Outcome: clear visibility and faster course-corrections.
//               </p>
//             </div>

//             <div>
//               <h6 className="fw-bold mb-2" style={{ color: "#0b155b" }}>
//                 Flexible engagement—scale with volume
//               </h6>
//               <p className="mb-1" style={{ color: "#000000", fontSize: "0.95rem" }}>
//                 Start with a focused scope (e.g., charge→submit + A/R follow-up) and
//                 expand as needed. Add/remove FTEs month-to-month without long contracts.
//               </p>
//               <p className="fw-semibold" style={{ color: "#00b14f" }}>
//                 Outcome: capacity that tracks to visit volume and seasonality.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE - FORM */}
//           <div
//             className="col-lg-6 p-5 rounded-4"
//             style={{
//               backgroundColor: "#ffffff",
//               boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h4
//               className="fw-bold text-center mb-4"
//               style={{ color: "#0b155b", fontSize: "1.5rem" }}
//             >
//               Get A Free RCM Audit
//             </h4>

//             <form>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="form-control rounded-pill border-success mb-3"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="form-control rounded-pill border-success mb-3"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone number"
//                 className="form-control rounded-pill border-success mb-3"
//               />
//               <select
//                 className="form-select rounded-pill border-success mb-3"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Choose Department
//                 </option>
//                 <option>Billing</option>
//                 <option>Credentialing</option>
//                 <option>Denial Management</option>
//                 <option>Reporting</option>
//               </select>
//               <div className="row g-3 mb-3">
//                 <div className="col-md-6">
//                   <input
//                     type="date"
//                     className="form-control rounded-pill border-success"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <input
//                     type="time"
//                     className="form-control rounded-pill border-success"
//                   />
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 className="btn w-100 text-white fw-semibold rounded-pill py-3"
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)",
//                   border: "none",
//                   fontSize: "1rem",
//                   letterSpacing: "0.3px",
//                 }}
//               >
//                 BOOK AN APPOINTMENT
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseSection;
import doctorBg from "../../../assets/images/services/rcm-banner.png"// ✅ make sure your image path is correct

const WhyChooseSection = () => {
  return (
    <section
      className="py-5 mt-5"
      style={{
        backgroundImage: `url(${doctorBg})`,
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
              Why Practices Choose Our RCM?
            </h3>

            <div className="mb-4">
              <h6 className="fw-bold mb-2" style={{ color: "#0b155b" }}>
                Front-loaded accuracy (before the claim goes out)
              </h6>
              <p className="mb-1 text-dark" style={{ fontSize: "0.95rem" }}>
                We catch issues at the source so claims are clean on first submission:
                eligibility & benefits, COB, medical necessity, coding/modifiers,
                required attachments, and payer-specific forms.
              </p>
              <p className="fw-semibold" style={{ color: "#00b14f" }}>
                Outcome: higher first-pass rate, fewer reworks, faster payments.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold mb-2" style={{ color: "#0b155b" }}>
                Denial-prevention playbooks (by payer + code family)
              </h6>
              <p className="mb-1 text-dark" style={{ fontSize: "0.95rem" }}>
                We maintain checklists and edit rules per payer and service line. Each
                denial code maps to a standard fix, owner, and SLA.
              </p>
              <p className="fw-semibold" style={{ color: "#00b14f" }}>
                Outcome: measurable drop in denial categories.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold mb-2" style={{ color: "#0b155b" }}>
                Daily production + QA tied to KPIs
              </h6>
              <p className="mb-1 text-dark" style={{ fontSize: "0.95rem" }}>
                Your team gets daily logs and weekly dashboards for complete visibility
                and faster course corrections.
              </p>
              <p className="fw-semibold" style={{ color: "#00b14f" }}>
                Outcome: clear visibility and faster cash flow.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div
            className="col-lg-6 d-flex justify-content-center"
          >
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
                Get A Free RCM Audit
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
                    placeholder="Email Address"
                    className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Organization"
                    className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-select rounded-pill px-4 py-3 border-success shadow-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Department
                    </option>
                    <option>Billing</option>
                    <option>Credentialing</option>
                    <option>Denial Management</option>
                    <option>Reporting</option>
                  </select>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <input
                      type="date"
                      className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="time"
                      className="form-control rounded-pill px-4 py-3 border-success shadow-sm"
                    />
                  </div>
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
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
