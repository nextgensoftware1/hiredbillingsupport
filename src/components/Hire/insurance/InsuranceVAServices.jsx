import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const InsuranceVAServices = () => {
  return (
    <>
      {/* Top Blue Header Section */}
      <section style={{ backgroundColor: "#54A1D8", color: "white", padding: "60px 0" }}>
        <Container className="text-center">
          <h5 className="fw-bold mb-2">
            Enhance Operational Efficiency with Insurance VAs
          </h5>
          <div
            className="mx-auto my-3"
            style={{
              width: "80px",
              borderTop: "2px solid white",
            }}
          ></div>
          <p className="mb-0 fs-6">
            Leverage dedicated Insurance VAs to reduce denials, speed approvals, and keep
            reimbursements moving. <strong>Starts at $10/Hr.</strong>
          </p>
        </Container>
      </section>

      {/* Main Content Section */}
      <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <Container>
          <Row className="align-items-start g-5">
            {/* Left Side: Benefits Text */}
            <Col md={7}>
              <h6 className="fw-bold mb-3">
                Benefits of Choosing HBS’s Insurance VA Service
              </h6>
              <p className="text-muted">
                Our trained Insurance Virtual Assistants plug into your EHR/billing tools
                and follow your SOPs. We front-load accuracy—eligibility, COB, and
                pre-auths—and back-stop payers with disciplined follow-ups and appeals,
                so your team stays focused on patient care.
              </p>

              <ul
                className="text-muted"
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  lineHeight: "1.8",
                  marginTop: "20px",
                }}
              >
                <li>Verify eligibility & benefits (copays, deductibles, limits) and log to chart pre-visit.</li>
                <li>Prepare and submit prior authorizations with complete clinicals; track to decision.</li>
                <li>Perform claim status checks at scale via portals and phone; document every touch.</li>
                <li>Triage denials & appeals with root-cause fixes and timely refiles.</li>
                <li>Support ERA/EOB posting and reconciliation with clean notes for A/R.</li>
                <li>Deliver daily production & accuracy reports with clear KPIs.</li>
                <li>HIPAA-aligned workflows; BAAs signed with every engagement.</li>
                <li>Flexible coverage (part- or full-time), scale up/down as volumes change.</li>
              </ul>
            </Col>

            {/* Right Side: Contact Form */}
            <Col md={5}>
              <div
                className="bg-white shadow p-5 rounded-4"
                style={{
                  border: "1px solid #f1f1f1",
                }}
              >
                <h4 className="text-center fw-bold mb-4 text-primary">
                  Get A Free Insurance Ops Audit
                </h4>

                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      style={{
                        borderRadius: "50px",
                        padding: "12px 18px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        borderRadius: "50px",
                        padding: "12px 18px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter subject"
                      style={{
                        borderRadius: "50px",
                        padding: "12px 18px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Your Message (optional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message"
                      style={{
                        borderRadius: "20px",
                        padding: "12px 18px",
                        resize: "none",
                      }}
                    />
                  </Form.Group>

                  <div className="text-center mt-4">
                    <Button
                      variant="primary"
                      size="lg"
                      style={{
                        borderRadius: "50px",
                        padding: "12px 40px",
                        fontWeight: "600",
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InsuranceVAServices;
