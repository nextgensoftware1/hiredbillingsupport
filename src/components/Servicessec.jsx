import React from 'react';
import { FaFileInvoiceDollar, FaChartLine, FaHospital, FaRegListAlt } from 'react-icons/fa';
import { MdHealthAndSafety, MdVerifiedUser, MdManageAccounts } from 'react-icons/md';
import { BsPersonCheck } from 'react-icons/bs';

const Servicessec = () => {

  const services = [
    {
      id: 1,
      icon: FaFileInvoiceDollar,
      title: 'Medical Billing Services',
      description: 'Expert medical billing services designed to optimize revenue, reduce errors, and streamline your practice\'s financial operations.',
      link: '/rcm-management',
    },
    {
      id: 2,
      icon: FaChartLine,
      title: 'Revenue Cycle Management',
      description: 'Comprehensive revenue cycle management to enhance collections, minimize denials, and ensure timely reimbursements.',
      link: '/rcm-management',
    },
    {
      id: 3,
      icon: MdManageAccounts,
      title: 'Practice Management',
      description: 'Efficient practice management solutions to streamline operations, improve workflow, and enhance overall practice productivity.',
      link: '/rcm-management',
    },
    {
      id: 4,
      icon: FaHospital,
      title: 'Front Office Management',
      description: 'Front office management services to improve patient scheduling, billing processes, and overall office efficiency.',
      link: '/rcm-management',
    },
    {
      id: 5,
      icon: FaRegListAlt,
      title: 'Medical Transcription Services',
      description: 'Accurate and timely medical transcription services to ensure precise documentation and enhance clinical efficiency.',
      link: '/rcm-management',
    },
    {
      id: 6,
      icon: BsPersonCheck,
      title: 'Patient Benefits & Eligibility Verification',
      description: 'Reliable patient benefits and eligibility verification services to confirm coverage and prevent claim denials.',
      link: '/rcm-management',
    },
    {
      id: 7,
      icon: MdVerifiedUser,
      title: 'Credentialing Services',
      description: 'Comprehensive credentialing services to ensure provider compliance, streamline approvals, and expedite the onboarding process.',
      link: '/rcm-management',
    },
    {
      id: 8,
      icon: MdHealthAndSafety,
      title: 'AR Management',
      description: 'Expert AR management services focused on reducing outstanding balances, accelerating collections, and improving overall cash flow efficiency.',
      link: '/rcm-management',
    },
  ];

  return (
    <section className="why-hire-section pt-100 pb-70">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-title text-center mb-5">
          <h2 style={{ fontWeight: 'bold' }}>
            <span
              style={{
                background: '#3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Full Suite of&nbsp;
            </span>

            <span
              style={{
                background: '#1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              RCM Solutions
            </span>
          </h2>

          <p className="mb-0">
            Drive efficiency and elevate the patient experience with our comprehensive end-to-end revenue cycle management services.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="row">
          {services.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6 d-flex">
              <div
                className="feature-card text-center mb-4 wow fadeInUp d-flex flex-column"
                data-wow-duration="1.2s"
                data-wow-delay={`${0.1 * (index + 1)}s`}
              >

                {/* ICON */}
                <div className="icon-wrapper mb-4">
                  {React.createElement(service.icon, { className: 'service-icon' })}
                </div>

                {/* TITLE */}
                <h3>{service.title}</h3>

                {/* DESCRIPTION (IMPORTANT FOR ALIGNMENT) */}
                <p className="flex-grow-1">
                  {service.description}
                </p>

                {/* READ MORE BUTTON */}
                <a href={service.link} className="rcm-read-more">
                  READ MORE →
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Servicessec;