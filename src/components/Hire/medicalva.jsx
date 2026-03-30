import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  BsTelephone, 
  BsFileText, 
  BsLaptop,
  BsCalendarWeek,
  BsPeople,
  BsGraphUp
} from 'react-icons/bs';

const MedicalVA = () => {
  const steps = [
    {
      icon: <BsTelephone />,
      title: "Discovery Call",
      description: "goals, workloads, tools, hours"
    },
    {
      icon: <BsFileText />,
      title: "SOPs & BAA",
      description: "define workflows, sign security docs"
    },
    {
      icon: <BsLaptop />,
      title: "EHR & Tools Setup",
      description: "access, templates, macros"
    },
    {
      icon: <BsCalendarWeek />,
      title: "Pilot Week",
      description: "small batch tasks + QA checks"
    },
    {
      icon: <BsPeople />,
      title: "Go-Live Coverage",
      description: "full workload with daily reports"
    },
    {
      icon: <BsGraphUp />,
      title: "Optimize & Scale",
      description: "refine KPIs, add coverage as needed"
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="mb-3" style={{ 
              color: '#002856', 
              fontSize: '2.5rem', 
              fontWeight: '700'
            }}>
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                How Our Medical VA Program&nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Works
              </span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem' }}>
              Fast, secure onboarding and a clear operating rhythm.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {steps.map((step, index) => (
            <Col key={index} md={6} lg={4}>
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 20px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #00A6E6',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 166, 230, 0.1)'
                }}>
                  <div style={{ 
                    color: '#00A6E6', 
                    fontSize: '28px',
                    transition: 'all 0.3s ease'
                  }}>
                    {step.icon}
                  </div>
                </div>
                <h3 style={{ 
                  color: '#002856',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  {step.title}
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                  {step.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-5">
          <Col className="text-center">
            <a
              href="#hire-now"
              className="btn px-4 py-2 rounded-pill"
              style={{
                backgroundColor: '#00E676',
                color: 'white',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '12px 30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#00C853';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#00E676';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Hire Now <span>→</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MedicalVA;
