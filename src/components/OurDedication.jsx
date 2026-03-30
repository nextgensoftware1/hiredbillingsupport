

import { Container, Row, Col, Card } from "react-bootstrap";
import AboutMain from "../assets/images/avatar/AboutMain3.png"; // main image

const OurDedication = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Image with Info Card */}
          <Col md={6} className="position-relative mb-5 mb-md-0">
            <img
              src={AboutMain}
              alt="Medical Staff"
              className="rounded-4 w-100"
              style={{
                maxWidth: "420px",
                height: "420px",
                objectFit: "cover",
              }}
            />

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
                  href="tel:+13213211740"
                  className="text-decoration-none text-success fw-semibold"
                >
                  <i className="fa-solid fa-phone me-2"></i> +1-321-321-1740
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column - Updated Text */}
          <Col md={6}>
            <h2 className="fw-bold text-dark mb-3" style={{ color: "#0e1b50" }}>
              Our Dedication to Excellence
            </h2>
            <div
              className="mb-4"
              style={{
                width: "70px",
                height: "3px",
                backgroundColor: "#00b4d8",
              }}
            ></div>
            <p className="text-muted lh-lg">
              As <strong>HBS Administrators</strong> at <strong>HBS</strong>, we
              offer you best-in-class healthcare IT solutions that seamlessly
              integrate into your existing processes and help optimize a
              cost-effective revenue cycle. With <strong>RPA BOTs</strong> for
              claim submissions, we’ve achieved <strong>99% accuracy</strong>{" "}
              and a drastic reduction in errors.
            </p>
            <p className="text-muted lh-lg">
              Our <strong>Accounts Receivables</strong> are recovered fast — in
              just <strong>24 days</strong>. Furthermore, since FGMC uses a
              competitive purchase process, insurance pays quickly — within{" "}
              <strong>26 days</strong>. We more than double the revenue
              collection for our clients as we provide a{" "}
              <strong>quick and seamless collection process</strong> that drives
              consistent growth and financial efficiency.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurDedication;
