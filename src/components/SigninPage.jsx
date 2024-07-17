import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook
import logo from "../assets/logo.webp";
import { toast } from "react-toastify";

const SigninPage = () => {
  const navigate = useNavigate();
  const { login, setStudentData } = useAuth(); // Access login function and setStudentData from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          EnrollmentNo: username,
          password,
        }
      );

      const { token } = response.data;
      login(token); // Call login function from context

      // Fetch student data
      const studentResponse = await axios.get(
        `http://localhost:3000/api/students/${username}`, // Adjust endpoint if necessary
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const studentData = studentResponse.data;

      // Store student data in context and localStorage
      setStudentData(studentData);
      localStorage.setItem("studentData", JSON.stringify(studentData));

      console.log(`User ${username} logged in successfully!`);
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        `Login failed: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };

  return (
    <section
      className="bg-light p-3 p-md-4 p-xl-5 min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/free-vector/back-school-wallpaper_23-2148605376.jpg?t=st=1720675373~exp=1720678973~hmac=1f902d5e683ab1aae2a017238465edd7c2798a9c879f216ed19c92041786a524&w=1380")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                <div className="col-12 col-md-6">
                  <img
                    className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                    loading="lazy"
                    src="https://img.freepik.com/free-vector/hand-drawn-illustration-back-school-event_23-2149534191.jpg?w=740&t=st=1720672537~exp=1720673137~hmac=8cea973172962c0945584f21a1c4e6173379aa996aba8ede26968ff11ec99dc6"
                    alt="Welcome back you've been missed!"
                  />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-11 col-xl-10">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-5">
                            <div className="text-center mb-4">
                              <a href="#!">
                                <img
                                  src={logo}
                                  alt="Walstar Logo"
                                  height="50"
                                />
                              </a>
                            </div>
                            <h4 className="text-center">
                              Welcome back you've been missed!
                            </h4>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="row gy-3 overflow-hidden">
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control rounded-3"
                                name="username"
                                id="username"
                                placeholder="Username"
                                required
                              />
                              <label htmlFor="username" className="form-label">
                                Enrollment Number
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control rounded-3"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required
                              />
                              <label htmlFor="password" className="form-label">
                                Password
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                name="remember_me"
                                id="remember_me"
                              />
                              <label
                                className="form-check-label text-secondary"
                                htmlFor="remember_me"
                              >
                                Keep me logged in
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                className="btn btn-primary p-3 rounded-3"
                                type="submit"
                              >
                                Log in now
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="row">
                        <div className="col-12">
                          <div className="text-center mt-4">
                            <a
                              href="#!"
                              className="link-secondary text-decoration-none"
                            >
                              Forgot password
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
