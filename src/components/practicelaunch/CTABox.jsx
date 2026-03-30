import React, { useEffect, useState } from 'react';

const ScrollCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <h3 className="fw-bold text-info">{count}+</h3>;
};

const CTABox = () => {
  return (
    <section className="py-5 text-white">
      <div className="container text-center">
        <div className="rounded bg-info  p-4 mx-3">
          <h2 className="fw-bold mb-3">Why Choose HBS for Your Practice Launch?</h2>
          <p className="lead mb-4">
            We specialize in helping new practices get off the ground quickly and profitably. Our launch package includes everything you need for billing success from day one with HBS.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-3 mb-3">
              <div className="card bg-light border-0 shadow-sm">
                <div className="card-body text-center">
                  <ScrollCounter end={120} duration={2000} />
                  <p className="mb-0 text-muted">Practices Launched</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card bg-light border-0 shadow-sm">
                <div className="card-body text-center">
                  <ScrollCounter end={30} duration={2000} />
                  <p className="mb-0 text-muted">Average Setup Time</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card bg-light border-0 shadow-sm">
                <div className="card-body text-center">
                  <ScrollCounter end={95} duration={2000} />
                  <p className="mb-0 text-muted">First Pass Claim Rate</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card bg-light border-0 shadow-sm">
                <div className="card-body text-center">
                  <ScrollCounter end={0} duration={2000} />
                  <p className="mb-0 text-muted">Setup Fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABox;