

import neurologyImg from "../../assets/images/hero/Neurology-1.jpg"; // ✅ Local image import
const NeurologyBillingSection = () => {
  return (
    <section className="py-5 px-9" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT TEXT SECTION */}
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-4" style={{ color: "#001c48" }}>
              Get Comprehensive Neurology Billing Services
            </h5>

            <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.8" }}>
              Use our customized neurology billing and coding services to enhance
              your practice. You are likely to find yourself either sifting through
              unpaid insurance claims overdue on the aged trail to payment or
              straining your billers who toil over your claim submission / payment
              posting cycle.
            </p>

            <p className="text-muted mb-4" style={{ fontSize: "15px", lineHeight: "1.8" }}>
              We have a dedicated team updating themselves on neurology coding rules
              and accurate coding with 10000 industry compliance. We have comprehensive
              CPT codes coverage for all neurology procedures, providing end-to-end
              billing solutions for your practice.
            </p>

            <h6 className="fw-semibold mb-3" style={{ color: "#001c48" }}>
              CPT codes we cover for Neurology Procedures
            </h6>

            <ul className="list-unstyled ms-3" style={{ fontSize: "15px", color: "#555" }}>
              <li className="mb-2">• 95812–95836: Routine Electroencephalography (EEG) Procedures</li>
              <li className="mb-2">• 95851–95857: Testing Range of Motion</li>
              <li className="mb-2">• 95905–95913: Nerve Conduction Tests</li>
              <li className="mb-2">• 95954–95967: Special EEG testing procedures</li>
              <li className="mb-2">• 96000–96004: Motion Analysis Procedures</li>
              <li>• Functional Brain Mapping | 96020–96020</li>
            </ul>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="col-lg-5 col-md-12 text-center position-relative">
            <div className="position-relative d-inline-block">
              <img
                src={neurologyImg}
                alt="Neurology Billing Services"
                className="img-fluid rounded shadow-sm"
                style={{ borderRadius: "8px" }}
              />

              <div
                className="position-absolute bg-white shadow-sm rounded-3 px-4 py-3 text-start"
                style={{
                  bottom: "15px",
                  right: "15px",
                  maxWidth: "260px",
                }}
              >
                <h6 className="fw-bold mb-1" style={{ color: "#001c48" }}>
                  Comprehensive
                </h6>
                <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                  Neurology Billing Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeurologyBillingSection;