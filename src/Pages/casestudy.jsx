
'use client'
import { Link } from 'react-router-dom';
import React, { useState, useLayoutEffect } from "react";

const CaseStudiesPage = () => {

  const caseStudies = [
    {
      id: 1,
      name: "Dr Ruth - Edwin DMD/MS",
      specialty: "Diplomate of American Board of Periodontology",
      testimonial: "Partnering with Hired Billing Support gave us peace of mind. Our billing is cleaner, our staff works on patient care instead of paperwork, and we are now capturing more appointments than ever.",
      rating: 5,
      buttonText: "Read More",
      path: "/case-study/dr-ruth-parkin-edwin",
    },
    {
      id: 2,
      name: "Herma Thompson PMHNP-BC",
      specialty: "Nurse Practitioner - Psych/Mental Health",
      testimonial: "Working with HBS has been a game-changer. The team is professional, responsive, and has streamlined our billing operations seamlessly.",
      rating: 5,
      buttonText: "Read More",
      path: "/case-study/herma-thompson",
    },
    {
      id: 3,
      name: "Dr Afreen Sheikh",
      specialty: "Internal Medicine",
      testimonial: "Remote staffing solution by HBS has freed the resources of the HBS, enabling us to spend more time at the bedside and enhance the efficiency of the whole process.",
      rating: 5,
      buttonText: "Read More",
      path: "/case-study/dr-afreen-sheikh",
    },
    {
      id: 4,
      name: "Dr. Layla Hassan",
      specialty: "Genesis Internal Medicine",
      testimonial: "With the help of HBS their support and expertise we have achieved a lot more in practice.",
      rating: 5,
      buttonText: "Read More",
      path: "/case-study/dr-layla-hassan",
    }
  ];

  const RatingStars = ({ rating = 0 }) => {
    const stars = [0, 1, 2, 3, 4];
    return (
      <div className="rating-stars" aria-label={`${rating} out of 5 stars`}>
        {stars.map(i => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={i < rating ? 'false' : 'true'}
            focusable="false"
            style={{ width: 22, height: 22 }}
          >
            <path
              d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.864 1.402-8.172L.132 9.21l8.2-1.192z"
              fill={i < rating ? '#ffb400' : '#e6e7e8'}
            />
          </svg>
        ))}
      </div>
    );
  };

  const [headerPad, setHeaderPad] = useState(100);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector("header");
      if (header) {
        setHeaderPad(header.offsetHeight + 30);
      } else {
        setHeaderPad(100);
      }
    }
    updatePad();
    window.addEventListener("resize", updatePad);
    return () => window.removeEventListener("resize", updatePad);
  }, []);

  return (
    <div className="case-studies-page">
      <style>{`
        * { box-sizing: border-box; }

        .case-studies-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: #f8f9fa;
        }

        /* ── Hero ── */
        .hero-section {
          background: linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }
        .hero-section h1 {
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 24px;
          color: white;
        }
        .hero-section .lead {
          font-size: 24px;
          max-width: 800px;
          margin: 0 auto;
        }

        /* ── Section ── */
        .case-studies-section { padding: 80px 0; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .section-header h2 { font-size: 42px; color: #5CBDAA; font-weight: 800; margin: 0; }

        /* ── Card ── */
        .case-study-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.09);
          margin-bottom: 36px;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          min-height: 180px;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .case-study-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.13);
        }

        /* ── Left colour panel ── */
        .card-left {
          flex: 0 0 260px;
          width: 260px;
          background: linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;   /* push stars to bottom */
          padding: 32px 24px 28px;
          position: relative;
        }

        /* Stars pill sitting at the bottom of the colour panel */
        .stars-pill {
          background: rgba(255,255,255,0.97);
          border-radius: 40px;
          padding: 10px 18px;
          display: flex;
          gap: 6px;
          align-items: center;
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }

        /* ── Right content panel ── */
        .card-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 32px 40px;
          gap: 20px;
        }

        .testimonial-text {
          font-size: 17px;
          font-style: italic;
          color: #444;
          line-height: 1.65;
          margin: 0;
        }

        .doctor-info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eee;
          padding-top: 18px;
          gap: 16px;
        }

        .doctor-name {
          font-size: 19px;
          font-weight: 700;
          color: #5CBDAA;
          margin-bottom: 4px;
        }
        .specialty {
          font-size: 14px;
          color: #888;
        }

        .rating-stars {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
        }

        .action-button {
          background: linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%);
          color: white !important;
          padding: 13px 30px;
          border-radius: 30px;
          text-decoration: none !important;
          font-weight: 600;
          font-size: 15px;
          white-space: nowrap;
          transition: opacity 0.2s;
          flex-shrink: 0;
        }
        .action-button:hover { opacity: 0.88; }

        /* ── HBS banner ── */
        .hbs-banner {
          background: #56A8CD;
          color: #fff;
          border-radius: 12px;
          padding: 48px 32px;
          margin: 36px 0;
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .hbs-banner .hbs-logo {
          width: 120px;
          height: 100px;
          flex: 0 0 120px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hbs-banner h3 {
          font-size: 1.4rem;
          margin: 0;
          line-height: 1.3;
          font-weight: 700;
          color: white;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .case-study-card { flex-direction: column; }
          .card-left {
            flex: 0 0 auto;
            width: 100%;
            min-height: 120px;
            padding: 28px 24px 24px;
            justify-content: flex-end;
            align-items: flex-start;
          }
          .card-right { padding: 24px 22px; }
          .doctor-info-row { flex-direction: column; align-items: flex-start; gap: 14px; }
          .hbs-banner { flex-direction: column; text-align: center; padding: 28px 18px; }
          .hbs-banner .hbs-logo { width: 96px; height: 96px; flex: 0 0 96px; }
          .hero-section h1 { font-size: 36px; }
          .hero-section .lead { font-size: 18px; }
        }
      `}</style>

      {/* Hero */}
      <section className="hero-section" style={{ paddingTop: headerPad }}>
        <h1>Success Stories That Inspire</h1>
        <p className="lead">
          Discover how healthcare practices achieve excellence with HBS staffing and billing solutions.
        </p>
      </section>

      {/* HBS Banner */}
      <div className="container">
        <div className="hbs-banner">
          <div className="hbs-logo" aria-hidden>
            <img
              src="/assets/images/clients/client.png"
              alt="Hired Billing Support"
              style={{ width: 110, height: 100, objectFit: 'contain' }}
            />
          </div>
          <div>
            <h3>HBS — Driving Growth, Efficiency, and Client Success in Healthcare Billing</h3>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <section className="case-studies-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
          </div>

          {caseStudies.map(study => (
            <div key={study.id} className="case-study-card">

           

              {/* Right content panel */}
              <div className="card-right">
                <p className="testimonial-text">"{study.testimonial}"</p>

                <div className="doctor-info-row">
                  <div>
                    <div className="doctor-name">{study.name}</div>
                    <div className="specialty">{study.specialty}</div>
                    <RatingStars rating={study.rating} />
                  </div>
                  <Link to={study.path} className="action-button">
                    {study.buttonText}
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;