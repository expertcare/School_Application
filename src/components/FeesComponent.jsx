import React, { useState } from "react";

const FeesComponent = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment logic here
    if (isChecked) {
      alert("Payment processed successfully!");
      // Perform payment-related actions (e.g., API calls, redirection)
    } else {
      alert("Please agree to the Terms & Conditions.");
    }
  };

  return (
    <div className="container my-5 card p-4">
      <div className="fees-component">
        <h2>Fees</h2>
        <hr className="red-line" />
        <hr className="red-line" />

        <div className="fee-payments">
          <h5 className="text-center mt-4">Fees Summary</h5>
          <hr className="page-line" />
          <p>
            PLEASE CLICK ON PAY NOW TO EXPLORE PAYMENT OPTIONS & INSTALLMENTS/
            BREAKUPS
          </p>
          <hr className="page-line" />
        </div>

        <div className="total-fees d-flex justify-content-between">
          <h5>TOTAL FEES FOR ACADEMIC YEAR 24-25</h5>
          <h5>₹1,56,600</h5>
        </div>

        <hr className="page-line" />

        <div className="balance-fees d-flex justify-content-between">
          <h5>BALANCE FEES</h5>
          <h5>₹63,350</h5>
        </div>

        <hr className="page-line" />

        <div className="contact-info">
          <h5>CONTACT INFORMATION</h5>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="mobile" className="form-label">
                Mobile No:
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                value={mobile}
                onChange={handleMobileChange}
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>
        </div>

        <hr className="page-line" />

        <div className="disclaimer">
          <h5>DISCLAIMER</h5>
          <p>
            FOR E-MANDATE REGISTRATIONS, A TOKEN TRANSACTION OF INR 1 WILL BE
            DEDUCTED FROM CUSTOMER'S BANK ACCOUNT
          </p>
        </div>

        <hr className="page-line" />

        <div className="notes">
          <h5>NOTE</h5>
          <ol>
            <li>
              CONVENIENCE FEE APPLICABLE AS PER MODE OF PAYMENT.{" "}
              <a href="#">Click Here</a>
            </li>
            <li>
              ONLINE COLLECTION OF FEE IS SUBJECTED TO POLICIES AND CIRCULARS.
            </li>
            <li>
              PLEASE CONTACT OUR DEDICATED SPECIAL SERVICE DESK AT{" "}
              <a href="tel:+916003000700">+91 600 3000 700</a> OR EMAIL US AT{" "}
              <a href="mailto:psr@vgos.org">psr@vgos.org</a>.
            </li>
          </ol>
        </div>

        <hr className="page-line" />

        <div className="terms">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              required
            />{" "}
            I Agree to the Terms & Conditions.
          </label>
        </div>

        <button
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={!isChecked}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default FeesComponent;
