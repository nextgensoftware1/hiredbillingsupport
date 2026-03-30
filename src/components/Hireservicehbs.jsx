import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hireservice.css';

// Import service images
import medicalVaImg from '../assets/images/services/medical-va.jpg';
import dentalVaImg from '../assets/images/services/dental-va.jpg';
import hospitalRcmImg from '../assets/images/services/hospital-rcm.jpg';

const tabData = [
  {
    key: 'medical',
    label: 'Medical',
    description: 'Keep phones answered, schedules full, and claims moving. Our trained remote staff work inside your EHR to handle front-desk, insurance, and documentation—so your clinicians stay with patients.',
    cards: [
      { title: 'Medical Receptionist', desc: 'Answers calls, books/reschedules, manages reminders and intake.' },
      { title: 'Insurance Eligibility Specialist', desc: 'Verifies coverage, copays/deductibles, COB, posts notes to EHR.' },
      { title: 'Prior Authorization Coordinator', desc: 'Collects clinicals, submits PAs, and tracks to approval.' },
      { title: 'Medical Scribe', desc: 'Real-time charting, histories, orders, and templated notes.' },
      { title: 'Claim Status & A/R', desc: 'Detailed follow ups with audit-ready notes until paid.' }
    ],
    image: medicalVaImg
  },
  {
    key: 'dental',
    label: 'Dental ',
    description: 'From front-desk to insurance, remote dental specialists keep chairs filled and revenue clean—working in Dentrix, Open Dental, Eaglesoft, and more.',
    cards: [
      { title: 'Dental Receptionist', desc: 'Phones, online requests, new-patient intake, confirmations.' },
      { title: 'Eligibility & Benefits', desc: 'Verifies frequencies, downgrades, eating periods, adds notes to EHR.' },
      { title: 'Pre-Auth & Predeterminations', desc: 'Submits with images/notes and tracks decisions.' },
      { title: 'Claims & A/R Specialist', desc: 'Cleans rejections, follows up, and reconciles EOBs.' },
      { title: 'Dental Scribe/Charting', desc: 'Perio charting, notes, and imaging labels per provider.' }
    ],
    image: dentalVaImg
  },
  {
    key: 'hospital',
    label: 'Rcm Management',
    description: 'End-to-end charge to cash for hospitals and groups. We improve first-pass approvals, reduce time to A/R and give you clear KPIs—working inside your existing EHR/PM.',
    cards: [
      { title: 'Eligibility & Registration QA', desc: 'Validates coverage and corrects registration issues.' },
      { title: 'Charge Capture & Coding Review', desc: 'Reconciles encounters, checks codes/modifiers/medical necessity.' },
      { title: 'Claim Scrubbing & Submission', desc: 'Payer-specific edits and clean EDI/paper submission.' },
      { title: 'Payment Posting & Reconciliation', desc: 'ERA/EOB posting, adjustments, and zero-pay handling.' },
      { title: 'Denial Management & Appeals', desc: 'Root-cause fixes and timely appeals with evidence.' }
    ],
    image: hospitalRcmImg
  }
];

const HireService = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].key);
  const currentTab = tabData.find(tab => tab.key === activeTab);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="hire-service-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-heading text-center">
              <h2 className="heading-text" style={{ fontWeight: 'bold' }}>
                <span
                  style={{
                    background: ' #3498db',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Your Trusted Partner in Remote&nbsp;
                </span>

                <span
                  style={{
                    background: ' #1abc9c',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Staffing Solutions
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="service-tabs">
          <div className="tab-navigation">
            {tabData.map(tab => (
              <button 
                key={tab.key}
                className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div 
            className="service-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
          >
            <div className="service-layout">
              <div className="service-main-content">
                <div className="service-cards">
                  {currentTab.cards.map((card, index) => {
                    // Map card titles to App.js routes
                    let url = '#';
                    if (currentTab.key === 'ai') {
                      if (card.title === 'AI Development') url = '/Aisoftware';
                      if (card.title === 'Full-Stack Development') url = '/Dedicated-developer';
                      if (card.title === 'Software Architecture') url = '/project-management';
                    } else if (currentTab.key === 'marketing') {
                      if (card.title === 'Social Media Management') url = '/Digitalmarkiting';
                      if (card.title === 'SEO Optimization') url = '/seo-optimization';
                      if (card.title === 'Content Marketing') url = '/content-writing';
                    } else if (currentTab.key === 'support') {
                      if (card.title === 'Customer Service Excellence') url = '/customer-support';
                      if (card.title === 'Administrative Support') url = '/admin-support';
                      if (card.title === 'Data Management') url = '/research-report';
                    } else if (currentTab.key === 'team') {
                      if (card.title === 'Team Building') url = '/remote-team-scaling';
                      if (card.title === 'Project Management') url = '/project-management';
                      if (card.title === 'Resource Planning') url = '/hire-dedicated-team';
                    }
                    return (
                      <a href={url} style={{ textDecoration: 'none' }}>
                        <motion.div 
                          key={index}
                          className="service-card"
                          variants={itemVariants}
                        >
                          <div className="service-card-content">
                            <div className="role-info">
                              <div className="role-details">
                                <h4>{card.title}</h4>
                                <p>{card.desc}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="service-image-section">
                <motion.div 
                  className="service-image-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  key={activeTab}
                >
                  <img 
                    src={currentTab.image}
                    alt={currentTab.label}
                    className="service-feature-image"
                  />
                
                
                </motion.div>
                  
                  <div >
                    {/* <div className="overlay-content"> */}
                      <h4 style={{ color: '#fff' }}>{currentTab.label}</h4>
                      <p style={{ color: '#fff' }}>{currentTab.description}</p>
                    {/* </div> */}
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HireService;
