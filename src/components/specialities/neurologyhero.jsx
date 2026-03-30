
import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/hero/banner/neurology-banner.jpg";

const NeurologyBillingHero = () => {
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
                Hire Remote Neurology Billing Experts with HBS
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
                Get trained neurology billers, coders, and AR specialists.
                Reduce costs, speed up payments, and improve billing accuracy
                with trusted remote staffing.
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

export default NeurologyBillingHero;
