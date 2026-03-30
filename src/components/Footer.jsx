import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
const Footer = () => {
  const siteNavigation = [
    { name: "Home", path: "/" },
    { name: "Medical", path: "/medical-services" },
    { name: "Dental", path: "/dental-services" },
    { name: "RCM Management", path: "/rcm-management" },
    { name: "Insurance", path: "/insurance-services" },
    { name: "Book Now", path: "/pricing" },
    { name: "About Us", path: "/about" },
    { name: "HBS Marketing", path: "/hbs-marketing" },
    { name: "Contact", path: "/contact" }
  ];
  const specialtyServices = [
    { name: "Neurology ", path: "/neurology" },
    { name: "Cardiology ", path: "/cardiology" },
    { name: "Endocrinology ", path: "/endocrinology" },
    { name: "Podiatry ", path: "/podiatry-services" },
    { name: "Orthopedic", path: "/orthopedic" },
    { name: "OBGYN ", path: "/obgyn" },
    { name: "Psychiatry ", path: "/psychiatry" },
    { name: "Nephrology", path: "/nephrology-services" }
  ];

  const quickLinks = [
    { name: "Case Study", path: "/case-study" },
    { name: "Article 28 Facilities", path: "/article-28-facilities" },
    { name: "HBS Marketing", path: "/hbs-marketing" }
  ];

  const popularServices = [];

  return (
    <footer className="pt-5 pb-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          {/* Contact Us Section */}
          <div className="col-lg-4 mb-4">
            <h3 className="mb-4" style={{ color: '#002856', fontSize: '24px', fontWeight: '600' }}>Contact Us</h3>
            <p className="text-muted mb-4">Get in touch with us!</p>
            <div className="d-flex align-items-start mb-3">
              <FaMapMarkerAlt className="text-primary mt-1 me-3" style={{ minWidth: '20px' }} />
              <p className="mb-0 text-muted">
                23209 Blackwell Ave <br/>
                    Port Charlotte, FL  33952
              </p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaEnvelope className="text-primary me-3" style={{ minWidth: '20px' }} />
              <a href="mailto:info@hiredbillingsupport.com" className="text-muted text-decoration-none">
                info@hiredbillingsupport.com
              </a>
            </div>
            <div className="d-flex align-items-center mb-4">
              <FaPhone className="text-primary me-3" style={{ minWidth: '20px' }} />
              <a href="tel:+13213211740" className="text-muted text-decoration-none">
                +1 321 321-1740
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61560603176734&mibextid=wwXIfr&rdid=oyMBw5xfKzc6gwHp#" className="me-3 bg-white rounded-circle p-2 d-inline-flex align-items-center justify-content-center" 
                style={{ width: '40px', height: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-primary" />
              </a>
              <a href="https://www.instagram.com/hiredbillingsupport/?igsh=MW1tMTV4cXIzMGRibg%3D%3D#" className="me-3 bg-white rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-primary" />
              </a>
              <a href="https://www.linkedin.com/company/hiredbillingsupport/" className="bg-white rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="text-primary" />
              </a>
            </div>
          </div>

          {/* Site Navigation Section */}
          <div className="col-lg-2 mb-4">
            <h3 className="mb-4" style={{ color: '#002856', fontSize: '24px', fontWeight: '600' }}>Navigation</h3>
            <ul className="list-unstyled">
              {siteNavigation.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={link.path} 
                    className="text-decoration-none text-muted d-flex align-items-center"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#00A6E6'}
                    onMouseLeave={(e) => e.target.style.color = ''}
                  >
                    <span className="me-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialty Services Section */}
          <div className="col-lg-3 mb-4">
            <h3 className="mb-4" style={{ color: '#002856', fontSize: '24px', fontWeight: '600' }}>Specialty Services</h3>
            <ul className="list-unstyled">
              {specialtyServices.map((service, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={service.path} 
                    className="text-decoration-none text-muted d-flex align-items-center"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#00A6E6'}
                    onMouseLeave={(e) => e.target.style.color = ''}
                  >
                    <span className="me-2">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links Section */}
          <div className="col-lg-3 mb-4">
            <h3 className="mb-4" style={{ color: '#002856', fontSize: '24px', fontWeight: '600' }}>Other Links</h3>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={link.path} 
                    className="text-decoration-none text-muted d-flex align-items-center"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#00A6E6'}
                    onMouseLeave={(e) => e.target.style.color = ''}
                  >
                    <span className="me-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
              {popularServices.map((service, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={service.path} 
                    className="text-decoration-none text-muted d-flex align-items-center"
                    style={{ transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#00A6E6'}
                    onMouseLeave={(e) => e.target.style.color = ''}
                  >
                    <span className="me-2">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row mt-4 pt-4 border-top">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0" style={{ color: '#00A6E6' }}>
              Copyright © 2026 Hired Billing Support LLC. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/privacy-policy" className="text-decoration-none" style={{ color: '#00A6E6' }}>
              Privacy Policy
            </Link>
            <span className="mx-2" style={{ color: '#00A6E6' }}>|</span>
            <Link to="/terms-conditions" className="text-decoration-none" style={{ color: '#00A6E6' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
