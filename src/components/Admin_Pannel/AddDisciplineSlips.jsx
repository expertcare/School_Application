import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AddDisciplineSlips = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [reason, setReason] = useState("");

  const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to issue discipline slip to the student with registrationNumber
    console.log(
      `Issuing discipline slip to student with registration number ${registrationNumber} for reason: ${reason}`
    );

    // Clear form fields after submission
    setRegistrationNumber("");
    setReason("");
  };

  return (
    <div className="container my-5">
      <div className="card p-4">
        <h2 className="mb-3">Issue Discipline Slip</h2>
        <hr className="red-line" />
        <hr className="red-line mb-4" />
        <form onSubmit={handleSubmit}>
          {/* Registration Number Input */}
          <div className="mb-3">
            <label className="form-label">Student Registration Number:</label>{" "}
            <span className="text-danger">*</span>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                className="form-control"
                value={registrationNumber}
                onChange={handleRegistrationNumberChange}
                placeholder="Enter registration number"
                required
              />
            </div>
          </div>

          {/* Reason Input */}
          <div className="mb-3">
            <label className="form-label">Reason:</label>{" "}
            <span className="text-danger">*</span>
            <textarea
              className="form-control"
              rows="4"
              value={reason}
              onChange={handleReasonChange}
              placeholder="Enter reason for issuing discipline slip"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Issue Discipline Slip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDisciplineSlips;
