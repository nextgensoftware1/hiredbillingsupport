import React from "react";
import "./Medicaldesc.css";
import billingImg from "../assets/images/hero/staff-aug.jpg";

const Medicaldesc = () => {
	return (
		<section className="medical-desc">
			<div className="medical-header">
				<div className="container">
					<h2>Medical Billing Company Dedicated to Enhancing Your Practice's Cash Flow</h2>
					<div className="decor">
						<span className="dots">...</span>
						<span className="line" />
					</div>
				</div>
			</div>

			<div className="container medical-content">
				<div className="medical-text">
					<p>
						In the current era, money management in healthcare is just as
						important as providing quality medical attention to the patients.
						You might take care of your patients, while we take care of all
						your medical billing requirements. At HBS, our dedicated team will
						take care of your entire revenue cycle management. Claim
						submission regardless of claim denial management, expert medical
						billing services for small private practices or large scale
						hospitals in the entire United States is our specialty. At HBS our
						medical billing experts have vast training in medical coding since
						it is an essential component of the billing process. Timely
						submissions and consistent collection are techniques that we have
						perfected in asserting your revenues to avoid losses due to
						unexplained billings.
					</p>
				</div>
				<div className="medical-image-wrap">
					<img src={billingImg} alt="Medical Billing" className="medical-image" />
					<div className="image-grid" aria-hidden="true">
						<span />
						<span />
						<span />
						<span />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Medicaldesc;
