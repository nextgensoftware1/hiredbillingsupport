import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


const testimonials = [
  {
    heading: "Our Clients Are Making Healthcare Better",
    text: `Since using CureMD’s Virtual Front Desk, we've
            reduced costs, improved efficiency, and our
            patients are noticeably happier.`,
    name: "Brad Womble",
    company: "Test Smarter Inc.",
  },
  {
    heading: "We’ve Seen Amazing Improvements",
    text: `CureMD’s cardiology billing solutions have streamlined
            our workflow and significantly reduced claim denials.`,
    name: "Dr. Amanda Lee",
    company: "HeartCare Clinics",
  },
  {
    heading: "A Game Changer for Our Practice",
    text: `Their AI-driven billing has boosted our revenue and 
            saved countless hours of admin work.`,
    name: "Michael Traynor",
    company: "CardioPlus Health",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const arrowButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#5CBDAA",
    border: "none",
    width: "50px",
    height: "50px",
    minWidth: "50px",
    minHeight: "50px",
    padding: "0",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    color: "#ffffff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(92, 189, 170, 0.25)",
  };

  return (
    <section style={{ padding: "70px 0", marginTop: "60px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div
              style={{
                background: "#f5f7fb",
                padding: "60px 30px",
                borderRadius: "40px",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* LEFT ARROW */}
              <Button
                onClick={prev}
                style={{...arrowButtonStyle, left: "30px"}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#54A1D9";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.12)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(84, 161, 217, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#5CBDAA";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(92, 189, 170, 0.25)";
                }}
              >
                ‹
              </Button>

              {/* CONTENT */}
              <h4 className="fw-bold mb-4">{testimonials[index].heading}</h4>

              <p style={{ fontSize: "17px", lineHeight: "1.7", maxWidth: "600px", margin: "0 auto" }}>
                {testimonials[index].text}
              </p>

              <div className="mt-4">
                <strong>{testimonials[index].name}</strong>
                <br />
                <span style={{ color: "#555" }}>{testimonials[index].company}</span>
              </div>

              {/* RIGHT ARROW */}
              <Button
                onClick={next}
                style={{...arrowButtonStyle, right: "30px"}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#54A1D9";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.12)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(84, 161, 217, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#5CBDAA";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(92, 189, 170, 0.25)";
                }}
              >
                ›
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;
