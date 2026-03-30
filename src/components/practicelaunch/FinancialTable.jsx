import React from 'react';

const FinancialTable = () => {
  const data = [
    {
      metric: 'Credentialing Timeline',
      typicalExperience: '90-120 days per payer',
      bestPractice: 'Start 6 months before opening with HBS support.',
    },
    {
      metric: 'Initial Claim Payment Lag',
      typicalExperience: '30-60 days from submission',
      bestPractice: 'Budget for 90-day cash flow gap with HBS guidance.',
    },
    {
      metric: 'First Year Collection Rate',
      typicalExperience: '60-75% for new practices',
      bestPractice: '85-95% with experienced HBS RCM support.',
    },
    {
      metric: 'Startup Capital Needed',
      typicalExperience: '6-12 months operating expenses',
      bestPractice: 'Include credentialing, technology, and working capital with HBS planning.',
    },
    {
      metric: 'Time to Profitability',
      typicalExperience: '12-18 months',
      bestPractice: '9-12 months with optimized billing through HBS.',
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">HBS Financial Projections & Benchmarks</h2>
        <div className="table-responsive">
          <table className="table table-bordered shadow-sm">
            <thead className="table-light">
              <tr>
                <th scope="col">Metric</th>
                <th scope="col">Typical Experience</th>
                <th scope="col">Best Practice</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                  }}
                >
                  <td>{row.metric}</td>
                  <td>{row.typicalExperience}</td>
                  <td>{row.bestPractice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FinancialTable;