import React, { useState } from "react";
import { Table } from "react-bootstrap";

const ActivityFeesComponent = () => {
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
      <div className="activity-fees-component">
        <h2>Activity Fees</h2>
        <hr className="red-line" />
        <hr className="red-line mb-4" />

        <div className="activity-select">
          <label htmlFor="activity-select">
            Select Activity For Fees Payment:
          </label>
          <select className="form-select mb-3" id="activity-select">
            <option>-Select-</option>
            <option>
              Exam _Optional_24-25_MaRRS International Spelling Bee_Scientia
              Exertus
            </option>
            <option>
              Exam_Optional_National Olympiad Foundation_Cyber Preparatory
              E-Book_24-25
            </option>
            {/* Add more options as needed */}
          </select>
        </div>

        <hr className="page-line" />

        <div className="fees-summary">
          <h5>FEES SUMMARY</h5>
          <p>
            PLEASE CLICK ON PAY NOW TO EXPLORE PAYMENT OPTIONS & INSTALLMENTS/
            BREAKUPS
          </p>
        </div>

        <hr className="page-line" />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SR. NO.</th>
              <th>PARTICULARS</th>
              <th>AMOUNT</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>

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
              FOR ANY QUERIES PLEASE REACH OUT TO RESPECTIVE SCHOOL HELPDESK OR
              CALL US AT - 6003000700.
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

export default ActivityFeesComponent;
