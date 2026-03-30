import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - HBS | Hired Billing Support</title>
        <meta name="description" content="Read our Terms & Conditions for using Hired Billing Support services. Understand service agreement, usage policies, and legal terms." />
        <meta name="keywords" content="terms and conditions, service agreement, user agreement, legal terms, HBS services" />
        <meta property="og:title" content="Terms & Conditions - HBS | Hired Billing Support" />
        <meta property="og:description" content="Read our Terms & Conditions for using Hired Billing Support services." />
        <meta property="og:url" content="https://hiredbillingsupport.com/terms-conditions" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section with Gradient Background */}
      <section
        className="hero-section d-flex align-items-center justify-content-center position-relative"
        style={{
          background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)',
          minHeight: '400px',
          overflow: 'hidden',
          padding: '60px 20px',
          '@media (maxWidth: 992px)': {
            minHeight: '300px',
            padding: '40px 20px',
          },
        }}
      >
        {/* Overlay with Gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(0deg, rgba(92, 189, 170, 0.95), rgba(0, 0, 0, 0.20))',
            zIndex: 1,
          }}
        ></div>

        {/* Hero Content */}
        <div
          className="text-center position-relative"
          style={{
            zIndex: 2,
            animation: 'fadeInUp 1s ease-in-out',
            maxWidth: '800px',
          }}
        >
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '20px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              lineHeight: '1.2',
            }}
          >
            Terms & Conditions
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#ffffff',
              opacity: 0.95,
              marginBottom: '0',
              textShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            Please read our terms and conditions carefully before using our services
          </p>
        </div>

        {/* CSS Animation */}
        <style>
          {`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @media (max-width: 992px) {
              .hero-section h1 {
                font-size: 2.5rem !important;
              }
              .hero-section p {
                font-size: 1rem !important;
              }
            }
          `}
        </style>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Last Updated */}
        {/* <div style={{ textAlign: 'center', marginBottom: '40px', paddingBottom: '20px', borderBottom: '2px solid #e0e0e0' }}>
          <p style={{ color: '#888', fontSize: '0.95rem', marginBottom: '0' }}>
            Last Updated: November 2024
          </p>
        </div> */}

        {/* 1. Acceptance of Terms */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>1. Acceptance of Terms</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            By accessing and using this website (hiredbillingsupport.com) and our services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        {/* 2. Use License */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>2. Use License</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Permission is granted to temporarily download one copy of the materials (information or software) on Hired Billing Support's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose, or for any public display</li>
            <li>Attempting to reverse engineer, decompile, or disassemble any software contained on Hired Billing Support's website</li>
            <li>Removing any copyright or proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            <li>Violating any applicable laws or regulations in connection with your access or use</li>
          </ul>
        </section>

        {/* 3. Disclaimer */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>3. Disclaimer</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            The materials on Hired Billing Support's website are provided on an 'as is' basis. Hired Billing Support makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        {/* 4. Limitations */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>4. Limitations</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            In no event shall Hired Billing Support or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Hired Billing Support's website, even if Hired Billing Support or a Hired Billing Support authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        {/* 5. Accuracy of Materials */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>5. Accuracy of Materials</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            The materials appearing on Hired Billing Support's website could include technical, typographical, or photographic errors. Hired Billing Support does not warrant that any of the materials on our website are accurate, complete, or current. Hired Billing Support may make changes to the materials contained on our website at any time without notice.
          </p>
        </section>

        {/* 6. Materials on Website */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>6. Materials on Website</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Hired Billing Support has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Hired Billing Support of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        {/* 7. Modifications */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>7. Modifications</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Hired Billing Support may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        {/* 8. Governing Law */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>8. Governing Law</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            These terms and conditions of use and any dispute arising out of your use of this website is governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts located in Florida.
          </p>
        </section>

        {/* 9. Service Description */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>9. Service Description</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Hired Billing Support provides medical billing, revenue cycle management, and remote staffing services. Our services are designed to assist healthcare providers with billing and administrative tasks. We comply with all applicable healthcare regulations including HIPAA and HITECH Act requirements.
          </p>
          <h3 style={{ color: '#333', fontSize: '1.3rem', marginTop: '25px', marginBottom: '10px', fontWeight: '600' }}>9.1 Service Scope</h3>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Medical coding and billing services</li>
            <li>Revenue cycle management and optimization</li>
            <li>Remote staffing and talent placement</li>
            <li>Compliance and documentation support</li>
            <li>Customer support and consultation services</li>
          </ul>
        </section>

        {/* 10. User Responsibilities */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>10. User Responsibilities</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            You agree to use this website and our services only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment. Prohibited behavior includes:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Harassing or causing distress or inconvenience to any person</li>
            <li>Obscene or abusive messages or images</li>
            <li>Disrupting the normal flow of dialogue within our website</li>
            <li>Attempting to gain unauthorized access to our systems</li>
            <li>Violating any applicable laws or regulations</li>
            <li>Violating HIPAA or healthcare data protection regulations</li>
          </ul>
        </section>

        {/* 11. Intellectual Property Rights */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>11. Intellectual Property Rights</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            All content on Hired Billing Support's website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Hired Billing Support or its content suppliers and is protected by international copyright laws. The compilation of all content on this website is the exclusive property of Hired Billing Support and protected by international copyright laws.
          </p>
        </section>

        {/* 12. Limitation of Liability */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>12. Limitation of Liability</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Hired Billing Support shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services, even if Hired Billing Support has been advised of the possibility of such damages. Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you.
          </p>
        </section>

        {/* 13. Indemnification */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>13. Indemnification</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            You agree to indemnify, defend, and hold harmless Hired Billing Support and its officers, directors, employees, agents, and successors from any claim, damage, loss, liability, or expense (including reasonable attorneys' fees) arising from your use of the website or services, your violation of these terms and conditions, or your violation of any rights of another party.
          </p>
        </section>

        {/* 14. Termination */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>14. Termination of Service</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Hired Billing Support reserves the right to terminate or suspend your account and access to our services at any time, for any reason, with or without notice. Grounds for termination include, but are not limited to:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Violation of these terms and conditions</li>
            <li>Non-payment of fees or outstanding balances</li>
            <li>Breach of service agreement or contract</li>
            <li>Fraudulent or illegal activity</li>
            <li>Violation of healthcare regulations or HIPAA compliance</li>
          </ul>
        </section>

        {/* 15. Payment Terms */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>15. Payment Terms</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            All service fees are due according to the payment terms specified in your service agreement or invoice. Late payments may result in:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Additional interest charges</li>
            <li>Service suspension or termination</li>
            <li>Collection action</li>
            <li>Legal proceedings for recovery of unpaid amounts</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#555', marginTop: '15px', fontSize: '1rem' }}>
            We accept various payment methods as specified in your service agreement. All prices are subject to change with notice.
          </p>
        </section>

        {/* 16. HIPAA and Compliance */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>16. HIPAA and Healthcare Compliance</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            As a healthcare service provider, Hired Billing Support is fully compliant with:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li><strong>HIPAA (Health Insurance Portability and Accountability Act):</strong> All Protected Health Information (PHI) is handled with strict confidentiality and security measures</li>
            <li><strong>HITECH Act (Health Information Technology for Economic and Clinical Health):</strong> We maintain enhanced security protocols for healthcare data</li>
            <li><strong>State Privacy Laws:</strong> Compliance with applicable state healthcare and data privacy regulations</li>
            <li><strong>Business Associate Agreements (BAAs):</strong> Maintained with all covered entities and partners</li>
            <li><strong>Security Standards:</strong> Implementation of administrative, physical, and technical safeguards</li>
          </ul>
        </section>

        {/* 17. Confidentiality */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>17. Confidentiality</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Both parties agree to maintain the confidentiality of any proprietary information, trade secrets, or sensitive data shared during the provision of services. This includes but is not limited to patient data, billing information, client financial information, and business processes. Unauthorized disclosure or use of confidential information is strictly prohibited.
          </p>
        </section>

        {/* 18. Disclaimer of Warranties */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>18. Disclaimer of Warranties</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Our website and services are provided on an "as-is" basis. Hired Billing Support makes no warranties, express or implied, regarding:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Uninterrupted or error-free operation of services</li>
            <li>Results obtained from using our services</li>
            <li>Accuracy, completeness, or reliability of content</li>
            <li>Fitness for a particular purpose or merchantability</li>
          </ul>
        </section>

        {/* 19. Dispute Resolution */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>19. Dispute Resolution</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Any disputes arising from these terms and conditions or the use of our website and services shall be resolved through:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li><strong>Negotiation:</strong> Good faith discussion between parties to resolve the dispute</li>
            <li><strong>Mediation:</strong> If negotiation fails, the parties agree to mediate the dispute</li>
            <li><strong>Arbitration/Litigation:</strong> If mediation fails, disputes shall be resolved through binding arbitration or litigation in applicable courts</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#555', marginTop: '15px', fontSize: '1rem' }}>
            Disputes shall be governed by the laws of the United States (Florida) without regard to conflicts of law principles.
          </p>
        </section>

        {/* 20. Contact Information */}
        <section style={{ marginBottom: '40px', backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>20. Contact Us</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            If you have any questions about these Terms and Conditions or our services, please contact us:
          </p>
          <div style={{ lineHeight: '2', color: '#555', fontSize: '1rem' }}>
            <p><strong>Hired Billing Support</strong></p>
            <p><strong>Email:</strong> info@hiredbillingsupport.com</p>
            <p><strong>Phone:</strong> +1 321 321-1740</p>
            <p><strong>Website:</strong> hiredbillingsupport.com</p>
          </div>
        </section>

        {/* Entire Agreement */}
        <section style={{ marginTop: '40px', paddingTop: '30px', borderTop: '2px solid #e0e0e0' }}>
          <p style={{ lineHeight: '1.8', color: '#666', fontSize: '0.95rem', fontStyle: 'italic' }}>
            These Terms and Conditions constitute the entire agreement between you and Hired Billing Support regarding your use of our website and services and supersede all prior or contemporaneous communications, whether electronic, oral, or written, between you and Hired Billing Support.
          </p>
        </section>
      </section>
    </>
  );
};
  // jj
export default TermsConditions;
