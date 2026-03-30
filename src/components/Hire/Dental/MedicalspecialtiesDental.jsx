import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import dental specialty icons
import endodontist from '../../../assets/images/case/endodontist.png';
import braces from '../../../assets/images/case/braces.png';
import cavity from '../../../assets/images/case/cavity.png';
import clean from '../../../assets/images/case/clean.png';
import dentalMedical from '../../../assets/images/case/dental_medical.png';
import dentalDrill from '../../../assets/images/case/dental-drill.png';
import denture from '../../../assets/images/case/denture.png';

const MedicalspecialtiesDental = () => {
  const specialties = [
    { icon: endodontist, name: 'Endodontics', description: 'Root Canal Therapy' },
    { icon: braces, name: 'Orthodontics', description: 'Braces & Aligners' },
    { icon: cavity, name: 'Restorative', description: 'Fillings & Crowns' },
    { icon: clean, name: 'Preventive Care', description: 'Cleanings & Check-ups' },
    { icon: dentalMedical, name: 'General Dentistry', description: 'Comprehensive Care' },
    { icon: dentalDrill, name: 'Cosmetic', description: 'Smile Enhancement' },
    { icon: denture, name: 'Prosthodontics', description: 'Dentures & Implants' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
              Dental Specialties We Support
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
                          objectFit: 'contain'
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

export default MedicalspecialtiesDental;
