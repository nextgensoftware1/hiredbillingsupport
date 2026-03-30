import React from 'react';
import { BsShieldCheck, BsLaptop, BsLightningCharge } from 'react-icons/bs';
import { BiCalendarCheck } from 'react-icons/bi';
import { MdOutlineMedicalServices } from 'react-icons/md';

const IconsService = () => {
  const services = [
    {
      icon: <BsShieldCheck size={40} />,
      title: 'HIPAA-Compliant',
      description: 'VAs'
    },
    {
      icon: <BsLaptop size={40} />,
      title: 'EHR Ready',
      description: ''
    },
    {
      icon: <BsLightningCharge size={40} />,
      title: 'Same-Week',
      description: 'Onboarding'
    },
    {
      icon: <BiCalendarCheck size={40} />,
      title: 'Scheduling, Calls',
      description: '& Reminders'
    },
    {
      icon: <MdOutlineMedicalServices size={40} />,
      title: 'Live or Async',
      description: 'Scribing'
    }
  ];

  return (
    <div className="container-fluid py-5" style={{ background: '#00A6E6' }}>
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col text-center">
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center mb-3"
                  style={{ 
                    width: '80px', 
                    height: '80px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  {React.cloneElement(service.icon, { color: '#00A6E6' })}
                </div>
                <h5 className="text-white fw-bold mb-2" style={{ fontSize: '1rem' }}>
                  {service.title}
                </h5>
                {service.description && (
                  <p className="text-white mb-0" style={{ fontSize: '0.9rem' }}>
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconsService;
