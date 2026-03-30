import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
const Faqpricing = () => {
  const [activeKey, setActiveKey] = useState(null);
  const faqData = [
    {
      question: "What is remote staffing?",
      answer: "Remote staffing means hiring skilled professionals who work for your business from a different location, often in another country, using digital tools and communication platforms."
    },
    {
      question: "How does HBS pricing work?",
      answer: "HBS offers transparent, fixed monthly pricing for remote talent. You pay a set rate based on the role and experience level, with no hidden fees or long-term contracts."
    },
    {
      question: "What roles can I hire remotely through HBS?",
      answer: "You can hire a wide range of roles including medical billers, coders, insurance verification specialists, administrative assistants, and more. Contact us for a full list."
    },
    {
      question: "How quickly can I onboard a remote team member?",
      answer: "Most clients are able to interview and onboard their new remote team member within 1-2 weeks after starting the process."
    },
    {
      question: "Is there a minimum contract period?",
      answer: "No, HBS does not require long-term contracts. You can scale your remote team up or down as needed, with flexible monthly terms."
    },
    {
      question: "How do you ensure quality and reliability?",
      answer: "HBS carefully vets all remote talent, provides ongoing support, and monitors performance to ensure you receive high-quality, reliable service."
    },
    {
      question: "What are the payment options?",
      answer: "We accept payments via bank transfer, credit card, and other secure methods. Invoices are sent monthly for your convenience."
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
              Pricing & Remote Staffing FAQ
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              Answers to common questions about remote staffing and our transparent pricing model.
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
export default Faqpricing;