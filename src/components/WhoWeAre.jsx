import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AboutMain from "../assets/images/avatar/AboutMain.png";

const WhoWeAre = () => {
  return (
    <section
      className="bg-white"
      style={{
        paddingTop: "180px", // ✅ ensures space below header (adjust as needed)
        paddingBottom: "80px",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* LEFT COLUMN - IMAGE */}
          <Col md={6} className="position-relative mb-5 mb-md-0 text-center text-md-start">
            <img
              src={AboutMain}
              alt="Medical Staff"
              className="rounded-4 img-fluid"
              style={{
                maxWidth: "420px",
                height: "420px",
                objectFit: "cover",
              }}
            />

            {/* INFO CARD */}
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

          {/* RIGHT COLUMN - TEXT CONTENT */}
          <Col md={6}>
            <h2
              className="fw-bold mb-3"
              style={{
                color: "#0e1b50",
                fontSize: "2rem",
                lineHeight: "1.3",
              }}
            >
              Who We Are
            </h2>

            <div
              className="mb-4"
              style={{
                width: "70px",
                height: "3px",
                backgroundColor: "#00b4d8",
              }}
            ></div>

            <p className="text-muted lh-lg mb-3" style={{ fontSize: "1rem" }}>
              Hence the human touch is important to gain intimate understanding
              of your unique challenges and needs as an IT professional that
              healthcare IT solutions should help navigate through innovations.
              With a legacy starting in 2020 of being a leading Complete Revenue
              Cycle Management (RCM) Solution provider in the USA. Over 1000
              skilled billers and coders of RCM are trained on the latest
              technology and have the objective to empower Hospitals, group
              practices, and solo practitioners by means of customized RCM
              strategy. This hand-tailored approach helps your best medical
              billing business make timely collections, which leads to a
              powerful practice culture as your healthcare provider transforms
              into revenue cycle #1.
            </p>

            <p className="text-muted lh-lg mb-0" style={{ fontSize: "1rem" }}>
              But on the other side, every medical practice is dissimilar from
              one another, thus keeping a customizable solution at the exact
              pricing is the key for better productivity & workflow
              optimization. And this is why, for many independent medical
              organizations, HBS is a perfect and natural fit.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhoWeAre;
