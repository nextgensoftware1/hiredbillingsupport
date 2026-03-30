import operationsBg from "../../assets/images/hero/operations-management.webp";
import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegClock, FaCheckCircle, FaChartLine, FaComments, FaShieldAlt, FaSyncAlt, FaFileAlt, FaRocket, FaUsers, FaPhone, FaBullhorn, FaDesktop, FaEnvelope, FaSearch, FaGlobe } from 'react-icons/fa';
import Secudal from "../../components/practicelaunch/secudal";

const OperationsServiceCards = [
  {
    icon: <FaUsers className="text-primary fs-3 mb-2" />,
    title: 'Workflow Coordination & Oversight',
    bullets: [
      'Daily workflow planning and task prioritization',
      'Cross-team coordination across front desk, billing, and support',
      'Escalation handling for blocked or delayed tasks',
      'Standard operating procedure (SOP) execution oversight',
      'Performance-focused handoff management',
      'Operational continuity across shifts and functions'
    ],
  },
  {
    icon: <FaDesktop className="text-primary fs-3 mb-2" />,
    title: 'Scheduling & Capacity Management',
    bullets: [
      'Provider schedule optimization and slot balancing',
      'Capacity planning based on demand trends',
      'No-show and cancellation impact controls',
      'Resource allocation for peak periods',
      'Throughput and utilization improvement tracking'
    ],
  },
  {
    icon: <FaEnvelope className="text-primary fs-3 mb-2" />,
    title: 'Reporting & KPI Management',
    bullets: [
      'Operational dashboard creation and maintenance',
      'Daily/weekly/monthly KPI tracking',
      'Trend analysis for productivity and quality metrics',
      'Variance reporting and root-cause summaries',
      'Leadership-ready performance reporting'
    ],
  },
  {
    icon: <FaGlobe className="text-primary fs-3 mb-2" />,
    title: 'Process Standardization & SOP Control',
    bullets: [
      'SOP documentation and updates',
      'Process mapping for core operations',
      'Control checkpoints and QA gates',
      'Execution consistency monitoring',
      'Continuous process refinement'
    ],
  },
  {
    icon: <FaBullhorn className="text-primary fs-3 mb-2" />,
    title: 'Team Productivity Optimization',
    bullets: [
      'Task ownership clarity and accountability',
      'Productivity bottleneck analysis',
      'Turnaround time reduction initiatives',
      'Performance coaching support',
      'Balanced workload planning',
      'Team-level output monitoring'
    ],
  },
  {
    icon: <FaPhone className="text-primary fs-3 mb-2" />,
    title: 'Issue Resolution & Escalation Management',
    bullets: [
      'Incident triage and escalation workflows',
      'Rapid resolution coordination across teams',
      'Dependency and blocker tracking',
      'Action log ownership and follow-through',
      'Preventive controls for repeat issues'
    ],
  },
  {
    icon: <FaSearch className="text-primary fs-3 mb-2" />,
    title: 'Operational Analytics & Improvement',
    bullets: [
      'Cycle-time and throughput analytics',
      'Performance variance diagnostics',
      'Operational benchmark comparisons',
      'Improvement roadmap planning',
      'Ongoing optimization governance'
    ],
  },
  {
    icon: <FaShieldAlt className="text-primary fs-3 mb-2" />,
    title: 'Governance & Compliance Alignment',
    bullets: [
      'Policy-aligned operational controls',
      'Documentation and audit trail readiness',
      'Regulatory-aware process execution',
      'Clear governance for sustained performance'
    ],
  },
];

const OperationsChallenges = [
  {
    title: 'Workflow Bottlenecks',
    desc: 'Operational slowdowns reduce throughput and delay outcomes. We identify and remove bottlenecks across critical workflows.',
   
  },
  {
    title: 'Resource Constraints',
    desc: 'Limited staff and competing priorities can disrupt daily operations. We optimize capacity and task ownership without increasing overhead.',
    
  },
  {
    title: 'Inconsistent Execution',
    desc: 'Variation in team execution creates quality and performance gaps. We standardize processes and enforce measurable controls.',
   
  },
  {
    title: 'Escalation Overload',
    desc: 'Frequent unresolved issues consume leadership time. We implement escalation pathways that improve response speed and accountability.',
    
  },
  {
    title: 'Limited Operational Visibility',
    desc: 'Without KPI visibility, teams can’t proactively manage performance. We build actionable reporting for real-time decision-making.',
    
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

function OperationsServiceCard({ icon, title, bullets }) {
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

const OperationsManagement = () => {
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
          backgroundImage: `url(${operationsBg})`,
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
                Operations Management Services
              </h1>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#FFFFFF",
                }}
              >
                Process-Driven | KPI-Focused | Scalable
              </div>
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  color: "#f0f0f0",
                }}
              >
                We help healthcare organizations streamline daily operations, improve team efficiency, and maintain consistent execution through structured operations management frameworks.
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
            Whether you're a solo provider, multi-site practice, or growing healthcare organization, our operations approach delivers measurable performance improvement.
          </p>
          
          <div className="row justify-content-center mb-5">
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaUsers />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Workflow Design</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Built around operational priorities</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaChartLine />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>KPI-Led Decisions</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Real-time metrics and reporting</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaSyncAlt />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Scalable Operations</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>As teams and volume grow</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaRegClock />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Execution Discipline</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Aligned with service goals</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p style={{ fontSize: '1.1rem', color: '#444', fontStyle: 'italic' }}>
              Our operations model works as an extension of your team, aligned with your workflows, systems, and performance objectives.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONS MANAGEMENT SERVICES SECTION */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Operations Management</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services We Offer</span>
          </h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.08rem', maxWidth: 700, margin: '0 auto' }}>
            Comprehensive operations solutions designed for consistency, productivity, and sustainable growth.
          </p>
          <div className="row justify-content-center">
            {OperationsServiceCards.map((card, idx) => (
              <OperationsServiceCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT & PRICING MODELS SECTION */}
      <section style={{ background: '#f8fafc', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Engagement &</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Delivery Models</span>
          </h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.1rem' }}>Flexible operating models tailored to your goals and team structure</p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaUsers className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Dedicated Operations Specialist</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Full-time or part-time</li>
                  <li className="mb-2">• Assigned exclusively to your practice</li>
                  <li className="mb-2">• Best for continuous workflow management</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaRocket className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Project-Based Support</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Ideal for specific operational goals</li>
                  <li className="mb-2">• Throughput, SOP, or KPI projects</li>
                  <li className="mb-2">• One-time or seasonal projects</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaCheckCircle className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Function-Specific</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Focus on specific operational functions</li>
                  <li className="mb-2">• Scheduling, reporting, or QA only</li>
                  <li className="mb-2">• Modular support as needed</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaChartLine className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Planning Factors</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Scope of operational support</li>
                  <li className="mb-2">• Process complexity & dependencies</li>
                  <li className="mb-2">• Team size and daily volume</li>
                  <li className="mb-2">• Engagement duration and outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR OPERATIONS MANAGEMENT SERVICES SECTION */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', marginBottom: '14px' }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why Choose Our Operations</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Management Services?</span>
          </h2>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '14px', marginLeft: 0, marginRight: 0 }}>
            <CardItem icon={<FaShieldAlt />} title="Control-Driven" desc="Built-in operational controls improve consistency, accountability, and risk management across your workflows." />
            <CardItem icon={<FaCheckCircle />} title="Healthcare Operations Expertise" desc="Deep healthcare operations understanding across scheduling, coordination, and process execution." />
            <CardItem icon={<FaChartLine />} title="Performance-Focused" desc="KPI-led approach with measurable outcomes for efficiency, quality, and throughput." />
            <CardItem icon={<FaSyncAlt />} title="Scalable & Flexible" desc="Operations frameworks that scale from single-site practices to multi-location organizations." />
            <CardItem icon={<FaComments />} title="Dedicated Support" desc="Hands-on operational support with regular reviews, action tracking, and optimization guidance." />
            <CardItem icon={<FaDesktop />} title="System-Aligned Execution" desc="Aligned with your existing systems, tools, and workflows to minimize disruption and speed adoption." />
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT SECTION */}
      <section style={{ background: '#5DC0A7', padding: '70px 0 60px 0', color: '#fff' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-3" style={{ fontSize: '2.4rem', letterSpacing: '-1px' }}>Who We Support</h2>
          <p className="text-center mb-5" style={{ color: '#dbeafe', fontSize: '1.15rem', maxWidth: 700, margin: '0 auto' }}>
            Our operations management services support practices and healthcare organizations at every stage of growth.
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
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Primary Care Groups</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Specialty Practices</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Behavioral Health Practices</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Provider Networks</h5>
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
                <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Common Operations Management</span>{' '}
                <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Challenges We Solve</span>
              </h2>
              <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: 32, maxWidth: 520 }}>
                Healthcare operations can become complex and fragmented over time. Let our operations specialists solve these common challenges:
              </p>
              <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
                {OperationsChallenges.map((item, idx) => (
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
                  Ready to Optimize Your Operations?
                </h3>
                <p style={{ color: '#222', fontSize: '1.07rem', marginBottom: 22 }}>
                  Start with one operational function or build a complete management framework tailored to your organization.
                </p>
                <ul className="list-unstyled mb-4" style={{ color: '#059669', fontSize: '1.07rem', marginBottom: 24 }}>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Free consultation & operations assessment
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Dedicated operations specialist
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    KPI-driven execution plans
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Start with one workflow or go enterprise-wide
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
            "Working with HBS transformed our daily operations. We now have clearer workflows, faster execution, and stronger team accountability across departments."
          </blockquote>
          <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "24px 0" }} />
          <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "1.05rem" }}>
            Rachel Morgan, Practice Operations Lead
          </div>
          <div style={{ color: "#6b7280", fontSize: "0.95rem" }}>
            Multi-Site Healthcare Operations
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

export default OperationsManagement;

