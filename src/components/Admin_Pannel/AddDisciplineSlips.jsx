import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDisciplineSlips = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [reason, setReason] = useState("");

  const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const formData = {
      enrollmentNo: registrationNumber,
      reason: reason,
    };

    try {
      // Make an HTTP POST request to your backend API using Axios
      const response = await axios.post(
        "http://localhost:3000/api/discipline-slip",
        formData
      );

      // Clear form fields after successful submission
      setRegistrationNumber("");
      setReason("");

      // Show success toast message
      toast.success("Discipline slip issued successfully");
      console.log("Discipline slip issued successfully");
    } catch (error) {
      console.error("Error issuing discipline slip:", error.message);
      // Show error toast message
      toast.error(error.response.data.error || "Something went wrong");
    }
  };

  return (
    <div className="container my-5">
      <ToastContainer /> {/* ToastContainer for displaying toast messages */}
      <div className="card p-4">
        <h2 className="mb-3">Issue Discipline Slip</h2>
        <hr className="red-line" />
        <hr className="red-line mb-4" />
        <form onSubmit={handleSubmit}>
          {/* Registration Number Input */}
          <div className="mb-3">
            <label className="form-label">Student Enrollment Number:</label>{" "}
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
                placeholder="Enter Enrollment number"
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
