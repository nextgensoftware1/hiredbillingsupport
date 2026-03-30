import { Container, Row, Col } from 'react-bootstrap';
import medicalReceptionist from '../../../assets/images/avatar/team-6.png';
import medicalCoder from '../../../assets/images/avatar/team-5.png';
import medicalScribe from '../../../assets/images/avatar/Dental_Billing_Specialist.webp';
import billingCoordinator from '../../../assets/images/avatar/team-11.webp';
import billingSpecialist from '../../../assets/images/avatar/Insurance_Dental_Specialist.webp';
import priorAuthCoordinator from '../../../assets/images/avatar/team-13.png';
import patientIntakeCoordinator from '../../../assets/images/avatar/Dental_Receptionist.webp';
import insuranceVerification from '../../../assets/images/avatar/Dental_Insurance_Coordinator.webp';
const Readygoal = () => {
  const roles = [
    {
        image: insuranceVerification,
      title: " Dental Insurance Coordinator ",
      description: " Processes dental claims end-to-end and manages pre-authorizations/predeterminations with required narratives and attachments."
    },
    {
    image: patientIntakeCoordinator,
      title: " Dental Receptionist",
      description: " Handles phones, scheduling and cancellations, confirmations/reminders, intake links, and patient messages."
    },
    // {
    
    //  image: priorAuthCoordinator,
    //   title: " Dental Billing Specialist",
    //   description: " Posts ERA/EOBs, reconciles payments and adjustments, clears rejections, and manages patient billing."
    // },
    {
    //   image: eligibilitySpecialist,
    image: billingSpecialist,
      title: " Insurance Verification Specialist",
      description: " Confirms benefits, frequencies, downgrades, waiting periods, and plan exclusions documents notes in the chart."
    },
    {
      image: billingCoordinator,
      title: "Prior Authorization Coordinator",
      description: " Submits pre-auths/predeterminations with X-rays, photos, and perio charts; tracks decisions and updates providers."
    },
    {
      image: medicalScribe,
      title: " Dental Billing Specialist",
      description: "Prepares and submits claims, clears rejections, posts ERA/EOBs, and manages refunds/adjustments."
    },
    {
      image: medicalCoder,
      title: " Benefits & Eligibility Specialist",
      description: "Verifies plan eligibility for specific procedures and programs; flags pre-auths and limitations."
    },
    {
       image: medicalReceptionist,
      title: "Patient Intake Coordinator",
      description: "Collects and organizes new-patient registrations, medical histories, consents, and demographics accurately."
    },
    // {
    //   image: insuranceVerification,
    //   title: "Insurance Verification Specialist",
    //   description: "Confirms coverage and plan rules, flags pre-auths/referrals, exclusions, and notes requirements."
    // }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <Container className="px-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Row className="justify-content-center mb-4">
          <Col lg={10} className="text-center">
            <h2 className="mb-3" style={{ 
              color: '#002856', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Scale Your Practice with Ready-to-Go&nbsp;
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                VAs
              </span>
            </h2>
            <p className="text-muted mb-5">
              Access rigorously screened, HIPAA-aligned medical VAs and specialists who slot into your workflows fast and keep operations moving.
            </p>
          </Col>
        </Row>

        {roles.map((role, index) => (
          <Row key={index} className="align-items-center mb-4">
            <Col lg={2} md={3} className="text-center">
              <img
                src={role.image}
                alt={role.title}
                className="img-fluid rounded-circle"
                style={{ 
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  border: '3px solid #f8f9fa'
                }}
              />
            </Col>
            <Col lg={10} md={9}>
              <h3 style={{ 
                color: '#002856', 
                fontSize: '1.5rem', 
                fontWeight: '700',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: '0.5rem'
              }}>
                {role.title}
              </h3>
              <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>
                {role.description}
              </p>
            </Col>
          </Row>
        ))}
        
        <Row className="justify-content-center mt-4">
          <Col className="text-center">
            <button 
              className="btn btn-success px-5 py-3 rounded-pill"
              style={{
                backgroundColor: '#00d084',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Starting from $10/Hr
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Readygoal;
