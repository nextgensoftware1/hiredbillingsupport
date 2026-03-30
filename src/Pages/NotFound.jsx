import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <section className="notfound-section">
      <div className="container notfound-container text-center">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-desc">
          We're sorry, the page you requested could not be found.
          <br />
          Please check the URL or return to our homepage.
        </p>

        {/* Use a button styled like a link to satisfy a11y rules (anchor-is-valid) */}
        <button
          type="button"
          className="back-home-btn"
          aria-label="Back to Home"
          onClick={handleBackHome}
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;