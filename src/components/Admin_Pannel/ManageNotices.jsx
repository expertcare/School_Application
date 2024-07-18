import React from "react";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ManageNotices = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  // Handler functions for card clicks
  const handleAddNotificationClick = () => {
    navigate("/admin/add_notices"); // Navigate to Add Notification page
  };

  const handleViewEditNotificationsClick = () => {
    navigate("/admin/view_edit_notices"); // Navigate to View and Edit Notifications page
  };

  return (
    <Container className="card my-5 p-4 min-vh-100">
      <h3 className="my-3">Manage Notices</h3>
      <hr className="red-line" />
      <hr className="red-line mb-4" />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
        {/* Add Notification Card */}
        <div className="col">
          <Card
            className="shadow h-100 p-3"
            onClick={handleAddNotificationClick}
            style={{ cursor: "pointer" }}
          >
            <Card.Body className="text-center">
              <FontAwesomeIcon
                icon={faBell}
                size="3x"
                className="mb-4 text-warning"
              />
              <Card.Title>Add Notice</Card.Title>
            </Card.Body>
          </Card>
        </div>

        {/* View and Edit Notifications Card */}
        <div className="col">
          <Card
            className="shadow h-100 p-3"
            onClick={handleViewEditNotificationsClick}
            style={{ cursor: "pointer" }}
          >
            <Card.Body className="text-center">
              <FontAwesomeIcon
                icon={faEdit}
                size="3x"
                className="mb-4 text-info"
              />
              <Card.Title>View and Edit Notice</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default ManageNotices;
