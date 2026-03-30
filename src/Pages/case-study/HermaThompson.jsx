'use client';

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GrowingImg from '../../assets/images/case/growing.jpg';
import PartnerImg from '../../assets/images/case/partner.png';
export default function HermaThompson() {
  const caseStudy = {
  
    name: 'Herma Thompson PMHNP-BC',
    specialty: 'Psychiatric Mental Health Nurse Practitioner',
    title: 'How Hiredbillingsupport Changed My Practice',
    description: 'As a mental health nurse practitioner, billing and admin work used to take time away from my patients. Hiredbillingsupport (HBS) gave me the freedom to focus on care, not paperwork.',
    details: 'Before HBS, I struggled with billing errors, claim rejections, and endless admin tasks. Their remote team stepped in, learned my practice, and handled everything with accuracy and care. My collections improved, and I finally had time for my patients again.',
    challenges: {
      title: 'My Billing Struggles',
      content: 'Mental health billing is complex and unforgiving. HBS reduced my claim rejections and made sure every detail was right. Their support made a real difference.'
    },
    quote: '"Hiredbillingsupport took the stress out of billing. My practice runs smoother, and I can focus on what matters most—my patients."',
    section3Title: 'A Team I Can Trust',
    section3Content: 'HBS didn’t just process claims—they became a true partner. Their remote staff is responsive, knowledgeable, and always available when I need them.',
    section3Subtitle: 'Results I Experienced',
    section3SubContent: 'Since working with HBS, my billing is accurate, my reimbursements are faster, and my peace of mind is back. I recommend them to any mental health provider.',
    testimonial: '"Hiredbillingsupport’s remote team gave me back my time and confidence. I wish I had found them sooner!"',
    doctorName: 'Herma Thompson PMHNP-BC',
    rating: '★★★★★',
    conclusion: 'Choosing Hiredbillingsupport was the best decision for my practice. Their remote team lets me focus on my patients and grow my business with confidence.'
  };

  const numericRating = caseStudy.rating;
  const navigate = useNavigate();


  useEffect(() => {
    const cards = document.querySelectorAll('.case-card');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-animate');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const [headerPad, setHeaderPad] = useState(60);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector("header");
      if (header) {
        setHeaderPad(header.offsetHeight + 20);
      } else {
        setHeaderPad(60);
      }
    }
    updatePad();
    window.addEventListener("resize", updatePad);
    return () => window.removeEventListener("resize", updatePad);
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
      {/* HEADER */}
      <div
        style={{
          background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)',
          color: 'white',
          padding: `${headerPad}px 0 60px 0`
        }}
      >
        <div className="container d-flex align-items-center justify-content-between flex-wrap">
          <div style={{ flex: 1, minWidth: '300px', marginRight: '30px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '300' }}>
              {caseStudy.title}
            </h1>

            <p style={{ color: '#d4f1f4' }}>
              {caseStudy.specialty}, {caseStudy.name}
            </p>

            <p style={{ maxWidth: '700px', color: '#d4f1f4' }}>
              {caseStudy.description}
            </p>

            <p style={{ maxWidth: '700px', color: '#e6fbf9' }}>{caseStudy.details}</p>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                padding: '12px 28px',
                marginTop: '15px',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              Hire Now
            </button>

            <div
              className="review-stars"
              role="img"
              aria-label={`Rating ${numericRating} out of 5`}
              style={{
                marginTop: '14px',
                background: 'rgba(255,255,255,0.98)',
                padding: '8px 14px',
                borderRadius: '22px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                minWidth: '160px',
                width: 'fit-content'
              }}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} style={{ color: '#FFD700', fontSize: '24px', lineHeight: 1, textShadow: '0 2px 8px rgba(255,215,0,0.18)' }}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
        <div className="container my-5">
    <div className="row align-items-stretch">
    {/* Card 1 */}
    <div className="col-md-3 mb-4 d-flex">
      <div className="case-card card-hidden">
          <div className="case-card-number">20</div>
          <p>20 hires in 3 years</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-3 mb-4 d-flex">
      <div className="case-card card-hidden">
        <div className="case-card-number">4</div>
        <p>Supports 4 departments across hospitals & clinics</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-3 mb-4 d-flex">
      <div className="case-card card-hidden">
        <div className="case-card-number">7</div>
        <p>7-day average time-to-hire (vs. 49-day industry average)</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="col-md-3 mb-4 d-flex">
      <div className="case-card card-hidden">
        <div className="case-card-number">$500k</div>
        <p>Estimated $500k annual savings in administrative costs</p>
      </div>
    </div>
  </div>
</div>
      {/* MY STORY */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* TEXT */}
          <div className="col-md-6">
            <h2 style={{ color: '#5CBDAA' }}>{caseStudy.challenges.title}</h2>
            <p style={{ color: '#555', lineHeight: '1.8' }}>{caseStudy.challenges.content}</p>
            <p style={{ fontStyle: 'italic', borderLeft: '3px solid #5CBDAA', paddingLeft: '15px', color: '#666' }}>{caseStudy.quote}</p>
          </div>
          {/* IMAGE */}
          <div className="col-md-6 text-center">
            <img src={GrowingImg} alt="My Experience with HBS" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>

      {/* PARTNERING WITH HBS */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* IMAGE */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={PartnerImg} alt="Partnering with HBS" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
          {/* TEXT */}
          <div className="col-md-6">
            <h2 style={{ color: '#5CBDAA' }}>{caseStudy.section3Title}</h2>
            <p style={{ color: '#555', lineHeight: '1.8' }}>{caseStudy.section3Content}</p>
            <h3 style={{ color: '#5CBDAA', marginTop: '25px' }}>{caseStudy.section3Subtitle}</h3>
            <p style={{ color: '#555', lineHeight: '1.8' }}>{caseStudy.section3SubContent}</p>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div style={{ background: '#5CBDAA', color: 'white', padding: '40px 0' }}>
        <div className="container text-center">
          <p style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>{caseStudy.testimonial}</p>
          <p style={{ fontWeight: 'bold' }}>— {caseStudy.doctorName}</p>
        </div>
      </div>

      {/* CONCLUSION */}
      <div className="container my-5">
        <h2 style={{ color: '#5CBDAA' }}>My Final Word</h2>
        <p style={{ color: '#555', lineHeight: '1.8' }}>{caseStudy.conclusion}</p>
      </div>
    </div>
  );
}