import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/school_logo.jpg";

const Sidebar = ({ logout }) => {
  const handleLogout = () => {
    // Call the logout function passed as a prop
    logout();
  };

  return (
    <aside
      className="bsb-sidebar-1 offcanvas offcanvas-start"
      tabIndex="-1"
      id="bsbSidebar1"
      aria-labelledby="bsbSidebarLabel1"
      data-bs-backdrop="false"
    >
      <div className="offcanvas-header" data-bs-dismiss="offcanvas">
        <Link className="sidebar-brand text-decoration-none" to="/home">
          <img src={logo} height="100" alt="Education Management Logo" />
        </Link>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body pt-0">
        <hr className="sidebar-divider mb-3" />

        <ul className="navbar-nav">
          {/* Admin Dashboard */}
          <li className="nav-item">
            <Link
              className="nav-link py-4 p-2 active bg-light rounded"
              to="/admin_dashboard"
              data-bs-dismiss="offcanvas"
            >
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-primary">
                  <i
                    className="fa-solid fa-house"
                    style={{ color: "blue", fontSize: "18px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Admin Dashboard
                </span>
              </div>
            </Link>
          </li>

          {/* Manage Sections */}
          <li className="nav-item mt-4">
            <h6 className="py-1 text-secondary text-uppercase fs-7">
              Manage Sections
            </h6>
            <hr className="red-line" />
            <hr className="red-line" />
          </li>

          {/* Daily Updates */}
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link mt-3" to="/admin/daily_updates">
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-danger">
                  <i
                    className="fa-solid fa-pen-square fa-lg"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Add Daily Updates
                </span>
              </div>
            </Link>
          </li>
          <hr className="page-line" />

          {/* Create Timetable */}
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link" to="/admin/create_timetable">
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-warning">
                  <i
                    className="fa-solid fa-calendar-plus fa-lg"
                    style={{ color: "orange", fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Create Timetable
                </span>
              </div>
            </Link>
          </li>
          <hr className="page-line" />

          {/* View Payment Records */}
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link" to="/admin/view_payment_records">
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-success">
                  <i
                    className="fa-solid fa-money-bill fa-lg"
                    style={{ color: "green", fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  View Payment Records
                </span>
              </div>
            </Link>
          </li>
          <hr className="page-line" />

          {/* Add Notices */}
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link" to="/admin/manage_notices">
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-secondary">
                  <i
                    className="fa-solid fa-sticky-note fa-lg"
                    style={{ color: "purple", fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Add Notices
                </span>
              </div>
            </Link>
          </li>
          <hr className="page-line" />

          {/* Add Documents */}
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link" to="/admin/add_documents">
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-info">
                  <i
                    className="fa-solid fa-file fa-lg text-info"
                    style={{ fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Add Documents
                </span>
              </div>
            </Link>
          </li>
          <hr className="page-line" />

          {/* Add Discipline Slips */}
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link" to="/admin/add_discipline_slips">
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-danger">
                  <i
                    className="fa-solid fa-exclamation-circle fa-lg"
                    style={{ color: "red", fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Add Discipline Slips
                </span>
              </div>
            </Link>
          </li>
          <hr className="page-line" />

          {/* Uniform Orders */}
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link" to="/admin/uniform_orders">
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-primary">
                  <i
                    className="fa-solid fa-shirt fa-lg"
                    style={{ color: "violet", fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Uniform Orders
                </span>
              </div>
            </Link>
          </li>
          <hr className="page-line" />

          {/* Create Student */}
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link" to="/admin/student_form">
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-primary">
                  <i
                    className="fa-solid fa-user-graduate fa-lg"
                    style={{ color: "teal", fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Create Student
                </span>
              </div>
            </Link>
          </li>
          <hr className="page-line" />

          {/* Manage Service Request */}
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link" to="/admin/manage_service_request">
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-primary">
                  <i
                    className="fa-solid fa-tasks-alt fa-lg"
                    style={{ color: "orange", fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Manage Service Request
                </span>
              </div>
            </Link>
          </li>
          <hr className="page-line" />

          {/* Authentication */}
          <li className="nav-item mt-3">
            <h6 className="py-1 text-secondary text-uppercase fs-7">
              Authentication
            </h6>
            <hr className="red-line" />
            <hr className="red-line" />
          </li>

          {/* Logout */}
          <li className="nav-item mt-3">
            <div
              className="nav-link"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-4">
                <div className="nav-link-icon text-danger">
                  <i
                    className="fa-solid fa-sign-out-alt"
                    style={{ color: "darkred", fontSize: "20px" }}
                  ></i>
                </div>
                <span
                  className="nav-link-text fw-bold"
                  style={{ fontSize: "16px" }}
                >
                  Logout
                </span>
              </div>
            </div>
          </li>
          <hr className="page-line" />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
