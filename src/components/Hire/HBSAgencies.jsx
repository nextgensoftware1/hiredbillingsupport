import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCheckLg, BsXLg } from 'react-icons/bs';

const HBSAgencies = () => {
  const hbsFeatures = [
    "Full-time, dedicated Medical VA for your practice",
    "SOP-driven workflows + daily QA & KPIs",
    "EHR expertise",
    "Recall & reactivation managed end-to-end",
    "We sign a BAA and follow HIPAA",
    "US business-hours coverage & clear escalation"
  ];

  const otherAgenciesFeatures = [
    "Rotating, untrained assistants",
    "Unpredictable quality, no KPIs",
    "Limited EHR knowledge, manual errors",
    "Inconsistent recall / re-care follow-ups",
    "No BAA or weak security posture",
    "Mixed time-zone availability, slow response"
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={10} className="text-center">
            <h2 style={{
              color: '#002856',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                HBS vs. VA&nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Agencies
              </span>
            </h2>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              marginBottom: '3rem'
            }}>
              Discover what our vetted virtual medical receptionists do for hundreds of healthcare practices.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={5}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '15px',
              padding: '2rem',
              height: '100%',
              boxShadow: '0 0 20px rgba(0,0,0,0.1)',
              border: '2px solid #00E676'
            }}>
              <h3 style={{
                color: '#fff',
                backgroundColor: '#00A6E6',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Hiring with HBS
              </h3>
              <div>
                {hbsFeatures.map((feature, index) => (
                  <div key={index} className="d-flex align-items-start mb-4">
                    <span style={{
                      backgroundColor: '#00E676',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      marginTop: '3px'
                    }}>
                      <BsCheckLg color="#fff" size={14} />
                    </span>
                    <p style={{
                      color: '#002856',
                      fontSize: '1rem',
                      margin: 0,
                      flex: 1
                    }}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '15px',
              padding: '2rem',
              height: '100%',
              border: '2px solid #eee',
              boxShadow: '0 0 20px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                color: '#fff',
                backgroundColor: '#00A6E6',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Other VA Agencies
              </h3>
              <div>
                {otherAgenciesFeatures.map((feature, index) => (
                  <div key={index} className="d-flex align-items-start mb-4">
                    <span style={{
                      backgroundColor: '#dc3545',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      marginTop: '3px'
                    }}>
                      <BsXLg color="#fff" size={14} />
                    </span>
                    <p style={{
                      color: '#002856',
                      fontSize: '1rem',
                      margin: 0,
                      flex: 1
                    }}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HBSAgencies;
