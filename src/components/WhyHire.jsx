import React, { useEffect } from 'react';
import WOW from 'wowjs';
import './WhyHire.css';


const WhyHire = () => {
    useEffect(() => {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }).init();
    }, []);

    return (
        <section className="why-hire-section pt-100 pb-70">
            <div className="container">
                                <div className="section-title text-center mb-5">
                                     <h2 style={{ fontWeight: 'bold' }}>
    <span
        style={{
        //   background: 'linear-gradient(90deg, #1abc9c, #3498db)',
            background: ' #3498db',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }}
    >
        Engagement Models
    </span>
</h2>
                                </div>

                <div className="row">
                    {/* Remote Agent Pod */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.1s">
                            <div className="icon-wrapper mb-4">
                              <i className="fas fa-shield-alt"></i>

                            </div>
                            <h3>Remote Agent Pod</h3>
                            <p>
                                Hourly pod solves one bottleneck (eligibility, PA, posting) from $10/hr. Rapid 5–15× ROI.
                            </p>
                        </div>
                    </div>

                    {/* Operational Partnership */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.2s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h3>Operational Partnership</h3>
                            <p>
                                We co‑manage a revenue lane (denials, AR hub, coding QA) on fixed fee or gain‑share. 10–25× ROI.
                            </p>
                        </div>
                    </div>

                    {/* Vendor Contract */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.3s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-laptop-medical"></i>
                            </div>
                            <h3>Vendor Contract</h3>
                            <p>
                                Outcome‑based SLA for transactional throughput—ideal for pay‑as‑you‑grow start‑ups.
                            </p>
                        </div>
                    </div>

                    {/* Hub-Based Alliance */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.4s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-file-medical-alt"></i>
                            </div>
                            <h3>Hub-Based Alliance</h3>
                            <p>
                                Regional hospital groups centralize finance ops in an HBS command hub—shared analytics, local compliance.
                            </p>
                        </div>
                    </div>

                    {/* Retainer Advisory */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.5s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-user-md"></i>
                            </div>
                            <h3>Retainer Advisory</h3>
                            <p>
                                Quarterly KPI audits, payer‑mix optimization, and compliance governance for leadership teams.
                            </p>
                        </div>
                    </div>

                    {/* Enterprise MSO Alliance */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.6s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>Enterprise MSO Alliance</h3>
                            <p>
                                Turnkey non‑clinical stack for large health systems—with EBITDA‑aligned pricing and single SLA.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// Add workdeskva-link CSS for special styling
// You can move this to your main CSS file if preferred
// Styles moved to style.css for better maintainability and site branding

export default WhyHire;
