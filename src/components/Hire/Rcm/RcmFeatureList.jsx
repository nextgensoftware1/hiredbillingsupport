import userIcon from "../../../assets/images/services/user-tie-solid-full.svg";
import calendarIcon from "../../../assets/images/services/calendar-check-solid-full.svg";
import fileIcon from "../../../assets/images/services/file-circle-check-solid-full.svg";

const RcmFeatureList = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#f9fafc",
      }}
    >
      <div className="container">
        <div
          className="row justify-content-center shadow-sm rounded-4"
          style={{
            backgroundColor: "#fff",
            overflow: "hidden",
          }}
        >
          {/* Feature 1 */}
          <div
            className="col-md-4 d-flex align-items-center p-4"
            style={{
              borderRight: "1px solid #e4e4e4",
            }}
          >
            <img
              src={userIcon}
              alt="Highly Trained RCM Experts"
              style={{
                width: "48px",
                height: "48px",
                marginRight: "16px",
                backgroundColor: "#e6f7ff",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <div>
              <h5
                className="fw-bold mb-1"
                style={{ color: "#001f4d", fontSize: "1.05rem" }}
              >
                Highly Trained RCM Experts
              </h5>
              <p
                className="mb-0 "
                style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
              >
                Streamlined charge capture, coding checks, and payer compliance.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="col-md-4 d-flex align-items-center p-4"
            style={{
              borderRight: "1px solid #e4e4e4",
            }}
          >
            <img
              src={calendarIcon}
              alt="Reduce Days in A/R"
              style={{
                width: "48px",
                height: "48px",
                marginRight: "16px",
                backgroundColor: "#e6f7ff",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <div>
              <h5
                className="fw-bold mb-1"
                style={{ color: "#001f4d", fontSize: "1.05rem" }}
              >
                Reduce Days in A/R
              </h5>
              <p
                className="mb-0 "
                style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
              >
                Proactive status checks and escalations with daily logs.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4 d-flex align-items-center p-4">
            <img
              src={fileIcon}
              alt="Maximize First-Pass Rate"
              style={{
                width: "48px",
                height: "48px",
                marginRight: "16px",
                backgroundColor: "#e6f7ff",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <div>
              <h5
                className="fw-bold mb-1"
                style={{ color: "#001f4d", fontSize: "1.05rem" }}
              >
                Maximize First-Pass Rate
              </h5>
              <p
                className="mb-0 "
                style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
              >
                Eligibility, documentation, and payer rules handled up front.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RcmFeatureList;
