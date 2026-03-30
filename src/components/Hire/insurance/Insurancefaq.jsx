import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Insurancefaq = () => {
  const [activeTab, setActiveTab] = useState("eligibility");

  const tabs = [
    {
      id: "eligibility",
      title: "Eligibility & Benefits Verification",
      color: "#00c26f",
      content: [
        "Make visits bill-ready before patients arrive. (From $10/Hr)",
        "Verify coverage, copays, deductibles, visit limits, and COB",
        "Document patient responsibility and notes directly in the chart",
        "Flag frequency/exclusions and missing data for front desk",
        "Snapshot benefits for future visits and audits",
      ],
    },
    {
      id: "authorizations",
      title: "Prior Authorizations",
      color: "#0b5ed7",
      content: [
        "Submit complete PAs and track them to approval.",
        "Gather clinicals, images, and forms per payer policy",
        "Submit PAs, monitor timelines and expirations",
        "Proactive follow-ups via portals/calls/fax, escalate as needed",
        "Log every touch with status and next action in your EHR/PM",
      ],
    },
    {
      id: "claims",
      title: "Claims Follow-Up (Status & A/R)",
      color: "#0b5ed7",
      content: [
        "Keep claims moving from “pending” to “paid.”",
        "High-volume status checks with audit-ready notes",
        "Clear holds/edits (eligibility, COB, attachment or data errors)",
        "Coordinate refile/corrections with your billing team",
        "Daily activity summary and aging snapshots",
      ],
    },
    {
      id: "denials",
      title: "Denials & Appeals Support",
      color: "#0b5ed7",
      content: [
        "Fix root causes and recover revenue faster.",
        "Read remits, map denial codes to payer playbooks",
        "Correct data/coding and resubmit within timelines",
        "Prepare and file timely appeals with supporting evidence",
        "Track outcomes and surface recurring issues to prevent repeats",
      ],
    },
  ];

  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <section
      style={{
        backgroundColor: "#f7f8fc",
        padding: "80px 0",
      }}
    >
      <Container>
        {/* Title */}
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
              Comprehensive Insurance VA
            </span>

            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              &nbsp;Services
            </span>
          </h4>
        </div>

        <Row className="justify-content-center">
          {/* Tabs on Left */}
          <Col md={3}>
            <div className="d-flex flex-column">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    textAlign: "left",
                    border: "none",
                    background: "none",
                    padding: "12px 0",
                    fontWeight: activeTab === tab.id ? "600" : "500",
                    color:
                      activeTab === tab.id ? "#00c26f" : "#0b5ed7",
                    cursor: "pointer",
                    fontSize: "0.97rem",
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </Col>

          {/* Content on Right */}
          <Col md={8}>
            <div
              style={{
                border: "1px solid #00bfff",
                background: "#fff",
                padding: "25px 30px",
                borderRadius: "6px",
                minHeight: "250px",
                transition: "all 0.3s ease",
              }}
            >
              <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "1.8" }}>
                {activeContent.content.map((item, idx) => (
                  <li key={idx} style={{ color: "#0b1641" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Insurancefaq;
