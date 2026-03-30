import React, { useState, useLayoutEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import cardiologyBg from '../../assets/images/hero/find_services.webp';

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
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 8, color: '#0b155b' }}>Understanding Healthcare Operational Services</h2>
          <p style={{ color: '#334155' }}>Behind every healthcare organization exists a complex operational system that supports clinical care. From managing patient scheduling and insurance verification to ensuring accurate reimbursement from insurance payers, these processes form the foundation of a practice’s financial and administrative stability.</p>
          <p style={{ color: '#334155' }}>Healthcare providers today operate within a regulatory environment that requires accuracy, compliance, and operational efficiency across multiple domains. Revenue cycle management, medical coding, payer communication, and administrative coordination all play critical roles in ensuring that healthcare organizations function smoothly.</p>
          <p style={{ color: '#334155' }}>While many practices maintain internal teams to manage these areas, larger healthcare environments often rely on operational partners that specialize in supporting the non-clinical infrastructure of healthcare delivery. Hired Billing Support (HBS) operates within this ecosystem by supporting healthcare organizations across multiple operational domains, helping providers maintain efficient financial and administrative systems that scale with their clinical operations.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Revenue Cycle Operations</h3>
          <p style={{ color: '#334155' }}>Revenue Cycle Management (RCM) represents the financial backbone of healthcare organizations. It governs the entire lifecycle of a medical service from the moment a patient schedules an appointment until the provider receives full reimbursement for the care delivered.</p>
          <p style={{ color: '#334155' }}>Within a healthcare environment, the revenue cycle involves several operational stages including patient insurance verification, claim preparation, payer communication, reimbursement tracking, and financial reconciliation. Even minor inefficiencies within this process can lead to delayed reimbursements, unresolved claims, or revenue loss.</p>
          <p style={{ color: '#334155' }}>Healthcare organizations frequently rely on specialized operational support to maintain consistent oversight of the revenue cycle. Within this process, operational teams such as HBS assist providers by supporting claim monitoring, payer communication, reimbursement tracking, and overall revenue cycle workflow management. This ensures that claims move through the reimbursement process efficiently and that financial operations remain stable across the organization.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Medical Coding and Documentation Accuracy</h3>
          <p style={{ color: '#334155' }}>Medical coding plays a critical role in healthcare reimbursement. Every clinical service provided to a patient must be translated into standardized medical codes that communicate the diagnosis, procedures, and treatments performed.</p>
          <p style={{ color: '#334155' }}>Accurate coding requires a detailed understanding of coding systems such as ICD-10, CPT, and HCPCS, as well as payer-specific guidelines that determine how claims are evaluated during the reimbursement process. Healthcare organizations must also remain current with frequent regulatory updates, coding revisions, and modifier requirements that impact claim accuracy. Even small coding discrepancies can lead to claim denials, reimbursement reductions, or compliance risks.</p>
          <p style={{ color: '#334155' }}>For this reason, healthcare organizations often rely on specialized coding professionals who remain up to date with evolving payer guidelines and coding standards. Operational partners such as HBS assist healthcare organizations by supporting coding review processes, ensuring proper use of modifiers, and maintaining alignment with current coding regulations that affect reimbursement outcomes.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Accounts Receivable and Claim Resolution</h3>
          <p style={{ color: '#334155' }}>Accounts receivable management focuses on monitoring submitted claims that remain unpaid or partially reimbursed by insurance payers.</p>
          <p style={{ color: '#334155' }}>Within healthcare organizations, it is common for claims to remain unresolved due to payer processing delays, documentation requests, or submission discrepancies. If claims are not followed up consistently, they may remain in accounts receivable for extended periods and eventually be written off as uncollectible.</p>
          <p style={{ color: '#334155' }}>Healthcare operations therefore require structured follow-up systems that review claim status, communicate with insurance representatives, and resolve pending claims before reimbursement deadlines pass. Within this operational environment, HBS assists healthcare organizations by supporting AR monitoring processes, coordinating with payers, and identifying reimbursement opportunities when claims remain outstanding. This systematic approach helps organizations maintain healthier receivable cycles and improve revenue realization.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Denial Management and Reimbursement Recovery</h3>
          <p style={{ color: '#334155' }}>Claim denials represent one of the most complex operational challenges within healthcare billing. Insurance payers may deny claims for a wide variety of reasons, including coding inconsistencies, documentation requirements, authorization issues, eligibility conflicts, or payer policy interpretations.</p>
          <p style={{ color: '#334155' }}>Each denial must be carefully reviewed to determine the underlying cause before corrective action can be taken. Denial resolution often requires detailed claim analysis, documentation review, and formal appeal submissions to the insurance payer.</p>
          <p style={{ color: '#334155' }}>Because denial management requires both operational expertise and continuous payer communication, many healthcare organizations rely on specialized teams that focus exclusively on identifying denial patterns and coordinating reimbursement recovery efforts. Within this domain, HBS supports healthcare providers by assisting with denial review processes, appeal preparation, reimbursement analysis, and ongoing monitoring of payer response patterns.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Administrative Infrastructure and Patient Support</h3>
          <p style={{ color: '#334155' }}>Beyond financial operations, healthcare organizations depend heavily on administrative systems that support patient coordination and internal workflow management.</p>
          <p style={{ color: '#334155' }}>Administrative teams manage many essential functions that keep healthcare organizations running efficiently. These responsibilities may include patient communication, scheduling coordination, documentation processing, and insurance eligibility verification. As healthcare organizations grow in size and patient volume, administrative workload increases significantly.</p>
          <p style={{ color: '#334155' }}>To maintain operational continuity, many healthcare organizations incorporate administrative support structures that expand their capacity to manage patient interactions and internal coordination tasks. Within this environment, HBS provides healthcare administrative support and patient coordination services that assist organizations in managing daily operational responsibilities while maintaining consistent workflow performance.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Virtual Administrative Support in Healthcare</h3>
          <p style={{ color: '#334155' }}>Healthcare organizations increasingly integrate virtual administrative professionals into their operational structure to support patient services and internal coordination. Virtual assistants trained in healthcare operations can assist with a wide range of administrative functions including patient appointment coordination, documentation processing, insurance verification, and communication follow-ups.</p>
          <p style={{ color: '#334155' }}>This model allows healthcare organizations to expand operational capacity without significantly increasing internal staffing requirements. Within this operational framework, HBS provides healthcare-focused virtual assistant support that integrates with the administrative workflows of medical practices, clinics, and healthcare organizations. These professionals operate within structured operational guidelines to ensure patient communication and administrative processes remain organized and responsive.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>The MSO Model in Healthcare Operations</h3>
          <p style={{ color: '#334155' }}>Many healthcare providers collaborate with Management Services Organizations (MSOs) to strengthen the operational infrastructure that supports their clinical services. An MSO provides structured support across multiple non-clinical domains including revenue cycle operations, administrative coordination, compliance monitoring, and workflow management.</p>
          <p style={{ color: '#334155' }}>Through this model, healthcare providers maintain their clinical independence while benefiting from operational systems designed to support financial stability and administrative efficiency. Operating within this framework, Hired Billing Support (HBS) collaborates with healthcare organizations by supporting the financial, administrative, and operational systems that sustain modern healthcare practices. Our work spans multiple domains of healthcare operations and is structured to support organizations at scale, including physician groups, specialty practices, and larger healthcare facilities.</p>

          <hr style={{ margin: '28px 0' }} />

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Exploring Operational Support</h3>
          <p style={{ color: '#334155' }}>Healthcare organizations often encounter operational challenges in different areas depending on their internal structure, payer mix, and administrative resources. Some providers may seek support in areas such as coding accuracy or claim follow-ups, while others may require broader operational collaboration across multiple administrative and financial functions.</p>
          <p style={{ color: '#334155' }}>If your organization is currently reviewing its operational structure or exploring ways to strengthen its financial and administrative infrastructure, you may submit your inquiry through the consultation form provided on this page. A member of the HBS team will review the request and help identify the operational support structure that best aligns with the needs of your organization.</p>
        </Container>
      </section>
    </>
  );
};

export default ExplorePartnership;
