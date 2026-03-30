import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SuccessNumber = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      number: 150,
      suffix: "+",
      title: "Providers Supported",
      color: "#00E676"
    },
    {
      number: 10,
      suffix: "K+",
      title: "Patient Interactions / Month",
      color: "#00E676"
    },
    {
      number: 80,
      suffix: "%",
      title: "Charting Time Reduced",
      color: "#00E676"
    },
    {
      number: 99,
      suffix: "%",
      title: "Appointment Confirmation Rate",
      color: "#00E676"
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 style={{ 
              color: '#002856',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '3rem'
            }}>
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Our Success in&nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Numbers
              </span>
            </h2>
          </Col>
        </Row>

        <Row ref={ref} className="justify-content-center text-center g-4">
          {stats.map((stat, index) => (
            <Col key={index} lg={3} md={6}>
              <div className="mb-3">
                <h3 style={{ 
                  fontSize: '3.5rem',
                  fontWeight: '700',
                  color: stat.color,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}>
                  {inView && (
                    <>
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2.5}
                        separator=","
                      />
                      <span>{stat.suffix}</span>
                    </>
                  )}
                </h3>
                <p style={{ 
                  color: '#002856',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  {stat.title}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SuccessNumber;
