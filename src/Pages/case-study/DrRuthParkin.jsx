'use client';

import React, { useState, useEffect, useLayoutEffect } from 'react';


// NEW SECTION IMAGES
import GrowingImg from '../../assets/images/case/growing.jpg';
import PartnerImg from '../../assets/images/case/partner.png';

export default function DrRuthParkinEdwin() {
  const caseStudy = {
  
    name: 'Dr Ruth -Edwin',
    specialty: 'Diplomate of American Board of Periodontology',
    title: 'How Hired Billing Support Transformed Dr. Ruth Parkin-Edwin’s Dental Practice',
    description:
      'Dr. Ruth Parkin-Edwin chose HBS to optimize billing performance, reduce denials, and speed up reimbursements, empowering the practice to focus fully on patient care.',
    details:
      'HBS performed a comprehensive audit of the practice’s billing workflows, implemented standardized coding checks, and retrained staff. Within six months denials dropped and cash flow improved.',
    challenges: {
      title: 'Growing Administrative Complexity',
      content:
        'As the practice expanded, manual billing processes led to increased claim denials and delayed cash flow. HBS addressed these challenges by standardizing workflows and enhancing coding accuracy, resulting in cleaner claims and more predictable reimbursements.'
    },
    quote:
      '"HBS transformed our billing process—fewer denials, faster payments, and more time to focus on patient care."',
    section3Title: 'Partnering with the Right Team',
    section3Content:
      'HBS delivered a tailored remote billing solution designed to align with the practice’s workflows and compliance requirements. Through standardized processes and dedicated oversight, HBS reduced administrative burden and strengthened billing performance.',
    section3Subtitle: 'Results That Matter',
    section3SubContent:
      'With HBS managing billing operations, the practice achieved improved cash flow, reduced denials, and more consistent reimbursement timelines—supporting operational stability and continued focus on patient care.',
    testimonial: '"Let us help you streamline your dental billing, reduce overhead, and grow your patient base."',
    doctorName: 'Dr Ruth -Edwin',
    rating: 5,
    conclusion:
      'Through its partnership with HBS, Dr. Ruth Parkin-Edwin’s practice achieved operational clarity, improved billing performance, and greater financial stability—allowing a continued focus on patient care.'
  };

  const numericRating = caseStudy.rating;
  const [readMore, setReadMore] = useState(false);

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

            <a
              href="/contact"
              style={{
                background:
                  'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                padding: '12px 28px',
                marginTop: '15px',
                cursor: 'pointer',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Hire Talent
            </a>

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
                <span key={i} style={{ color: i < numericRating ? '#FFD700' : '#ccc', fontSize: '24px', lineHeight: 1 }}>★</span>
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

      {/* GROWING ADMINISTRATIVE COMPLEXITY */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* TEXT */}
          <div className="col-md-6">
            <h2 style={{ color: '#5CBDAA' }}>
              {caseStudy.challenges.title}
            </h2>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              {caseStudy.challenges.content}
            </p>
            <p
              style={{
                fontStyle: 'italic',
                borderLeft: '3px solid #5CBDAA',
                paddingLeft: '15px',
                color: '#666'
              }}
            >
              {caseStudy.quote}
            </p>
          </div>

          {/* IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src={GrowingImg}
              alt="Growing Administrative Complexity"
              style={{
                maxWidth: '100%',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>
      </div>
      {/* RESULTS */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* IMAGE */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={PartnerImg}
              alt="Results"
              style={{
                maxWidth: '100%',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                width: '90%',
                height: 'auto',
                maxHeight: '500px' // Enhanced height for better visual impact
              }}
            />
          </div>

          {/* TEXT */}
          <div className="col-md-6">
            <h2 style={{ color: '#5CBDAA', fontSize: '2rem', marginBottom: '20px' }}>Results</h2>

            <ul style={{ color: '#555', lineHeight: '1.8', paddingLeft: '20px', fontSize: '1rem' }}> {/* Adjusted font size for readability */}
              <li>
                <strong>70% Reduction in Staffing Costs:</strong> Outsourcing billing and front-desk tasks to our trained remote team allowed Dr. Parkin-Edwin’s practice to cut internal labor costs by approximately 70%, freeing budget for clinical priorities. (Comparable industry reductions are often seen when dental practices use outsourced RCM vs. in-house teams, which can cost 60–70% more than outsourcing).
              </li>
              <li>
                <strong>Increased Patient Appointments:</strong> With improved call handling and real-time scheduling support, the practice saw a significant increase in booked patient appointments, capturing more leads and reducing missed opportunities. Dental practices that optimize intake and scheduling often convert 20–40% more inquiries into booked appointments.
              </li>
              <li>
                <strong>Strong Revenue Cycle Management Outcomes:</strong> Our RCM team dramatically improved billing efficiency:
                <ul>
                  <li>Claims submitted accurately and on time</li>
                  <li>Denials reduced through proper coding and verification</li>
                  <li>Faster reimbursements and improved cash flow</li>
                </ul>
                These improvements reduced administrative bottlenecks and recaptured revenue that was previously lost to errors or slow processes. Outsourced dental billing services boost collections and efficiency by ensuring claims are clean and followed up continuously.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div style={{ background: '#5CBDAA', color: 'white', padding: '40px 0', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}> {/* Enhanced styling */}
        <div className="container text-center">
          <p style={{ fontStyle: 'italic', fontSize: '1.5rem', marginBottom: '10px' }}>
            {/* Adjusted font size */}
            {caseStudy.testimonial}
          </p>
          <a
            href="/contact"
            style={{
              background: '#ffffff',
              color: '#5CBDAA',
              padding: '10px 20px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              display: 'inline-block',
              marginTop: '10px'
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* CONCLUSION */}
      <div className="container my-5">
        <h2 style={{ color: '#5CBDAA', fontSize: '2rem', marginBottom: '20px' }}>Conclusion</h2>
        <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1rem' }}> {/* Adjusted font size */}
          {caseStudy.conclusion}
        </p>
      </div>
    </div>
  );
}
