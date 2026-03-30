

import React from "react";
import { Helmet } from 'react-helmet-async';
import doctorImg from "../assets/images/services/rcm-banner.png" // ✅ replace with your actual image path

const Contact = () => {
  return (
    <section className="py-5 bg-light"  style={{
        backgroundImage: `url(${doctorImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}>
      <Helmet>
        <link rel="preload" as="image" href={doctorImg} />
      </Helmet>
      <img src={doctorImg} alt="" aria-hidden="true" style={{display: 'none'}} loading="eager" />
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Doctor Image */}
          <div className="col-lg-6 d-none d-lg-block">
            {/* <img
              src={doctorImg}
              alt="Doctor"
              className="img-fluid rounded-start"
              style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px 0 0 20px",
              }}
            /> */}
          </div>

          {/* Right Side - Form */}
          <div className="col-lg-6">
            <div
              className="bg-white shadow-lg p-5 rounded-4"
              style={{
                maxWidth: "550px",
                margin: "0 auto",
                borderRadius: "20px",
              }}
            >
              <h3 className="text-center fw-bold mb-4 text-dark">
                Schedule A Demo
              </h3>

              <form>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label text-muted">Your name</label>
                  <input
                    type="text"
                    className="form-control rounded-pill bg-light border-0 py-2 px-3"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3 position-relative">
                  <label className="form-label text-muted">Your email</label>
                  <input
                    type="email"
                    className="form-control rounded-pill bg-light border-0 py-2 px-3 pe-5"
                    placeholder="Enter your email"
                    required
                  />
                  <i
                    className="fas fa-envelope text-primary position-absolute"
                    style={{
                      right: "20px",
                      top: "60%",
                      transform: "translateY(-50%)",
                    }}
                  ></i>
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label className="form-label text-muted">Subject</label>
                  <input
                    type="text"
                    className="form-control rounded-pill bg-light border-0 py-2 px-3"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="form-label text-muted">
                    Your message (optional)
                  </label>
                  <textarea
                    className="form-control bg-light border-0 rounded-4 p-3"
                    rows="4"
                    placeholder="Type your message"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary w-50 rounded-pill py-3"
                  style={{ backgroundColor: "#0d6efd", border: "none" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

