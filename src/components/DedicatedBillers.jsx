
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import doctorImg from "../assets/images/hero/doctors.webp"; // 🩺 Replace with your actual image path

const DedicatedBillers = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left Side - Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="position-relative d-flex justify-content-center align-items-center"
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                overflow: "hidden",
                background: "linear-gradient(90deg, #3a2b7c 50%, #ffffff 50%)",
              }}
            >
              <img
                src={doctorImg}
                alt="Medical team"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Dedicated Account Managers & Expert
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                &nbsp;Medical Billers for Health Centers
              </span>
            </h3>
            <p className="text-muted mb-4">
              Healthcare organizations are at the heart of our medical billing
              and collections team. From primary care physicians to specialty
              clinics, our dedicated clinical coding officers and claims
              examiners implement a precision-driven approach so that revenue
              flows smoothly and claim denials fade away.
            </p>

            {/* Box 1 - Failure Info */}
            <div
              className="p-3 mb-3 text-white fw-semibold"
              style={{
                backgroundColor: '#3498db',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 18px rgba(52,152,219,0.12)'
              }}
            >
              <FaTimesCircle size={20} className="me-2" color="#fff" />
              Traditional agencies have a 50% failure rate with provider
              credentialing and patient billing.
            </div>

            {/* Box 2 - Success Info */}
            <div
              className="p-3 mb-3 fw-semibold"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(0,0,0,0.06)',
                gap: '0.5rem',
                boxShadow: '0 6px 18px rgba(0,0,0,0.04)'
              }}
            >
              <FaCheckCircle size={20} className="me-2" color="#1abc9c" />
              HBS medical billing has a 97% pass rate, including support for
              denied claims.
            </div>

            {/* Button */}
            <button
              className="btn fw-semibold px-4 py-2 mt-2"
              style={{
                border: '2px solid #1abc9c',
                color: '#1abc9c',
                borderRadius: '25px',
                transition: 'all 0.25s ease',
                background: 'transparent'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#1abc9c';
                e.target.style.color = '#fff';
                e.target.style.boxShadow = '0 8px 20px rgba(26,188,156,0.18)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#1abc9c';
                e.target.style.boxShadow = 'none';
              }}
            >
              Claim Your Free Practice Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedBillers;
