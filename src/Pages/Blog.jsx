import React, { useState, useLayoutEffect, useEffect } from "react";
import nephroImg from "../assets/images/blog/Reliable_Nephrology.webp";
import Rcmrevenue from "../assets/images/blog/RCM_Services_Revenue.webp";
import medicalbillingservices from "../assets/images/blog/RCM_Revenue_Cycle.webp";
import Rcmhealthcare from "../assets/images/blog/RCM_Services_Healthcare.webp";
import Orthopedic from "../assets/images/blog/Orthopaedic_Medical_Billing.webp";
import Endocrinology from "../assets/images/blog/Endocrinology_Billing_Coding.webp";
import Armenegment from "../assets/images/blog/AR_Management_CashFlow.webp";
import rcmservices from "../assets/images/blog/RCM_Revenue_Independent.webp";
import rvenuecyclemanagement from "../assets/images/blog/Revenue_Cycle_Management.webp";

import blogBg1 from "../assets/images/backgrounds/bg-image03.jpg";
import blogBg2 from "../assets/images/backgrounds/bg-image04.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Blog = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [headerPad, setHeaderPad] = useState(120);
  
  const bgImages = [blogBg1, blogBg2];

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector('header');
      if (header) {
        setHeaderPad(header.offsetHeight + 50);
      }
    }
    updatePad();
    window.addEventListener('resize', updatePad);
    return () => window.removeEventListener('resize', updatePad);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const blogs = [
    {
      title: "Reliable Nephrology Medical Billers for Accurate Reimbursement",
      slug: "nephrology-billing",
      img: nephroImg,
      desc: "In today’s healthcare landscape, a medical facility’s financial performance and quality patient service are equally valued as priorities. Medical facilities also face many challenges, including denied and delayed payments, as well as intricate rules in dealing with insurance companies.",
    },
    {
      title: "RCM Services Revenue: Driving Financial Stability in Healthcare",
      slug: "rcm-services-revenue",
      img: Rcmrevenue,
      desc: "Financial aspects play an important part in today’s healthcare setting. Medical practices experience various challenges including denied claims, delayed payments, and complicated regulations.",
    },
    {
      title: "RCM Services for Healthcare Revenue Cycle Optimization",
      slug: "rcm-services",
      img: Rcmhealthcare,
      desc: "Expert RCM services by Hired Billing Supports to reduce denials, improve cash flow, and streamline healthcare revenue cycle management.",
    },
    {
      title: "RCM Services Revenue: The Role of Independent Billing Services in Improving Healthcare Finances",
      slug: "independent-services",
      img: rcmservices,
      desc: "Presently, there are finance complexities in the healthcare industry that require speed, accuracy, and compliance. Every step in the process, from patient registration to the final payment posting, impacts profitability.",
    },
    {
      title: "Orthopaedic Medical Billing Services for Accurate Claims & Revenue",
      slug: "orthopaedic-billing",
      img: Orthopedic,
      desc: "Specialized orthopaedic medical billing services to reduce denials, ensure compliance, and improve revenue for orthopaedic practices.",
    },
    {
      title: "Medical Billing Services & Revenue Cycle Management | Hired Billing Support",
      slug: "medical-services",
      img: medicalbillingservices,
      desc: "Reliable medical billing services for healthcare practices. We simplify revenue cycle management, reduce denials, and improve cash flow with expert support.",
    },
    {
      title: "AR Management & Cash Flow Optimization | Hired Billing Support",
      slug: "ar-management-cash-flow",
      img: Armenegment,
      desc: "Improve collections and stabilize revenue with expert AR management and cash flow optimization services for healthcare providers in the USA.",
    },
    {
      title: "Endocrinology and Coding Billing: Ultimate Clinic and Hospital Guide",
      slug: "endocrinology-billing",
      img: Endocrinology,
      desc: "A comprehensive guide to endocrinology billing and coding for clinics and hospitals in the USA and UK — compliance, coding accuracy, and revenue cycle best practices.",
    },
    {
      title: "Revenue Cycle Management: Strategies for Optimizing Healthcare Finances",
      slug: "revenue-cycle-management",
      img: rvenuecyclemanagement,
      desc: "Explore effective strategies for revenue cycle management to enhance financial performance, reduce denials, and improve cash flow in healthcare organizations.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare Billing Blog - HBS</title>
        <meta name="description" content="Stay informed with the latest insights, best practices, and industry updates in medical billing, healthcare compliance, and revenue cycle management from HBS experts." />
        <meta name="keywords" content="medical billing blog, healthcare billing insights, RCM best practices, billing industry news" />
      </Helmet>
      
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bgImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: `${headerPad}px 0 80px 0`,
          color: "#fff",
          position: "relative",
          fontFamily: "Arial, sans-serif",
          minHeight: "550px",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        {/* Gradient Overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(92, 189, 170, 0.85) 0%, rgba(84, 161, 217, 0.82) 50%, rgba(74, 144, 226, 0.88) 100%)",
          zIndex: 1
        }} />
        
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center" style={{ minHeight: '400px' }}>
            <div className="col-md-8 col-lg-7">
              <h1 className="fw-bold" style={{
                fontSize: "3rem",
                lineHeight: 1.1,
                marginBottom: 20,
                color: "#fff",
                fontWeight: 900,
                letterSpacing: "-2px",
                textShadow: "0 2px 15px rgba(0,0,0,0.15)",
                animation: "fadeInUp 0.8s ease-out"
              }}>
                Healthcare Billing Blog
              </h1>
              <h2 style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: 20,
                color: "#e0f2fe",
                letterSpacing: "-0.5px",
                animation: "fadeInUp 0.8s ease-out 0.2s both"
              }}>
                Expert Insights, Best Practices & Industry Updates
              </h2>
              <p style={{
                fontSize: "1.18rem",
                lineHeight: 1.7,
                marginBottom: 35,
                color: "#f0f9ff",
                opacity: 0.95,
                letterSpacing: "0.3px",
                maxWidth: "600px",
                animation: "fadeInUp 0.8s ease-out 0.4s both"
              }}>
                Stay informed with the latest trends, compliance updates, and proven strategies in medical billing and revenue cycle management from our industry experts.
              </p>
              <div style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}>
                <a 
                  href="#blog-posts" 
                  className="btn" 
                  style={{
                    background: "#5CBDAA",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.15rem",
                    padding: "16px 40px",
                    borderRadius: "12px",
                    border: "none",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    boxShadow: "0 10px 30px rgba(92, 189, 170, 0.2)",
                    letterSpacing: "0.5px",
                    textDecoration: "none",
                    display: "inline-block",
                    marginRight: "20px"
                  }}
                  onMouseOver={e => {
                    e.target.style.background = "#54A1D9";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 15px 35px rgba(84, 161, 217, 0.25)";
                  }}
                  onMouseOut={e => {
                    e.target.style.background = "#5CBDAA";
                    e.target.style.transform = "translateY(0px)";
                    e.target.style.boxShadow = "0 10px 30px rgba(92, 189, 170, 0.2)";
                  }}
                >
                  Explore Articles
                </a>
                <a 
                  href="/contact" 
                  className="btn" 
                  style={{
                    background: "transparent",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.15rem",
                    padding: "14px 36px",
                    borderRadius: "12px",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    letterSpacing: "0.5px",
                    textDecoration: "none",
                    display: "inline-block",
                    backdropFilter: "blur(10px)"
                  }}
                  onMouseOver={e => {
                    e.target.style.background = "rgba(255, 255, 255, 0.15)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={e => {
                    e.target.style.background = "transparent";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                    e.target.style.transform = "translateY(0px)";
                  }}
                >
                  Get Expert Help
                </a>
              </div>
            </div>
            <div className="col-md-4 col-lg-5 text-center" style={{ animation: "fadeInRight 1s ease-out 0.3s both" }}>
              <div style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "30px 25px",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}>
                <h3 style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "1.3rem",
                  marginBottom: "20px"
                }}>
                  Latest Insights
                </h3>
                <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
                  <div>
                    <div style={{
                      fontSize: "2rem",
                      fontWeight: "900",
                      color: "#fff",
                      marginBottom: "5px"
                    }}>50+</div>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#e0f9ff",
                      opacity: 0.9
                    }}>Expert Articles</div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: "2rem",
                      fontWeight: "900",
                      color: "#fff",
                      marginBottom: "5px"
                    }}>10K+</div>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#e0f9ff",
                      opacity: 0.9
                    }}>Monthly Readers</div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: "2rem",
                      fontWeight: "900",
                      color: "#fff",
                      marginBottom: "5px"
                    }}>24/7</div>
                    <div style={{
                      fontSize: "0.9rem",
                      color: "#e0f9ff",
                      opacity: 0.9
                    }}>Updated Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog-posts" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Latest Blog Posts</h2>
        <div className="row gy-5">
          {blogs.map((blog, index) => (
            <div key={index} className="col-lg-6 col-xl-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 blog-card overflow-hidden d-flex flex-column">
                <div className="position-relative overflow-hidden">
                  <Link to={`/blog/${blog.slug}`}>
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="img-fluid w-100 blog-img"
                      style={{
                        height: "230px",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </Link>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h5 className="fw-semibold mb-3">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="text-dark text-decoration-none hover-link"
                    >
                      {blog.title}
                    </Link>
                  </h5>
                  <p className="text-muted flex-grow-1">{blog.desc}</p>
                  <div className="mt-auto ">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="btn btn-outline-primary mt-3 read-more-btn "
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .blog-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 16px !important;
          overflow: hidden;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }

        .blog-card:hover .blog-img {
          transform: scale(1.08);
        }

        .blog-img {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-link {
          transition: color 0.3s ease;
        }

        .hover-link:hover {
          color: #5CBDAA !important;
        }

        .read-more-btn {
          border-color: #5CBDAA !important;
         
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 10px !important;
          padding: 10px 24px !important;
          font-weight: 600 !important;
        }

        .read-more-btn:hover {
          background-color: #5CBDAA !important;
          color: #fff !important;
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(92, 189, 170, 0.3);
        }

        /* Responsive Hero Section */
        @media (max-width: 992px) {
          .hero h1 {
            font-size: 2.5rem !important;
          }
          .hero h2 {
            font-size: 1.2rem !important;
          }
          .hero p {
            font-size: 1.1rem !important;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 60px 0 !important;
            min-height: 450px !important;
          }
          .hero h1 {
            font-size: 2.2rem !important;
            margin-bottom: 15px !important;
          }
          .hero h2 {
            font-size: 1.1rem !important;
            margin-bottom: 15px !important;
          }
          .hero p {
            font-size: 1.05rem !important;
            margin-bottom: 25px !important;
          }
          .hero .btn {
            font-size: 1rem !important;
            padding: 12px 28px !important;
            margin-bottom: 10px;
          }
          .blog-card img {
            height: 200px !important;
          }
        }

        @media (max-width: 576px) {
          .hero {
            padding: 80px 0 50px 0 !important;
            min-height: 400px !important;
          }
          .hero h1 {
            font-size: 1.9rem !important;
            line-height: 1.2 !important;
          }
          .hero h2 {
            font-size: 1rem !important;
          }
          .hero p {
            font-size: 1rem !important;
          }
          .hero .btn {
            display: block !important;
            width: 100% !important;
            margin-right: 0 !important;
            margin-bottom: 15px !important;
          }
          .blog-card img {
            height: 180px !important;
          }
          .card-body {
            padding: 1rem !important;
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
    </>
  );
};

export default Blog;
