'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DrAlan from '../assets/images/avatar/dr-alan.jpg';
import Herma from "../assets/images/avatar/Dr Herma.png";
import DrAfreen from "../assets/images/avatar/dr-afreen.jpg";
import DrNagwa from '../assets/images/avatar/dr-nagwa.jpg';

/* =========================
   CASE STUDY DATA
========================= */
const caseStudyData = {
  'dr-ruth-parkin-edwin': {
    image: DrAlan,
    name: 'Dr Ruth -Edwin',
    specialty: 'Diplomate of American Board of Periodontology',
    title: 'Remote Billing Excellence for a Periodontology Practice',
    description: 'Dr. Ruth Parkin-Edwin chose HBS to optimize billing performance, reduce denials, and speed up reimbursements, empowering the practice to focus fully on patient care.',
    details: 'HBS performed a comprehensive audit of the practice’s billing workflows,implemented standardized coding checks, and retrained front-office staff on documentation best practices. Within six months the practice saw a measurable drop in claim denials, faster payment cycles, and clearer financial reporting that supported growth planning. HBS continues to provide ongoing monitoring and periodic coding reviews to sustain results.',
    cta: 'Learn how HBS improves dental billing efficiency >',
    challenges: {
      title: 'Growing Administrative Complexity',
      content: 'As growth added complexity to billing operations, denials increased and cash flow suffered.HBS streamlined workflows and strengthened coding accuracy to deliver measurable improvements in reimbursement performance.'
    },
    quote: '"Fewer denials, faster payments, and more time for patient care—HBS made the difference."',
    section2Title: 'The Need for Accuracy and Efficiency',
    section2Content: 'Periodontology billing requires precision...',
    section3Title: 'Partnering with the Right Team',
    section3Content: 'HBS delivered a tailored remote billing solution...',
    section3Subtitle: 'Results That Matter',
    section3SubContent: 'With HBS handling billing operations, the practice experienced improved cash flow...',
    testimonial: '"HBS delivered exceptional remote billing support that improved efficiency and reduced administrative burden."',
    doctorName: 'Dr Ruth -Edwin',
    rating: 5, // number of stars
    conclusion: 'Through its partnership with HBS, Dr. Ruth Parkin-Edwin’s practice gained operational clarity, reduced denials, and improved cash flow.'
  },
  'herma-thompson': {
    image: Herma,
    name: 'Herma Thompson PMHNP-BC',
    specialty: 'Nurse Practitioner – Psych / Mental Health',
    title: 'Reliable Billing Support for Mental Health Services',
    description: 'Herma Thompson is a board-certified Psychiatric Mental Health Nurse Practitioner...',
    cta: 'See how HBS streamlines mental health billing >',
    details: 'HBS worked closely with the practice to ensure that mental-health-specific billing rules, modifiers, and documentation requirements were consistently applied. We improved prior authorization workflows and corrected common coding mistakes, reducing rejections and improving collections. The practice regained time to focus on clinical care while maintaining compliance and patient confidentiality.',
    challenges: {
      title: 'Managing Mental Health Billing',
      content: 'Mental health billing demands precise documentation and strict compliance. HBS reduced claim rejections and improved reimbursement timelines.'
    },
    quote: '"Working with HBS has been a game-changer — our billing accuracy and turnaround time improved."',
    section2Title: 'Compliance Without Compromise',
    section2Content: 'Ensuring billing accuracy while maintaining compliance standards...',
    section3Title: 'A Seamless Billing Solution',
    section3Content: 'HBS provided a structured remote billing team...',
    section3Subtitle: 'Operational Improvement',
    section3SubContent: 'Claims accuracy improved, reimbursements accelerated...',
    testimonial: '"Working with HBS has been a game-changer..."',
    doctorName: 'Herma Thompson PMHNP-BC',
    rating: '★★★★★',
    conclusion: 'With HBS managing billing operations, Herma Thompson achieved greater operational balance...'
  },
  // other doctors ...
    'dr-afreen-sheikh': {
    image: DrAfreen,
    name: 'Dr Afreen Sheikh',
    specialty: 'Internal Medicine',
    title: 'Optimizing Internal Medicine Operations with Remote Support',
    description: 'Dr Afreen Sheikh leads a busy internal medicine practice...',
    cta: 'See how HBS can help internal medicine practices >',
    details: 'Facing high patient volumes, Dr. Sheikh’s practice needed a scalable billing approach. HBS introduced a dedicated remote team to manage claims submission, appeals and patient statements, clearing a backlog while improving first-pass acceptance. Operational dashboards provided transparency into collections and AR aging, enabling targeted follow-ups and continuous improvement.',
    challenges: {
      title: 'Administrative Overload',
      content: 'Rising patient volumes created backlogs and billing errors. HBS provided targeted staffing and process improvements to clear the backlog.'
    },
    quote: '"HBS’s remote staffing solution freed our team to focus on patients while improving collections."',
    section2Title: 'Regaining Focus on Care',
    section2Content: 'Dr Sheikh needed a solution that restored balance...',
    section3Title: 'Remote Staffing That Works',
    section3Content: 'HBS implemented a remote billing and administrative model...',
    section3Subtitle: 'Measurable Outcomes',
    section3SubContent: 'The practice experienced faster reimbursements...',
    testimonial: '"HBS’s remote staffing solution has freed up our resources..."',
    doctorName: 'Dr Afreen Sheikh',
    rating: '★★★★★',
    conclusion: 'By partnering with HBS, Dr Afreen Sheikh strengthened operational efficiency...'
  },
  'nagwa-s-awad': {
    image: DrNagwa,
    name: 'Nagwa S. Awad',
    specialty: 'Genesis Internal Medicine',
    title: 'Scaling a Multi-Provider Practice with Remote Staffing',
    description: 'Nagwa S. Awad leads Genesis Internal Medicine...',
    cta: 'See how HBS scales multi-provider practices >',
    details: 'For multi-provider practices like Genesis Internal Medicine, HBS established centralized billing standards, role-based workflows, and consistent reconciliation processes. This reduced variance between providers, improved coding accuracy across the board, and enabled predictable revenue recognition. HBS also supplied management reporting that informed staffing and growth decisions.',
    challenges: {
      title: 'Scaling Without Increased Overhead',
      content: 'Coordinating billing across providers risked inconsistency and delays. HBS introduced centralized workflows and reporting to ensure consistency at scale.'
    },
    quote: '"With HBS we scaled operations without adding administrative overhead."',
    section2Title: 'Operational Efficiency at Scale',
    section2Content: 'Maintaining consistency and accuracy across providers was critical...',
    section3Title: 'The HBS Advantage',
    section3Content: 'HBS delivered a dedicated remote team...',
    section3Subtitle: 'Practice Growth',
    section3SubContent: 'Genesis Internal Medicine improved efficiency...',
    testimonial: '"We’ve been able to accomplish significantly more with HBS..."',
    doctorName: 'Nagwa S. Awad',
    rating: '★★★★★',
    conclusion: 'HBS enabled Genesis Internal Medicine to grow confidently...'
  }
};


/* =========================
   COMPONENT
========================= */
export default function HBSCaseStudy() {
  const { slug } = useParams();
  const caseStudy = caseStudyData[slug] || caseStudyData['dr-ruth-parkin-edwin'];

  const numericRating = typeof caseStudy.rating === 'number'
    ? caseStudy.rating
    : (typeof caseStudy.rating === 'string' ? (caseStudy.rating.match(/★/g) || []).length : 0);

  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll('.case-card');
    if (!cards || cards.length === 0) return;
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <style>{`
        .case-card{
          width:100%;
          min-height:160px;
          padding:20px;
          border-radius:10px;
          text-align:center;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          transition: transform .6s cubic-bezier(.2,.8,.2,1), opacity .6s ease, box-shadow .25s ease;
          will-change: transform, opacity;
          box-shadow: 0 6px 18px rgba(0,0,0,0.04);
          background: #ffffff;
          border: 1px solid #e6eefc;
          color: #000000;
          font-family: inherit;
        }
        .case-card-number{ font-size:2rem; font-weight:700; color:#000; }
        .case-card p{ margin-top:10px; color:#000; margin-bottom:0; }
        .card-hidden{ transform: translateY(20px); opacity:0; }
        .card-animate{ transform: translateY(0); opacity:1; }
        .case-card:hover{ transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
        @media (max-width: 767px){ .case-card{ padding:18px; min-height:unset; } }
      `}</style>
      
      {/* Header Section */}
      <div style={{ background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)', color: 'white', padding: '60px 0', position: 'relative' }}>
        {/* <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#f39c12', padding: '10px 20px', transform: 'rotate(45deg)', transformOrigin: 'center' }}>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>SUCCESS</span>
        </div> */}
        <div className="container d-flex align-items-center justify-content-between flex-wrap">
          <div style={{ flex: 1, minWidth: '300px', marginRight: '30px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '15px', color: 'white' }}>{caseStudy.title}</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#d4f1f4' }}>{caseStudy.specialty}, {caseStudy.name}</p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '700px', color: '#d4f1f4' }}>
              {caseStudy.description}
            </p>
            {readMore && (
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '700px', marginTop: '12px', color: '#e6fbf9' }}>
                {caseStudy.details}
              </p>
            )}
         <button
  onClick={() => setReadMore(!readMore)}
  style={{
    background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',      // Fully rounded
    padding: '12px 28px',      // Slightly bigger for a nice clickable area
    marginTop: '15px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s ease' // Smooth hover effect
  }}
  onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
  onMouseLeave={e => e.currentTarget.style.opacity = 1}
>
  {readMore ? "Read Less" : "Read More"}
</button>

          </div>

          <div style={{ width: '220px', height: '220px', borderRadius: '50%', overflow: 'visible', margin: '0 auto', border: '5px solid white', background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div className="header-avatar-wrap" style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
              <img src={caseStudy.image} alt={caseStudy.name} style={{ width: '188px', height: '188px', borderRadius: '50%', objectFit: 'cover', display: 'block', background: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }} />

              <div
                className="review-stars"
                role="img"
                aria-label={`Rating ${numericRating} out of 5`}
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '-26px',
                  background: 'rgba(255,255,255,0.98)',
                  padding: '8px 14px',
                  borderRadius: '22px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  minWidth: '160px'
                }}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} style={{ color: i < numericRating ? '#FFD700' : '#ccc', fontSize: '24px', lineHeight: 1 }}>★</span>
                ))}
                <span style={{ color: '#777', fontSize: '13px', marginLeft: '12px', whiteSpace: 'nowrap' }}>{numericRating}.0 / 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review Stars moved under avatar for visual alignment */}
      </div>

      {/* four card in which will be number and description come number like review type of our client happpy customer all thinng */}
      <div className="container my-5">
    <div className="row align-items-stretch">
    {/* Card 1 */}
    <div className="col-md-3 mb-4 d-flex">
      <div className="case-card card-hidden">
          <div className="case-card-number">75</div>
          <p>75 hires in 3 years</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-3 mb-4 d-flex">
      <div className="case-card card-hidden">
        <div className="case-card-number">13</div>
        <p>Supports 13 departments across hospitals & clinics</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-3 mb-4 d-flex">
      <div className="case-card card-hidden">
        <div className="case-card-number">15</div>
        <p>15-day average time-to-hire (vs. 49-day industry average)</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="col-md-3 mb-4 d-flex">
      <div className="case-card card-hidden">
        <div className="case-card-number">$1.2M</div>
        <p>Estimated $1.2M annual savings in administrative costs</p>
      </div>
    </div>
  </div>
</div>


      {/* Challenges */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 style={{ color: '#5CBDAA', fontSize: '2rem', marginBottom: '20px' }}>{caseStudy.challenges.title}</h2>
            <p style={{ lineHeight: '1.8', color: '#555' }}>{caseStudy.challenges.content}</p>
            <p style={{ fontStyle: 'italic', color: '#666', borderLeft: '3px solid #5CBDAA', paddingLeft: '15px', marginTop: '20px' }}>{caseStudy.quote}</p>
          </div>
          <div className="col-md-6 text-center">
            <div style={{ background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)', padding: '40px', borderRadius: '10px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '80px', opacity: '0.3' }}>💼📈💡</div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Section 3 */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '10px' }}>
              <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎯</div>
              <div style={{ fontSize: '60px', opacity: '0.5' }}>✓</div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ color: '#5CBDAA', fontSize: '2rem', marginBottom: '20px' }}>{caseStudy.section3Title}</h2>
            <p style={{ lineHeight: '1.8', color: '#555' }}>{caseStudy.section3Content}</p>
            <h3 style={{ color: '#5CBDAA', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>{caseStudy.section3Subtitle}</h3>
            <p style={{ lineHeight: '1.8', color: '#555' }}>{caseStudy.section3SubContent}</p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div style={{ background: '#5CBDAA', color: 'white', padding: '40px 0', margin: '50px 0' }}>
        <div className="container text-center">
          <p style={{ fontSize: '1.3rem', fontStyle: 'italic', margin: '0' }}>{caseStudy.testimonial}</p>
          <p style={{ marginTop: '15px', fontWeight: 'bold' }}>- {caseStudy.doctorName}</p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="container my-5">
        <h2 style={{ color: '#5CBDAA', fontSize: '2rem', marginBottom: '20px' }}>Conclusion</h2>
        <p style={{ lineHeight: '1.8', color: '#555' }}>{caseStudy.conclusion}</p>
      </div>
    </div>
  );
}
