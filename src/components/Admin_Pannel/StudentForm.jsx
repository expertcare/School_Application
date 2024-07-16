import React, { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    board: "",
    grade: "",
    div: "",
    applicationNo: "",
    enrollmentNo: "",
    dateOfBirth: "",
    bloodGroup: "",
    gender: "",
  });

  const [message, setMessage] = useState(null); // For displaying messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending POST request to the backend using axios
      const response = await axios.post(
        "http://localhost:3000/api/students/register",
        studentData
      );

      // Handle success response

      setMessage({ type: "success", text: response.data.message });

      // Reset form
      setStudentData({
        name: "",
        board: "",
        grade: "",
        div: "",
        applicationNo: "",
        enrollmentNo: "",
        dateOfBirth: "",
        bloodGroup: "",
        gender: "",
      });
    } catch (error) {
      // Handle error response
      if (error.response) {
        // Server responded with a status other than 2xx
        setMessage({ type: "error", text: error.response.data.error });
      } else if (error.request) {
        // The request was made but no response was received
        setMessage({ type: "error", text: "No response from server" });
      } else {
        // Something else happened
        setMessage({ type: "error", text: "An unexpected error occurred" });
      }
    }
  };

  return (
    <>
      <div className="container card my-5 p-4 col-lg-6 col-md-8">
        <h2 className="mb-3">Personal Information</h2>
        <hr className="red-line" />
        <hr className="red-line mb-4" />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>{" "}
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="board" className="form-label">
              Board:
            </label>{" "}
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="board"
              name="board"
              value={studentData.board}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="grade" className="form-label">
              Grade:
            </label>{" "}
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="grade"
              name="grade"
              value={studentData.grade}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="div" className="form-label">
              Division:
            </label>{" "}
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="div"
              name="div"
              value={studentData.div}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="applicationNo" className="form-label">
              Application No.:
            </label>{" "}
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="applicationNo"
              name="applicationNo"
              value={studentData.applicationNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="enrollmentNo" className="form-label">
              Enrollment No.:
            </label>{" "}
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="enrollmentNo"
              name="enrollmentNo"
              value={studentData.enrollmentNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              Date of birth:
            </label>{" "}
            <span className="text-danger">*</span>
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              value={studentData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bloodGroup" className="form-label">
              Blood group:
            </label>{" "}
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="bloodGroup"
              name="bloodGroup"
              value={studentData.bloodGroup}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>{" "}
            <span className="text-danger">*</span>
            <select
              className="form-control"
              id="gender"
              name="gender"
              value={studentData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {message && (
          <div
            className={`alert ${
              message.type === "success" ? "alert-success" : "alert-danger"
            } mt-3`}
          >
            {message.text}
          </div>
        )}
      </div>
    </>
  );
};

export default StudentForm;
