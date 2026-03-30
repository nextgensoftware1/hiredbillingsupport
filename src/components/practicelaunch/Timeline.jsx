import React from 'react';
import { FaFileAlt, FaRocket, FaChartLine, FaCheck } from 'react-icons/fa';

const Timeline = () => {
  const phases = [
    {
      title: 'Phase 1: FOUNDATION & PRACTICE READINESS',
      icon: <div className="bg-light p-2 "><FaFileAlt className="text-primary fs-4" /></div>,
      tasks: [
        'NPI Structuring & Assessment: Review newly enumerated NPI details, assign group practice structure (solo vs group).',
        'Business Entity Setup: Guide providers on practice structure (LLC, PC) and assist with EIN setup.',
        'Practice Roadmap Creation: Develop a tailored roadmap, outlining essential milestones for practice setup (payer strategy, operational setup).',
        'Operational Workflow Planning: Map out front-end and back-end workflows (patient scheduling, billing, insurance).',
        'Challenges: Providers unsure of next steps after NPI enumeration.',
        'Solution: HBS provides a clear, structured roadmap and assigns a Practice Launch Partner to guide every step.',
      ],
    },
    {
      title: 'Phase 2: CREDENTIALING, Enrolment & COMPLIANCE',
      icon: <div className="bg-light p-2 "><FaFileAlt className="text-primary fs-4" /></div>,
      tasks: [
        'CAQH Profile Creation & Management: Setup and manage the CAQH profile to ensure smooth Enrolment.',
        'Medicare, Medicaid & Commercial Payer Enrolment: Submit Enrolment applications for each payer.',
        'EFT & ERA Enrolment: Ensure electronic fund transfer (EFT) and electronic remittance advice (ERA) are set up.',
        'HIPAA Compliance & Billing Standards: Provide HIPAA-compliant workflows, documentation policies, and staff training.',
        'Challenges: Delays in payer Enrolment causing missed opportunities.',
        'Solution: Proactive payer follow-ups and a centralized tracking system to ensure no delay in credentialing.',
      ],
    },
    {
      title: 'Phase 3: SYSTEMS, FRONT-END & BACK-END OPERATIONS SETUP',
      icon: <div className="bg-light p-2 "><FaRocket className="text-primary fs-4" /></div>,
      tasks: [
        'EHR & Practice Management System Setup: Select and configure the best EHR/PM system based on practice needs.',
        'Clearinghouse & Payment Systems Configuration: Set up a clearinghouse and configure EFT/ERA systems.',
        'Charge Capture & Coding Workflows: Design charge capture workflows to ensure accurate and timely billing.',
        'Front-End Workflows: Create front-desk processes for patient scheduling, intake, eligibility verification, and payment collection.',
        'Challenges: Misalignment between practice needs and EHR/PM system.',
        'Solution: HBS provides in-depth EHR/PM system recommendations based on specialty and scale.',
      ],
    },
    {
      title: 'Phase 4: GO-LIVE & REVENUE ACTIVATION',
      icon: <div className="bg-light p-2 "><FaChartLine className="text-primary fs-4" /></div>,
      tasks: [
        'Go-Live Readiness Assessment: Pre-launch checks to ensure all systems are ready for claims submission.',
        'First Claims Submission & Monitoring: Submit the first set of claims and monitor for any issues or denials.',
        'Payment Posting & Verification: Track payments received and reconcile with bank statements.',
        'Denial Management: Proactively manage any denied claims, implementing corrective measures.',
        'Challenges: First claims often get denied due to system or process errors.',
        'Solution: HBS offers real-time claim tracking and immediate follow-up support.',
      ],
    },
    {
      title: 'Phase 5: STABILIZATION, OPTIMIZATION & PARTNERSHIP',
      icon: <div className="bg-light p-2 "><FaChartLine className="text-primary fs-4" /></div>,
      tasks: [
        'Full Revenue Cycle Management (RCM): Ongoing claims management and AR follow-ups.',
        'Compliance Monitoring & Staff Training: Monitor compliance standards and provide ongoing staff education.',
        'Operational & Financial Optimization: Review and optimize billing workflows and financial KPIs.',
        'Growth Support: Provide strategic advice for adding new providers or expanding services.',
        'Challenges: Scaling issues as the practice grows.',
        'Solution: HBS offers growth-oriented strategies with operational scalability in mind.',
      ],
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">HBS PRACTICE LAUNCH  Strategical Plan & Timeline</h2>
        {phases.map((phase, index) => (
          <div key={index} className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">{phase.icon}</div>
                <h5 className="fw-bold mb-0 text-primary">{phase.title}</h5>
              </div>
              <ul className="list-unstyled">
                {phase.tasks.map((task, idx) => {
                  const [boldText, ...rest] = task.split(':');
                  return (
                    <li key={idx} className="d-flex align-items-start mb-3">
                      <span className="d-flex align-items-center justify-content-center me-2" style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#198754', color: '#FFFFFF' }}>
                        <FaCheck />
                      </span>
                      <div>
                        <span className="fw-bold text-dark">{boldText}:</span>
                        <p className="text-muted mb-0" style={{ marginLeft: '30px' }}>{rest.join(':')}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Timeline;