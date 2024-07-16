import React from "react";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const StudentCreation = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  // Handler functions for card clicks
  const handleCreateStudentClick = () => {
    navigate("/admin/create_student"); // Navigate to Create Student page
  };

  const handleViewStudentsClick = () => {
    navigate("/admin/view_students"); // Navigate to View Students page
  };

  return (
    <Container className="card my-5 p-4 min-vh-100">
      <h3 className="my-3">Admin Dashboard</h3>
      <hr className="red-line" />
      <hr className="red-line mb-4" />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Create Student Card */}
        <div className="col">
          <Card
            className="shadow h-100 p-3"
            onClick={handleCreateStudentClick}
            style={{ cursor: "pointer" }}
          >
            <Card.Body className="text-center">
              <FontAwesomeIcon
                icon={faUserPlus}
                size="3x"
                className="mb-4 text-success"
              />
              <Card.Title>Create Student</Card.Title>
            </Card.Body>
          </Card>
        </div>

        {/* View Students Card */}
        <div className="col">
          <Card
            className="shadow h-100 p-3"
            onClick={handleViewStudentsClick}
            style={{ cursor: "pointer" }}
          >
            <Card.Body className="text-center">
              <FontAwesomeIcon
                icon={faEye}
                size="3x"
                className="mb-4 text-primary"
              />
              <Card.Title>View Students</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default StudentCreation;
