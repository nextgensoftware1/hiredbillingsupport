 // ✅ Import your image

const NeurologyBilling = () => {
  const data = [
    {
      title: "Accurate LCD Verification",
      desc: "to avoid claim errors and speed up reimbursements",
    },
    {
      title: "Expert NCCI Compliance",
      desc: "for optimized billing and fewer denials",
    },
    {
      title: "Efficient Eligibility Verification",
      desc: "to streamline patient workflows and prevent coverage issues",
    },
    {
      title: "Precise Progress Notes Reconciliation",
      desc: "for accurate coding and improved claim success",
    },
    {
      title: "Advanced Claim Scrubbing",
      desc: "to reduce errors and ensure clean claim submissions",
    },
    {
      title: "Up-to-Date Coding Practices",
      desc: "to eliminate denials due to outdated codes",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">
        {/* Title Section */}
        <div className="text-center mb-5">
          <h4 className="fw-bold text-dark">
            Overcome Neurology Billing Challenges with HBS
          </h4>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div
              style={{
                width: "50px",
                height: "3px",
                backgroundColor: "#007bff",
                borderRadius: "5px",
              }}
            ></div>
          </div>
          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "700px" }}>
            Neurology billing can be complex, but HBS is here to simplify the
            process and enhance your financial outcomes. Our specialized team
            ensures:
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {data.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="neurology-card text-center p-4 rounded shadow-sm bg-white">
                {/* Optional Image */}
                {/* <img
                  src={neurologyImg}
                  alt={item.title}
                  className="img-fluid mb-3"
                  style={{ width: "70px", height: "70px" }}
                /> */}
                <h6 className="fw-bold text-primary mb-0">{item.title}</h6>
                <p className="neurology-desc text-muted mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-5">
          <p className="text-muted mb-0">
            Trust HBS to handle your neurology billing challenges, allowing you
            to focus on patient care while maximizing your revenue.
          </p>
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .neurology-card {
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          height: 130px;
        }

        .neurology-card:hover {
          background-color: #007bff;
          color: #fff !important;
          transform: translateY(-6px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
        }

     

        .neurology-desc {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease;
          font-size: 14px;
        }

        .neurology-card:hover .neurology-desc {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default NeurologyBilling;
