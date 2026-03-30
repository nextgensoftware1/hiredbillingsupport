import React, { useEffect } from 'react';
import WOW from 'wowjs';
import './WhyHire.css';


const LatestInsights = () => {
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
                            Latest Insights
                        </span>
                    </h2>
                </div>

                <div className="row">
                    {/* Cut Prior-Auth Delays */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.1s">
                            <div className="icon-wrapper mb-4">
                              <i className="fas fa-shield-alt"></i>

                            </div>
                            <h3>Cut Prior-Auth Delays 70%</h3>
                            <p>
                                Data from 1.2k orthopedic PA requests reveals three workflow tweaks that slash cycle time.
                            </p>
                        </div>
                    </div>

                    {/* Denial Root-Causes 2026 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.2s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h3>Denial Root-Causes 2026</h3>
                            <p>
                                Modifier 59 misuse and missing CERT docs remain top culprits - prevention playbook inside.
                            </p>
                        </div>
                    </div>

                    {/* ROI of $15/hr Pods vs. In-House */}
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-card text-center mb-4 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.3s">
                            <div className="icon-wrapper mb-4">
                                <i className="fas fa-laptop-medical"></i>
                            </div>
                            <h3>ROI of $15/hr Pods vs. In-House</h3>
                            <p>
                                Side-by-side labor economics for a 5-site dermatology group.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-3">
                    <a className="rcm-read-more" href="/blog">All insights -&gt;</a>
                </div>
            </div>
        </section>
    );
};


export default LatestInsights;