import React from "react";
import accurateImg from "../../assets/images/hero/Accurate-Coding.png";
import claimImg from "../../assets/images/hero/Claim-Submission-and-Follow-up-copy.png";
import revenueImg from "../../assets/images/hero/Revenue-Cycle-Management.png";
import denialImg from "../../assets/images/hero/Denial-Management.png";
import complianceImg from "../../assets/images/hero/Compliance-Assurance.png";
import arImg from "../../assets/images/hero/Complimentary-AR-Recovery.png";
import "./NeurologyServices.css"; // 👈 custom CSS for animation
const NeurologyServices = () => {
  const services = [
    {
      id: "01",
      img: accurateImg,
      title: "Accurate Coding",
      text: "If you want to increase your revenue with precise coding, our certified coders specialize in coding for neurology procedures that are uniquely qualified to align with neurology claim reimbursement processes and fewer claim denials.",
    },
    {
      id: "02",
      img: claimImg,
      title: "Claim Submission and Follow-up",
      text: "We submit all claims and then thoroughly follow up to ensure you receive the reimbursements you deserve, minimizing delays or denials. Our RPA bots achieve a 99% clean claim submission accuracy.",
    },
    {
      id: "03",
      img: revenueImg,
      title: "Revenue Cycle Management",
      text: "Our end-to-end revenue cycle management services streamline your billing process from patient entry to fund settlement, optimizing every transaction efficiently.",
    },
    {
      id: "04",
      img: denialImg,
      title: "Denial Management",
      text: "Our skilled team specializes in quick and effective denial resolution, taking corrective actions and recovering lost revenue rapidly.",
    },
    {
      id: "05",
      img: complianceImg,
      title: "Compliance Assurance",
      text: "We adhere to all industry norms, ensuring compliance, minimizing risks, and protecting your practice from audits and penalties.",
    },
    {
      id: "06",
      img: arImg,
      title: "Complimentary AR Recovery",
      text: "We offer free AR recovery, working consistently to collect overdue payments and increase your cash flow without any extra cost.",
    },
  ];

  return (
    <section className="neurology-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h4 className="section-title fw-bold">Our Neurology Billing Services</h4>
          <div className="title-underline"></div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-6">
              <div className="service-card d-flex align-items-start justify-content-between p-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="service-icon">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <h5 className="service-title fw-bold mb-2">
                      {service.title}
                    </h5>
                    <p className="service-text mb-0 text-muted">{service.text}</p>
                  </div>
                </div>
                <h2 className="service-number fw-bold">{service.id}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeurologyServices;