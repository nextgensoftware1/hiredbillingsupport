
import React from "react";
import {
  FaProjectDiagram,
  FaFileMedicalAlt,
  FaCalendarCheck,
  FaUserShield
} from "react-icons/fa";
import "../../WhyHire.css";

const ServicesSection = () => {
  const services = [
    {
      title: "End-to-End RCM",
      desc: (
        <>
          Charge capture reconciliation <br />
          Coding & modifier checks + claim edits <br />
          Submissions (EDI/paper) with required attachments <br />
          Payment posting → A/R → denials/appeals → reporting
        </>
      ),
      icon: FaProjectDiagram,
    },
    {
      title: "Medical Billing",
      desc: (
        <>
          Encounter/charge review against documentation <br />
          CPT/ICD-10 validation & bundling edits <br />
          Prior-auth & coverage confirmations, freq/exclusions <br />
          Same-day submission for complete charges
        </>
      ),
      icon: FaFileMedicalAlt,
    },
    {
      title: "A/R Management",
      desc: (
        <>
          Work queues + portal/call/fax status checks <br />
          Holds/edits cleared; corrected claims/refixes sent <br />
          Escalations when SLAs slip; audit-ready notes <br />
          Weekly dashboards and aging reduction
        </>
      ),
      icon: FaCalendarCheck,
    },
    {
      title: "Credentialing",
      desc: (
        <>
          New Enrolments & re-credentialing <br />
          CAQH setup/attestation & maintenance <br />
          Demographic updates (TIN/NPI, locations, panels) <br />
          Expirables tracking + payer follow-ups to approval
        </>
      ),
      icon: FaUserShield,
    },
  ];

  return (
    <section className="why-hire-section pt-100 pb-70">
      <div className="container">
        {/* Header Section with Descriptive Text */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4" style={{ color: "#0b155b", fontSize: "2.2rem", lineHeight: "1.3" }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              HBS Offers Comprehensive Medical Billing &
            </span>

            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              &nbsp;RCM Services
            </span>
          </h2>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333", marginBottom: "1.5rem" }}>
              Our leading medical billing and revenue cycle management company has revolutionized healthcare billing solutions by replacing outdated, error-prone practice management procedures with smart, electronic medical billing services and clinical billing and accounts management solutions for all specialties.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333", marginBottom: "1.5rem" }}>
              The results? <strong>Fast reimbursements, accurate claim transmission, better patient care and smooth cash flow</strong> while adhering to HIPAA-compliant patient claims billing principles. HBS's medical billing management services make them the perfect fit for comprehensive billing services, including:
            </p>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="feature-card text-center mb-4">
                  <div className="icon-wrapper mb-4">
                    <Icon className="service-icon" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
