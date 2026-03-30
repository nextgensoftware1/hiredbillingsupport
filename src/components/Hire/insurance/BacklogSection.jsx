import React from "react";

const BacklogSection = () => {
  return (
    <section
      className="py-5 insurance-backlog"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #e6e9ef",
        borderBottom: "1px solid #e6e9ef",
      }}
    >
      <div className="container">
        <div className="text-start" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="heading-text" style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '12px' }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Why a Focused “Agent Pod” Beats Hiring One More&nbsp;
            </span>
            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Generalist
            </span>
          </h2>

          <div className="table-responsive" style={{ marginBottom: "28px" }}>
            <table className="table insurance-table" style={{ marginBottom: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#eef3fb" }}>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>In-House Fix</th>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>Typical Pain Points</th>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>
                    Remote Insurance Agent Pod (HBS)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hire an extra billing generalist</td>
                  <td>Long ramp-up, limited depth, salary plus benefits overhead</td>
                  <td>Pre-trained specialists delivered in days, paid only for productive hours</td>
                </tr>
                <tr>
                  <td>Cross-train existing staff</td>
                  <td>Pulls them off other KPIs, knowledge decay</td>
                  <td>Agents already live in payer portals all day, no retraining required</td>
                </tr>
                <tr>
                  <td>Outsource full RCM</td>
                  <td>
                    Good for end-to-end overhaul, but overkill if only one link is weak
                  </td>
                  <td>
                    Surgical, domain-specific support; your current billing stack stays intact
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style={{ borderTop: "1px solid #e6e9ef", margin: "26px 0" }} />

          <h2 className="heading-text" style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '8px' }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Core Domains Our Remote Insurance Agents&nbsp;
            </span>
            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Cover
            </span>
          </h2>
          <p style={{ color: "#4a4a4a", marginBottom: "16px" }}>
            (each pod can be stood-up alone or combined into a larger hub)
          </p>

          <div className="table-responsive" style={{ marginBottom: "24px" }}>
            <table className="table insurance-table" style={{ marginBottom: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#eef3fb" }}>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>Domain</th>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>
                    Typical Triggers We Fix
                  </th>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>
                    Key Metrics We Track and Improve
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Eligibility and Benefits Verification</td>
                  <td>Same-day appointments stalled, benefits misunderstandings driving denials</td>
                  <td>First-call eligibility hit-rate; verification turnaround time</td>
                </tr>
                <tr>
                  <td>Prior Authorization Management</td>
                  <td>High-value diagnostics or surgeries delayed</td>
                  <td>Average PA approval days; denial-due-to-missing-PA rate</td>
                </tr>
                <tr>
                  <td>Claim Scrubbing and Batch Submission</td>
                  <td>Coding edits returned by clearinghouse, high rejection-at-gate counts</td>
                  <td>Rejection rate pre-adjudication; 24-hour clean-claim percent</td>
                </tr>
                <tr>
                  <td>Real-Time Claim Status and Payer-Portal Management</td>
                  <td>
                    Staff cannot keep up with portal queries (for example UnitedHealthcare,
                    Medicaid portals)
                  </td>
                  <td>Claims moved per agent per day; payer response cycle time</td>
                </tr>
                <tr>
                  <td>Denial Prevention and Formal Appeals</td>
                  <td>
                    Repeat code or modifier errors, missing documentation, medical-necessity
                    disputes
                  </td>
                  <td>Initial denial rate; appeal overturn percent; days-to-resolution</td>
                </tr>
                <tr>
                  <td>Accounts Receivable (Insurance and Self-Pay) Follow-Ups</td>
                  <td>AR over 60 or 90 days creeping up, unknown claim statuses</td>
                  <td>AR aging buckets percent; dollars recovered per FTE</td>
                </tr>
                <tr>
                  <td>Payment Posting and Remittance Reconciliation</td>
                  <td>Backlog of ERA/EOB posting, mismatched deposits</td>
                  <td>48-hour posting percent; unapplied cash balance</td>
                </tr>
                <tr>
                  <td>Underpayment and Contract-Compliance Audit</td>
                  <td>Payers reimbursing below contract, unnoticed fee-schedule drift</td>
                  <td>Underpayment dollars identified; recovery success percent</td>
                </tr>
                <tr>
                  <td>Patient Responsibility Outreach and Financial Counseling</td>
                  <td>Rising patient AR, confusion over balances</td>
                  <td>Self-pay collection rate; average counseling time</td>
                </tr>
                <tr>
                  <td>Provider Credentialing and Payer Enrollment Maintenance</td>
                  <td>Expired re-validations, new NPIs stalled</td>
                  <td>On-time re-credentialing percent; days-to-effective-date</td>
                </tr>
                <tr>
                  <td>EDI / ERA / EFT Setup and Monitoring</td>
                  <td>Missing electronic remits, manual paper remits clogging workflow</td>
                  <td>ERA adoption percent; EFT versus paper check ratio</td>
                </tr>
                <tr>
                  <td>Out-of-Network Negotiation and Gap Exceptions</td>
                  <td>OON claims under-reimbursed, high patient balance friction</td>
                  <td>Average negotiated increase; patient balance reduction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ color: "#4a4a4a", marginBottom: "26px" }}>
            Agents work inside your PM/EHR (Epic, Athena, eClinicalWorks, Medisoft,
            and others), document every touch, and escalate only exceptions-keeping your
            billing leadership in control.
          </p>

          <hr style={{ borderTop: "1px solid #e6e9ef", margin: "26px 0" }} />

          <h2 className="heading-text" style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '12px' }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Engagement Tiers (Scalable from Solo Practice to&nbsp;
            </span>
            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hospital Network)
            </span>
          </h2>

          <div className="table-responsive" style={{ marginBottom: "18px" }}>
            <table className="table insurance-table" style={{ marginBottom: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#eef3fb" }}>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>Tier</th>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>Team Composition</th>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>Ideal For</th>
                  <th style={{ color: "#031b4e", fontWeight: 700 }}>Sample Monthly Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Micro-Unit</td>
                  <td>1 FTE agent</td>
                  <td>Small practices fixing a single choke-point</td>
                  <td>600 eligibility checks and PA submissions</td>
                </tr>
                <tr>
                  <td>Specialty Pod</td>
                  <td>3 to 5 agents plus pod lead</td>
                  <td>Multi-site groups needing coverage across shifts</td>
                  <td>2,000 PA/eligibility tasks plus 400 denial appeals</td>
                </tr>
                <tr>
                  <td>Enterprise Hub</td>
                  <td>8 plus agents, QA analyst, workflow manager</td>
                  <td>Hospitals or IDNs offloading an entire back-office lane</td>
                  <td>10,000 claim-status actions plus weekly root-cause analytics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ color: "#4a4a4a", marginBottom: 0 }}>
            All tiers include secure VPN access, AES-256 data encryption, and 24-hour
            breach reporting to meet HIPAA and payer-contract requirements. For payers
            like Medicare we also manage PECOS updates and electronic enrollment files.
          </p>
        </div>
        <style>
          {`
            .insurance-backlog .insurance-table {
              border: 1px solid #0f2f5f;
              border-collapse: separate;
              border-spacing: 0;
              background: #fff;
              box-shadow: 0 6px 14px rgba(3, 27, 78, 0.06);
            }
            .insurance-backlog .insurance-table th,
            .insurance-backlog .insurance-table td {
              border: 1px solid #0f2f5f;
              padding: 14px 16px;
              vertical-align: top;
              color: #23324d;
            }
            .insurance-backlog .insurance-table th {
              font-size: 0.98rem;
              letter-spacing: 0.2px;
            }
            .insurance-backlog .insurance-table tbody tr:nth-child(even) {
              background: #f9fbff;
            }
            .insurance-backlog .insurance-table tbody tr:hover {
              background: #eef4ff;
            }
            @media (max-width: 576px) {
              .insurance-backlog .insurance-table th,
              .insurance-backlog .insurance-table td {
                padding: 12px 12px;
                font-size: 0.95rem;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default BacklogSection;
