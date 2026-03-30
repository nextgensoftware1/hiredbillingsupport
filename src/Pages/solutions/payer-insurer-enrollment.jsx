import cardiologyBg from "../../assets/images/hero/Payer_banner.webp";
import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegClock, FaCheckCircle, FaChartLine, FaComments, FaShieldAlt, FaSyncAlt, FaFileAlt, FaRocket } from 'react-icons/fa';
import Secudal from "../../components/practicelaunch/secudal";
  const EnrolmentCards = [
    {
      icon: <FaFileAlt className="text-primary fs-3 mb-2" />,
      title: 'Initial Payer Enrolment',
      bullets: [
        'Medicare, Medicaid, and commercial plans',
        'CAQH & PECOS setup and maintenance',
        'Provider agreements & credentialing',
        'All major payers: BCBS, Aetna, UHC, Cigna, Humana',
      ],
    },
    {
      icon: <FaCheckCircle className="text-primary fs-3 mb-2" />,
      title: 'Re-Enrolment & Revalidation',
      bullets: [
        'Medicare revalidation every 5 years',
        'Medicaid & CAQH re-attestation',
        'Payer roster updates & tracking',
        'Proactive deadline monitoring',
      ],
    },
    {
      icon: <FaRocket className="text-primary fs-3 mb-2" />,
      title: 'Multi-Location & Group Practice',
      bullets: [
        'Group NPI & multi-state licensure',
        'Facility & location credentialing',
        'Provider roster management',
        'Practice expansion support',
      ],
    },
    {
      icon: <FaChartLine className="text-primary fs-3 mb-2" />,
      title: 'Enrolment Status Tracking',
      bullets: [
        'Real-time application dashboard',
        'Payer follow-up & appeals',
        'Effective date confirmation',
        'Credentialing database updates',
      ],
    },
  ];

const EnrolmentChallenges = [
  {
    title: 'Long Processing Times',
    desc: 'Standard Enrolment takes 120–180 days. We reduce this to 60–90 days through strategic follow-up.',
    icon: (
      <span
        style={{
          background: '#ff6b00',
          color: '#fff',
          borderRadius: 8,
          width: 36,
          height: 36,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 20,
          marginRight: 16,
        }}
        aria-label="Clock Icon"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="10" fill="none" />
          <path d="M10 5v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    ),
  },
  {
    title: 'Complex Documentation',
    desc: 'Each payer has unique requirements. We know exactly what each payer needs and ensure 100% accuracy.',
    icon: (
      <span
        style={{
          background: '#ff6b00',
          color: '#fff',
          borderRadius: 8,
          width: 36,
          height: 36,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 20,
          marginRight: 16,
        }}
        aria-label="Document Icon"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" aria-hidden="true">
          <rect x="4" y="4" width="12" height="12" rx="2" fill="none" stroke="#fff" strokeWidth="2" />
          <path d="M7 8h6M7 12h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    ),
  },
  {
    title: 'Missing Deadlines',
    desc: 'Revalidation and attestation deadlines can result in termination. We track all deadlines proactively.',
    icon: (
      <span
        style={{
          background: '#ff6b00',
          color: '#fff',
          borderRadius: 8,
          width: 36,
          height: 36,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 20,
          marginRight: 16,
        }}
        aria-label="Deadline Icon"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="8" stroke="#fff" strokeWidth="2" />
          <path d="M10 6v4l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    ),
  },
  {
    title: 'Application Denials',
    desc: 'Errors and incomplete applications cause delays. Our 98% approval rate eliminates this frustration.',
    icon: (
      <span
        style={{
          background: '#ff6b00',
          color: '#fff',
          borderRadius: 8,
          width: 36,
          height: 36,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 20,
          marginRight: 16,
        }}
        aria-label="Denial Icon"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="8" stroke="#fff" strokeWidth="2" />
          <path d="M7 13l6-6M13 13l-6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    ),
  },
  {
    title: 'Multi-State Complications',
    desc: 'Each state has different requirements. We coordinate multi-state Enrolment seamlessly.',
    icon: (
      <span
        style={{
          background: '#ff6b00',
          color: '#fff',
          borderRadius: 8,
          width: 36,
          height: 36,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 20,
          marginRight: 16,
        }}
        aria-label="Multi-State Icon"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" aria-hidden="true">
          <rect x="4" y="4" width="12" height="12" rx="2" stroke="#fff" strokeWidth="2" />
          <path d="M8 8h4v4H8z" fill="#fff" />
        </svg>
      </span>
    ),
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

function EnrolmentCard({ icon, title, bullets }) {
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
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(36,118,255,0.13)';
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
          e.currentTarget.style.transform = 'none';
        }}
      >
        <div className="mb-3" style={{ fontSize: 36, color: '#2476ff' }}>{icon}</div>
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

const PayerInsurerEnrolment = () => {
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
                Accelerate Your Payer Enrolment with Hired Billing Support
              </h1>
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                  color: "#f0f0f0",
                }}
              >
                Enroll with Medicare, Medicaid, and top commercial insurers up to 50% faster. Our dedicated Hired Billing Support specialists manage every step—paperwork, follow-ups, and compliance—so you can focus on patient care and start billing sooner, stress-free.
              </p>
              <button
                className="btn"
                style={{
                  background: "#5CBDAA",  // modern teal
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "18px",
                  padding: "14px 35px",   // taller and wider
                  borderRadius: "12px",   // rounded corners
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.background = "#5CBDAA")}
                onMouseOut={(e) => (e.target.style.background = "#5CBDAA")}
                onClick={() => navigate("/contact")}
              >
                Start Enrolment Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* KEY ENROLMENT SERVICES SECTION */}
      <section style={{ background: '#f8fafc', padding: '60px 0 40px 0' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2rem', letterSpacing: '-1px' }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Key Enrolment</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span>
          </h2>
          <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.08rem', maxWidth: 700, margin: '0 auto' }}>
            Comprehensive payer and insurer enrolment solutions for every practice type and size.
          </p>
          <div className="row justify-content-center">
            {EnrolmentCards.map((card, idx) => (
              <EnrolmentCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY PAYER Enrolment IS CRITICAL SECTION */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', marginBottom: '14px' }}>
            <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why Payer Enrolment</span>{' '}
            <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Matters</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#444', fontSize: '1rem', maxWidth: 600, margin: '0 auto 24px auto' }}>
            Payer Enrolment is essential for healthcare providers to bill insurance, receive timely payments, and expand their patient base. Hired Billing Support makes the process fast, accurate, and stress-free so you can focus on care and growth.
          </p>
            <div
              className="row"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'stretch',
                gap: '14px',
                marginLeft: 0,
                marginRight: 0,
              }}
            >
            {/* Card 1 */}
            <CardItem icon={<FaRegClock />} title="Faster Enrolment" desc="Get credentialed and billing-ready in just 60–90 days. Our streamlined process eliminates delays and gets you in-network quickly." />
            <CardItem icon={<FaCheckCircle />} title="High Approval Rate" desc="Achieve 98%+ approval with our expert, error-free applications and proactive follow-up with payers." />
            <CardItem icon={<FaChartLine />} title="Grow Revenue" desc="Start billing sooner and expand your patient base by joining more payer networks, faster." />
            <CardItem icon={<FaShieldAlt />} title="Stay Compliant" desc="We manage all regulations and payer rules, keeping your practice protected and up to date." />
            <CardItem icon={<FaComments />} title="Dedicated Support" desc="A personal Enrolment specialist guides you with updates, answers, and ongoing support." />
            <CardItem icon={<FaSyncAlt />} title="All Paperwork Managed" desc="We handle every form, CAQH/PECOS credentialing, and all follow-ups so you don’t have to." />
    </div>
  </div>
</section>


    {/* OUR PROVEN Enrolment PROCESS SECTION */}
    <section className="py-5" style={{ background: '#f8fafc' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          <span style={{ background: '#3498db', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Our Proven</span>{' '}
          <span style={{ background: '#1abc9c', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Enrolment Process</span>
        </h2>
        <p className="text-center mb-5" style={{ color: '#444', fontSize: '1.1rem' }}>A streamlined 6-step process that gets you enrolled faster with zero hassle.</p>
        <div className="row justify-content-center">
          {[
            {
              icon: <FaRegClock className="text-primary" style={{ fontSize: 32 }} />, title: 'Assessment & Planning',
              desc: 'We review your practice information, specialties, locations, and target payer mix to create a customized Enrolment strategy.'
            },
            {
              icon: <FaFileAlt className="text-primary" style={{ fontSize: 32 }} />, title: 'Document Collection',
              desc: 'We gather all required documents including licenses, certifications, malpractice insurance, DEA, and provider attestations.'
            },
            {
              icon: <FaCheckCircle className="text-primary" style={{ fontSize: 32 }} />, title: 'Application Preparation',
              desc: 'Our specialists complete all Enrolment applications with 100% accuracy, ensuring compliance with payer-specific requirements.'
            },
            {
              icon: <FaRocket className="text-primary" style={{ fontSize: 32 }} />, title: 'Submission & Tracking',
              desc: 'We submit applications through appropriate channels (CAQH, PECOS, direct payer portals) and track progress daily.'
            },
            {
              icon: <FaComments className="text-primary" style={{ fontSize: 32 }} />, title: 'Follow-Up & Resolution',
              desc: 'Proactive follow-up with payers to expedite processing and resolve any issues or requests for additional information.'
            },
            {
              icon: <FaChartLine className="text-primary" style={{ fontSize: 32 }} />, title: 'Confirmation & Setup',
              desc: 'We confirm effective dates, obtain payer IDs, and ensure billing systems are updated for seamless claims submission.'
            },
          ].map((step, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
              <div className="card h-100 border-0 shadow-sm p-4 position-relative" style={{ background: '#f5faff', transition: 'box-shadow 0.3s, transform 0.3s' }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(36,118,255,0.13)';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {/* <span style={{ position: 'absolute', top: -18, left: 0, zIndex: 2, background: 'linear-gradient(135deg, #0099f7 60%, #00c16e 100%)', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: 20, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>{idx + 1}</span> */}
                <div className="mb-3" style={{ marginTop: 18 }}>
                  {step.icon}
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#222' }}>{step.title}</h5>
                <p style={{ color: '#444', fontSize: '1rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

   

 
   

     {/* WHY PAYER Enrolment IS CRITICAL SECTION */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', marginBottom: '14px' }}>
            Why Payer Enrolment Matters
          </h2>
          <p style={{ textAlign: 'center', color: '#444', fontSize: '1rem', maxWidth: 600, margin: '0 auto 24px auto' }}>
            Payer Enrolment is essential for healthcare providers to bill insurance, receive timely payments, and expand their patient base. Hired Billing Support makes the process fast, accurate, and stress-free so you can focus on care and growth.
          </p>
            <div
              className="row"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'stretch',
                gap: '14px',
                marginLeft: 0,
                marginRight: 0,
              }}
            >
            {/* Card 1 */}
            <CardItem icon={<FaRegClock />} title="Faster Enrolment" desc="Get credentialed and billing-ready in just 60–90 days. Our streamlined process eliminates delays and gets you in-network quickly." />
            <CardItem icon={<FaCheckCircle />} title="High Approval Rate" desc="Achieve 98%+ approval with our expert, error-free applications and proactive follow-up with payers." />
            <CardItem icon={<FaChartLine />} title="Grow Revenue" desc="Start billing sooner and expand your patient base by joining more payer networks, faster." />
            <CardItem icon={<FaShieldAlt />} title="Stay Compliant" desc="We manage all regulations and payer rules, keeping your practice protected and up to date." />
            <CardItem icon={<FaComments />} title="Dedicated Support" desc="A personal Enrolment specialist guides you with updates, answers, and ongoing support." />
            <CardItem icon={<FaSyncAlt />} title="All Paperwork Managed" desc="We handle every form, CAQH/PECOS credentialing, and all follow-ups so you don’t have to." />
    </div>
  </div>
</section>
      {/* PAYERS WE WORK WITH SECTION */}
    <section style={{
      background: '#5CBBC0',
      padding: '70px 0 60px 0',
      color: '#fff',
    }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-3" style={{ fontSize: '2.4rem', letterSpacing: '-1px' }}>Payers We Work With</h2>
        <p className="text-center mb-5" style={{ color: '#dbeafe', fontSize: '1.15rem', maxWidth: 700, margin: '0 auto' }}>
          We handle Enrolment with all major government and commercial insurance payers across the United States.
        </p>
        <div className="row justify-content-center" style={{ gap: '0px' }}>
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div style={{
              background: '#54A1D8',
              borderRadius: '16px',
              border: '1.5px solid #3b82f6',
              boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
              padding: '32px 28px 28px 28px',
              width: '100%',
              minHeight: 340,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'box-shadow 0.3s, transform 0.3s',
            }}>
              <h3 style={{ color: '#bae6fd', fontWeight: 700, fontSize: '1.35rem', marginBottom: 18 }}>Government Payers</h3>
              <ul className="list-unstyled" style={{ fontSize: '1.08rem', color: '#fff', marginBottom: 0 }}>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Medicare Part A & B</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Medicare Advantage Plans</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Medicaid (All 50 States)</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />TRICARE</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Veterans Affairs (VA)</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Workers Compensation</li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div style={{
              background: '#54A1D8',
              borderRadius: '16px',
              border: '1.5px solid #3b82f6',
              boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
              padding: '32px 28px 28px 28px',
              width: '100%',
              minHeight: 340,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'box-shadow 0.3s, transform 0.3s',
            }}>
              <h3 style={{ color: '#bae6fd', fontWeight: 700, fontSize: '1.35rem', marginBottom: 18 }}>Major Commercial Payers</h3>
              <ul className="list-unstyled" style={{ fontSize: '1.08rem', color: '#fff', marginBottom: 0 }}>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Blue Cross Blue Shield (All Plans)</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />UnitedHealthcare / Optum</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Aetna / CVS Health</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Cigna</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Humana</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Anthem</li>
              </ul>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div style={{
              background: '#54A1D8',
              borderRadius: '16px',
              border: '1.5px solid #3b82f6',
              boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
              padding: '32px 28px 28px 28px',
              width: '100%',
              minHeight: 340,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'box-shadow 0.3s, transform 0.3s',
            }}>
              <h3 style={{ color: '#bae6fd', fontWeight: 700, fontSize: '1.35rem', marginBottom: 18 }}>Regional & Specialty Payers</h3>
              <ul className="list-unstyled" style={{ fontSize: '1.08rem', color: '#fff', marginBottom: 0 }}>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Regional HMOs and PPOs</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Managed Care Organizations</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Workers Comp Networks</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Auto Insurance Carriers</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle style={{ color: '#34d399', marginRight: 10 }} />Specialty Insurance Plans</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


     {/* COMMON Enrolment CHALLENGES SECTION */}
    <section style={{ background: '#fff', padding: '70px 0 40px 0' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left: Challenges */}
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <h2 style={{ fontWeight: 700, fontSize: '2.1rem', marginBottom: 10, letterSpacing: '-1px' }}>Common Enrolment Challenges<br />We Solve</h2>
            <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: 32, maxWidth: 520 }}>
              Payer Enrolment is complex and time-consuming. Let our experts handle these common challenges:
            </p>
            <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
              {EnrolmentChallenges.map((item, idx) => (
                <ChallengeItem key={idx} {...item} />
              ))}
            </ul>
          </div>
          {/* Right: CTA Card */}
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
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: '1.45rem',
                  color: '#111',
                  marginBottom: 12,
                }}
              >
                Ready to Get Enrolled?
              </h3>
              <p
                style={{
                  color: '#222',
                  fontSize: '1.07rem',
                  marginBottom: 22,
                }}
              >
                Start accepting more patients and maximize your revenue with fast, expert payer Enrolment services.
              </p>
              <ul
                className="list-unstyled mb-4"
                style={{
                  color: '#059669',
                  fontSize: '1.07rem',
                  marginBottom: 24,
                }}
              >
                <li className="mb-2 d-flex align-items-center">
                  <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                  Free Enrolment consultation
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                  Dedicated Enrolment specialist
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                  Real-time status tracking
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaCheckCircle style={{ color: '#059669', marginRight: 10 }} />
                  No upfront payment required
                </li>
              </ul>
              <button
                type="button"
                className="btn w-100"
                style={{
                  background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.13rem',
                  padding: '14px 0',
                  borderRadius: '999px',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(16,185,129,0.08)',
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
                onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #1d4ed8 0%, #059669 100%)')}
                onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)')}
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
              <span style={{ background: "#e0f2fe", color: "#2563eb", borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" stroke="#2563eb" strokeWidth="2" fill="none"/>
                  <path d="M4 20c0-3.333 2.667-6 8-6s8 2.667 8 6" stroke="#2563eb" strokeWidth="2" fill="none"/>
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
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(36,118,255,0.10)';
        e.currentTarget.style.border = '1.5px solid #2476ff';
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.025)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
        e.currentTarget.style.border = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={{ fontSize: '2rem', color: '#2476ff', marginBottom: '10px', transition: 'color 0.3s' }}>
        {icon}
      </div>
      <h3 style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '7px', letterSpacing: '-0.2px' }}>{title}</h3>
      <p style={{ color: '#333', fontSize: '0.97rem', lineHeight: '1.5', margin: 0 }}>{desc}</p>
    </div>
     
  );
}

export default PayerInsurerEnrolment;





// Credentialing & Enrolment Services
// payer & Insurer Enrolment
// Bussiness branding 
// Health care advertising 
// patient engagement 
// Digital markiting 
// EHr/Emr Integration
// Billing setup & Support


