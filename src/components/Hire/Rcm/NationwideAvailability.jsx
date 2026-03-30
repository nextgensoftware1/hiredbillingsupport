import React from "react";
import { FaCheckCircle } from "react-icons/fa";

// ✅ Local image imports
import availabilityImage from "../../../assets/images/services/availability.jpg";
import pricingImage from "../../../assets/images/services/pricing.jpg";

const NationwideAvailability = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row">
          {/* Left Column - Availability */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h4 className="fw-bold text-dark">
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Nationwide
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                &nbsp;Availability
              </span>
            </h4>
            <p className=" mb-4">
              As a leading RCM partner, HBS supports hospitals and multi–site groups
              in all 50 states. Our teams understand payer rules by region and work
              directly in your EHR/PM to raise first–pass approvals and accelerate cash.
            </p>

            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  {["California", "Texas", "Florida", "New York", "Arizona"].map((state) => (
                    <li key={state} className="d-flex align-items-center mb-2">
                      <FaCheckCircle className="text-primary me-2" />
                      <span>{state}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  {[
                    "Illinois (Chicago)",
                    "Georgia",
                    "Pennsylvania",
                    "North Carolina",
                    "Ohio",
                  ].map((state) => (
                    <li key={state} className="d-flex align-items-center mb-2">
                      <FaCheckCircle className="text-primary me-2" />
                      <span>{state}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-4">
              <img
                src={availabilityImage}
                alt="Nationwide Map"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: "450px" }}
              />
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div className="col-lg-6">
            <h4 className="fw-bold text-dark">
              <span
                style={{
                  background: ' #3498db',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Transparent, Affordable
              </span>

              <span
                style={{
                  background: ' #1abc9c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                &nbsp;Pricing
              </span>
            </h4>
            <p className=" mb-3">
              Save versus in-house billing with performance-based pricing (typically
              3%–6% of monthly collections)—no setup fees, no long contracts, and a free RCM audit.
            </p>

            <h6 className="fw-semibold mb-3">What’s included with HBS</h6>

            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  {[
                    "Charge capture & claim scrubbing",
                    "Electronic & paper submissions with required attachments",
                    "Payment posting (ERA/EOB), adjustments & zero-pays",
                    "A/R follow-up (status checks, refiles, corrections)",
                  ].map((item) => (
                    <li key={item} className="d-flex align-items-start mb-2">
                      <FaCheckCircle className="text-primary me-2 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  {[
                    "Denial management & appeals with audit-ready notes",
                    "Month-end reporting & analytics (FPR, denial mix, TAT, aging)",
                    "Clearinghouse coordination & statement workflows",
                  ].map((item) => (
                    <li key={item} className="d-flex align-items-start mb-2">
                      <FaCheckCircle className="text-primary me-2 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-4">
              <img
                src={pricingImage}
                alt="Pricing Info"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationwideAvailability;
