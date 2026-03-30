import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

const CostEvaluationSection = () => {
  const sectionRef = useRef(null);

  const handleDownloadPDF = async () => {
    const input = sectionRef.current;
    if (!input) return;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('cost-evaluation.pdf');
  };

  return (


        <section
          className="py-5 insurance-backlog"
          style={{
            backgroundColor: "#fff",
            borderTop: "1px solid #e6e9ef",
            borderBottom: "1px solid #e6e9ef",
            position: "relative"
          }}
        >
          <nav>
            <div className="container d-flex align-items-center justify-content-between py-3">
              <div>
                <Link to="/">
                  <img
                    src="/assets/images/site_logo/logo_black.png"
                    alt="HBS Logo"
                    style={{ height: "44px", width: "auto", display: "block" }}
                  />
                </Link>
              </div>
              <div>
                <button
                  onClick={handleDownloadPDF}
                  style={{
                    background: "#3498db",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "10px 22px",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(52,152,219,0.12)"
                  }}
                >
                  Download PDF
                </button>
              </div>
            </div>
          </nav>
     
      {/* <button
        onClick={handleDownloadPDF}
        style={{
          position: "absolute",
          top: 24,
          right: 32,
          zIndex: 10,
          background: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px 22px",
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(52,152,219,0.12)"
        }}
      >
        Download PDF
      </button> */}
      <div className="container" ref={sectionRef}>
        <div className="text-start" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="heading-text" style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '12px' }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Remote Insurance Agent Staffing – Cost Evaluation & Engagement&nbsp;
            </span>
            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Models
            </span>
          </h2>
          <p style={{ color: "#4a4a4a", marginBottom: "18px" }}>
            This document outlines pricing, key performance indicators (KPIs), and return‑on‑investment (ROI) scenarios for Hired Billing Support (HBS) remote insurance‑agent pods. Use it as an at‑a‑glance reference when evaluating domain‑specific staffing for Revenue Cycle Management (RCM) or broader Management Services Organization (MSO) engagements.
          </p>

          {/* 1. Hourly Pricing Matrix */}
          <h2 className="heading-text" style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '12px', marginTop: '32px' }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              1 ▪ Hourly Pricing&nbsp;
            </span>
            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Matrix
            </span>
          </h2>
          <div className="table-responsive" style={{ marginBottom: "24px" }}>
            <table className="table insurance-table" style={{ marginBottom: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#eef3fb" }}>
                  <th>Complexity Tier</th>
                  <th>Typical Task Mix</th>
                  <th>Hourly Rate (USD)</th>
                  <th>When This Tier Applies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard</td>
                  <td>Eligibility checks, ERA posting, basic claim‑status calls</td>
                  <td>$10 / hour</td>
                  <td>High‑volume, rule‑based tasks with clear SOPs</td>
                </tr>
                <tr>
                  <td>Advanced</td>
                  <td>Prior authorization, denial triage, secondary billing</td>
                  <td>$15 / hour</td>
                  <td>Requires multi‑payer portal skill or modifier expertise</td>
                </tr>
                <tr>
                  <td>Specialized</td>
                  <td>Contract audits, OON negotiation, coding QA w/ modifiers</td>
                  <td>$20 / hour</td>
                  <td>Deep payer policy knowledge or direct revenue‑dispute work</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2. Engagement Tiers */}
          <h2 className="heading-text" style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '12px', marginTop: '32px' }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              2 ▪ Engagement&nbsp;
            </span>
            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Tiers
            </span>
          </h2>
          <div className="table-responsive" style={{ marginBottom: "24px" }}>
            <table className="table insurance-table" style={{ marginBottom: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#eef3fb" }}>
                  <th>Tier</th>
                  <th>Team Composition</th>
                  <th>Ideal For</th>
                  <th>Sample Monthly Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Micro‑Unit</td>
                  <td>1 FTE agent</td>
                  <td>Small practices fixing one choke‑point</td>
                  <td>≈ 600 eligibility checks & PA submissions</td>
                </tr>
                <tr>
                  <td>Specialty Pod</td>
                  <td>3–5 agents + pod lead</td>
                  <td>Multi‑site groups needing shift coverage</td>
                  <td>≈ 2,000 PA / eligibility tasks + 400 denial appeals</td>
                </tr>
                <tr>
                  <td>Enterprise Hub</td>
                  <td>8+ agents, QA analyst, workflow manager</td>
                  <td>Hospitals / IDNs offloading an entire back‑office lane</td>
                  <td>≈ 10,000 claim‑status actions + weekly analytics</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3. KPI Targets by Tier */}
          <h2 className="heading-text" style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '12px', marginTop: '32px' }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              3 ▪ KPI Targets by&nbsp;
            </span>
            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Tier
            </span>
          </h2>
          <div className="table-responsive" style={{ marginBottom: "24px" }}>
            <table className="table insurance-table" style={{ marginBottom: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#eef3fb" }}>
                  <th>KPI Bucket</th>
                  <th>Standard Tier Target</th>
                  <th>Advanced Tier Target</th>
                  <th>Specialized Tier Target</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Clean‑Claim Rate</td>
                  <td>&ge; 97 %</td>
                  <td>&ge; 98 %</td>
                  <td>&ge; 99 %</td>
                </tr>
                <tr>
                  <td>PA Approval Cycle</td>
                  <td>&le; 5 days</td>
                  <td>&le; 3 days</td>
                  <td>&le; 2 days</td>
                </tr>
                <tr>
                  <td>AR &gt; 60 Days</td>
                  <td>&le; 15 %</td>
                  <td>&le; 10 %</td>
                  <td>&le; 7 %</td>
                </tr>
                <tr>
                  <td>Initial Denial Rate</td>
                  <td>&le; 8 %</td>
                  <td>&le; 6 %</td>
                  <td>&le; 4 %</td>
                </tr>
                <tr>
                  <td>Under‑payment Detection</td>
                  <td>—</td>
                  <td>&ge; 85 % caught</td>
                  <td>&ge; 95 % caught</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4. Illustrative 90‑Day ROI Scenarios */}
          <h2 className="heading-text" style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '12px', marginTop: '32px' }}>
            <span
              style={{
                background: ' #3498db',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              4 ▪ Illustrative 90‑Day ROI&nbsp;
            </span>
            <span
              style={{
                background: ' #1abc9c',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Scenarios
            </span>
          </h2>
          <div className="table-responsive" style={{ marginBottom: "24px" }}>
            <table className="table insurance-table" style={{ marginBottom: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#eef3fb" }}>
                  <th>Domain</th>
                  <th>Pain Point</th>
                  <th>Baseline KPI</th>
                  <th>After HBS</th>
                  <th>Hours / mo.</th>
                  <th>Cost / mo.</th>
                  <th>Net Lift / mo.</th>
                  <th>120‑Day ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Eligibility</td>
                  <td>Coverage‑not‑in‑effect denials (7 %)</td>
                  <td>93 % accuracy</td>
                  <td>98 %</td>
                  <td>160</td>
                  <td>$1 600</td>
                  <td>$22 800</td>
                  <td>14×</td>
                </tr>
                <tr>
                  <td>Prior Auth</td>
                  <td>12‑day approval cycle</td>
                  <td>12 days</td>
                  <td>3 days</td>
                  <td>180</td>
                  <td>$2 700</td>
                  <td>$13 600*</td>
                  <td>5×</td>
                </tr>
                <tr>
                  <td>AR &gt; 90d</td>
                  <td>$2 M aged AR</td>
                  <td>$2 M</td>
                  <td>↓ 60 %</td>
                  <td>200</td>
                  <td>$3 000</td>
                  <td>$130 000</td>
                  <td>43×</td>
                </tr>
                <tr>
                  <td>Denial Appeals</td>
                  <td>14 % initial denial</td>
                  <td>14 %</td>
                  <td>5 %</td>
                  <td>140</td>
                  <td>$2 100</td>
                  <td>$45 000</td>
                  <td>21×</td>
                </tr>
                <tr>
                  <td>Coding QA</td>
                  <td>High‑RVU modifier errors</td>
                  <td>$68 k denied</td>
                  <td>↓ 85 %</td>
                  <td>120</td>
                  <td>$2 400</td>
                  <td>$57 800</td>
                  <td>24×</td>
                </tr>
              </tbody>
            </table>
            <div style={{ fontSize: '0.95rem', color: '#4a4a4a', marginTop: '8px' }}>
              *Assumes surgical margin $800 × 17 extra cases.
            </div>
          </div>

          <div style={{ color: "#4a4a4a", marginBottom: "18px" }}>
            <strong>Performance Guarantee:</strong> If agreed KPI uplift is not achieved within the first 90 days, HBS credits 20 % of agent hours on the next invoice. Scale‑up or scale‑down with five‑business‑day notice to match seasonal volume.
          </div>
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

export default CostEvaluationSection;
export { CostEvaluationSection as CostEvaluation };
