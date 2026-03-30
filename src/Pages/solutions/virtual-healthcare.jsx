import cardiologyBg from "../../assets/images/hero/Virtual_Healthcare.webp";
import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegClock, FaCheckCircle, FaChartLine, FaComments, FaShieldAlt, FaSyncAlt, FaFileAlt, FaRocket, FaUsers, FaPhone, FaBullhorn, FaDesktop } from 'react-icons/fa';
import Secudal from "../../components/practicelaunch/secudal";

const VirtualServiceCards = [
  {
    icon: <FaChartLine className="text-primary fs-3 mb-2" />,
    title: 'Revenue Cycle & Billing Support',
    bullets: [
      'Insurance eligibility verification',
      'Pre-authorization & referrals',
      'Charge entry & claim submission',
      'Claim follow-ups & AR management',
      'Payment posting & reconciliation',
      'Denial analysis & rework'
    ],
  },
  {
    icon: <FaUsers className="text-primary fs-3 mb-2" />,
    title: 'Patient Scheduling & Intake Management',
    bullets: [
      'Appointment scheduling & confirmations',
      'New patient intake processing',
      'Demographic & insurance data entry',
      'Referral intake & order coordination',
      'Patient reminders & follow-ups',
      'EHR/EMR documentation support'
    ],
  },
  {
    icon: <FaPhone className="text-primary fs-3 mb-2" />,
    title: 'Virtual Front Desk & Call Support',
    bullets: [
      'Incoming call handling',
      'Appointment inquiries & rescheduling',
      'Patient follow-ups',
      'Missed call recovery',
      'After-hours call support (optional)'
    ],
  },
  {
    icon: <FaBullhorn className="text-primary fs-3 mb-2" />,
    title: 'Marketing & Outreach Support',
    bullets: [
      'Cold calling for patient outreach',
      'Referral source follow-ups',
      'Practice marketing calls',
      'Email campaigns & patient outreach',
      'Lead qualification & tracking',
      'CRM data updates'
    ],
  },
];

const VirtualChallenges = [
  {
    title: 'Staffing Shortages',
    desc: 'Healthcare staffing is challenging and expensive. Our virtual agents provide immediate support without recruitment hassles.',
   
  },
  {
    title: 'High Operational Costs',
    desc: 'In-house hiring comes with salary, benefits, and overhead costs. Virtual talent reduces costs by up to 60%.',
    
  },
  {
    title: 'Scaling Difficulties',
    desc: 'Growing practices need flexible staffing. Our virtual model scales up or down based on your workload needs.',
   
  },
  {
    title: 'Limited Expertise',
    desc: 'Finding staff with healthcare-specific skills is difficult. Our agents are trained in US healthcare workflows and HIPAA compliance.',
    
  },
  {
    title: 'Administrative Overload',
    desc: 'Providers spend too much time on admin tasks. Our virtual assistants handle non-clinical work so you focus on patient care.',
    
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

function VirtualServiceCard({ icon, title, bullets }) {
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

const VirtualHealthcare = () => {
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
          backgroundImage: `url(${cardiologyBg})`,
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
                Virtual Healthcare  Solutions
              </h1>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#FFFFFF",
                }}
              >
                On-Demand | Scalable | Cost-Effective
              </div>
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  color: "#f0f0f0",
                }}
              >
                We help medical providers and healthcare practices hire trained, HIPAA-compliant virtual healthcare professionals who work remotely to support daily operations, revenue cycle, and growth — without the overhead of in-house hiring.
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

      {/* HOW OUR VIRTUAL TALENT MODEL WORKS */}
      <section style={{ background: '#f8fafc', padding: '60px 0 40px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>How Our Virtual Talent Model Works</h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.08rem', maxWidth: 700, margin: '0 auto 40px auto' }}>
            Whether you're a solo provider, mid-sized practice, or growing healthcare organization, our virtual talent model gives you flexibility, control, and results.
          </p>
          
          <div className="row justify-content-center mb-5">
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaUsers />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Hire Dedicated Virtual Agents</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>For specific roles</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaDesktop />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Choose Services</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Individual or bundled support</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaChartLine />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Scale Flexibly</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Up or down based on workload</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaRegClock />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Flexible Pricing</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Based on complexity and scope</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p style={{ fontSize: '1.1rem', color: '#444', fontStyle: 'italic' }}>
              Our virtual agents work as an extension of your practice, aligned with your workflows, systems, and goals.
            </p>
          </div>
        </div>
      </section>

      {/* VIRTUAL ASSISTANT SERVICES SECTION */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>Virtual Assistant Services We Offer</h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.08rem', maxWidth: 700, margin: '0 auto' }}>
            Comprehensive virtual healthcare support services for every practice type and size.
          </p>
          <div className="row justify-content-center">
            {VirtualServiceCards.map((card, idx) => (
              <VirtualServiceCard key={idx} {...card} />
            ))}
          </div>
          
          {/* Additional Service Card */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex align-items-stretch" style={{ minWidth: 240 }}>
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
                <div className="mb-3" style={{ fontSize: 36, color: '#5CBDAA' }}>
                  <FaFileAlt />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.13rem', color: '#222' }}>Administrative & Operational Support</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1.01rem', marginBottom: 0, paddingLeft: 0, textAlign: 'left' }}>
                  <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#5CBDAA', fontWeight: 700, marginRight: 8, fontSize: 18 }}>•</span>
                    <span>Provider enrollment & credentialing support</span>
                  </li>
                  <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#5CBDAA', fontWeight: 700, marginRight: 8, fontSize: 18 }}>•</span>
                    <span>Documentation management</span>
                  </li>
                  <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#5CBDAA', fontWeight: 700, marginRight: 8, fontSize: 18 }}>•</span>
                    <span>Reporting & dashboard updates</span>
                  </li>
                  <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#5CBDAA', fontWeight: 700, marginRight: 8, fontSize: 18 }}>•</span>
                    <span>Workflow coordination</span>
                  </li>
                  <li style={{ marginBottom: 8, display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#5CBDAA', fontWeight: 700, marginRight: 8, fontSize: 18 }}>•</span>
                    <span>Back-office administrative tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT & PRICING MODELS SECTION */}
      <section style={{ background: '#f8fafc', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Engagement & Pricing Models</h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.1rem' }}>We offer flexible pricing models based on your needs</p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaUsers className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Dedicated Virtual Agent</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Full-time or part-time</li>
                  <li className="mb-2">• Assigned exclusively to your practice</li>
                  <li className="mb-2">• Best for ongoing operational support</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaRocket className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Task-Based Support</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Ideal for short-term needs</li>
                  <li className="mb-2">• Billing clean-ups, AR recovery</li>
                  <li className="mb-2">• One-time or recurring projects</li>
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
                  <li className="mb-2">• Hire talent for individual services</li>
                  <li className="mb-2">• Eligibility + Prior Auth only</li>
                  <li className="mb-2">• Or Scheduling only</li>
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
                  <li className="mb-2">• Scope of services</li>
                  <li className="mb-2">• Skill level required</li>
                  <li className="mb-2">• Volume & complexity</li>
                  <li className="mb-2">• Engagement duration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR VIRTUAL HEALTHCARE TALENT SECTION */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', marginBottom: '14px' }}>
            Why Choose Our Virtual Healthcare Talent?
          </h2>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '14px', marginLeft: 0, marginRight: 0 }}>
            <CardItem icon={<FaShieldAlt />} title="HIPAA-Compliant" desc="Healthcare-trained professionals with strict compliance protocols and security measures." />
            <CardItem icon={<FaCheckCircle />} title="US Healthcare Experience" desc="Experienced in US healthcare workflows, insurance processes, and EHR systems." />
            <CardItem icon={<FaChartLine />} title="Cost-Effective" desc="Reduce staffing costs by up to 60% compared to in-house hiring with same quality output." />
            <CardItem icon={<FaSyncAlt />} title="Scalable & Flexible" desc="Scale up or down based on workload. Perfect for seasonal variations or growth phases." />
            <CardItem icon={<FaComments />} title="Dedicated Oversight" desc="Personal account management with regular reporting and performance monitoring." />
            <CardItem icon={<FaDesktop />} title="Seamless Integration" desc="Quick onboarding with your existing systems, EHRs, and practice workflows." />
          </div>
        </div>
      </section>

      {/* WHO THIS IS BEST FOR SECTION */}
      <section style={{ background: '#5DC0A7', padding: '70px 0 60px 0', color: '#fff' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-3" style={{ fontSize: '2.4rem', letterSpacing: '-1px' }}>Who This Is Best For</h2>
          <p className="text-center mb-5" style={{ color: '#dbeafe', fontSize: '1.15rem', maxWidth: 700, margin: '0 auto' }}>
            Our virtual healthcare talent solutions work for practices of all sizes and specialties.
          </p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Solo Providers</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Private Practices</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Group Practices</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Imaging Centers</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Behavioral Health</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Billing Companies</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Healthcare Startups</h5>
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
              <h2 style={{ fontWeight: 700, fontSize: '2.1rem', marginBottom: 10, letterSpacing: '-1px' }}>Common Healthcare Staffing Challenges We Solve</h2>
              <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: 32, maxWidth: 520 }}>
                Healthcare staffing is complex and expensive. Let our virtual talent experts handle these common challenges:
              </p>
              <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
                {VirtualChallenges.map((item, idx) => (
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
                  Ready to Build Your Virtual Team?
                </h3>
                <p style={{ color: '#222', fontSize: '1.07rem', marginBottom: 22 }}>
                  Start with one virtual assistant or build an entire remote support team tailored to your practice.
                </p>
                <ul className="list-unstyled mb-4" style={{ color: '#059669', fontSize: '1.07rem', marginBottom: 24 }}>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Free consultation & needs assessment
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Dedicated virtual talent specialist
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Flexible engagement models
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

export default VirtualHealthcare;

