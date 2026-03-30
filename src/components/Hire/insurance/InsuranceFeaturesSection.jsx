import React from 'react';

const InsuranceFeaturesSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{
            color: '#002856',
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            Illustrative Outcomes
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 mb-4">
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '15px',
              padding: '2rem',
              height: '100%',
              boxShadow: '0 0 20px rgba(0,0,0,0.10)',
              border: '2px solid #00A6E6',
              marginBottom: '2rem'
            }}>
              <h4 style={{
                color: '#fff',
                backgroundColor: '#00A6E6',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                textAlign: 'center',
                letterSpacing: '0.5px'
              }}>
                Orthopedic Group, FL Prior Auth Pod
              </h4>
              <div style={{ marginLeft: 2 }}>
                <div style={{ color: '#23324d', fontWeight: 500, marginBottom: 2 }}>Problem:</div>
                <div style={{ color: '#4a4a4a', marginBottom: 8 }}>MRIs postponed, 12-day PA turnaround.</div>
                <div style={{ color: '#23324d', fontWeight: 500, marginBottom: 2 }}>HBS Impact:</div>
                <div style={{ color: '#4a4a4a' }}>Dedicated 2-agent pod cut turnaround to 48 hours, freeing 17 surgical slots per month.</div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mb-4">
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '15px',
              padding: '2rem',
              height: '100%',
              boxShadow: '0 0 20px rgba(0,0,0,0.10)',
              border: '2px solid #00A6E6',
              marginBottom: '2rem'
            }}>
              <h4 style={{
                color: '#fff',
                backgroundColor: '#00A6E6',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                textAlign: 'center',
                letterSpacing: '0.5px'
              }}>
                Community Hospital, TX – AR Hub
              </h4>
              <div style={{ marginLeft: 2 }}>
                <div style={{ color: '#23324d', fontWeight: 500, marginBottom: 2 }}>Problem:</div>
                <div style={{ color: '#4a4a4a', marginBottom: 8 }}>$6.8 M over 90-day AR.</div>
                <div style={{ color: '#23324d', fontWeight: 500, marginBottom: 2 }}>HBS Impact:</div>
                <div style={{ color: '#4a4a4a' }}>Enterprise hub recovered $3.2 M in 4 months, slashing AR &gt; 90 days from 28% to 9%.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceFeaturesSection;
