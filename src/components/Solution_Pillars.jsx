import React, { useEffect } from 'react';
import WOW from 'wowjs';
import './WhyHire.css';


const Solution_Pillars = () => {
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
                            Solution Pillars
                        </span>
                    </h2>
                </div>

                <div className="row">
                    {/* Financial Operations */}
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.1s">
                            <div className="icon-wrapper mb-4">
                              <i className="fas fa-shield-alt"></i>

                            </div>
                            <h3>Financial Operations</h3>
                            <p>
                                Claim scrubbing, denial analytics, AR recovery, and payment posting engineered for 99% clean-claim rates.
                            </p>
                            <a className="rcm-read-more" href="/ar-management">Explore -&gt;</a>
                        </div>
                    </div>

                    {/* Payer Strategy */}
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.2s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h3>Payer Strategy</h3>
                            <p>
                                Credentialing, enrollment, contract audits, prior-auth acceleration, and OON negotiations--one SLA.
                            </p>
                            <a className="rcm-read-more" href="/payer-insurer-Enrolment">Explore -&gt;</a>
                        </div>
                    </div>

                    {/* Administrative Enablement */}
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.3s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-laptop-medical"></i>
                            </div>
                            <h3>Administrative Enablement</h3>
                            <p>
                                Virtual front-desk, patient communications, documentation workflows, scheduling coordination.
                            </p>
                            <a className="rcm-read-more" href="/operations-management">Explore -&gt;</a>
                        </div>
                    </div>

                    {/* Data & Compliance */}
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.4s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-file-medical-alt"></i>
                            </div>
                            <h3>Data &amp; Compliance</h3>
                            <p>
                                Real-time KPI dashboards, SOC-aligned controls, HIPAA vault, 24-hour incident protocol.
                            </p>
                            <a className="rcm-read-more" href="/compliance-reporting">Insights -&gt;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Solution_Pillars;