import React, { useState } from "react";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    board: "",
    grade: "",
    division: "",
    appNo: "",
    enrNo: "",
    dob: "",
    bloodGroup: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend, etc.)
    console.log("Student Data:", studentData);
    // Reset the form after submission if needed
    setStudentData({
      name: "",
      board: "",
      grade: "",
      division: "",
      appNo: "",
      enrNo: "",
      dob: "",
      bloodGroup: "",
      gender: "",
    });
  };

  return (
    <div className="container card my-5 p-4 col-md-6">
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
          <label htmlFor="division" className="form-label">
            Div:
          </label>{" "}
          <span className="text-danger">*</span>
          <input
            type="text"
            className="form-control"
            id="division"
            name="division"
            value={studentData.division}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="appNo" className="form-label">
            Application No.:
          </label>{" "}
          <span className="text-danger">*</span>
          <input
            type="text"
            className="form-control"
            id="appNo"
            name="appNo"
            value={studentData.appNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="enrNo" className="form-label">
            Enrollment No.:
          </label>{" "}
          <span className="text-danger">*</span>
          <input
            type="text"
            className="form-control"
            id="enrNo"
            name="enrNo"
            value={studentData.enrNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of birth:
          </label>{" "}
          <span className="text-danger">*</span>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            value={studentData.dob}
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
    </div>
  );
};

export default StudentForm;
