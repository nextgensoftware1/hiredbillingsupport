import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const InsuranceOpsSolutions = () => {
  return (
    <section style={{ backgroundColor: "#fff", padding: "80px 0" }}>
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h4
            className="fw-bold"
            style={{
              color: "#0b1641",
              fontSize: "1.75rem",
            }}
          >
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Comprehensive Insurance Ops
            </span>

            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              &nbsp;Solutions
            </span>
          </h4>
        </div>

        {/* Three Columns */}
        <Row className="text-center g-4 justify-content-center mb-5">
          <Col md={4}>
            <div className="px-3">
              <h5
                className="fw-bold mb-2"
                style={{ color: "#0b1641", fontSize: "1.1rem" }}
              >
                Eligibility & Benefits Verification
              </h5>
              <p className="text-muted" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                Validate coverage in real time—copays, deductibles, frequency
                limits, and COB—and post clear patient-responsibility notes to
                the chart before the visit.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="px-3">
              <h5
                className="fw-bold mb-2"
                style={{ color: "#0b1641", fontSize: "1.1rem" }}
              >
                Denial Management
              </h5>
              <p className="text-muted" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                Read remits, find root causes, correct and resubmit, and file
                timely appeals with supporting documentation—so preventable
                write-offs don’t slip through.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="px-3">
              <h5
                className="fw-bold mb-2"
                style={{ color: "#0b1641", fontSize: "1.1rem" }}
              >
                Claims Follow-Up & A/R Management
              </h5>
              <p className="text-muted" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                Systematic payer calls/portals to clear holds and edits,
                document every touch, escalate when needed, and reduce days in
                A/R with daily activity logs.
              </p>
            </div>
          </Col>
        </Row>

        {/* Button */}
        <div className="text-center">
          <Button
            href="/pricing"
            style={{
              background: "linear-gradient(90deg, #00c26f 0%, #00b8e6 100%)",
              border: "none",
              borderRadius: "50px",
              padding: "12px 40px",
              fontWeight: "600",
              fontSize: "1rem",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
            }}
          >
            PRICING FROM $10/HR
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default InsuranceOpsSolutions;
