import React, { useState, useLayoutEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import cardiologyBg from '../../assets/images/hero/Explor_bg.webp';

const ExplorePartnership = () => {
  const navigate = useNavigate();
  const [headerPad, setHeaderPad] = useState(120);

  useLayoutEffect(() => {
    function updatePad() {
      const header = document.querySelector('header');
      const infoBar = document.querySelector('.top-info-bar');
      let pad = 120;
      if (header) pad = header.offsetHeight;
      if (infoBar) pad += infoBar.offsetHeight;
      setHeaderPad(pad + 30);
    }
    updatePad();
    window.addEventListener('resize', updatePad);
    return () => window.removeEventListener('resize', updatePad);
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${cardiologyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: `${headerPad}px 0 70px 0`,
          color: '#fff',
          position: 'relative',
          fontFamily: 'Arial, sans-serif',
          minHeight: '420px',
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div className="row align-items-start">
            <div className="col-md-7">
              <h1 className="fw-bold" style={{ fontSize: '2.4rem', lineHeight: 1.15, marginBottom: 12, color: '#fff', fontWeight: 900 }}>
                Explore Partnership with HBS
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#e6f6fb', maxWidth: 720 }}>
                Healthcare organizations operate in different ways, and their revenue cycle challenges are rarely identical. Some practices require complete billing management, while others need specialized support in specific operational areas.
              </p>
              <div style={{ marginTop: 18 }}>
                <button
                  className="btn"
                  style={{ background: '#5CBDAA', color: '#fff', fontWeight: 'bold', fontSize: '1rem', padding: '12px 28px', borderRadius: 10, border: 'none' }}
                  onClick={() => navigate('/contact')}
                >
                  Start a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '48px 0' }}>
        <Container>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 8, color: '#0b155b' }}>Our Partnership Approach</h2>
          <p style={{ color: '#334155' }}>HBS works as an operational partner to healthcare organizations. Depending on the structure of your practice or healthcare system, our team can integrate with your internal staff or operate as an independent revenue cycle management partner.</p>
          <p style={{ color: '#334155' }}>Our goal is simple: help providers improve revenue performance, reduce administrative burden, and strengthen financial operations.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: 8 }}>Full Revenue Cycle Management Partnership</h3>
          <p style={{ color: '#334155' }}>For organizations that prefer a fully managed approach, HBS offers complete Revenue Cycle Management (RCM) services. Under this partnership model, our team manages the entire lifecycle of the billing process, including claim creation, payer follow-ups, denial resolution, and payment reconciliation.</p>
          <p style={{ color: '#334155' }}>This structure allows providers to focus entirely on patient care while our team ensures the revenue cycle remains efficient and compliant.</p>
          <ul style={{ color: '#334155' }}>
            <li>Patient eligibility verification</li>
            <li>Charge entry and claim submission</li>
            <li>Insurance AR follow-ups</li>
            <li>Denial management and appeals</li>
            <li>Payment posting and reconciliation</li>
            <li>Patient billing and collections</li>
            <li>Revenue reporting and performance analysis</li>
          </ul>
          <p style={{ color: '#334155' }}>In most cases, this partnership operates on a percentage-based model tied to collected revenue, aligning our success directly with the financial performance of your organization.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Targeted Revenue Cycle Partnerships</h3>
          <p style={{ color: '#334155' }}>Many healthcare organizations already have internal billing teams but may need additional support in specific operational areas. HBS offers targeted partnership models where we work alongside your existing staff to strengthen specific domains of your revenue cycle.</p>
          <ul style={{ color: '#334155' }}>
            <li>Aging Accounts Receivable Recovery</li>
            <li>Insurance AR Follow-Up Management</li>
            <li>Denial Management & Appeals Processing</li>
            <li>Revenue Recovery Projects</li>
            <li>Claims Resubmission & Underpayment Analysis</li>
            <li>Payer Communication & Dispute Resolution</li>
          </ul>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>MSO and Administrative Support Partnerships</h3>
          <p style={{ color: '#334155' }}>HBS also collaborates with healthcare organizations through administrative and operational support partnerships, similar to the model used by many Management Services Organizations (MSOs). Support areas may include revenue cycle workflow optimization, billing operations management, credentialing and payer enrollment support, compliance and reporting assistance, and administrative workflow coordination.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Third-Party Revenue Cycle Partnerships</h3>
          <p style={{ color: '#334155' }}>In some cases, healthcare organizations prefer to maintain their existing billing infrastructure while partnering with an external specialist to strengthen performance. In this model, HBS operates as a third-party revenue cycle partner, focusing on performance improvement, reporting, and operational support.</p>
          <p style={{ color: '#334155' }}>Common use cases include multi-specialty clinics, behavioral health organizations, physician groups, and healthcare networks expanding their services.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Custom Partnership Models</h3>
          <p style={{ color: '#334155' }}>Every healthcare organization has unique workflows, payer relationships, and operational challenges. For this reason, HBS partnership structures are always customized to the needs of the provider.</p>
          <p style={{ color: '#334155' }}>During the consultation process, our team reviews current billing workflows, insurance payer mix, outstanding accounts receivable, administrative infrastructure, and revenue cycle performance. Based on this assessment, we recommend a partnership structure that best supports your operational and financial goals.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Start a Partnership Conversation</h3>
          <p style={{ color: '#334155' }}>If you are exploring ways to strengthen your billing operations, recover outstanding revenue, or improve financial performance, our team would be happy to discuss potential collaboration opportunities.</p>
          <p style={{ color: '#334155' }}>Use the consultation form below to submit your inquiry, and a member of the HBS team will contact you to schedule a discussion. Your practice can select the partnership model that best fits your organization, or we can help design a customized structure based on your operational needs.</p>
        </Container>
      </section>
    </>
  );
};

export default ExplorePartnership;
