import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
const Faqdental = () => {
  const [activeKey, setActiveKey] = useState(null);
  const faqData = [
    {
      question: "What dental practice management software do your VAs work with?",
      answer: "Our dental VAs are proficient in major dental software including Dentrix, Open Dental, Eaglesoft, and other popular practice management systems. They can quickly adapt to your specific software and workflows."
    },
    {
      question: "How do your VAs handle dental insurance verification?",
      answer: "Our VAs thoroughly verify dental insurance coverage, including checking benefits, frequencies, downgrades, waiting periods, and plan exclusions. They document all findings in patient charts and flag any pre-authorization requirements."
    },
    {
      question: "Can your VAs help with dental claims processing?",
      answer: "Yes, our VAs handle complete dental claims processing including submission with proper narratives and attachments, tracking claim status, posting ERA/EOBs, managing denials, and following up on outstanding claims."
    },
    {
      question: "How do you ensure HIPAA compliance in dental practices?",
      answer: "We maintain strict HIPAA compliance through secure systems, signed BAAs, regular training, and documented protocols. Our VAs are well-versed in handling protected health information in dental settings."
    },
    {
      question: "What patient scheduling tasks can dental VAs handle?",
      answer: "Our dental VAs manage complete scheduling including new appointments, recalls, confirmations, rescheduling, and cancellations. They also handle appointment reminders and maintain efficient chair time utilization."
    },
    {
      question: "Do your VAs help with treatment plan coordination?",
      answer: "Yes, our VAs assist with treatment plan presentation, insurance pre-authorizations, financial arrangements, and coordinating with specialists when needed. They help ensure smooth treatment workflow and patient communication."
    },
    {
      question: "What are your dental VA's working hours?",
      answer: "Our dental VAs can work during your practice hours, whether full-time or part-time. We offer flexible scheduling to ensure coverage when you need it most, including early morning and evening hours if required."
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
              Common questions about our dental virtual assistant services and how we can help your practice.
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
export default Faqdental;