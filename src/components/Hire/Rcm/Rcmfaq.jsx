import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
const FaqRcm = () => {
  const [activeKey, setActiveKey] = useState(null);
  const faqData = [
    {
      question: "What RCM Management services does HBS provide?",
      answer: "We provide comprehensive RCM Management services including eligibility verification, charge capture, coding review, claim scrubbing, payment posting, denial management, and appeals. Our remote RCM specialists work end-to-end through your charge-to-cash cycle to maximize revenue and minimize claim denials."
    },
    {
      question: "How does RCM Management improve our revenue?",
      answer: "Our RCM experts reduce claim denials through accurate coding, proper pre-authorization tracking, and proactive denial appeals. We optimize your first-pass approval rates, accelerate time to payment, and ensure compliance — directly improving your cash flow and bottom line."
    },
    {
      question: "How do I start with RCM Management support?",
      answer: "Schedule a free RCM assessment with our team. We'll review your current processes, identify bottlenecks, and propose a tailored RCM management solution. Most clients see improvements within 2–4 weeks."
    },
    {
      question: "What qualifications do your RCM specialists have?",
      answer: "Our RCM team has certifications in medical billing, coding (CPC, RHIA), and deep experience in charge-to-cash workflows. All staff are screened for compliance expertise, payer knowledge, and proficiency in major billing systems."
    },
    {
      question: "How do you handle different payers and coding requirements?",
      answer: "Our RCM specialists are trained on payer-specific requirements, modifiers, and denial codes. We maintain up-to-date knowledge of compliance changes, ICD-10 coding, and bundling rules specific to your specialties."
    },
    {
      question: "Can RCM Management integrate with our existing billing system?",
      answer: "Yes — we work inside your EHR, PM, or billing system (NextGen, HBS, eClinicalWorks, etc.). Our team operates within your existing workflows to ensure seamless integration and minimal disruption."
    },
    {
      question: "What compliance and security standards do you follow?",
      answer: "We are HIPAA compliant, sign Business Associate Agreements (BAAs), and follow secure data handling protocols. All our RCM specialists adhere to strict compliance standards and maintain audit-ready documentation."
    },
    {
      question: "How do you track and report RCM performance?",
      answer: "We provide detailed KPI reporting including first-pass approval rates, days in A/R, denial rates, appeal outcomes, and revenue recovery. Monthly dashboards give you full visibility into your revenue cycle health."
    },
    {
      question: "What if your RCM management doesn't meet our needs?",
      answer: "We guarantee results — if our RCM services don't meet performance targets, we'll adjust resources and strategies. We're committed to your revenue optimization and will work to achieve your goals."
    },
    {
      question: "Can I scale RCM Management up or down with my needs?",
      answer: "Absolutely — scale your RCM team month-to-month. Add specialists for peak seasons or reduce support during slower periods. We handle staffing changes flexibly while maintaining continuity in your revenue cycle."
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 style={{ 
              color: '#00A6E6',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              RCM Management — Frequently Asked Questions
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              Get answers to common questions about our RCM management services, revenue optimization, and compliance support.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion activeKey={activeKey} className="faq-accordion">
              {faqData.map((faq, index) => (
                <Accordion.Item 
                  key={index} 
                  eventKey={index.toString()}
                  className="border-0 mb-3"
                >
                  <Accordion.Header
                    onClick={() => setActiveKey(activeKey === index.toString() ? null : index.toString())}
                    style={{ 
                      border: 'none',
                      background: 'transparent'
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <span style={{ 
                        color: '#002856',
                        fontSize: '1.1rem',
                        fontWeight: '600'
                      }}>
                        {faq.question}
                      </span>
                      <span style={{
                        backgroundColor: '#00E676',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        transform: activeKey === index.toString() ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease'
                      }}>
                        <BsPlusLg size={12} />
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body style={{
                    paddingLeft: '0',
                    paddingRight: '0',
                    color: '#666',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          .faq-accordion .accordion-button {
            padding: 1.5rem 0;
            background: transparent;
            box-shadow: none !important;
            border-bottom: 1px solid #eee;
          }
          .faq-accordion .accordion-button:not(.collapsed) {
            background: transparent;
            color: #002856;
          }
          .faq-accordion .accordion-button::after {
            display: none;
          }
          .faq-accordion .accordion-body {
            padding: 1rem 0;
          }
        `}
      </style>
    </section>
  );
};
export default FaqRcm;