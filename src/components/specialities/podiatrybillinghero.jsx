
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import bannerImage from "../../assets/images/hero/Podiatry-banner.jpg"; // ✅ Import local image

// const HeroSection = () => {
//   return (
//     <section
//       className="hero-section text-dark d-flex align-items-center position-relative"
//       style={{
//         backgroundImage: `url(${bannerImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center right",
//         minHeight: "70vh",
//         paddingTop: "60px",
//         paddingBottom: "60px",
//       }}
//       id="hero"
//     >
//       {/* Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//         }}
//       ></div>

//       {/* Content */}
//       <div className="container position-relative" style={{ zIndex: 2 }}>
//         <div className="hero-content py-5">
//           {/* Heading */}
//           <h2
//             className="fw-bold"
//             style={{
//               fontSize: "2.5rem",
//               color: "#112D55",
//               lineHeight: "1.3",
//               textShadow: "0 1px 2px rgba(0,0,0,0.1)",
//             }}
//           >
//             Optimize Podiatry Practice
//           </h2>

//           {/* Subheading */}
//           <h1
//             className="fw-bold mb-4"
//             style={{
//               color: "#00A651",
//               fontSize: "2rem",
//               lineHeight: "1.3",
//             }}
//           >
//             Collections with Effective Billing
//           </h1>

//           {/* Description */}
//           <p
//             style={{
//               color: "#444",
//               maxWidth: "700px",
//               fontSize: "1.05rem",
//               marginBottom: "1rem",
//             }}
//           >
//             In the dynamic landscape of healthcare, efficient billing processes are
//             essential for specialized fields like podiatry. Our podiatry billing
//             services ensure your financial operations are smooth, accurate, and fully
//             compliant.
//           </p>

//           <p
//             style={{
//               color: "#444",
//               maxWidth: "700px",
//               fontSize: "1.05rem",
//               marginBottom: "1rem",
//             }}
//           >
//             Podiatry billing requires expertise in coding, compliance, and transparent
//             financial management — and that’s exactly what we deliver.
//           </p>

//           <ul
//             className="list-unstyled mb-4"
//             style={{
//               color: "#444",
//               maxWidth: "700px",
//             }}
//           >
//             <li>• Specific Coding Expertise</li>
//             <li>• Stay Compliant</li>
//             <li>• Transparent Financial Policies</li>
//           </ul>

//           {/* Button */}
//           <a
//             href="/pricing/"
//             className="btn btn-lg px-5 shadow"
//             style={{
//               background: "linear-gradient(90deg, #00AEEF, #0072BC)",
//               color: "#fff",
//               border: "none",
//               borderRadius: "50px",
//               fontWeight: "600",
//               letterSpacing: "0.5px",
//               padding: "12px 36px",
//               transition: "all 0.3s ease-in-out",
//             }}
//             onMouseEnter={(e) =>
//               (e.target.style.background =
//                 "linear-gradient(90deg, #0072BC, #005B9F)")
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.background =
//                 "linear-gradient(90deg, #00AEEF, #0072BC)")
//             }
//           >
//             <i className="fas fa-desktop me-2"></i> SCHEDULE DEMO
//           </a>
//         </div>
//       </div>

//       {/* Responsive & Animation Styles */}
//       <style>
//         {`
//           @keyframes fadeInUp {
//             from { opacity: 0; transform: translate3d(0, 40px, 0); }
//             to { opacity: 1; transform: none; }
//           }

//           .hero-content {
//             animation: fadeInUp 1s ease-in-out;
//           }

//           @media (max-width: 992px) {
//             .hero-section {
//               height: auto !important;
//               padding: 80px 0;
//               text-align: center;
//             }
//             .hero-content h2 {
//               font-size: 2rem;
//             }
//             .hero-content h1 {
//               font-size: 1.6rem;
//             }
//             .hero-content ul {
//               font-size: 1rem;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default HeroSection;
import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/hero/banner/Podiatry-banner.jpg";

const PodiatryBillingHero = () => {
  return (
    <section
      className="hero-section d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "75vh",
        paddingTop: "80px",
        paddingBottom: "80px",
        color: "#fff",
      }}
    >
      <div className="container position-relative z-3">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-10 col-12">
            <div className="pe-lg-4">

              <div className="mb-3">
                <small
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                  }}
                >
                  Starting From $10/Hr
                </small>
              </div>

              {/* Heading */}
              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "42px",
                  lineHeight: "1.2",
                  color: "#fff",
                }}
              >
                Hire Remote Podiatry Billing Experts with HBS
              </h1>

              {/* Short Paragraph */}
              <p
                className="lead mb-4"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  maxWidth: "650px",
                }}
              >
                Accurate billing for foot care, wound treatment, and podiatry procedures. Boost clean claims and get faster payments with remote specialists.
              </p>

              <Link
                to="/contact"
                className="btn btn-lg"
                style={{
                  background: "#fff",
                  borderRadius: "30px",
                  padding: "12px 35px",
                  fontWeight: "600",
                  color: "#00A651",
                  border: "none",
                }}
              >
                Book a Consult →
              </Link>

            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 992px) {
            .hero-section {
              min-height: 65vh;
              padding-top: 60px;
              padding-bottom: 60px;
              text-align: center;
            }
            .hero-section h1 {
              font-size: 32px !important;
            }
            .hero-section p {
              font-size: 16px !important;
            }
          }

          @media (max-width: 576px) {
            .hero-section {
              padding-top: 40px;
              padding-bottom: 40px;
            }
            .hero-section h1 {
              font-size: 26px !important;
            }
            .hero-section p {
              font-size: 15px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default PodiatryBillingHero;
