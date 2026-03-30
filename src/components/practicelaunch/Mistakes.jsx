import React from 'react';

const MistakeCard = ({ title, impact, solution }) => {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-header bg-primary text-white text-center py-3">
        <h5 className="fw-bold mb-0 text-white">{title}</h5>
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="text-muted mb-3">
          <strong className='text-danger'>Impact:</strong> {impact}
        </p>
        <p className="text-muted mb-4">
          <strong className='text-danger'>Solution:</strong> {solution}
        </p>
        
      </div>
    </div>
  );
};

const Mistakes = () => {
  const mistakes = [
    {
      title: 'Delaying Credentialing Applications',
      impact: 'Postponing credentialing can result in months of lost revenue and hinder your practice’s growth.',
      solution: 'Initiate credentialing at least 6 months prior to your launch date to ensure seamless operations.',
    },
    {
      title: 'Underestimating Startup Expenses',
      impact: 'Failing to account for all costs can lead to financial instability and operational disruptions.',
      solution: 'Create a detailed financial plan that includes equipment, licenses, marketing, and at least 6 months of operating expenses.',
    },
    {
      title: 'Overlooking Compliance Standards',
      impact: 'Non-compliance with healthcare regulations can result in hefty fines and damage to your reputation.',
      solution: 'Implement HIPAA, OSHA, and billing compliance protocols from day one with expert guidance.',
    },
    {
      title: 'Neglecting a Marketing Strategy',
      impact: 'Without a strong marketing plan, your practice may struggle to attract and retain patients.',
      solution: 'Develop a comprehensive marketing strategy that includes digital outreach, community engagement, and referral programs.',
    },
    {
      title: 'Investing in Inefficient Technology',
      impact: 'Using outdated or incompatible systems can reduce productivity and increase errors.',
      solution: 'Choose modern, integrated EMR and practice management systems tailored to your specialty.',
    },
    {
      title: 'Attempting to Manage Everything Internally',
      impact: 'Handling all administrative tasks in-house can overwhelm your team and reduce efficiency.',
      solution: 'Outsource non-clinical functions like billing, IT, and compliance to trusted experts, allowing your team to focus on patient care.',
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Avoid These Common Mistakes
        </h2>
        <div className="row g-4">
          {mistakes.map((mistake, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <MistakeCard {...mistake} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mistakes;