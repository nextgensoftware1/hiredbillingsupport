// import { useState, useLayoutEffect } from "react";
// import billingBg1 from "../../assets/images/hero/Medical_Billing_RCM.webp";
// import Secudal from "../../components/practicelaunch/secudal";

// const MedicalBillingRCM = () => {
//   const [headerPad, setHeaderPad] = useState(120);

//   useLayoutEffect(() => {
//     function updatePad() {
//       const header = document.querySelector('header');
//       const infoBar = document.querySelector('.top-info-bar');
//       let pad = 120;
//       if (header) pad = header.offsetHeight;
//       if (infoBar) pad += infoBar.offsetHeight;
//       setHeaderPad(pad + 30); // add extra space for shadow/overlap
//     }
//     updatePad();
//     window.addEventListener('resize', updatePad);
//     return () => window.removeEventListener('resize', updatePad);
//   }, []);

//   // Unique Medical Billing & RCM challenges
//   const challenges = [
//     {
//       icon: (
//         <span style={{ background: "#fee2e2", color: "#ef4444", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>
//           {/* Claims SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#ef4444" strokeWidth="2" fill="none"/><path d="M8 8h8M8 12h8M8 16h4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/></svg>
//         </span>
//       ),
//       title: "Claim Rejections & Delays",
//       desc: "Incomplete or inaccurate claims result in rejections, payment delays, and lost revenue.",
//       impact: "Cash flow is disrupted and AR days increase."
//     },
//     {
//       icon: (
//         <span style={{ background: "#fef9c3", color: "#f59e42", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>
//           {/* Denial SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="#f59e42" strokeWidth="2" fill="none"/><path d="M9 9l6 6M15 9l-6 6" stroke="#f59e42" strokeWidth="2" strokeLinecap="round"/></svg>
//         </span>
//       ),
//       title: "High Denial Rates",
//       desc: "Recurring denials from payers due to coding, eligibility, or documentation errors drain revenue.",
//       impact: "Denied claims require costly rework and often go unpaid."
//     },
//     {
//       icon: (
//         <span style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>
//           {/* AR SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#2563eb" strokeWidth="2" fill="none"/><path d="M8 16h8M8 12h8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/></svg>
//         </span>
//       ),
//       title: "Aging Accounts Receivable",
//       desc: "Unresolved claims and slow follow-up cause AR to age, increasing bad debt risk.",
//       impact: "Revenue is lost as claims pass timely filing limits."
//     },
//     {
//       icon: (
//         <span style={{ background: "#fee2e2", color: "#b91c1c", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>
//           {/* Compliance SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="#b91c1c" strokeWidth="2" fill="none"/><path d="M9.5 13l2 2 3-4" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//         </span>
//       ),
//       title: "Compliance & Regulatory Risk",
//       desc: "Improper billing and documentation expose your practice to audits, recoupments, and penalties.",
//       impact: "Non-compliance can result in severe financial loss."
//     },
//     {
//       icon: (
//         <span style={{ background: "#fef9c3", color: "#b45309", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>
//           {/* Revenue SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="#b45309" strokeWidth="2" fill="none"/><path d="M9 15l3-3 3 3" stroke="#b45309" strokeWidth="2" strokeLinecap="round"/></svg>
//         </span>
//       ),
//       title: "Revenue Leakage",
//       desc: "Missed charges, underbilling, and lack of follow-up mean revenue is left on the table.",
//       impact: "Practices lose up to 20% of revenue from preventable errors."
//     }
//   ,
//     {
//       icon: (
//         <span style={{
//           background: "#fef9c3",
//           color: "#f59e42",
//           borderRadius: "50%",
//           width: 44,
//           height: 44,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 24,
//           marginBottom: 16,
//         }}>
//           {/* Warning SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <path d="M12 4L2 20h20L12 4z" stroke="#f59e42" strokeWidth="2" fill="none"/>
//             <circle cx="12" cy="16" r="1" fill="#f59e42"/>
//             <rect x="11" y="10" width="2" height="4" rx="1" fill="#f59e42"/>
//           </svg>
//         </span>
//       ),
//       title: "Complex Documentation Requirements",
//       desc: "Each payer requires unique forms, supporting documents, and verification methods creating administrative complexity and errors.",
//       impact: "Incomplete applications get rejected, extending timeline by months"
//     },
//     {
//       icon: (
//         <span style={{
//           background: "#fee2e2",
//           color: "#ef4444",
//           borderRadius: "50%",
//           width: 44,
//           height: 44,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 24,
//           marginBottom: 16,
//         }}>
//           {/* Dollar SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" fill="none"/>
//             <path d="M12 8v8M9.5 10.5C9.5 9.11929 10.6193 8 12 8C13.3807 8 14.5 9.11929 14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 14.1193 9.5 15.5C9.5 16.8807 10.6193 18 12 18C13.3807 18 14.5 16.8807 14.5 15.5" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </span>
//       ),
//       title: "Re-Credentialing Lapses",
//       desc: "Missed re-credentialing deadlines cause provider Enrolment to lapse, halting all claim payments until re-Enrolment is complete.",
//       impact: "Complete payment stoppage until re-credentialing is completed"
//     },
//     {
//       icon: (
//         <span style={{
//           background: "#fef9c3",
//           color: "#f59e42",
//           borderRadius: "50%",
//           width: 44,
//           height: 44,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 24,
//           marginBottom: 16,
//         }}>
//           {/* Document SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <rect x="4" y="4" width="16" height="16" rx="3" stroke="#f59e42" strokeWidth="2" fill="none"/>
//             <rect x="8" y="8" width="8" height="2" rx="1" fill="#f59e42"/>
//             <rect x="8" y="12" width="5" height="2" rx="1" fill="#f59e42"/>
//           </svg>
//         </span>
//       ),
//       title: "CAQH Profile Maintenance",
//       desc: "Keeping CAQH profiles current with licenses, certifications, and practice information requires constant monitoring and updates.",
//       impact: "Outdated CAQH data delays all payer credentialing processes"
//     },
//     {
//       icon: (
//         <span style={{
//           background: "#fee2e2",
//           color: "#ef4444",
//           borderRadius: "50%",
//           width: 44,
//           height: 44,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 24,
//           marginBottom: 16,
//         }}>
//           {/* Calendar SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <rect x="3" y="5" width="18" height="16" rx="3" stroke="#ef4444" strokeWidth="2" fill="none"/>
//             <path d="M16 3v4M8 3v4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
//             <path d="M3 9h18" stroke="#ef4444" strokeWidth="2"/>
//           </svg>
//         </span>
//       ),
//       title: "Missed Enrolment Deadlines",
//       desc: "Missing payer or revalidation deadlines can result in network termination and loss of billing privileges until re-Enrolment.",
//       impact: "Risk of being out-of-network and losing patient revenue"
//     },
//     {
//       icon: (
//         <span style={{
//           background: "#fef9c3",
//           color: "#f59e42",
//           borderRadius: "50%",
//           width: 44,
//           height: 44,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 24,
//           marginBottom: 16,
//         }}>
//           {/* Shield/Compliance SVG */}
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="#f59e42" strokeWidth="2" fill="none"/>
//             <path d="M9.5 13l2 2 3-4" stroke="#f59e42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </span>
//       ),
//       title: "Compliance & Regulatory Risks",
//       desc: "Failure to maintain up-to-date credentials and documentation can lead to compliance violations and payer audits.",
//       impact: "Potential fines, penalties, and audit exposure"
//     }
//   ];

//   return (
//     <>
//       {/* HERO SECTION */}
//       <section
//         className="hero"
//         style={{
//           backgroundImage: `url(${billingBg1})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           padding: `${headerPad}px 0 70px 0`,
//           color: "#fff",
//           position: "relative",
//           fontFamily: "Arial, sans-serif",
//           minHeight: "500px",
//         }}
//       >
//         <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
//           <div className="row align-items-start">
//             <div className="col-md-7">
//               <h1 className="fw-bold" style={{ fontSize: "2.7rem", lineHeight: 1.13, marginBottom: 18, color: "#fff", fontWeight: 900, letterSpacing: "-1.5px", textShadow: "0 2px 10px rgba(0,0,0,0.10)" }}>
//                 Medical Billing & Revenue Cycle Management
//               </h1>
//               <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: 18, color: "#e0f2fe", letterSpacing: "-0.5px" }}>
//                 Maximize Collections. Minimize Denials. Optimize Your Revenue Cycle.
//               </h2>
//               <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: 32, color: "#f0f0f0", opacity: 0.98, letterSpacing: "0.2px" }}>
//                 Our medical billing & RCM experts handle every step of your revenue cycle—from claim creation to payment posting and denial management. We accelerate cash flow, reduce AR days, and ensure you collect every dollar you’ve earned.
//               </p>
//               <a href="/contact" className="btn" style={{ background: "#5CBDAA", color: "#fff", fontWeight: "bold", fontSize: "1.15rem", padding: "16px 44px", borderRadius: "12px", border: "none", transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", boxShadow: "0 10px 30px rgba(92, 189, 170, 0.18)", letterSpacing: "0.5px", textDecoration: "none" }}>
//                 Get a Free Billing Assessment
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* CHALLENGES SECTION */}
//       <section style={{ background: "#fff", padding: "60px 0 40px 0" }}>
//         <div className="container">
//           <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.1rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
//             <span style={{ background: ' #3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//               Medical Billing & RCM
//             </span>
//             <span style={{ background: ' #1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//               &nbsp;Challenges
//             </span>
//           </h2>
//           <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
//             Inefficient billing processes, high denial rates, and poor AR follow-up cost practices millions every year. Our RCM team fixes the root causes and recovers your lost revenue.
//           </p>
//           <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
//             {challenges.map((item, idx) => (
//               <div key={idx} className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #f3f4f6" }}>
//                 {item.icon}
//                 <h3 style={{ fontWeight: 800, fontSize: "1.13rem", marginBottom: 10, color: "#0f3f3a" }}>{item.title}</h3>
//                 <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 14 }}>{item.desc}</p>
//                 <div style={{ background: "#f8fafc", color: "#0f3f3a", borderRadius: 8, padding: "8px 12px", fontSize: "0.98rem", fontWeight: 500, marginTop: "auto" }}>
//                   <b>Impact:</b> {item.impact}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      

//       {/* SOLUTIONS SECTION */}
//       <section style={{ background: "#f8fafc", padding: "60px 0 40px 0" }}>
//         <div className="container">
//           <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: "2.1rem", marginBottom: 12, letterSpacing: "-1px", color: "#0f3f3a" }}>
//             <span style={{ background: ' #3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//               Our Medical Billing & RCM
//             </span>
//             <span style={{ background: ' #1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//               &nbsp;Solutions
//             </span>
//           </h2>
//           <p style={{ textAlign: "center", color: "#444", fontSize: "1.09rem", marginBottom: 38, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontWeight: 500 }}>
//             We deliver end-to-end billing and RCM services that drive accuracy, compliance, and revenue for your practice—no matter your specialty or size.
//           </p>
//           <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
//             <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
//               <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Claim Creation & Submission</h3>
//               <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Accurate, timely claim generation and electronic submission to all major payers.</p>
//               <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
//                 <li>Charge entry & coding review</li>
//                 <li>Eligibility & benefits verification</li>
//                 <li>Electronic & paper claim submission</li>
//                 <li>Real-time claim tracking</li>
//               </ul>
//             </div>
//             <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
//               <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Payment Posting & Reconciliation</h3>
//               <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Automated payment posting, ERA/EOB reconciliation, and patient balance management.</p>
//               <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
//                 <li>ERA/EOB processing</li>
//                 <li>Patient statement generation</li>
//                 <li>Payment plan setup</li>
//                 <li>Refund & adjustment management</li>
//               </ul>
//             </div>
//             <div className="col-12 col-md-6 col-lg-4" style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", padding: "32px 24px 24px 24px", margin: "12px 0", minHeight: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1.5px solid #e0e7ef" }}>
//               <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 10, color: "#0f3f3a" }}>Denial Management & AR Follow-Up</h3>
//               <p style={{ color: "#444", fontSize: "1.01rem", marginBottom: 18 }}>Expert denial analysis, appeals, and aggressive AR follow-up to recover every dollar.</p>
//               <ul style={{ color: "#059669", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
//                 <li>Denial root cause analysis</li>
//                 <li>Custom appeals & resubmissions</li>
//                 <li>Insurance & patient AR follow-up</li>
//                 <li>Bad debt minimization</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>


// <section style={{ background: "#f8fafc", padding: "60px 0 40px 0" }}>
//   <div className="container">
//     <h2 style={{
//       textAlign: "center",
//       fontWeight: 700,
//       fontSize: "2.1rem",
//       marginBottom: 10,
//       letterSpacing: "-1px"
//     }}>
//       <span style={{ background: ' #3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//         Comprehensive Service
//       </span>
//       <span style={{ background: ' #1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//         &nbsp;Features
//       </span>
//     </h2>
//     <p style={{
//       textAlign: "center",
//       color: "#4b5563",
//       fontSize: "1.08rem",
//       marginBottom: 40,
//       maxWidth: 700,
//       marginLeft: "auto",
//       marginRight: "auto"
//     }}>
//       Every component managed with precision and expertise.
//     </p>
//     <div className="row" style={{ display: "flex", justifyContent: "center", gap: 24 }}>
//       {/* Card 1 */}
//       <div className="col-12 col-md-6 col-lg-3"
//         style={{
//           background: "#54A1D9",
//           borderRadius: 18,
//           boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
//           padding: "32px 24px 24px 24px",
//           margin: "12px 0",
//           minHeight: 340,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           border: "none"
//         }}>
//         <span style={{
//           background: "#0ea5e9",
//           color: "#fff",
//           borderRadius: "50%",
//           width: 44,
//           height: 44,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 24,
//           marginBottom: 16,
//         }}>
//           {/* Document SVG */}
//           <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
//             <rect x="8" y="8" width="8" height="2" rx="1" fill="#fff"/>
//             <rect x="8" y="12" width="5" height="2" rx="1" fill="#fff"/>
//           </svg>
//         </span>
//         <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#fff" }}>
//           Initial Credentialing
//         </h3>
//         <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
//           Complete credentialing application preparation and submission for new providers joining your practice.
//         </p>
//         <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Application completion</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Document gathering</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Primary source verification</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Payer submission and follow-up</li>
//         </ul>
//       </div>
//       {/* Card 2 */}
//       <div className="col-12 col-md-6 col-lg-3"
//         style={{
//           background: "#54A1D9",
//           borderRadius: 18,
//           boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
//           padding: "32px 24px 24px 24px",
//           margin: "12px 0",
//           minHeight: 340,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           border: "none"
//         }}>
//         <span style={{
//           background: "#0ea5e9",
//           color: "#fff",
//           borderRadius: "50%",
//           width: 44,
//           height: 44,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 24,
//           marginBottom: 16,
//         }}>
//           {/* Refresh SVG */}
//           <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <path d="M4 12a8 8 0 1 1 8 8" stroke="#fff" strokeWidth="2" fill="none"/>
//             <path d="M4 4v5h5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </span>
//         <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#fff" }}>
//           CAQH Profile Setup
//         </h3>
//         <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
//           Comprehensive CAQH database profile creation and ongoing maintenance for all participating providers.
//         </p>
//         <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Profile creation</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Document upload</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Quarterly attestation</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Update management</li>
//         </ul>
//       </div>
//       {/* Card 3 */}
//       <div className="col-12 col-md-6 col-lg-3"
//         style={{
//           background: "#54A1D9",
//           borderRadius: 18,
//           boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
//           padding: "32px 24px 24px 24px",
//           margin: "12px 0",
//           minHeight: 340,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           border: "none"
//         }}>
//         <span style={{
//           background: "#0ea5e9",
//           color: "#fff",
//           borderRadius: "50%",
//           width: 44,
//           height: 44,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 24,
//           marginBottom: 16,
//         }}>
//           {/* Calendar SVG */}
//           <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <rect x="3" y="5" width="18" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="none"/>
//             <path d="M16 3v4M8 3v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
//             <path d="M3 9h18" stroke="#fff" strokeWidth="2"/>
//           </svg>
//         </span>
//         <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#fff" }}>
//           Re-Credentialing Services
//         </h3>
//         <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
//           Proactive monitoring and automated reminders for all re-credentialing requirements and renewals.
//         </p>
//         <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Deadline tracking</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Renewal initiation</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Continuous attestation</li>
//         </ul>
//       </div>
//       {/* Card 4 */}
//       <div className="col-12 col-md-6 col-lg-3"
//         style={{
//           background: "#54A1D9",
//           borderRadius: 18,
//           boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
//           padding: "32px 24px 24px 24px",
//           margin: "12px 0",
//           minHeight: 340,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           border: "none"
//         }}>
//         <span style={{
//           background: "#0ea5e9",
//           color: "#fff",
//           borderRadius: "50%",
//           width: 44,
//           height: 44,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 24,
//           marginBottom: 16,
//         }}>
//           {/* Network SVG */}
//           <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill="none"/>
//             <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </span>
//         <h3 style={{ fontWeight: 700, fontSize: "1.13rem", marginBottom: 10, color: "#fff" }}>
//           Network Expansion
//         </h3>
//         <p style={{ color: "#e5e7eb", fontSize: "1.01rem", marginBottom: 16 }}>
//           Strategic Enrolment with additional payer networks to expand your market and increase patient access.
//         </p>
//         <ul style={{ color: "#fff", fontSize: "0.98rem", paddingLeft: 18, marginBottom: 0 }}>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Network applications</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Contract negotiation support</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Multi-payer coordination</li>
//           <li><span style={{color:"#22c55e",marginRight:6}}>&#10003;</span> Specialty networks</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </section>



// <section style={{
//   background: "#fff",
//   padding: "48px 0",
//   display: "flex",
//   justifyContent: "center"
// }}>
//   <div style={{
//     maxWidth: 700,
//     width: "100%",
//     margin: "0 auto",
//     background: "#fff",
//     borderRadius: 16,
//     boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
//     padding: "40px 32px 32px 32px",
//     textAlign: "center",
//     border: "1px solid #f3f4f6"
//   }}>
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginBottom: 24
//     }}>
//       {/* User SVG */}
//       <span style={{
//         background: "#e0f2fe",
//         color: "#2563eb",
//         borderRadius: "50%",
//         width: 48,
//         height: 48,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: 28
//       }}>
//         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//           <circle cx="12" cy="8" r="4" stroke="#2563eb" strokeWidth="2" fill="none"/>
//           <path d="M4 20c0-3.333 2.667-6 8-6s8 2.667 8 6" stroke="#2563eb" strokeWidth="2" fill="none"/>
//         </svg>
//       </span>
//     </div>
//     <blockquote style={{
//       fontSize: "1.22rem",
//       color: "#374151",
//       fontStyle: "italic",
//       marginBottom: 24,
//       lineHeight: 1.5,
//       fontWeight: 400
//     }}>
//       “Partnering with Hired Billing Support gave us peace of mind. Our billing is cleaner, our staff works on patient care instead of paperwork, and we are now capturing more appointments than ever.”
//     </blockquote>
//     <hr style={{
//       border: "none",
//       borderTop: "1px solid #e5e7eb",
//       margin: "24px 0"
//     }} />
//     <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "1.05rem" }}>
//       Dr Ruth - Edwin DMD/MS
//     </div>
//     <div>
   
//     </div>
    
//   </div>
// </section>

//  <Secudal />
//     </>
//   );
// };

// export default MedicalBillingRCM;

import { useState, useLayoutEffect } from "react";
import billingBg1 from "../../assets/images/hero/Medical_Billing_RCM.webp";
import Secudal from "../../components/practicelaunch/secudal";

/* ─── Inline global styles injected once ─── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

  .mbr-root * { box-sizing: border-box; }

  .mbr-root {
    font-family: 'Inter', sans-serif;
  }

  /* ── Container ── */
  .mbr-container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ── Grid ── */
  .mbr-grid {
    display: grid;
    gap: 20px;
  }
  .mbr-grid-3 { grid-template-columns: repeat(3, 1fr); }
  .mbr-grid-4 { grid-template-columns: repeat(4, 1fr); }
  .mbr-grid-5 { grid-template-columns: repeat(5, 1fr); }

  @media (max-width: 1024px) {
    .mbr-grid-4,
    .mbr-grid-5 { grid-template-columns: repeat(2, 1fr); }
    .mbr-grid-3 { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .mbr-grid-3,
    .mbr-grid-4,
    .mbr-grid-5 { grid-template-columns: 1fr; }
    .mbr-container { padding: 0 16px; }
  }

  /* ── Section ── */
  .mbr-section { padding: 72px 0; }
  .mbr-section-sm { padding: 56px 0; }

  /* ── Headings ── */
  .mbr-section-label {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #2563eb;
    margin-bottom: 12px;
  }
  .mbr-heading {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.75px;
    color: #0a2540;
    margin: 0 0 14px 0;
  }
  .mbr-heading .grad-blue {
    background: linear-gradient(135deg, #2563eb 0%, #1d9bf0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .mbr-heading .grad-teal {
    background: linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .mbr-subheading {
    font-size: 1.05rem;
    color: #4b5563;
    line-height: 1.7;
    max-width: 680px;
    margin: 0 auto;
    font-weight: 400;
  }
  .mbr-section-header { text-align: center; margin-bottom: 44px; }

  /* ── Challenge Cards ── */
  .challenge-card {
    background: #fff;
    border-radius: 16px;
    border: 1.5px solid #e8edf3;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }
  .challenge-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(15, 63, 58, 0.10);
  }
  .challenge-card h3 {
    font-family: 'Sora', sans-serif;
    font-size: 1.02rem;
    font-weight: 800;
    color: #0a2540;
    margin: 0;
  }
  .challenge-card p {
    font-size: 0.95rem;
    color: #4b5563;
    margin: 0;
    line-height: 1.6;
  }
  .challenge-card .impact-badge {
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    color: #0369a1;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 0.88rem;
    font-weight: 500;
    margin-top: auto;
    line-height: 1.5;
  }

  /* ── Solution Cards ── */
  .solution-card {
    background: #fff;
    border-radius: 16px;
    border: 1.5px solid #e0e7ef;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }
  .solution-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.08);
  }
  .solution-card h3 {
    font-family: 'Sora', sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    color: #0a2540;
    margin: 0;
  }
  .solution-card p {
    font-size: 0.95rem;
    color: #4b5563;
    margin: 0;
    line-height: 1.6;
  }
  .solution-card ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .solution-card ul li {
    font-size: 0.93rem;
    color: #374151;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.5;
  }
  .solution-card ul li::before {
    content: '✓';
    color: #059669;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ── Feature Cards (blue) ── */
  .feature-card {
    background: linear-gradient(145deg, #2563eb 0%, #1d9bf0 100%);
    border-radius: 16px;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #fff;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }
  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(37, 99, 235, 0.28);
  }
  .feature-card .icon-wrap {
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.18);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .feature-card h3 {
    font-family: 'Sora', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0;
    color: #fff;
  }
  .feature-card p {
    font-size: 0.93rem;
    color: rgba(255,255,255,0.85);
    margin: 0;
    line-height: 1.6;
  }
  .feature-card ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .feature-card ul li {
    font-size: 0.91rem;
    color: rgba(255,255,255,0.9);
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.5;
  }
  .feature-card ul li::before {
    content: '✓';
    color: #86efac;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ── Icon circles ── */
  .icon-circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* ── Testimonial ── */
  .testimonial-card {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 28px rgba(0,0,0,0.07);
    border: 1px solid #e8edf3;
    padding: 44px 40px 36px;
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }
  .testimonial-card blockquote {
    font-size: 1.18rem;
    font-style: italic;
    color: #374151;
    line-height: 1.7;
    margin: 0 0 24px;
    font-weight: 400;
  }
  .testimonial-card .divider {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 24px 0;
  }
  .testimonial-card .author {
    font-family: 'Sora', sans-serif;
    font-weight: 800;
    font-size: 1rem;
    color: #0a2540;
  }

  /* ── Hero CTA ── */
  .hero-cta {
    display: inline-block;
    background: #0d9488;
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    font-size: 1.05rem;
    padding: 15px 40px;
    border-radius: 12px;
    text-decoration: none;
    letter-spacing: 0.3px;
    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 8px 24px rgba(13, 148, 136, 0.28);
  }
  .hero-cta:hover {
    background: #0f766e;
    transform: translateY(-2px);
    box-shadow: 0 14px 32px rgba(13, 148, 136, 0.35);
  }
`;

/* ─── Icon helper ─── */
const IcoBg = ({ bg, svg }) => (
  <span className="icon-circle" style={{ background: bg }}>
    {svg}
  </span>
);

/* ─── Challenge data ─── */
const challenges = [
  {
    bg: "#fee2e2",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#ef4444" strokeWidth="2" fill="none"/><path d="M8 8h8M8 12h8M8 16h4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "Claim Rejections & Delays",
    desc: "Incomplete or inaccurate claims result in rejections, payment delays, and lost revenue.",
    impact: "Cash flow is disrupted and AR days increase.",
  },
  {
    bg: "#fef9c3",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#d97706" strokeWidth="2" fill="none"/><path d="M9 9l6 6M15 9l-6 6" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "High Denial Rates",
    desc: "Recurring denials from payers due to coding, eligibility, or documentation errors drain revenue.",
    impact: "Denied claims require costly rework and often go unpaid.",
  },
  {
    bg: "#e0f2fe",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#2563eb" strokeWidth="2" fill="none"/><path d="M8 16h8M8 12h8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "Aging Accounts Receivable",
    desc: "Unresolved claims and slow follow-up cause AR to age, increasing bad debt risk.",
    impact: "Revenue is lost as claims pass timely filing limits.",
  },
  {
    bg: "#fce7f3",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="#db2777" strokeWidth="2" fill="none"/><path d="M9.5 13l2 2 3-4" stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Compliance & Regulatory Risk",
    desc: "Improper billing and documentation expose your practice to audits, recoupments, and penalties.",
    impact: "Non-compliance can result in severe financial loss.",
  },
  {
    bg: "#d1fae5",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#059669" strokeWidth="2" fill="none"/><path d="M9 15l3-3 3 3" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><path d="M12 16V8" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "Revenue Leakage",
    desc: "Missed charges, underbilling, and lack of follow-up mean revenue is left on the table.",
    impact: "Practices lose up to 20% of revenue from preventable errors.",
  },
  {
    bg: "#fef9c3",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 4L2 20h20L12 4z" stroke="#d97706" strokeWidth="2" fill="none"/><circle cx="12" cy="16" r="1" fill="#d97706"/><rect x="11" y="10" width="2" height="4" rx="1" fill="#d97706"/></svg>,
    title: "Complex Documentation",
    desc: "Each payer requires unique forms, supporting documents, and verification methods creating administrative complexity.",
    impact: "Incomplete applications get rejected, extending timelines by months.",
  },
  {
    bg: "#fee2e2",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" fill="none"/><path d="M12 8v8M9.5 10.5C9.5 9.12 10.62 8 12 8s2.5 1.12 2.5 2.5S13.38 13 12 13s-2.5 1.12-2.5 2.5S10.62 18 12 18s2.5-1.12 2.5-2.5" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "Re-Credentialing Lapses",
    desc: "Missed re-credentialing deadlines cause provider enrollment to lapse, halting all claim payments.",
    impact: "Complete payment stoppage until re-credentialing is completed.",
  },
  {
    bg: "#ede9fe",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#7c3aed" strokeWidth="2" fill="none"/><rect x="8" y="8" width="8" height="2" rx="1" fill="#7c3aed"/><rect x="8" y="12" width="5" height="2" rx="1" fill="#7c3aed"/></svg>,
    title: "CAQH Profile Maintenance",
    desc: "Keeping CAQH profiles current with licenses, certifications, and practice information requires constant monitoring.",
    impact: "Outdated CAQH data delays all payer credentialing processes.",
  },
  {
    bg: "#fef9c3",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="3" stroke="#d97706" strokeWidth="2" fill="none"/><path d="M16 3v4M8 3v4" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/><path d="M3 9h18" stroke="#d97706" strokeWidth="2"/></svg>,
    title: "Missed Enrollment Deadlines",
    desc: "Missing payer or revalidation deadlines can result in network termination and loss of billing privileges.",
    impact: "Risk of being out-of-network and losing patient revenue.",
  },
  {
    bg: "#e0f2fe",
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" stroke="#2563eb" strokeWidth="2" fill="none"/><path d="M9.5 13l2 2 3-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Compliance & Regulatory Risks",
    desc: "Failure to maintain up-to-date credentials and documentation can lead to compliance violations and payer audits.",
    impact: "Potential fines, penalties, and audit exposure.",
  },
];

/* ─── Feature cards data ─── */
const features = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="none"/><rect x="8" y="8" width="8" height="2" rx="1" fill="#fff"/><rect x="8" y="12" width="5" height="2" rx="1" fill="#fff"/></svg>,
    title: "Initial Credentialing",
    desc: "Complete credentialing application preparation and submission for new providers joining your practice.",
    items: ["Application completion", "Document gathering", "Primary source verification", "Payer submission and follow-up"],
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 1 8 8" stroke="#fff" strokeWidth="2" fill="none"/><path d="M4 4v5h5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "CAQH Profile Setup",
    desc: "Comprehensive CAQH database profile creation and ongoing maintenance for all participating providers.",
    items: ["Profile creation", "Document upload", "Quarterly attestation", "Update management"],
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="none"/><path d="M16 3v4M8 3v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M3 9h18" stroke="#fff" strokeWidth="2"/></svg>,
    title: "Re-Credentialing Services",
    desc: "Proactive monitoring and automated reminders for all re-credentialing requirements and renewals.",
    items: ["Deadline tracking", "Renewal initiation", "Continuous attestation", "Status updates"],
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill="none"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "Network Expansion",
    desc: "Strategic enrollment with additional payer networks to expand your market and increase patient access.",
    items: ["Network applications", "Contract negotiation support", "Multi-payer coordination", "Specialty networks"],
  },
];

/* ═══════════════════════════════════════════════════════════ */
const MedicalBillingRCM = () => {
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

  return (
    <>
      {/* ── Inject styles ── */}
      <style>{GLOBAL_CSS}</style>

      <div className="mbr-root">
        {/* ════════════════════════ HERO ════════════════════════ */}
        <section
          style={{
            backgroundImage: `linear-gradient(to right, rgba(4,26,55,0.88) 55%, rgba(4,26,55,0.45) 100%), url(${billingBg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingTop: headerPad + 20,
            paddingBottom: 80,
            color: "#fff",
            position: "relative",
          }}
        >
          <div className="mbr-container">
            <div style={{ maxWidth: 640 }}>
              <span className="mbr-section-label" style={{ color: "#2dd4bf" }}>
                Revenue Cycle Management
              </span>
              <h1
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 2.85rem)",
                  fontWeight: 900,
                  lineHeight: 1.12,
                  marginBottom: 18,
                  color: "#fff",
                  letterSpacing: "-1.5px",
                }}
              >
                Medical Billing &amp; Revenue Cycle Management
              </h1>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: 18,
                  color: "#93c5fd",
                  letterSpacing: "-0.3px",
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                Maximize Collections. Minimize Denials. Optimize Your Revenue Cycle.
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  marginBottom: 36,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                Our medical billing &amp; RCM experts handle every step of your revenue cycle—from claim creation to payment posting and denial management. We accelerate cash flow, reduce AR days, and ensure you collect every dollar you've earned.
              </p>
              <a href="/contact" className="hero-cta">
                Get a Free Billing Assessment
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════ CHALLENGES ════════════════════════ */}
        <section className="mbr-section" style={{ background: "#f8fafc" }}>
          <div className="mbr-container">
            <div className="mbr-section-header">
              <span className="mbr-section-label">Common Pain Points</span>
              <h2 className="mbr-heading">
                <span className="grad-blue">Medical Billing &amp; RCM&nbsp;</span>
                <span className="grad-teal">Challenges</span>
              </h2>
              <p className="mbr-subheading">
                Inefficient billing processes, high denial rates, and poor AR follow-up cost practices millions every year. Our RCM team fixes the root causes and recovers your lost revenue.
              </p>
            </div>

            <div className="mbr-grid mbr-grid-5">
              {challenges.map((item, idx) => (
                <div key={idx} className="challenge-card">
                  <IcoBg bg={item.bg} svg={item.svg} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="impact-badge">
                    <strong>Impact:</strong> {item.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════ SOLUTIONS ════════════════════════ */}
        <section className="mbr-section" style={{ background: "#fff" }}>
          <div className="mbr-container">
            <div className="mbr-section-header">
              <span className="mbr-section-label">What We Do</span>
              <h2 className="mbr-heading">
                <span className="grad-blue">Our Medical Billing &amp; RCM&nbsp;</span>
                <span className="grad-teal">Solutions</span>
              </h2>
              <p className="mbr-subheading">
                We deliver end-to-end billing and RCM services that drive accuracy, compliance, and revenue for your practice—no matter your specialty or size.
              </p>
            </div>

            <div className="mbr-grid mbr-grid-3">
              {/* Card 1 */}
              <div className="solution-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span className="icon-circle" style={{ background: "#dbeafe" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#2563eb" strokeWidth="2" fill="none"/><path d="M8 8h8M8 12h8M8 16h4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                  <h3>Claim Creation &amp; Submission</h3>
                </div>
                <p>Accurate, timely claim generation and electronic submission to all major payers.</p>
                <ul>
                  <li>Charge entry &amp; coding review</li>
                  <li>Eligibility &amp; benefits verification</li>
                  <li>Electronic &amp; paper claim submission</li>
                  <li>Real-time claim tracking</li>
                </ul>
              </div>
              {/* Card 2 */}
              <div className="solution-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span className="icon-circle" style={{ background: "#d1fae5" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#059669" strokeWidth="2" fill="none"/><path d="M8 12h8M12 8v8" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                  <h3>Payment Posting &amp; Reconciliation</h3>
                </div>
                <p>Automated payment posting, ERA/EOB reconciliation, and patient balance management.</p>
                <ul>
                  <li>ERA/EOB processing</li>
                  <li>Patient statement generation</li>
                  <li>Payment plan setup</li>
                  <li>Refund &amp; adjustment management</li>
                </ul>
              </div>
              {/* Card 3 */}
              <div className="solution-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span className="icon-circle" style={{ background: "#fce7f3" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#db2777" strokeWidth="2" fill="none"/><path d="M9 9l6 6M15 9l-6 6" stroke="#db2777" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                  <h3>Denial Management &amp; AR Follow-Up</h3>
                </div>
                <p>Expert denial analysis, appeals, and aggressive AR follow-up to recover every dollar.</p>
                <ul>
                  <li>Denial root cause analysis</li>
                  <li>Custom appeals &amp; resubmissions</li>
                  <li>Insurance &amp; patient AR follow-up</li>
                  <li>Bad debt minimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ FEATURES ════════════════════════ */}
        <section className="mbr-section" style={{ background: "#f0f7ff" }}>
          <div className="mbr-container">
            <div className="mbr-section-header">
              <span className="mbr-section-label">Service Features</span>
              <h2 className="mbr-heading">
                <span className="grad-blue">Comprehensive Service&nbsp;</span>
                <span className="grad-teal">Features</span>
              </h2>
              <p className="mbr-subheading">
                Every component managed with precision and expertise.
              </p>
            </div>

            <div className="mbr-grid mbr-grid-4">
              {features.map((f, i) => (
                <div key={i} className="feature-card">
                  <div className="icon-wrap">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <ul>
                    {f.items.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════ TESTIMONIAL ════════════════════════ */}
        <section className="mbr-section-sm" style={{ background: "#fff" }}>
          <div className="mbr-container">
            <div className="testimonial-card">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  background: "#dbeafe",
                  borderRadius: "50%",
                  marginBottom: 20,
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#2563eb" strokeWidth="2" fill="none"/>
                  <path d="M4 20c0-3.333 2.667-6 8-6s8 2.667 8 6" stroke="#2563eb" strokeWidth="2" fill="none"/>
                </svg>
              </span>
              <blockquote>
                "Partnering with Hired Billing Support gave us peace of mind. Our billing is cleaner, our staff works on patient care instead of paperwork, and we are now capturing more appointments than ever."
              </blockquote>
              <hr className="divider" />
              <div className="author">Dr Ruth – Edwin DMD/MS</div>
            </div>
          </div>
        </section>

        <Secudal />
      </div>
    </>
  );
};

export default MedicalBillingRCM;