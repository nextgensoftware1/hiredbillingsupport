import React from "react";

const PricingBenefits = () => {
  return (
    <section className="py-5" style={{ background: "var(--bs-white)" }} aria-label="Benefits">
      <div className="container">
        <div className="row align-items-center justify-content-center mb-4" style={{ minHeight: '120px' }}>
          <div className="col-lg-3 col-md-4 col-12 mb-3 mb-lg-0 text-lg-start text-center">
            <h2 className="fw-bold" style={{ color: 'var(--bs-dark)', fontSize: '1.35rem', marginLeft: '10px' }}>
              HBS helps you
            </h2>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <div className="d-flex flex-row justify-content-center gap-4 flex-wrap">
              <article className="bg-light rounded-4 p-4 text-start shadow-sm" style={{ minWidth: '220px', maxWidth: '320px', flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} aria-labelledby="benefit-1">
                <div className="mb-2" style={{ fontSize: '2rem', color: 'var(--bs-dark)' }} aria-hidden>
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3 id="benefit-1" className="fw-bold mb-1" style={{ color: 'var(--bs-dark)', fontSize: '1.05rem' }}>Save up-to 70%</h3>
                <p className="mb-0 text-muted" style={{ fontSize: '1rem' }}>
                  Ambitious talent without compromising quality.
                </p>
              </article>

              <article className="bg-light rounded-4 p-4 text-start shadow-sm" style={{ minWidth: '220px', maxWidth: '320px', flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} aria-labelledby="benefit-2">
                <div className="mb-2" style={{ fontSize: '2rem', color: 'var(--bs-dark)' }} aria-hidden>
                  <i className="fas fa-clock"></i>
                </div>
                <h3 id="benefit-2" className="fw-bold mb-1" style={{ color: 'var(--bs-dark)', fontSize: '1.05rem' }}>Hire 10x Faster</h3>
                <p className="mb-0 text-muted" style={{ fontSize: '1rem' }}>
                  Onboard your new hire within two weeks.
                </p>
              </article>

              <article className="bg-light rounded-4 p-4 text-start shadow-sm" style={{ minWidth: '220px', maxWidth: '320px', flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} aria-labelledby="benefit-3">
                <div className="mb-2" style={{ fontSize: '2rem', color: 'var(--bs-dark)' }} aria-hidden>
                  <i className="fas fa-users"></i>
                </div>
                <h3 id="benefit-3" className="fw-bold mb-1" style={{ color: 'var(--bs-dark)', fontSize: '1.05rem' }}>97% Retention Rate</h3>
                <p className="mb-0 text-muted" style={{ fontSize: '1rem' }}>
                  Avoid staffing gaps maintaining seamless operations.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-auto text-center d-flex align-items-center gap-2">
            <span className="fw-semibold" style={{ color: 'var(--bs-dark)', fontSize: '1rem' }}>Excellent</span>
          
            <span style={{ color: 'var(--bs-primary)', fontWeight: '700', fontSize: '1rem' }} aria-hidden>
              <i className="fas fa-star" style={{ marginRight: '2px' }}></i>
              <i className="fas fa-star" style={{ marginRight: '2px' }}></i>
              <i className="fas fa-star" style={{ marginRight: '2px' }}></i>
              <i className="fas fa-star" style={{ marginRight: '2px' }}></i>
              <i className="fas fa-star"></i>
            </span>
            <span className="ms-2" style={{ color: 'var(--bs-dark)', fontSize: '1rem' }}>Trustpilot</span>
          </div>
        </div>
      </div>

      <style>
        {`\n+          .bg-light { background-color: var(--bs-light) !important; }\n+          @media (max-width: 767px) {\n+            .d-flex.flex-row { gap: 12px !important; }\n+            .container .col-lg-3 { text-align: center; margin-bottom: 12px; }\n+          }\n+        `}
      </style>
    </section>
  );
};

export default PricingBenefits;
