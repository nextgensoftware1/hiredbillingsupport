import React from 'react';
import { FaUserMd, FaFileAlt, FaShieldAlt, FaDollarSign, FaCheck } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Provider Credentialing',
      icon: <div className="bg-light p-2"><FaUserMd className="text-primary fs-4" /></div>,
      description: 'HBS ensures complete credentialing with Medicare, Medicaid, and commercial payers.',
      tasks: [
        'CAQH profile setup and maintenance',
        'Application submission to all major payers',
        'Follow-up and status monitoring',
        'Typical timeline: 90-120 days',
        'Re-credentialing every 2-3 years',
      ],
    },
    {
      title: 'Billing System Setup',
      icon: <div className="bg-light p-2 "><FaFileAlt className="text-primary fs-4" /></div>,
      description: 'HBS configures practice management and billing workflows for efficiency.',
      tasks: [
        'EHR/PM system selection and implementation',
        'Fee schedule configuration',
        'Clearinghouse integration',
        'Charge capture workflow design',
        'Payment posting automation',
      ],
    },
    {
      title: 'Compliance Foundation',
      icon: <div className="bg-light p-2 "><FaShieldAlt className="text-primary fs-4" /></div>,
      description: 'HBS establishes policies and procedures for regulatory compliance.',
      tasks: [
        'HIPAA privacy and security policies',
        'Compliance training for staff',
        'Business Associate Agreements',
        'Incident response procedures',
        'Regular compliance audits',
      ],
    },
    {
      title: 'Revenue Cycle Setup',
      icon: <div className="bg-light p-2 "><FaDollarSign className="text-primary fs-4" /></div>,
      description: 'HBS builds efficient processes for maximum revenue capture.',
      tasks: [
        'Eligibility verification procedures',
        'Point of service collection policies',
        'Denial management workflows',
        'Patient billing and statements',
        'A/R management processes',
      ],
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">HBS Essential Services for New Practices</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">{service.icon}</div>
                    <h5 className="fw-bold mb-0 text-primary">{service.title}</h5>
                  </div>
                  <p className="text-muted mb-3">{service.description}</p>
                  <ul className="list-unstyled mb-0">
                    {service.tasks.map((task, idx) => (
                      <li key={idx} className="d-flex align-items-start mb-2">
                        <span className="d-flex align-items-center justify-content-center me-2" style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#198754', color: '#FFFFFF' }}>
                          <FaCheck />
                        </span>
                        <span className="text-dark">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;