import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
// import quoteImg from "../assets/images/avatar/billing-coordinator.png"; 
import testi1 from "../assets/images/avatar/billing-coordinator.png"; 
import testi2 from "../assets/images/avatar/billing-specialist.png"; 
import bgPattern from "../assets/images/backgrounds/bg-pattern.jpg"; 
const TestimonialsSection = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#f7f9fc",
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-center">
        {/* Heading */}
        <h2 className="fw-bold text-dark mb-2">
          Empowering Healthcare Organizations To Thrive
        </h2>
        <p className="text-muted mb-5">
          Our Success is echoed in the Satisfaction of Our Providers
        </p>

        {/* Testimonials Row */}
        <div className="row g-4 justify-content-center">
          {/* Testimonial 1 */}
          <div className="col-md-6 col-lg-5">
            <div
              className="bg-white shadow rounded-4 p-4 h-100 text-start position-relative"
              style={{ borderRadius: "15px" }}
            >
              {/* Stars */}
              <div className="mb-3 text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>

              {/* Text */}
              <p className="text-muted fst-italic">
                "HBS has helped us save countless hours while significantly
                improving our bottom line. The team is friendly, professional,
                and always available to assist with any questions we have."
              </p>

              {/* Quote Image */}
              {/* <img
                src={quoteImg}
                alt="quote"
                className="position-absolute"
                style={{ bottom: "20px", right: "25px", width: "25px" }}
              /> */}

              {/* Profile */}
              <div className="d-flex align-items-center mt-4">
                <img
                  src={testi1}
                  alt="Dr. John"
                  className="rounded-circle me-3"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-0 fw-bold text-dark">Dr. John</h6>
                  <small className="text-muted">Covey Medical Labs</small>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-6 col-lg-5">
            <div
              className="bg-white shadow rounded-4 p-4 h-100 text-start position-relative"
              style={{ borderRadius: "15px" }}
            >
              {/* Stars */}
              <div className="mb-3 text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Text */}
              <p className="text-muted fst-italic">
                "HBS has helped us save time and improve the accuracy of our
                billing coordination. Highly recommended for any lab!"
              </p>

              {/* Quote Image */}
              {/* <img
                src={quoteImg}
                alt="quote"
                className="position-absolute"
                style={{ bottom: "20px", right: "25px", width: "25px" }}
              /> */}

              {/* Profile */}
              <div className="d-flex align-items-center mt-4">
                <img
                  src={testi2}
                  alt="Dr. Sara"
                  className="rounded-circle me-3"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-0 fw-bold text-dark">Dr. Sara</h6>
                  <small className="text-muted">Laboratory Manager</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
