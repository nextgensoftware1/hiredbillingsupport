import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null);
  const faqData = [
    {
      question: "What services does HBS provide?",
      answer: "HBS offers comprehensive support for credentialing, billing setup, compliance, and practice management tailored to your needs."
    },
    {
      question: "How long does credentialing take with HBS?",
      answer: "Credentialing typically takes 90-120 days per payer. HBS ensures timely follow-ups and streamlined applications."
    },
    {
      question: "What is included in HBS's billing setup?",
      answer: "HBS configures EHR/PM systems, fee schedules, clearinghouse integrations, and charge capture workflows for efficient billing."
    },
    {
      question: "How does HBS ensure compliance?",
      answer: "HBS provides HIPAA-compliant workflows, staff training, and documentation policies to minimize risks."
    },
    {
      question: "Can HBS help with marketing and patient acquisition?",
      answer: "Yes, HBS supports digital marketing strategies, community outreach, and referral relationship development."
    },
    {
      question: "What happens if I face billing or claim issues?",
      answer: "HBS offers denial management and real-time claim tracking to resolve issues promptly and ensure cash flow stability."
    },
    {
      question: "How does HBS assist with practice growth?",
      answer: "HBS provides strategic advice for scaling operations, adding providers, and optimizing financial performance."
    },
    {
      question: "What are the payment options for HBS services?",
      answer: "HBS accepts major credit cards and bank transfers. Billing is monthly, with enterprise billing schedules available upon request."
    },
    {
      question: "Can I customize HBS services for my practice?",
      answer: "Yes, HBS tailors services to your practice's unique needs, ensuring optimal support and efficiency."
    },
    {
      question: "How do I get started with HBS?",
      answer: "Contact HBS for a consultation. We'll assess your needs and create a customized plan for your practice launch."
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
              Frequently Asked Questions
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              Get answers to common questions about HBS services, timelines, and support.
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

export default FAQ;