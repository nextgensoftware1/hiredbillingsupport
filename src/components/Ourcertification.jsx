import React from 'react';
import { useNavigate } from 'react-router-dom';
import hipaaImg from '../assets/images/hero/HPPPA.png';
import soc2Img from '../assets/images/hero/ASIPA.png';
import iso27001Img from '../assets/images/hero/1S027001.png';

const Ourcertification = () => {
  const navigate = useNavigate();
  const certifications = [
    {
      id: 1,
      image: hipaaImg,
      alt: "HIPAA Compliant"
    },
    {
      id: 2,
      image: soc2Img,
      alt: "AICPA SOC 2"
    },
    {
      id: 3,
      image: iso27001Img,
      alt: "ISO 27001"
    }
  ];

  return (
    <>
      {/* Certifications Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3" style={{ color: '#002856' }}>
                <span
                  style={{
                    background: ' #3498db',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Compliance That Builds
                </span>

                <span
                  style={{
                    background: ' #1abc9c',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  &nbsp;Confidence
                </span>
              </h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Over 500 businesses trust HBS as their remote staffing solution because we meet the strictest security and compliance standards. We safeguard sensitive data while helping you grow with confidence.
              </p>
            </div>
          </div>
          
          <div className="row justify-content-center align-items-center">
            {certifications.map((cert) => (
              <div key={cert.id} className="col-md-4 col-sm-6 text-center mb-4">
                <div className="px-4 py-3 h-100 d-flex align-items-center justify-content-center">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="img-fluid"
                    style={{ maxHeight: '70px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Optimize Section */}
      <section className="py-4" style={{ background: '#00A6E6' }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <h2 className="text-white fw-bold mb-0">Ready to Optimize Your Revenue Cycle Management?</h2>
            </div>
            <div className="col-lg-3 text-lg-end mt-3 mt-lg-0">
              <button 
                className="btn px-5 py-3 rounded-pill"
                onClick={() => navigate('/contact')}
                style={{
                  backgroundColor: '#2EFB76',
                  color: '#002856',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  border: 'none',
                  boxShadow: '0 0 20px rgba(46, 251, 118, 0.3)',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(-2px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1ee065';
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(46, 251, 118, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#2EFB76';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 0 20px rgba(46, 251, 118, 0.3)';
                }}
              >
                SCHEDULE DEMO
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourcertification;
