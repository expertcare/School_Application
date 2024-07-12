import React from "react";
import { Button } from "react-bootstrap"; // Import Button from React Bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon for icons
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import the sign-out icon

const Header = ({ onLogout }) => {
  return (
    <div
      className="container-fluid d-flex justify-content-between align-items-center"
      style={{
        backgroundColor: "rgb(111 0 149)",
        height: "80px",
        width: "100%",
        padding: "0 20px",
      }}
    >
      <h3 className="text-white">Welcome to the dashboard</h3>
      <Button variant="light" onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
      </Button>
    </div>
  );
};

export default Header;
