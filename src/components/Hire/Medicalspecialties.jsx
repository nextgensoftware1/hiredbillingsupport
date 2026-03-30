import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import specialty icons
import neurology from '../../assets/images/case/brain.png';
import cardiology from '../../assets/images/case/heart.png';
import dental from '../../assets/images/case/dental.png';
import dermatology from '../../assets/images/case/Dermatology.png';
import gastro from '../../assets/images/case/Gastro.png';
import general from '../../assets/images/case/General.png';
import hand from '../../assets/images/case/Hand.png';
import healthcare from '../../assets/images/case/healthcare.png';
import hospital from '../../assets/images/case/hospital.png';
import infectious from '../../assets/images/case/Infectious.png';
import internal from '../../assets/images/case/Internal.png';
import medical from '../../assets/images/case/medical.png';
import nephrology from '../../assets/images/case/Nephrology.png';
import psychology from '../../assets/images/case/psychology.png';
import virus from '../../assets/images/case/virus.png';

const Medicalspecialties = () => {
  const specialties = [
    { icon: neurology, name: 'Neurology' },
    { icon: cardiology, name: 'Cardiology' },
    { icon: dental, name: 'Dental' },
    { icon: dermatology, name: 'Dermatology' },
    { icon: gastro, name: 'Gastroenterology' },
    { icon: general, name: 'General Medicine' },
    { icon: hand, name: 'Hand Surgery' },
    { icon: healthcare, name: 'Healthcare' },
    { icon: hospital, name: 'Hospital Care' },
    { icon: infectious, name: 'Infectious Disease' },
    { icon: internal, name: 'Internal Medicine' },
    { icon: medical, name: 'Medical Care' },
    { icon: nephrology, name: 'Nephrology' },
    { icon: psychology, name: 'Psychology' },
    { icon: virus, name: 'Immunology' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <section style={{ 
    //   backgroundColor: '#00A6E6',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    //   backgroundImage: 'linear-gradient(to right, #00A6E6, #0091EA)'
    }}>
      <Container>
        <Row className="justify-content-center mb-5"style={{ 
    //   backgroundColor: '#00A6E6',
    //   padding: '80px 0',
    //   position: 'relative',
    //   overflow: 'hidden',
      backgroundImage: 'linear-gradient(to right, #00A6E6, #0091EA)'
    }}>
          <Col lg={8} className="text-center">
            <h2 className="text-white mb-4" style={{ 
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              Medical Specialties We Support
            </h2>
            <div className="d-flex justify-content-center mb-4">
              <div style={{ width: '80px', height: '4px', backgroundColor: 'white' }}></div>
            </div>
            <p className="text-white mb-5" style={{ fontSize: '1.1rem' }}>
              Trained VAs familiar with your workflows and terminology.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Slider {...settings}>
              {specialties.map((specialty, index) => (
                <div key={index} className="px-3">
                  <div className="text-center" style={{ color: 'white' }}>
                    <div style={{
                      width: '90px',
                      height: '90px',
                      margin: '0 auto 15px',
                      backgroundColor: '#ffffff',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                    }}
                    >
                      <img 
                        src={specialty.icon} 
                        alt={specialty.name}
                        style={{
                          width: '45px',
                          height: '45px',
                          filter: 'invert(46%) sepia(83%) saturate(1265%) hue-rotate(165deg) brightness(96%) contrast(101%)'
                        }}
                      />
                    </div>
                    <h6 className="mb-0" style={{ fontSize: '1rem', fontWeight: '500' }}>
                      {specialty.name}
                    </h6>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col className="text-center">
            <a
              href="#schedule-demo"
              className="btn px-4 py-2 rounded-pill"
              style={{
                backgroundColor: '#00E676',
                color: 'white',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '12px 24px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
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
              Schedule Free Demo <span>→</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Medicalspecialties;
