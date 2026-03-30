import operationsBg from "../../assets/images/hero/enterprise-medical-operation.webp";
import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegClock, FaCheckCircle, FaChartLine, FaComments, FaShieldAlt, FaSyncAlt, FaFileAlt, FaRocket, FaUsers, FaPhone, FaBullhorn, FaDesktop, FaEnvelope, FaSearch, FaGlobe } from 'react-icons/fa';
import Secudal from "../../components/practicelaunch/secudal";

const OperationsServiceCards = [
  {
    icon: <FaUsers className="text-primary fs-3 mb-2" />,
    title: 'Enterprise Workflow Command',
    bullets: [
      'Daily command-center workflow planning and prioritization',
      'Cross-functional orchestration across access, billing, and operations',
      'Escalation routing for blocked, delayed, or high-risk tasks',
      'SOP adherence monitoring across all operating units',
      'Performance-based handoff management with accountability controls',
      'Operational continuity across locations, shifts, and departments'
    ],
  },
  {
    icon: <FaDesktop className="text-primary fs-3 mb-2" />,
    title: 'Provider Access & Capacity Optimization',
    bullets: [
      'Enterprise scheduling optimization and slot governance',
      'Location-level capacity planning based on forecasted demand',
      'No-show and cancellation mitigation controls',
      'Staff and resource allocation for peak utilization windows',
      'Throughput, utilization, and leakage monitoring'
    ],
  },
  {
    icon: <FaEnvelope className="text-primary fs-3 mb-2" />,
    title: 'Executive Reporting & KPI Governance',
    bullets: [
      'Leadership dashboard design and governance',
      'Daily, weekly, and monthly KPI scorecards',
      'Productivity, quality, and financial trend analysis',
      'Variance reporting with actionable root-cause diagnostics',
      'Board and executive-ready performance packs'
    ],
  },
  {
    icon: <FaGlobe className="text-primary fs-3 mb-2" />,
    title: 'Standardization & SOP Control',
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
    title: 'Team Productivity Engineering',
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
    title: 'Incident Resolution & Escalation Management',
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
    title: 'Operational Analytics & Continuous Improvement',
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
    title: 'Governance, Risk & Compliance Alignment',
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
    title: 'Cross-Location Workflow Bottlenecks',
    desc: 'As organizations scale, delays in one department or site can disrupt the entire care-delivery chain. We identify and resolve high-impact workflow constraints.',
   
  },
  {
    title: 'Capacity Imbalance Across Sites',
    desc: 'Uneven provider schedules, staffing gaps, and demand spikes reduce utilization and increase wait times. We optimize enterprise-wide capacity and staffing alignment.',
    
  },
  {
    title: 'Inconsistent SOP Execution',
    desc: 'Different teams and locations often execute the same process in different ways, creating quality and compliance risk. We standardize SOPs with measurable controls.',
   
  },
  {
    title: 'Escalation Overload',
    desc: 'Unstructured escalation pathways pull leadership into daily firefighting. We implement triage protocols that improve response time and ownership.',
    
  },
  {
    title: 'Limited Enterprise Visibility',
    desc: 'Without unified KPIs, executives cannot compare performance across locations or functions. We build real-time reporting for proactive leadership decisions.',
    
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

const EnterpriseMedicalOperations = () => {
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
                Enterprise Medical Operations Management
              </h1>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#FFFFFF",
                }}
              >
                Governance-Driven | KPI-Led | Multi-Location Ready
              </div>
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  color: "#f0f0f0",
                }}
              >
                We help enterprise healthcare groups run high-performance operations across locations, departments, and provider teams through standardized frameworks, real-time KPIs, and disciplined execution.
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
                Book Enterprise Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{ background: '#f8fafc', padding: '60px 0 40px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>Our Enterprise Approach</h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.08rem', maxWidth: 700, margin: '0 auto 40px auto' }}>
            Designed for medium-to-large organizations, our model creates operational discipline, system-wide visibility, and repeatable performance across enterprise care operations.
          </p>
          
          <div className="row justify-content-center mb-5">
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaUsers />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Workflow Design</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Designed for enterprise complexity</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaChartLine />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>KPI-Led Decisions</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Executive dashboards and scorecards</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaSyncAlt />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Scalable Operations</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Across sites, teams, and service lines</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="text-center p-3">
                <div style={{ fontSize: '2rem', color: '#5CBDAA', marginBottom: '10px' }}>
                  <FaRegClock />
                </div>
                <h5 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Execution Discipline</h5>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Consistent SOP execution at scale</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p style={{ fontSize: '1.1rem', color: '#444', fontStyle: 'italic' }}>
              Our enterprise operations model integrates with your workflows, systems, and leadership priorities to drive predictable, measurable performance.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONS MANAGEMENT SERVICES SECTION */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>Enterprise Operations Services We Offer</h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.08rem', maxWidth: 700, margin: '0 auto' }}>
            End-to-end operations support designed for high-volume healthcare organizations that need consistency, throughput, and scalable governance.
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
          <h2 className="text-center fw-bold mb-4">Enterprise Engagement Models</h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.1rem' }}>Flexible delivery structures aligned to enterprise operating goals and governance needs</p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaUsers className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Dedicated Operations Pod</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Full-time or hybrid support model</li>
                  <li className="mb-2">• Dedicated team aligned to your organization</li>
                  <li className="mb-2">• Best for continuous enterprise operations oversight</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaRocket className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Transformation Projects</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Ideal for high-impact operational change</li>
                  <li className="mb-2">• Throughput, access, SOP, and KPI initiatives</li>
                  <li className="mb-2">• Milestone-based implementation delivery</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaCheckCircle className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Function-Specific Optimization</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Focused improvement by function</li>
                  <li className="mb-2">• Access center, reporting, QA, or escalation ops</li>
                  <li className="mb-2">• Modular engagement with enterprise controls</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4" style={{ background: '#fff', borderRadius: 16 }}>
                <div className="mb-3">
                  <FaChartLine className="text-primary" style={{ fontSize: 32, color: '#5CBDAA' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>Engagement Planning Factors</h5>
                <ul className="list-unstyled" style={{ color: '#444', fontSize: '1rem' }}>
                  <li className="mb-2">• Multi-site scope and service-line complexity</li>
                  <li className="mb-2">• Cross-functional dependencies and governance needs</li>
                  <li className="mb-2">• Team scale, throughput, and KPI maturity</li>
                  <li className="mb-2">• Timeline, outcomes, and executive priorities</li>
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
            Why Choose Our Enterprise Operations Team?
          </h2>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '14px', marginLeft: 0, marginRight: 0 }}>
            <CardItem icon={<FaShieldAlt />} title="Control-Driven Governance" desc="Built-in controls improve consistency, accountability, and operational risk management across enterprise workflows." />
            <CardItem icon={<FaCheckCircle />} title="Enterprise Healthcare Expertise" desc="Deep experience managing high-volume, multi-location healthcare operations and execution standards." />
            <CardItem icon={<FaChartLine />} title="Performance Accountability" desc="KPI-led operating cadence with measurable targets for throughput, quality, and service reliability." />
            <CardItem icon={<FaSyncAlt />} title="Scalable Execution Model" desc="Frameworks that scale across sites, departments, and service lines without losing process discipline." />
            <CardItem icon={<FaComments />} title="Leadership-Level Partnership" desc="Hands-on strategic support with regular business reviews, escalation oversight, and optimization planning." />
            <CardItem icon={<FaDesktop />} title="System-Integrated Delivery" desc="Aligned with your existing EHR, PM, and workflow systems to accelerate adoption and reduce disruption." />
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT SECTION */}
      <section style={{ background: '#5DC0A7', padding: '70px 0 60px 0', color: '#fff' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-3" style={{ fontSize: '2.4rem', letterSpacing: '-1px' }}>Enterprise Organizations We Support</h2>
          <p className="text-center mb-5" style={{ color: '#dbeafe', fontSize: '1.15rem', maxWidth: 700, margin: '0 auto' }}>
            Our enterprise operations services support complex healthcare organizations with multi-site infrastructure and high-performance goals.
          </p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Regional Health Systems</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Multi-Specialty Enterprise Groups</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Large Primary Care Networks</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Specialty Service-Line Organizations</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Behavioral Health Enterprises</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Provider Network Organizations</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-3">
              <div className="text-center p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h5 style={{ fontWeight: 700, marginBottom: '8px',color: '#FFFFFF' }}>Hospital-Associated Outpatient Groups</h5>
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
              <h2 style={{ fontWeight: 700, fontSize: '2.1rem', marginBottom: 10, letterSpacing: '-1px' }}>Enterprise Operations Challenges We Solve</h2>
              <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: 32, maxWidth: 520 }}>
                Enterprise healthcare operations become complex quickly across teams and sites. Our specialists solve the highest-impact operational barriers:
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
                  Ready to Modernize Enterprise Operations?
                </h3>
                <p style={{ color: '#222', fontSize: '1.07rem', marginBottom: 22 }}>
                  Start with one business-critical function or deploy a full enterprise operations framework aligned to your strategic goals.
                </p>
                <ul className="list-unstyled mb-4" style={{ color: '#059669', fontSize: '1.07rem', marginBottom: 24 }}>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Free enterprise operations assessment
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Dedicated enterprise operations team
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    KPI-governed execution roadmap
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                    Phased rollout from one workflow to enterprise-wide deployment
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
                  aria-label="Book Enterprise Consultation"
                  onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #4a9d93 0%, #059669 100%)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #5CBDAA 0%, #10b981 100%)')}
                  onClick={() => navigate("/contact")}
                >
                  Book Enterprise Consultation{' '}
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
            "HBS helped us operationalize a true enterprise model across five locations. We improved throughput, reduced escalation load, and gained executive-level visibility into performance in under one quarter."
          </blockquote>
          <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "24px 0" }} />
          <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "1.05rem" }}>
            Andrea Collins, VP of Operations
          </div>
          <div style={{ color: "#6b7280", fontSize: "0.95rem" }}>
            Enterprise Multi-Location Medical Group
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

export default EnterpriseMedicalOperations;

