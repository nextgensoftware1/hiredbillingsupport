
import React from "react";

import advancedMD from '../../assets/images/services/advancedmd-logo.jpg';
import athenaHealth from '../../assets/images/services/athenahealth-logo.jpg';
import careCloud from '../../assets/images/services/carecloud-logo.jpg';
import eClinicalWorks from '../../assets/images/services/eclinicalworks-logo.jpg';
import epic from '../../assets/images/services/epic-logo.jpg';
import nextgen from '../../assets/images/services/nextgen-logo.jpg';

const EHRSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f7f8fa" }}>
      <div className="container text-center">
        {/* Heading */}
        <h2 className="fw-semibold text-dark mb-2" style={{ fontWeight: '700' }}>
          <span
            style={{
              background: ' #3498db',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            We excel in utilizing these&nbsp;
          </span>

          <span
            style={{
              background: ' #1abc9c',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            EHRs
          </span>
        </h2>
        <div
          className="mx-auto mb-3"
          style={{ width: "60px", height: "3px", backgroundColor: "#00b6f0" }}
        ></div>
        <p className="text-muted mb-5">
          The specialists at HBS are highly knowledgeable about the features and workflows
          of your EHR system.
        </p>

        {/* Logos Grid */}
        <div className="row justify-content-center g-4 mb-4">
          <div className="col-6 col-md-4 col-lg-2 d-flex justify-content-center">
            <div className="bg-white p-3 shadow-sm rounded w-100 d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
              <img src={advancedMD} alt="AdvancedMD" className="img-fluid" style={{ maxHeight: "60px" }} />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 d-flex justify-content-center">
            <div className="bg-white p-3 shadow-sm rounded w-100 d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
              <img src={athenaHealth} alt="Athena Health" className="img-fluid" style={{ maxHeight: "60px" }} />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 d-flex justify-content-center">
            <div className="bg-white p-3 shadow-sm rounded w-100 d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
              <img src={careCloud} alt="CareCloud" className="img-fluid" style={{ maxHeight: "60px" }} />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 d-flex justify-content-center">
            <div className="bg-white p-3 shadow-sm rounded w-100 d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
              <img src={eClinicalWorks} alt="eClinicalWorks" className="img-fluid" style={{ maxHeight: "60px" }} />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 d-flex justify-content-center">
            <div className="bg-white p-3 shadow-sm rounded w-100 d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
              <img src={epic} alt="Epic" className="img-fluid" style={{ maxHeight: "60px" }} />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 d-flex justify-content-center">
            <div className="bg-white p-3 shadow-sm rounded w-100 d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
              <img src={nextgen} alt="NextGen" className="img-fluid" style={{ maxHeight: "60px" }} />
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          className="btn text-white px-4 py-3 fw-semibold rounded-pill"
          style={{
            background: "linear-gradient(to bottom, #00c0ff, #0080ff)",
            boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
          }}
        >
          EXPLORE MORE
        </button>
      </div>
    </section>
  );
};

export default EHRSection;
