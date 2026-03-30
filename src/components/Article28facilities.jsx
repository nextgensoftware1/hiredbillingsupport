import "@fortawesome/fontawesome-free/css/all.min.css";
import bannerImage from "../assets/images/backgrounds/article-banner.jpg"; // ✅ Updated banner image

const ArticleFacilities = () => {
  return (
    <section
      className="hero-section text-dark d-flex align-items-center position-relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        height: "100vh",
        paddingTop: "140px", // ✅ Add top space to avoid header overlap
        paddingBottom: "80px", // ✅ Balanced bottom padding
      }}
      id="hero"
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="hero-content py-5">
          {/* Heading */}
          <h2
            className="fw-bold"
            style={{
              fontSize: "2.5rem",
              color: "#112D55",
              lineHeight: "1.3",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Article 28
          </h2>
          <h2>Facilities</h2>

        
        </div>
      </div>

      {/* Responsive & Animation Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translate3d(0, 40px, 0); }
            to { opacity: 1; transform: none; }
          }

          .hero-content {
            animation: fadeInUp 1s ease-in-out;
          }

          @media (max-width: 992px) {
            .hero-section {
              height: auto !important;
              padding: 80px 0;
              text-align: center;
            }
            .hero-content h2 {
              font-size: 2rem;
            }
            .hero-content h1 {
              font-size: 1.6rem;
            }
            .hero-content p,
            .hero-content ul {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ArticleFacilities;
