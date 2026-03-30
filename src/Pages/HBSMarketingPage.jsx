import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HBSMarketingPage() {
  const [headerPad, setHeaderPad] = useState(120);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector('header');
      const infoBar = document.querySelector('.top-info-bar');
      let pad = 120;
      if (header) pad = header.offsetHeight;
      if (infoBar) pad += infoBar.offsetHeight;
      setHeaderPad(pad + 30); // add extra space for shadow/overlap
    }
    updatePad();
    window.addEventListener('resize', updatePad);
    return () => window.removeEventListener('resize', updatePad);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
    team: 0
  });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      alert('Thank you for your interest! Our team will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCountUp();
        }
      },
      { threshold: 0.5 }
    );

    const node = statsRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [hasAnimated]);

  const animateCountUp = () => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        projects: Math.floor(progress * 500),
        satisfaction: Math.floor(progress * 98),
        team: Math.floor(progress * 50)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const IconComponent = ({ type, size = 48 }) => {
    const s = size;
    const iconMap = {
      billing: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-8 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          <rect x="2" y="6" width="20" height="2" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      ai: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h4v2h-4zm0-5h4v4h-4zm0-5h4v4h-4z"/>
          <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
          <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
        </svg>
      ),
      web: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8 10h-5.35C14.3 6.75 12.28 4.5 10 4.5c-2.45 0-4.5 2.45-4.5 5.5H2c0-5.52 4.48-10 10-10s10 4.48 10 10z"/>
          <path d="M12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5s-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5z" opacity="0.7"/>
        </svg>
      ),
      seo: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="11" cy="11" r="5" fill="currentColor" opacity="0.3"/>
          <circle cx="11" cy="11" r="2" fill="currentColor"/>
        </svg>
      ),
      graphic: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8.5" cy="8.5" r="2" fill="currentColor"/>
          <path d="M21 15l-5-5L7 21" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      staffing: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          <path d="M16 12c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2zm3 6v2h3v-2c0-1.5-2.24-2.25-3.5-2.5 0.42 0.4 0.7 0.95 0.7 1.5v1z"/>
        </svg>
      ),
      rcm: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          <path d="M12 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0 2.5c2 0 5 1 5 3v1.5h-10v-1.5c0-2 3-3 5-3z" fill="white" opacity="0.9"/>
        </svg>
      ),
      compliance: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      marketing: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      consulting: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-8v-2h8v2zm0-3h-8V9h8v2zm0-3H4V6h14v2z"/>
        </svg>
      )
    };
    return <div style={{ color: '#5CBDAA' }}>{iconMap[type] || null}</div>;
  };

  const services = [
    {
      icon: 'billing',
      title: 'Medical Billing',
      description: 'Expert billing solutions with clean claims processing and denial management to maximize your practice revenue.'
    },
    {
      icon: 'ai',
      title: 'AI Solutions',
      description: 'Intelligent automation powered by artificial intelligence to streamline workflows and improve efficiency.'
    },
    {
      icon: 'web',
      title: 'Web Development',
      description: 'Custom web solutions built with modern technology for optimal performance and user experience.'
    },
    {
      icon: 'seo',
      title: 'SEO Optimization',
      description: 'Strategic search engine optimization to increase visibility and drive organic traffic to your online presence.'
    },
    {
      icon: 'graphic',
      title: 'Graphic Design',
      description: 'Professional design services creating stunning visuals that engage your audience and strengthen branding.'
    },
    {
      icon: 'staffing',
      title: 'Remote Staffing',
      description: 'Skilled remote professionals dedicated to supporting your operations with expertise and reliability.'
    },
    {
      icon: 'rcm',
      title: 'RCM Services',
      description: 'Complete revenue cycle management from patient intake through final payment with analytics and reporting.'
    },
    {
      icon: 'compliance',
      title: 'Compliance',
      description: 'Comprehensive compliance and credentialing services ensuring regulatory adherence and certification.'
    },
    {
      icon: 'marketing',
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns leveraging modern channels to reach and engage your target audience.'
    }
  ];

  const whyChooseUs = [
    { icon: 'lightning', title: 'Fast Delivery', description: 'Rapid project completion without compromising quality' },
    { icon: 'trophy', title: 'Expert Team', description: '15+ years of combined experience in healthcare and technology' },
    { icon: 'chart', title: 'Proven Results', description: 'Documented track record of successful implementations' },
    { icon: 'shield', title: 'Secure', description: 'Enterprise-grade security and HIPAA compliance' },
    { icon: 'target', title: 'Dedicated Support', description: '24/7 customer support and ongoing optimization' },
    { icon: 'growth', title: 'Scalable', description: 'Solutions that grow and adapt to your business needs' }
  ];

  const WhyIconComponent = ({ type, size = 32 }) => {
    const s = size;
    const iconMap = {
      lightning: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-8h-8l1-8z"/>
        </svg>
      ),
      trophy: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 6H2v11c0 1.1.9 2 2 2h1v3h2v-3h10v3h2v-3h1c1.1 0 2-.9 2-2V6h-4c0-1.66-1.34-3-3-3s-3 1.34-3 3zm6 0c0-.55-.45-1-1-1s-1 .45-1 1h2zm4 11H4V6h12v11zm-5-2l3-4h-6l3 4z"/>
        </svg>
      ),
      chart: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
        </svg>
      ),
      shield: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 11l-4-4 1.41-1.41L12 9.17l2.59-2.58L16 8l-4 4z"/>
        </svg>
      ),
      target: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6" fill="white" opacity="0.3"/>
          <circle cx="12" cy="12" r="2" fill="white"/>
        </svg>
      ),
      growth: (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18 9.41 12l4 4 6.3-6.29L23 12v-6z"/>
        </svg>
      )
    };
    return <div style={{ color: 'white' }}>{iconMap[type] || null}</div>;
  };

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif", overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)',
        color: 'white',
        padding: `${headerPad}px 20px 100px`,
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '25px', fontWeight: '900', letterSpacing: '-1.5px', lineHeight: 1.15, textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          Complete Business Solutions
        </h1>
        <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', marginBottom: '60px', maxWidth: '750px', lineHeight: 1.8, opacity: 0.98, letterSpacing: '0.3px' }}>
          From medical billing to AI-powered solutions, graphic design to digital marketing—we provide comprehensive services to transform your business.
        </p>
        <button
          onClick={() => navigate('/contact')}
          style={{
          background: 'white',
          color: '#5CBDAA',
          border: 'none',
          padding: '18px 50px',
          fontSize: '1.15rem',
          fontWeight: '700',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
          letterSpacing: '0.6px',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-5px) scale(1.02)';
          e.target.style.boxShadow = '0 25px 50px rgba(0,0,0,0.35)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.25)';
        }}
        >
          Get Free Consultation
        </button>
      </section>

      {/* Services Section */}
      <section style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #f8f9fa 0%, #f0f6f5 100%)' }}>
        <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', textAlign: 'center', marginBottom: '15px', fontWeight: '900', color: '#0f3f3a', letterSpacing: '-0.5px' }}>
            Our Services
          </h2>
          <p style={{ textAlign: 'center', color: '#555', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', marginBottom: 80, maxWidth: '650px', margin: '15px auto 80px', lineHeight: 1.8, fontWeight: '500' }}>
            Comprehensive solutions tailored to drive growth, efficiency, and success across your entire organization
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '35px' }}>
            {services.map((service, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  padding: '50px 40px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(92, 189, 170, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  border: '1px solid #dff0ee',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#fafbfb'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-16px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(92, 189, 170, 0.25)';
                  e.currentTarget.style.backgroundColor = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(92, 189, 170, 0.1)';
                  e.currentTarget.style.backgroundColor = '#fafbfb';
                }}
              >
                <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: 'linear-gradient(135deg, #e8f4f2 0%, #d0e6e2 100%)', borderRadius: '14px', boxShadow: '0 6px 20px rgba(92, 189, 170, 0.12)' }}>
                  <IconComponent type={service.icon} size={45} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', marginBottom: '16px', color: '#0f3f3a', fontWeight: '800', letterSpacing: '-0.3px' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: '500' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #ffffff 0%, #f5fffe 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', textAlign: 'center', marginBottom: '85px', fontWeight: '900', color: '#0f3f3a', letterSpacing: '-0.5px' }}>
            Why Choose Us
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {whyChooseUs.map((item, idx) => (
              <div key={idx} style={{
                padding: '45px',
                background: 'linear-gradient(135deg, #f0faf9 0%, #e5f2f0 100%)',
                borderRadius: '16px',
                border: '1.5px solid #d5e8e6',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(92, 189, 170, 0.08)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(92, 189, 170, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(92, 189, 170, 0.08)';
              }}
              >
                <div style={{ marginBottom: '22px', display: 'flex', justifyContent: 'center', width: '70px', height: '70px', margin: '0 auto 22px', background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)', borderRadius: '12px', alignItems: 'center',  boxShadow: '0 8px 25px rgba(92, 189, 170, 0.25)' }}>
                  <WhyIconComponent type={item.icon} size={36} />
                </div>
                <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', marginBottom: '14px', color: '#0f3f3a', fontWeight: '800', letterSpacing: '-0.2px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#444', lineHeight: 1.7, fontSize: '0.95rem', fontWeight: '500' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} style={{
        background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)',
        color: 'white',
        padding: '100px 20px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '60px' }}>
            <div style={{ textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              <div style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', marginBottom: '15px', letterSpacing: '-1.5px', textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                {counts.projects}+
              </div>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.98, fontWeight: '600', letterSpacing: '0.5px' }}>
                Projects Delivered
              </p>
            </div>
            <div style={{ textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              <div style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', marginBottom: '15px', letterSpacing: '-1.5px', textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                {counts.satisfaction}%
              </div>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.98, fontWeight: '600', letterSpacing: '0.5px' }}>
                Client Satisfaction
              </p>
            </div>
            <div style={{ textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              <div style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', marginBottom: '15px', letterSpacing: '-1.5px', textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                {counts.team}+
              </div>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.98, fontWeight: '600', letterSpacing: '0.5px' }}>
                Team Members
              </p>
            </div>
            <div style={{ textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              <div style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', marginBottom: '15px', letterSpacing: '-1.5px', textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                24/7
              </div>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.98, fontWeight: '600', letterSpacing: '0.5px' }}>
                Support Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" style={{
        background: 'linear-gradient(180deg, #f0faf9 0%, #e5f2f0 100%)',
        padding: '120px 20px'
      }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', marginBottom: '18px', fontWeight: '900', color: '#0f3f3a', letterSpacing: '-0.5px' }}>
            Get Started Today
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: '65px', lineHeight: 1.8, fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: '500' }}>
            Contact our team to discuss how we can transform your business with tailored solutions. We're ready to help you succeed.
          </p>
          <div style={{ background: 'white', padding: '55px 50px', borderRadius: '18px', boxShadow: '0 20px 60px rgba(92, 189, 170, 0.2)', border: '1px solid #d5e8e6', position: 'relative' }}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#1a3a3a', fontSize: '0.95rem' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #d5e8e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#5CBDAA'}
                onBlur={(e) => e.target.style.borderColor = '#d5e8e6'}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#1a3a3a', fontSize: '0.95rem' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@company.com"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #d5e8e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#5CBDAA'}
                onBlur={(e) => e.target.style.borderColor = '#d5e8e6'}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#1a3a3a', fontSize: '0.95rem' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #d5e8e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#5CBDAA'}
                onBlur={(e) => e.target.style.borderColor = '#d5e8e6'}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#1a3a3a', fontSize: '0.95rem' }}>
                Service of Interest
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 8px', // Minimal left/right padding
                  border: '2px solid #d5e8e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#5CBDAA'}
                onBlur={(e) => e.target.style.borderColor = '#d5e8e6'}
              >
                <option value="">Select a service...</option>
                <option>Medical Billing</option>
                <option>AI Solutions</option>
                <option>Web Development</option>
                <option>SEO Optimization</option>
                <option>Graphic Design</option>
                <option>Remote Staffing</option>
                <option>RCM Services</option>
                <option>Compliance</option>
                <option>Digital Marketing</option>
              </select>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#1a3a3a', fontSize: '0.95rem' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project..."
                rows="5"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #d5e8e6',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#5CBDAA'}
                onBlur={(e) => e.target.style.borderColor = '#d5e8e6'}
              />
            </div>
            <button
              onClick={handleSubmit}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)',
                color: 'white',
                border: 'none',
                padding: '16px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(92, 189, 170, 0.3)',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 35px rgba(92, 189, 170, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(92, 189, 170, 0.3)';
              }}
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #1f4a42 0%, #2a5a52 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <p style={{ marginBottom: '12px', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', fontWeight: '600', letterSpacing: '0.3px' }}>
          © 2024 HBS - Hired Billing Support. All rights reserved.
        </p>
        <p style={{ opacity: 0.88, fontSize: 'clamp(0.9rem, 2vw, 0.98rem)', lineHeight: 1.7, fontWeight: '500' }}>
          Comprehensive Solutions for Medical Billing, AI, Web Development, SEO, Design & Marketing
        </p>
      </footer>
    </div>
  );
}
