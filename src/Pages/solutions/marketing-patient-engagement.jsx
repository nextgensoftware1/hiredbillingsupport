import marketingBg1 from "../../assets/images/hero/Marketing_Patient.webp";
import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegClock, FaCheckCircle, FaChartLine, FaComments, FaShieldAlt, FaSyncAlt, FaFileAlt, FaRocket, FaUsers, FaPhone, FaBullhorn, FaDesktop, FaEnvelope, FaSearch, FaGlobe } from 'react-icons/fa';
import Secudal from "../../components/practicelaunch/secudal";

const MarketingServiceCards = [
  {
    icon: <FaUsers className="text-primary fs-3 mb-2" />,
    title: 'Patient Engagement Solutions',
    bullets: [
      'Patient outreach and engagement strategy development',
      'Appointment reminders and follow-up campaigns',
      'Patient education and awareness initiatives',
      'Re-engagement of inactive or missed-appointment patients',
      'HIPAA-compliant communication workflows',
      'Multi-channel engagement (email, phone, digital touchpoints)'
    ],
  },
  {
    icon: <FaDesktop className="text-primary fs-3 mb-2" />,
    title: 'Digital Marketing for Healthcare Practices',
    bullets: [
      'Practice-focused digital marketing strategy',
      'Paid digital advertising (Google Ads, social media ads)',
      'Website traffic optimization and lead generation',
      'Conversion-focused landing pages for services',
      'Performance tracking and campaign optimization'
    ],
  },
  {
    icon: <FaEnvelope className="text-primary fs-3 mb-2" />,
    title: 'Email Marketing & Outreach',
    bullets: [
      'HIPAA-compliant email campaign setup',
      'Patient newsletters and educational outreach',
      'Referral and provider outreach campaigns',
      'Automated follow-up and engagement sequences',
      'Campaign performance analysis and reporting'
    ],
  },
  {
    icon: <FaGlobe className="text-primary fs-3 mb-2" />,
    title: 'Website Marketing & Online Presence',
    bullets: [
      'Website content alignment with offered services',
      'SEO-friendly content structure for healthcare practices',
      'Service pages optimized for patient acquisition',
      'Website analytics and engagement insights',
      'Continuous optimization for visibility and conversions'
    ],
  },
  {
    icon: <FaBullhorn className="text-primary fs-3 mb-2" />,
    title: 'Social Media Marketing & Content',
    bullets: [
      'Social media strategy for healthcare brands',
      'Content posting and scheduling',
      'Educational and awareness-based posts',
      'Blog writing and healthcare-focused content creation',
      'SEO-aligned blogging for organic growth',
      'Reputation and brand visibility support'
    ],
  },
  {
    icon: <FaPhone className="text-primary fs-3 mb-2" />,
    title: 'Cold Calling & Outreach Services',
    bullets: [
      'Professional outbound calling for patient engagement',
      'Outreach to facilities, providers, or referral sources',
      'Appointment setting and inquiry handling',
      'Scripted, compliant, and professional communication',
      'Customized calling campaigns based on client goals'
    ],
  },
  {
    icon: <FaSearch className="text-primary fs-3 mb-2" />,
    title: 'SEO & Organic Growth Support',
    bullets: [
      'Search engine optimization strategy',
      'Local SEO for practices and facilities',
      'Keyword research aligned with healthcare services',
      'Content optimization for long-term visibility',
      'Performance monitoring and improvement planning'
    ],
  },
  {
    icon: <FaShieldAlt className="text-primary fs-3 mb-2" />,
    title: 'Compliance & Industry Alignment',
    bullets: [
      'HIPAA-compliant communication standards',
      'Secure handling of patient and practice data',
      'Ethical marketing practices aligned with healthcare regulations',
      'Transparency and data protection at every stage'
    ],
  },
];

const MarketingChallenges = [
  {
    title: 'Patient Acquisition Difficulties',
    desc: 'Attracting new patients is challenging in competitive healthcare markets. Our marketing strategies help you reach and convert potential patients effectively.',
   
  },
  {
    title: 'Limited Marketing Resources',
    desc: 'Healthcare practices often lack dedicated marketing staff or expertise. Our team provides professional marketing support without the overhead costs.',
    
  },
  {
    title: 'Compliance Concerns',
    desc: 'Healthcare marketing must follow strict HIPAA and regulatory guidelines. We ensure all campaigns meet compliance requirements while maximizing effectiveness.',
   
  },
  {
    title: 'Patient Engagement Issues',
    desc: 'Keeping patients engaged and preventing no-shows is critical for practice success. Our engagement strategies improve patient relationships and retention.',
    
  },
  {
    title: 'Online Visibility Challenges',
    desc: 'Many practices struggle with online presence and local search rankings. Our SEO and digital marketing services improve visibility and attract local patients.',
    
  },
];

function ChallengeItem({ icon, title, desc }) {
  return (
    <li className="mb-4 d-flex align-items-start">
      {icon}
      <div>
        <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222', marginBottom: 2 }}>{title}</div>
        <div style={{ color: '#444', fontSize: '1.01rem', lineHeight: 1.5 }}>{desc}</div>
      </div>
    </li>
  );
}

function MarketingServiceCard({ icon, title, bullets }) {
  return (
    <div
      className="col-12 col-md-6 col-lg-3 mb-4 d-flex align-items-stretch"
      style={{ minWidth: 240 }}
    >
      <div
        className="card h-100 border-0 shadow-sm p-4 text-center"
        style={{
          background: '#f5faff',
          borderRadius: 16,
          transition: 'box-shadow 0.3s, transform 0.3s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(92,189,170,0.13)';
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
          e.currentTarget.style.transform = 'none';
        }}
      >
        <div className="mb-3" style={{ fontSize: 36, color: '#5CBDAA' }}>{icon}</div>
        <h5 className="fw-bold mb-2" style={{ fontSize: '1.13rem', color: '#222' }}>{title}</h5>
        <ul className="list-unstyled" style={{ color: '#444', fontSize: '1.01rem', marginBottom: 0, paddingLeft: 0, textAlign: 'left' }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#5CBDAA', fontWeight: 700, marginRight: 8, fontSize: 18 }}>•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const MarketingPatient = () => {
  const navigate = useNavigate();
  const [headerPad, setHeaderPad] = useState(120);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector('header');
      const infoBar = document.querySelector('.top-info-bar');
      let pad = 120;
      if (header) pad = header.offsetHeight;
      if (infoBar) pad += infoBar.offsetHeight;
      setHeaderPad(pad + 30);
    }
    updatePad();
    window.addEventListener('resize', updatePad);
    return () => window.removeEventListener('resize', updatePad);
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${marketingBg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: `${headerPad}px 0 70px 0`,
          color: "#fff",
          position: "relative",
          fontFamily: "Arial, sans-serif",
          minHeight: "500px",
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div className="row align-items-start">
            <div className="col-md-6">
              <h1
                className="fw-bold"
                style={{
                  fontSize: "48px",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                  color: "#ffffff",
                }}
              >
                Marketing & Patient Engagement Services
              </h1>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#FFFFFF",
                }}
              >
                Compliant | Data-Driven | Growth-Focused
              </div>
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  color: "#f0f0f0",
                }}
              >
                We support healthcare providers, practices, and facilities in building stronger patient relationships and driving sustainable growth through compliant, data-driven marketing and engagement strategies.
              </p>
              <button
                className="btn"
                style={{
                  background: "#5CBDAA",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "18px",
                  padding: "14px 35px",
                  borderRadius: "12px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.background = "#4a9d93")}
                onMouseOut={(e) => (e.target.style.background = "#5CBDAA")}
                onClick={() => navigate("/contact")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{ background: '#f8fafc', padding: '60px 0 40px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Our</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Approach</span>
          </h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.08rem', maxWidth: 700, margin: '0 auto 40px auto' }}>
            Whether you're a solo provider, mid-sized practice, or growing healthcare organization, our marketing approach delivers measurable results.
          </p>
          
          <div className="row justify-content-center mb-5">
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaUsers />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Customized Strategies</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Based on practice goals</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaChartLine />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Data-Driven Decision-Making</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Analytics and performance tracking</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaSyncAlt />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Scalable Solutions</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>As practices grow</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaRegClock />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Operational Alignment</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>With revenue goals</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p style={{ fontSize: '1.1rem', color: '#444', fontStyle: 'italic' }}>
              Our marketing strategies work as an extension of your practice, aligned with your workflows, systems, and growth objectives.
            </p>
          </div>
        </div>
      </section>

      {/* MARKETING & PATIENT ENGAGEMENT SERVICES SECTION */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Marketing & Patient Engagement</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services We Offer</span>
          </h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.08rem', maxWidth: 700, margin: '0 auto' }}>
            Comprehensive marketing and engagement solutions for every practice type and size.
          </p>
          <div className="row justify-content-center">
            {MarketingServiceCards.map((card, idx) => (
              <MarketingServiceCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT & PRICING MODELS SECTION */}
      <section style={{ background: '#f8fafc', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Engagement &</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Pricing Models</span>
          </h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.1rem' }}>We offer flexible pricing models based on your needs</p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaUsers className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Dedicated Marketing Specialist</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Full-time or part-time</li>
                  <li className="mb-2">• Assigned exclusively to your practice</li>
                  <li className="mb-2">• Best for ongoing marketing campaigns</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaRocket className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Campaign-Based Support</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Ideal for specific marketing goals</li>
                  <li className="mb-2">• Patient outreach, email campaigns</li>
                  <li className="mb-2">• One-time or seasonal projects</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaCheckCircle className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Service-Specific</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Focus on individual services</li>
                  <li className="mb-2">• SEO & website optimization only</li>
                  <li className="mb-2">• Or social media management only</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaChartLine className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Pricing Factors</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Scope of marketing services</li>
                  <li className="mb-2">• Campaign complexity & reach</li>
                  <li className="mb-2">• Target audience size</li>
                  <li className="mb-2">• Engagement duration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR MARKETING & PATIENT ENGAGEMENT SERVICES SECTION */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', marginBottom: '14px' }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why Choose Our Marketing &</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Patient Engagement Services?</span>
          </h2>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '14px', marginLeft: 0, marginRight: 0 }}>
            <CardItem icon={<FaShieldAlt />} title="HIPAA-Compliant" desc="All marketing campaigns and patient communications follow strict HIPAA compliance standards and healthcare regulations." />
            <CardItem icon={<FaCheckCircle />} title="Healthcare-Focused" desc="Specialized in healthcare marketing with deep understanding of patient acquisition and engagement strategies." />
            <CardItem icon={<FaChartLine />} title="Results-Driven" desc="Data-driven approach with measurable outcomes to grow your practice and improve patient engagement." />
            <CardItem icon={<FaSyncAlt />} title="Scalable & Flexible" desc="Marketing strategies that grow with your practice, from single campaigns to comprehensive marketing programs." />
            <CardItem icon={<FaComments />} title="Dedicated Support" desc="Personal account management with regular reporting and campaign optimization for maximum ROI." />
            <CardItem icon={<FaDesktop />} title="Multi-Channel Approach" desc="Integrated marketing across digital, email, social media, and direct outreach channels for maximum reach." />
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT SECTION */}
      <section style={{ background: '#5DC0A7', padding: '70px 0 60px 0', color: '#fff' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-3" style={{ fontSize: '2.4rem', letterSpacing: '-1px' }}>Who We Support</h2>
          <p className="text-center mb-5" style={{ color: '#dbeafe', fontSize: '1.15rem', maxWidth: 700, margin: '0 auto' }}>
            Our marketing and patient engagement services work for practices of all sizes and specialties.
          </p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Independent Practices</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Multi-Specialty Clinics</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Physical Therapy Centers</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Rehabilitation Centers</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Behavioral Health Practices</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Specialty Providers</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Healthcare Facilities</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON CHALLENGES WE SOLVE SECTION */}
      <section style={{ background: '#fff', padding: '70px 0 40px 0' }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <h2 style={{ fontWeight: 700, fontSize: '2.1rem', marginBottom: 10, letterSpacing: '-1px' }}>
                <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Common Marketing & Patient Engagement</span>{' '}
                <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Challenges We Solve</span>
              </h2>
              <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: 32, maxWidth: 520 }}>
                Healthcare marketing and patient engagement can be complex and time-consuming. Let our marketing experts handle these common challenges:
              </p>
              <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
                {MarketingChallenges.map((item, idx) => (
                  <ChallengeItem key={idx} {...item} />
                ))}
              </ul>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <div
                style={{
                  background: 'linear-gradient(135deg, #e0f2fe 0%, #d1fae5 100%)',
                  borderRadius: 20,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                  padding: '38px 36px 32px 36px',
                  maxWidth: 420,
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: '1.45rem', color: '#111', marginBottom: 12 }}>
                  Ready to Grow Your Practice?
                </h3>
                <p style={{ color: '#222', fontSize: '1.07rem', marginBottom: 22 }}>
                  Start with a single marketing campaign or build a comprehensive patient engagement strategy tailored to your practice.
                </p>
                <ul className="list-unstyled mb-4" style={{ color: '#059669', fontSize: '1.07rem', marginBottom: 24 }}>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Free consultation & marketing assessment
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Dedicated marketing specialist
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    HIPAA-compliant strategies
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Start with one service or go comprehensive
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn w-100"
                  style={{
                    background: 'linear-gradient(90deg, #5CBDAA 0%, #10b981 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.13rem',
                    padding: '14px 0',
                    borderRadius: '999px',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(92,189,170,0.08)',
                    transition: 'background 0.3s',
                    marginTop: 8,
                    letterSpacing: '0.01em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    cursor: 'pointer',
                  }}
                  tabIndex="0"
                  aria-label="Get Started Today"
                  onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #4a9d93 0%, #059669 100%)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #5CBDAA 0%, #10b981 100%)')}
                  onClick={() => navigate("/contact")}
                >
                  Get Started Today{' '}
                  <span
                    style={{
                      fontSize: 18,
                      marginLeft: 4,
                      display: 'inline-block',
                      transform: 'translateY(1px)',
                    }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Secudal />
      
      <section style={{ background: "#fff", padding: "48px 0", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: 700, width: "100%", margin: "0 auto", background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: "40px 32px 32px 32px", textAlign: "center", border: "1px solid #f3f4f6" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 24 }}>
            <span style={{ background: "#e0f2fe", color: "#5CBDAA", borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="4" stroke="#5CBDAA" strokeWidth="2" fill="none"/>
                <path d="M4 20c0-3.333 2.667-6 8-6s8 2.667 8 6" stroke="#5CBDAA" strokeWidth="2" fill="none"/>
              </svg>
            </span>
          </div>
          <blockquote style={{ fontSize: "1.25rem", color: "#374151", fontStyle: "italic", marginBottom: 24, lineHeight: 1.5, fontWeight: 400 }}>
            "Working with HBS has been a game-changer. The team is professional, responsive, and has streamlined our billing operations seamlessly."
          </blockquote>
          <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "24px 0" }} />
          <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "1.05rem" }}>
            Herma Thompson PMHNP-BC
          </div>
          <div style={{ color: "#6b7280", fontSize: "0.95rem" }}>
            Nurse Practitioner - Psych/Mental Health
          </div>
        </div>
      </section>
    </>
  );
};

function CardItem({ icon, title, desc }) {
  return (
    <div
      className="col-md-3 card-feature"
      style={{
        background: '#f9fafd',
        borderRadius: '14px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        padding: '22px 16px',
        margin: '8px',
        minWidth: 220,
        maxWidth: 320,
        textAlign: 'center',
        transition: 'box-shadow 0.3s, border 0.3s, transform 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(92,189,170,0.10)';
        e.currentTarget.style.border = '1.5px solid #5CBDAA';
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.025)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
        e.currentTarget.style.border = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px', transition: 'color 0.3s' }}>
        {icon}
      </div>
      <h3 style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '7px', letterSpacing: '-0.2px' }}>{title}</h3>
      <p style={{ color: '#333', fontSize: '0.97rem', lineHeight: '1.5', margin: 0 }}>{desc}</p>
    </div>
  );
}

export default MarketingPatient;

