import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Hero Section - Matching Pricing Hero Style */}
      <section
        className="hero-section d-flex align-items-center justify-content-center position-relative"
        style={{
          background: 'linear-gradient(135deg, #5CBDAA 0%, #54A1D9 100%)',
          overflow: 'hidden',
          padding: '0',
        }}
        id="hero"
      >
        {/* Overlay for contrast */}
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

        {/* Content */}
        <div className="container position-relative d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 2, minHeight: '400px' }}>
          <div className="hero-content text-center py-5">
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: '2.5rem',
                color: '#ffffff',
                lineHeight: '1.2',
                textShadow: '0 2px 8px rgba(0,0,0,0.18)',
              }}
            >
              Privacy Policy
            </h1>
            <p
              className="lead mt-3"
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontWeight: 500,
                fontSize: '1.15rem',
                textShadow: '0 1px 2px rgba(0,0,0,0.10)',
              }}
            >
              Your privacy and data security are our top priorities at Hired Billing Support<br />
              We maintain HIPAA compliance and protect your healthcare information with industry-leading standards.
            </p>
          </div>
        </div>

        {/* Responsive & Animation Styles */}
        <style>
          {`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translate3d(0, 40px, 0); }
              to { opacity: 1; transform: none; }
            }

            .hero-content {
              animation: fadeInUp 1s ease-in-out;
            }

            @media (max-width: 992px) {
              .hero-section {
                min-height: 260px !important;
                border-radius: 1rem;
                margin: 16px 0;
                text-align: center;
              }
              .hero-content h1 {
                font-size: 1.5rem;
              }
              .hero-content p {
                font-size: 1rem;
              }
            }
          `}
        </style>
      </section>

      {/* Content Section */}
      <div className="container" style={{ maxWidth: '900px', padding: '60px 20px' }}>
        
        {/* Last Updated */}
        {/* <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #5CBDAA' }}>
          <p style={{ margin: 0, color: '#666' }}>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div> */}

        {/* Introduction */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>1. Introduction</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            Hired Billing Support ("HBS", "we", "us", "our", or "Company") is committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (hiredbillingsupport.com) and use our medical billing, remote staffing, and healthcare revenue cycle management services.
          </p>
          <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1rem' }}>
            Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Site or Services.
          </p>
        </section>

        {/* Information We Collect */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>2. Information We Collect</h2>
          
          <h3 style={{ color: '#333', fontSize: '1.3rem', marginTop: '25px', marginBottom: '10px', fontWeight: '600' }}>2.1 Information You Provide Directly</h3>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li><strong>Contact Information:</strong> Name, email address, phone number, company name, address, and other contact details provided through forms and contact requests</li>
            <li><strong>Account Information:</strong> Username, password, billing information, and account preferences</li>
            <li><strong>Communication Data:</strong> Messages, inquiries, feedback, and correspondence you send to us</li>
            <li><strong>Service Data:</strong> Information related to billing services, coding, compliance documentation, and other healthcare-related data</li>
            <li><strong>Medical/Healthcare Information:</strong> Patient data, medical records, billing codes, insurance information (processed with strict HIPAA compliance)</li>
          </ul>

          <h3 style={{ color: '#333', fontSize: '1.3rem', marginTop: '25px', marginBottom: '10px', fontWeight: '600' }}>2.2 Information Collected Automatically</h3>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li><strong>Device Information:</strong> Device type, operating system, browser type, and mobile device identifiers</li>
            <li><strong>Usage Information:</strong> Pages visited, time spent on pages, links clicked, and navigation patterns</li>
            <li><strong>IP Address and Location:</strong> IP address and approximate geographic location</li>
            <li><strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and similar technologies</li>
            <li><strong>Server Logs:</strong> Access logs and server analytics</li>
          </ul>

          <h3 style={{ color: '#333', fontSize: '1.3rem', marginTop: '25px', marginBottom: '10px', fontWeight: '600' }}>2.3 Information from Third Parties</h3>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Business partners and service providers</li>
            <li>Third-party analytics providers</li>
            <li>Publicly available sources</li>
            <li>Social media platforms (if you connect your account)</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>3. How We Use Your Information</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>We use the collected information for:</p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Providing, maintaining, and improving our medical billing and healthcare services</li>
            <li>Processing transactions and sending billing information</li>
            <li>Responding to inquiries and customer support requests</li>
            <li>Sending marketing communications (with your consent)</li>
            <li>Conducting business operations and analytics</li>
            <li>Complying with legal obligations and regulations (HIPAA, HITECH, state laws)</li>
            <li>Detecting and preventing fraudulent activities and security breaches</li>
            <li>Personalizing your experience and website content</li>
            <li>Conducting research and improving our services</li>
            <li>Fulfilling remote staffing and talent placement services</li>
          </ul>
        </section>

        {/* HIPAA Compliance */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>4. HIPAA and Healthcare Data Protection</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            As a healthcare billing company, we are committed to HIPAA (Health Insurance Portability and Accountability Act) compliance:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Protected Health Information (PHI) is secured with encryption and access controls</li>
            <li>We maintain Business Associate Agreements (BAAs) with covered entities</li>
            <li>Our staff undergoes regular HIPAA and compliance training</li>
            <li>We maintain audit logs and conduct regular security assessments</li>
            <li>Data breaches are reported according to HIPAA breach notification rules</li>
            <li>We use secure systems for data transmission and storage</li>
            <li>Patient privacy rights are strictly maintained</li>
          </ul>
        </section>

        {/* Information Sharing and Disclosure */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>5. Information Sharing and Disclosure</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>We may share your information in the following situations:</p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li><strong>Service Providers:</strong> With vendors who assist in our operations (under confidentiality agreements)</li>
            <li><strong>Business Partners:</strong> With affiliated companies providing complementary services</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
            <li><strong>Safety and Protection:</strong> To protect our rights, privacy, safety, or property</li>
            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            <li><strong>Aggregated Data:</strong> Non-personally identifiable, aggregated data for analytics and research</li>
            <li><strong>With Your Consent:</strong> Any other sharing only with your explicit consent</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#555', marginTop: '15px', fontSize: '1rem' }}>
            <strong>Important:</strong> We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>
        </section>

        {/* Data Security */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>6. Data Security</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            We implement comprehensive security measures to protect your information:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li><strong>Encryption:</strong> SSL/TLS encryption for data in transit</li>
            <li><strong>Access Control:</strong> Role-based access and authentication protocols</li>
            <li><strong>Firewalls:</strong> Network security and intrusion detection systems</li>
            <li><strong>Secure Servers:</strong> Data stored on secure, monitored servers</li>
            <li><strong>Employee Training:</strong> Staff trained in data protection and security best practices</li>
            <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
            <li><strong>Incident Response:</strong> Documented procedures for security incidents</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#555', marginTop: '15px', fontSize: '1rem' }}>
            While we implement strong security measures, no transmission over the Internet is 100% secure. We cannot guarantee absolute security of your information.
          </p>
        </section>

        {/* Data Retention */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>7. Data Retention</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            We retain your information for as long as necessary to:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Provide our services and fulfill our contractual obligations</li>
            <li>Comply with legal and regulatory requirements (typically 5-7 years for healthcare records)</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Maintain accurate business records</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#555', marginTop: '15px', fontSize: '1rem' }}>
            Upon request and where legally permitted, we will delete or anonymize your information when it is no longer needed.
          </p>
        </section>

        {/* Your Rights and Choices */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>8. Your Rights and Choices</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px', fontSize: '1rem' }}>
            You have the following rights regarding your personal information:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px', fontSize: '1rem' }}>
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your information (subject to legal obligations)</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
            <li><strong>Cookies:</strong> Control cookie preferences through browser settings</li>
            <li><strong>HIPAA Rights:</strong> Exercise your HIPAA patient rights including access and amendment</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#555', marginTop: '15px', fontSize: '1rem' }}>
            To exercise any of these rights, please contact us at <strong>info@hiredbillingsupport.com</strong> or <strong>+1 321 321-1740</strong>.
          </p>
        </section>

        {/* Cookies and Tracking */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>9. Cookies and Tracking Technologies</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px' }}>
            Our website uses cookies and similar tracking technologies to enhance your experience:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px' }}>
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Performance Cookies:</strong> Analyze website usage and performance</li>
            <li><strong>Marketing Cookies:</strong> Track marketing effectiveness (with consent)</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#555', marginTop: '15px' }}>
            You can control cookies through your browser settings. Disabling cookies may affect website functionality.
          </p>
        </section>

        {/* Third-Party Links */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>10. Third-Party Links</h2>
          <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1rem' }}>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies before sharing your information.
          </p>
        </section>

        {/* Children's Privacy */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>11. Children's Privacy</h2>
          <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1rem' }}>
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information and terminate the child's account.
          </p>
        </section>

        {/* International Data Transfers */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>12. International Data Transfers</h2>
          <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1rem' }}>
            If you access our services from outside the United States, please be aware that your information may be transferred to, stored in, and processed in the United States and other countries. By using our services, you consent to such transfers.
          </p>
        </section>

        {/* Contact Us */}
        <section style={{ marginBottom: '40px', backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '700' }}>13. Contact Us</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px' }}>
            If you have questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div style={{ lineHeight: '2', color: '#555' }}>
            <p><strong>Hired Billing Support</strong></p>
            <p><strong>Email:</strong> info@hiredbillingsupport.com</p>
            <p><strong>Phone:</strong> +1 321 321-1740</p>
            <p><strong>Website:</strong> hiredbillingsupport.com</p>
          </div>
          <p style={{ lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
            We will respond to your inquiry within 30 days of receipt.
          </p>
        </section>

        {/* Policy Changes */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px' }}>14. Changes to This Privacy Policy</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services constitutes your acceptance of the revised Privacy Policy.
          </p>
        </section>

        {/* Compliance Certifications */}
        <section style={{ backgroundColor: '#f0faf9', padding: '30px', borderRadius: '8px', border: '1px solid #d5e8e6' }}>
          <h2 style={{ color: '#5CBDAA', fontSize: '1.8rem', marginBottom: '15px' }}>15. Compliance Certifications</h2>
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '15px' }}>
            Hired Billing Support is committed to compliance with:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px' }}>
            <li><strong>HIPAA (Health Insurance Portability and Accountability Act)</strong> - Protected Health Information security and privacy</li>
            <li><strong>HITECH Act (Health Information Technology for Economic and Clinical Health)</strong> - Breach notification and enforcement</li>
            <li><strong>State Privacy Laws</strong> - Including CCPA, CPRA, and other state-specific regulations</li>
            <li><strong>GDPR</strong> - General Data Protection Regulation (if applicable)</li>
            <li><strong>SOC 2 Compliance</strong> - Security and availability standards</li>
          </ul>
        </section>
      </div>

      {/* Footer CTA */}
      <div style={{ background: '#f8f9fa', padding: '40px 20px', textAlign: 'center', marginTop: '60px' }}>
        <div className="container">
          <h3 style={{ color: '#5CBDAA', marginBottom: '15px' }}>Questions About Your Privacy?</h3>
          <p style={{ color: '#555', marginBottom: '20px' }}>
            We're here to help. Contact our privacy team for any concerns or requests.
          </p>
          <a href="/contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)',
            color: 'white',
            padding: '12px 40px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
             onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
