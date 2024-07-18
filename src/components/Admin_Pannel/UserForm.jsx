import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UserForm = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    gender: "",
    username: "",
    password: "",
    role: "admin", // Default role
    department: "", // Relevant for faculty only
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      userData.role === "admin"
        ? "http://localhost:3000/api/admin/register"
        : "http://localhost:3000/api/faculty/register";

    try {
      const response = await axios.post(endpoint, userData);
      toast.success(response.data.message);
      setUserData({
        fullName: "",
        email: "",
        gender: "",
        username: "",
        password: "",
        role: "admin",
        department: "",
      });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else if (error.request) {
        toast.error("No response from server");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="container card my-5 p-4 col-lg-6 col-md-8">
      <h2 className="mb-3">User Information</h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name:
          </label>{" "}
          <span className="text-danger">*</span>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>{" "}
          <span className="text-danger">*</span>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email}
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
            value={userData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>{" "}
          <span className="text-danger">*</span>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>{" "}
          <span className="text-danger">*</span>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role:
          </label>{" "}
          <span className="text-danger">*</span>
          <select
            className="form-control"
            id="role"
            name="role"
            value={userData.role}
            onChange={handleChange}
            required
          >
            <option value="admin">Admin</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>

        {userData.role === "faculty" && (
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Department:
            </label>{" "}
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              value={userData.department}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
