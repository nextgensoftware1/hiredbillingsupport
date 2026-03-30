import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BsCalendarCheck,
  BsPersonCheck,
  BsShieldCheck,
  BsJournalText,
  BsLaptop,
  BsChatDots,
  BsInbox,
  BsGraphUp
} from 'react-icons/bs';
import '../WhyHire.css';

const Medicalcore = () => {
  const services = [
    {
      icon: BsCalendarCheck,
      title: "Patient Scheduling",
      description: "High-volume inbound/outbound scheduling, rescheduling, and recalls with no-show reduction."
    },
    {
      icon: BsPersonCheck,
      title: "Insurance Verification",
      description: "Real-time eligibility & benefits checks; document co-pays, deductibles, and coverage notes."
    },
    {
      icon: BsShieldCheck,
      title: "Prior Authorizations",
      description: "Gather clinicals, submit PAs, and track approvals; proactive follow-ups to prevent delays."
    },
    {
      icon: BsJournalText,
      title: "Medical Scribing (Live/Async)",
      description: "Chart in real time or from recordings; templates/macros aligned to your specialty & EHR."
    },
    {
      icon: BsLaptop,
      title: "EHR Data Entry & Cleanup",
      description: "Problem lists, meds, allergies, labs, orders, inbox triage—entered consistently and on time."
    },
    {
      icon: BsChatDots,
      title: "Patient Communication",
      description: "Phone/SMS/portal messages, appointment reminders, pre-visit instructions, and recalls."
    },
    {
      icon: BsInbox,
      title: "Provider Inbox & Referrals",
      description: "Fax/portal processing, refills, referrals, and results routing with audit-ready logs."
    },
    {
      icon: BsGraphUp,
      title: "QA & Reporting",
      description: "Daily productivity/accuracy reports; spot checks and workflow improvements you can track."
    }
  ];

  return (
    <section className="why-hire-section pt-100 pb-70">
      <Container>
        <div className="section-title text-center mb-5">
          <h2>Our Core Services</h2>
          <p className="mb-0">
            Medical Billing Services by us enables healthcare providers to concentrate on giving incredible consideration. Through observing the SOPs of each practice and following them diligently, we find the best and most effective billings to keep your practice going smoothly. With you focused on patient experience, we engage in billing and coding to aid your business.
          </p>
        </div>

        <Row>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Col lg={3} md={6} sm={6} key={index}>
                <div className="feature-card text-center mb-4">
                  <div className="icon-wrapper mb-4">
                    <Icon className="service-icon" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Medicalcore;
