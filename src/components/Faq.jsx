import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
const Faq = () => {
  const [activeKey, setActiveKey] = useState(null);
  const faqData = [
    {
      question: "What services does HBS provide?",
      answer: "We connect you with vetted remote professionals for revenue cycle, medical billing & coding, AR follow-up, insurance verification, credentialing and administrative support. We also handle hiring administration, payroll, and ongoing support."
    },
    {
      question: "How clear is your pricing?",
      answer: "Very clear — pricing is a fixed monthly rate per role. No hidden fees. For teams or custom needs we provide a tailored quote. You'll receive a simple monthly invoice."
    },
    {
      question: "How do I start the hiring process?",
      answer: "Schedule a free demo or send us your role brief. We will shortlist candidates, set up interviews, and help with onboarding — most clients start interviewing within 2–3 days."
    },
    {
      question: "What qualifications do your candidates have?",
      answer: "Candidates are screened for role-specific skills, certifications, and experience. We perform reference checks and skills assessments relevant to medical billing and revenue cycle roles."
    },
    {
      question: "How is communication and timezone overlap handled?",
      answer: "We match availability to your needs. Most hires have scheduled overlap hours for meetings and real-time collaboration, and we use common tools like Zoom, Slack, and email."
    },
    {
      question: "What happens if a hire isn't a good fit?",
      answer: "We provide replacement support — if a placement doesn't meet expectations, we'll work quickly to find a suitable replacement and minimize downtime."
    },
    {
      question: "Do you support data security and compliance (e.g., HIPAA)?",
      answer: "Yes. We follow secure data handling practices, can sign NDAs, and support necessary compliance. If you need a BAA or extra controls, tell us and we'll accommodate it."
    },
    {
      question: "How does onboarding and training work?",
      answer: "We assist with onboarding — from account setup and documentation to shadowing and training plans. You can provide role-specific training or ask us to manage it for you."
    },
    {
      question: "What are the payment options and billing terms?",
      answer: "We accept major credit cards and bank transfers. Billing is monthly; enterprise billing schedules can be arranged on request."
    },
    {
      question: "Can I scale my team up or down?",
      answer: "Yes — clients scale month-to-month. Add or reduce roles as your needs change; we make transitions smooth and handle the administrative details."
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
              Get answers to common questions about our remote staffing services, hiring process, and support.
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