import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <section
      className="bg-white"
      style={{
        paddingTop: "180px", // ✅ Adjusted for fixed header
        paddingBottom: "100px",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div
              className="p-5 shadow-lg rounded-4"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e8e8e8",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h2
                className="fw-bold text-center mb-3"
                style={{
                  color: "#0b155b",
                  fontSize: "2rem",
                  letterSpacing: "0.5px",
                }}
              >
                Get In Touch
              </h2>

              <p
                className="text-center text-muted mb-5"
                style={{ fontSize: "1rem" }}
              >
                Have a question or need help? Fill out the form below and our
                HBS team will get back to you shortly.
              </p>

              <Form>
                {/* Name */}
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="rounded-pill px-4 py-3 border-success shadow-sm"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #00b14f",
                      fontSize: "1rem",
                    }}
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="rounded-pill px-4 py-3 border-success shadow-sm"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #00b14f",
                      fontSize: "1rem",
                    }}
                  />
                </Form.Group>

                {/* Subject */}
                <Form.Group className="mb-4" controlId="formSubject">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    className="rounded-pill px-4 py-3 border-success shadow-sm"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #00b14f",
                      fontSize: "1rem",
                    }}
                  />
                </Form.Group>

                {/* Message */}
                <Form.Group className="mb-5" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    className="rounded-4 px-4 py-3 border-success shadow-sm"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #00b14f",
                      resize: "none",
                      fontSize: "1rem",
                    }}
                  />
                </Form.Group>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="w-100 text-white fw-semibold rounded-pill py-3 shadow-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)",
                      border: "none",
                      fontSize: "1rem",
                      letterSpacing: "0.5px",
                      boxShadow: "0 4px 12px rgba(0, 177, 79, 0.3)",
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
