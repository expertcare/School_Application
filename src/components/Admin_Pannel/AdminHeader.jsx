import React from "react";
import logo from "../../assets/school_logo.jpg";

const AdminHeader = () => {
  return (
    <header id="header-demo">
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand d-sm-none" href="#!">
            <img
              src={logo}
              className="img-fluid"
              alt="BootstrapBrain Logo"
              width="120"
              // height="44"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bsbNavbar"
            aria-controls="bsbNavbar"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="bsbNavbar"
            aria-labelledby="bsbNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="bsbNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item me-3">
                  <a
                    className="nav-link"
                    href="#!"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#bsbSidebar1"
                    aria-controls="bsbSidebar1"
                  >
                    <i className="bi-filter-left fs-3 lh-1"></i>
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" aria-current="page" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
