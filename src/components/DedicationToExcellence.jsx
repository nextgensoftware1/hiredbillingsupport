import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AboutMain2 from "../assets/images/avatar/AboutMain2.png"; // main image
// import AboutSmall2 from "../assets/AboutSmall2.png"; // top-left small image

const DedicationToExcellence = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Images */}
        

          {/* Right Column - Text */}
          <Col md={6}>
            <h2
              className="fw-bold mb-3"
              style={{ color: "#0e1b50", fontSize: "1.8rem" }}
            >
              Our Dedication to Excellence
            </h2>
            <p className="text-muted lh-lg">
              Tax Rachana, HBSAs HBSAdministrators at HBS, we offer you
              best-in-class healthcare IT solutions that can seamlessly integrate
              into your existing processes and help optimize a cost-effective
              revenue cycle. With RPA BOTs for claim submissions we achieved
              99% accuracy and a drastic reduction in errors. Accounts
              receivables are recovered fast in 24 days, Further since FGMC use
              a competitive purchase process insurance pays quickly at 26 days.
              We more than double the revenue collection for our client as we
              provide quick and seamless collection process.
            </p>
          </Col>

            <Col md={6} className="position-relative mb-5 mb-md-0">
            {/* Small Image */}
            {/* <img
              src={AboutSmall2}
              alt="Doctor Team Small"
              className="position-absolute rounded-4 shadow-sm"
              style={{
                top: "-30px",
                left: "-30px",
                width: "140px",
                height: "140px",
                objectFit: "cover",
                zIndex: 2,
              }}
            /> */}

            {/* Main Image */}
            <img
              src={AboutMain2}
              alt="Doctor Team"
              className="rounded-4 shadow w-100"
              style={{
                maxWidth: "420px",
                height: "420px",
                objectFit: "cover",
              }}
            />

            {/* HBS Card Overlay */}
            <Card
              className="position-absolute shadow border-0 text-center"
              style={{
                bottom: "20px",
                right: "20px",
                width: "230px",
                borderRadius: "20px",
              }}
            >
              <Card.Body>
                <h5 className="fw-bold mb-1 text-dark">HBS</h5>
                <p className="text-muted small mb-2">Hired Billing Support</p>
                <div className="text-success mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star me-1"></i>
                  ))}
                </div>
                <a
                  href="tel:+18884134490"
                  className="text-decoration-none text-success fw-semibold"
                >
                  <i className="fa-solid fa-phone me-2"></i> +1-321-321-1740
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DedicationToExcellence;
