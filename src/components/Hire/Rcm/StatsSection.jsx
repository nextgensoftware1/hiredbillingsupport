// import React, { useEffect, useState } from "react";

// const countersData = [
//   {
//     value: 550,
//     suffix: "M$",
//     label: "Value Of Claim Process",
//   },
//   {
//     value: 12,
//     suffix: "",
//     label: "Average A/R Days (DSO) Improvement",
//   },
//   {
//     value: 48,
//     suffix: "Hours",
//     label: "Charge-to-Submit TAT",
//   },
//   {
//     value: 98,
//     suffix: "%",
//     label: "Customer Retention",
//   },
//   {
//     value: 2,
//     suffix: "M",
//     label: "Number Of Claim Process",
//   },
//   {
//     value: 98,
//     suffix: "%",
//     label: "First Pass Clean Claims Rate",
//   },
//   {
//     value: 10,
//     suffix: "%",
//     label: "Revenue Improvement",
//   },
//   {
//     value: 30,
//     suffix: "%",
//     label: "Reduction in A/R (>90 days)",
//   },
// ];

// const Counter = ({ end, suffix }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 1500; // total animation duration (1.5s)
//     const incrementTime = 10;
//     const step = end / (duration / incrementTime);

//     const counter = setInterval(() => {
//       start += step;
//       if (start >= end) {
//         start = end;
//         clearInterval(counter);
//       }
//       setCount(Math.floor(start));
//     }, incrementTime);

//     return () => clearInterval(counter);
//   }, [end]);

//   return (
//     <span style={{ color: "#0b155b" }}>
//       {count}
//       {suffix && <span style={{ color: "#0b155b" }}> {suffix}</span>}
//     </span>
//   );
// };

// const StatsSection = () => {
//   return (
//     <section className="py-5" style={{ backgroundColor: "#f6f9ff" }}>
//       <div className="container">
//         <div className="row g-4 text-center rounded-3xl p-12 shadow-lg" style={{
//             background: "linear-gradient(135deg, #0066ff 0%, #004fd4 100%)",
//           }}>
//           {countersData.map((item, index) => (
//             <div key={index} className="col-6 col-md-3">
//               <div
//                 className="p-4 rounded-4 shadow-sm bg-white h-100 d-flex flex-column align-items-center justify-content-center"
//                 style={{
//                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 }}
//               >
//                 <h2
//                   className="fw-bold mb-2"
//                   style={{
//                     fontSize: "2rem",
//                     color: "#00b14f",
//                   }}
//                 >
//                   <Counter end={item.value} suffix={item.suffix} />
//                 </h2>
//                 <p
//                   className="mb-0"
//                   style={{
//                     fontSize: "0.95rem",
//                     color: "#555",
//                   }}
//                 >
//                   {item.label}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
import React, { useEffect, useState } from "react";

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const incrementTime = 10;
    const step = end / (duration / incrementTime);

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const StatsSection = () => {
  const topStats = [
    { value: 550, suffix: "M$", label: "Value Of Claim Process" },
    { value: 12, suffix: "", label: "Average A/R Days (DSO) Improvement" },
    { value: 48, suffix: "Hours", label: "Charge-to-Submit TAT" },
    { value: 98, suffix: "%", label: "Customer Retention" },
  ];

  const bottomStats = [
    { value: 2, suffix: "M", label: "Number Of Claim Process" },
    { value: 98, suffix: "%", label: "First Pass Clean Claims Rate" },
    { value: 10, suffix: "%", label: "Revenue Improvement" },
    { value: 30, suffix: "%", label: "Reduction in A/R (>90 days)" },
  ];

  return (
    <section style={{ padding: "3rem 1rem", backgroundColor: "#f6f9ff" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Top Stats Box */}
        <div
          style={{
            background: "linear-gradient(135deg, #0066ff 0%, #0052cc 100%)",
            borderRadius: "2rem",
            padding: "3rem 2rem",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 20px rgba(0, 102, 255, 0.3)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {topStats.map((stat, index) => (
              <div
                key={index}
                style={{
                  borderRight:
                    index < topStats.length - 1
                      ? "1px solid rgba(255, 255, 255, 0.3)"
                      : "none",
                  padding: "0 1rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "0.5rem",
                    lineHeight: "1",
                  }}
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h2>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "white",
                    margin: 0,
                    opacity: 0.95,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Box */}
        <div
          style={{
            background: "linear-gradient(135deg, #0066ff 0%, #0052cc 100%)",
            borderRadius: "2rem",
            padding: "3rem 2rem",
            boxShadow: "0 4px 20px rgba(0, 102, 255, 0.3)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {bottomStats.map((stat, index) => (
              <div
                key={index}
                style={{
                  borderRight:
                    index < bottomStats.length - 1
                      ? "1px solid rgba(255, 255, 255, 0.3)"
                      : "none",
                  padding: "0 1rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "0.5rem",
                    lineHeight: "1",
                  }}
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h2>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "white",
                    margin: 0,
                    opacity: 0.95,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;