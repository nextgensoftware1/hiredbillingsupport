
import cardiologyBg  from "../../assets/images/hero/banner/Nephrology-banner.webp";
import { Container, Row, Col,Card,Button  } from "react-bootstrap";
import CardiologyImg from "../../assets/images/hero/banner/Nephrology-banner.webp";
import GetStartedImg from "../../assets/images/hero/get-started.png";  
import Logosloop from "../../components/logosloop";
import { FaCheckCircle, FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa";
import cardioImg   from "../../assets/images/hero/banner/Nephrology-banner.webp"; // <-- your imported image
import TestimonialSection from "../../components/specialities/testimonials";
import React, { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
const features = [
  {
    title: "Expert Nephrology Coding & Mapping",
    text: "HBS provides comprehensive mapping of nephrology-specific procedures and diagnoses, ensuring coding accuracy and compliance for every claim.",
  },
  {
    title: "AI-Driven Code Scrubbing & Validation",
    text: "Our remote team uses advanced AI tools to catch errors and validate codes before submission, reducing rejections and ensuring clean, accurate claims for your nephrology practice.",
  },
  {
    title: "Specialized Nephrology Billing Support",
    text: "HBS offers dedicated remote billing experts who understand the unique needs of nephrology practices, providing tailored guidance and fast resolution to billing issues.",
  },
  {
    title: "Seamless EHR Integration",
    text: "We integrate with your nephrology EHRs for direct patient data transfer, reducing manual entry and minimizing errors for a more efficient billing workflow.",
  },
  {
    title: "Custom Fee Schedule Management",
    text: "HBS manages customized fee schedules for all nephrology procedures, ensuring optimal billing rates and helping your practice stay competitive and profitable.",
  },
  {
    title: "Scalable Remote Staffing Solutions",
    text: "Whether you’re a small, mid-sized, or multi-location nephrology group, HBS’s remote staffing and billing services are fully scalable and customizable to meet your needs, ensuring long-term success.",
  },
];




const NephrologyBilling = () => {
  const navigate = useNavigate();
  const [headerPad, setHeaderPad] = useState(70);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector("header");
      if (header) {
        setHeaderPad(header.offsetHeight);
      } else {
        setHeaderPad(70);
      }
    }
    updatePad();
    window.addEventListener("resize", updatePad);
    return () => window.removeEventListener("resize", updatePad);
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
       <div className="container">
  <div className="row align-items-start">
    <div className="col-md-6">
      <h1
        className="fw-bold"
        style={{
          fontSize: "48px",
          lineHeight: "1.2",
          marginBottom: "20px",
          color: "#ffffff",
          paddingTop: "25px",
        }}
      >
        Nephrology Billing & Remote Staffing by HBS
      </h1>
      <p
        style={{
          fontSize: "20px",
          lineHeight: "1.8",
          marginBottom: "30px",
          color: "#f0f0f0",
        }}
      >
        Access top-tier remote nephrology billers, coders, and AR specialists with HBS. Lower costs, accelerate reimbursements, and boost billing accuracy for your nephrology practice.
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
        onClick={() => { window.location.href = '/contact'; }}
        onMouseOver={(e) => (e.target.style.background = "#5CBDAA")}
        onMouseOut={(e) => (e.target.style.background = "#5CBDAA")}
      >
        REQUEST DEMO
      </button>
    </div>
  </div>
</div>


        {/* FLOATING FORM */}
        <div
          className="floating-form"
          style={{
            background: "#54A1D9",
            borderRadius: "25px", // ⬅️ fully rounded
            padding: "35px 30px", // ⬅️ more padding for spacious feel
            boxShadow: "0px 10px 30px rgba(0,0,0,0.25)", // ⬅️ smoother shadow
            width: "400px", // ⬅️ slightly wider
            height: "600px", // ⬅️ taller form
            position: "absolute",
            right: "5%",
            top: "380px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <p
            className="form-title"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "10px",
            }}
          >
            Watch a Nephrology Billing Demo
          </p>

          <p style={{ fontSize: "14px", color: "#ffffff", marginBottom: "20px" }}>
            Discover how HBS remote staffing boosts billing revenue for nephrology practices.
          </p>

          <input
            className="form-control mb-3 py-3"
            placeholder="First Name*"
            style={{ borderRadius: "12px" }}
          />
          <input
            className="form-control mb-3 py-3"
            placeholder="Last Name*"
            style={{ borderRadius: "12px" }}
          />
          <input
            className="form-control mb-3 py-3"
            placeholder="Phone Number*"
            style={{ borderRadius: "12px" }}
          />
          <input
            className="form-control mb-4 py-3"
            placeholder="Email*"
            style={{ borderRadius: "12px" }}
          />

          <button
            className="submit-btn mt-auto"
            style={{
              background: "#5CBDAA",
              border: "none",
              width: "100%",
              padding: "15px",
              borderRadius: "15px",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#5CBDAA")}
            onMouseOut={(e) => (e.target.style.background = "#5CBDAA")}
          >
            BOOK YOUR DEMO
          </button>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section
        className="content-section"
        style={{
          paddingTop: "70px",
          paddingBottom: "100px",
        }}
      >
       <div className="container">
  <div className="row">
    <div className="col-md-7">
      <h2 className="fw-bold" style={{ fontSize: "42px", marginBottom: "25px" }}>
        Remote Nephrology Billing Solutions by HBS
      </h2>
      <p
        style={{
          fontSize: "22px",
          fontWeight: 500,
          lineHeight: "1.8",
          marginTop: "15px",
        }}
      >
        HBS delivers complete remote revenue cycle management for nephrology practices. Our expert team handles every aspect of billing: claim creation, submission, follow-up, denial management, appeals, payment posting, and reporting—so you can focus on patient care while we optimize your financial outcomes.
      </p>
    </div>
  </div>
</div>

      </section>


       <section className="py-5" style={{ background: "#f4f6fb" }}>
      <div className="container">

        {/* -------------------- ROW 1 -------------------- */}
        <div className="row align-items-start mb-4">
          {/* LEFT CONTENT */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-3">Remote Nephrology Billing Expertise</h2>

            <p>
              HBS understands the critical importance of accurate preauthorization and billing for nephrology procedures. Our remote team follows best practices to prevent authorization denials and maximize revenue:
            </p>

            <ul style={{ lineHeight: "1.8" }}>
              <li>
                <strong>Expert Remote Team:</strong> Our staff is highly trained in CMS codes and modifiers for precise nephrology coding.
              </li>
              <li>
                <strong>Advanced ICD-10 Coding:</strong> We utilize combination codes and specialized training for nephrology billing.
              </li>
              <li>
                <strong>Compliance Assurance:</strong> Our remote coders and clinicians stay current with evolving nephrology billing guidelines.
              </li>
              <li>
                <strong>Procedure-Based Coding:</strong> We ensure billing accuracy by coding exact nephrology procedures, not just symptoms.
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-5 text-center">
            <img
              src={cardioImg}
              alt="Cardiology Billing"
              className="img-fluid rounded"
              style={{ maxWidth: "380px", height: "auto" }}
            />
          </div>
        </div>

        {/* -------------------- ROW 2 -------------------- */}
        <div className="row align-items-start mt-5">

          {/* LEFT ICON GRID 2×2 EXACTLY LIKE CUREMD */}
          <div className="col-md-7">
            <div className="row text-center">

              <div className="col-6 mb-4">
                <FaShieldAlt size={35} color="#005f85" />
                <h6 className="mt-2">98% Clean Claim Rate</h6>
              </div>

              <div className="col-6 mb-4">
                <FaCheckCircle size={35} color="#005f85" />
                <h6 className="mt-2">100% Compliance</h6>
              </div>

              <div className="col-6 mb-4">
                <FaChartLine size={35} color="#005f85" />
                <h6 className="mt-2">30% Revenue Increase</h6>
              </div>

              <div className="col-6 mb-4">
                <FaClock size={35} color="#005f85" />
                <h6 className="mt-2">3× Faster Payments</h6>
              </div>

            </div>
          </div>

          {/* RIGHT TEXT UNDER THE IMAGE */}
          <div className="col-md-5">
            <h3 className="fw-bold">
              AI-Enhanced Remote Billing <br /> for Nephrology Practices
            </h3>
            <p className="mt-3">
              HBS leverages AI-powered billing platforms to simplify and automate nephrology billing, reducing manual errors and streamlining claims processing. Our technology-driven approach lowers denial rates and speeds up reimbursements for your nephrology practice.
            </p>
            <p>
              With HBS remote staffing, your team can focus on patient care while we ensure your billing is optimized for a stable, reliable revenue stream.
            </p>
            <button type="button" className="text-primary" style={{ fontWeight: "500", background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              Learn More
            </button>
          </div>

        </div>

      </div>
    </section>


     <section style={{ marginTop: "120px" }}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT IMAGE */}
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={CardiologyImg}
              alt="Cardiology Billing"
              className="img-fluid"
              style={{
                borderRadius: "25px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Col>

          {/* RIGHT CONTENT */}
          <Col md={6}>
            <h2 className="fw-bold" style={{ fontSize: "36px" }}>
              Nephrology Medical Billing with HBS
            </h2>

            <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
              Discover how HBS remote staffing can boost your nephrology practice’s profitability and minimize billing errors. Explore our full suite of remote nephrology billing services tailored for your needs.
            </p>
          </Col>
        </Row>
      </Container>
    </section>


    <section style={{ background: "#f5f7fb", padding: "70px 0", marginTop: "80px" }}>
      <Container>

        {/* HEADING */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "32px" }}>
            Smart, Fast, Reliable Remote Billing Features <br /> for Nephrology Practices
          </h2>

          <p className="mt-3" style={{ fontSize: "18px", maxWidth: "750px", margin: "0 auto" }}>
            HBS combines advanced tools and expert remote support to simplify complex nephrology billing, ensuring your claims are accurate and timely every time.
          </p>
        </div>

        {/* FEATURES GRID */}
        <Row>
          {features.map((item, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  borderRadius: "20px",
                  padding: "25px",
                  background: "#fff",
                  border: "none",
                }}
              >
                <Card.Body>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p style={{ lineHeight: "1.7", fontSize: "16px" }}>{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
       <Logosloop />
     <section
      style={{
        background: "#5DBFA7", // blue background similar to screenshot
        padding: "70px 0",
        marginTop: "60px",
      }}
    >
      <Container>
        <Row className="align-items-center">

          {/* LEFT CONTENT */}
          <Col md={6} className="text-white">
            <h2 className="fw-bold mb-4">Get Started with HBS</h2>

            <p style={{ lineHeight: "1.7", fontSize: "17px" }}>
              Experience seamless billing operations with HBS’s advanced AI solutions and remote staffing, designed specifically for nephrology practices. Our innovative approach streamlines billing, ensures precision in claims, and maximizes revenue—empowering you to focus on exceptional patient care. Book a demo now to see how our remote nephrology billing services can elevate your practice.
            </p>

            <Button
              style={{
                background: "#54A1D9",
                border: "none",
                padding: "10px 25px",
                borderRadius: "6px",
                marginTop: "20px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Schedule a Demo
            </Button>
          </Col>

          {/* RIGHT IMAGE */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src={GetStartedImg}
              alt="Get Started"
              className="img-fluid"
              style={{ maxWidth: "350px" }}
            />
          </Col>

        </Row>
      </Container>
    </section>

    <TestimonialSection />
    </>
  );
};

export default NephrologyBilling;