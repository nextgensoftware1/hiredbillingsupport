import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';

const Faq = () => {
  const [activeKey, setActiveKey] = useState(null);

  const faqData = [
    {
      question: "What does a Medical VA handle?",
      answer: "Our Medical VAs handle various tasks including appointment scheduling, patient communication, medical records management, insurance verification, and basic billing support. They are trained in healthcare protocols and HIPAA compliance."
    },
    {
      question: "Do you sign a BAA and follow HIPAA?",
      answer: "Yes, we sign Business Associate Agreements (BAA) and strictly follow HIPAA guidelines. Our team is trained in patient privacy and data security protocols to ensure compliance with all healthcare regulations."
    },
    {
      question: "Which EHRs do you support?",
      answer: "We support major EHR systems including Epic, Cerner, Allscripts, eClinicalWorks, NextGen, and many others. Our VAs are trained to adapt to your specific EHR system and workflows."
    },
    {
      question: "How fast can we start?",
      answer: "We can typically begin within 1-2 weeks of signing the agreement. This includes BAA signing, EHR access setup, and initial training on your specific workflows."
    },
    {
      question: "Can your VAs make and receive patient calls?",
      answer: "Yes, our VAs are trained to handle both inbound and outbound patient calls professionally. They manage appointment scheduling, reminders, and basic patient inquiries with a focus on patient satisfaction."
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
              Get to know the answers of frequently asked questions about our laboratory billing services.
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

export default Faq;
