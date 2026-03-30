import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const RelatedServices = () => {
  const services = [
    {
      title: 'RCM Management',
      description: 'Revenue Cycle Management for healthcare providers',
      link: '/rcm-management',
    },
    {
      title: 'Neurology Billing Services',
      description: 'Specialized billing for neurology practices',
      link: '/neurology',
    },
    {
      title: 'Cardiology Billing Services',
      description: 'Expert billing for cardiology practices',
      link: '/cardiology',
    },
  ];

  return (
    <>
      <section className="related-services mt-4">
        <div className="container">
          <h2 className="text-center mb-5">Related Services</h2>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm d-flex flex-column justify-content-between">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center">
                    <a
                      href={service.link}
                      className="btn btn-primary fw-bold px-4 py-2"
                      style={{
                        borderRadius: '20px',
                        background: '#61C981',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        width: '100%',
                        maxWidth: '200px',
                      }}
                    >
                      LEARN MORE <FaArrowRight className="ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedServices;