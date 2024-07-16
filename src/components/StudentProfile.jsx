import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const StudentProfile = () => {
  const { student } = useAuth(); // Fetch student data from context

  // Show loading or default data if student data is not available
  if (!student) {
    return <p>Loading...</p>; // Or handle this with a more user-friendly message/component
  }

  return (
    <Container className="mt-4 px-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={5} className="text-center text-md-start">
          <Image
            src="https://img.freepik.com/free-vector/education-beige_24877-49403.jpg?t=st=1720680480~exp=1720684080~hmac=35c4238d1d22f95c96833f7cb1a3f5f9745c036562bf02080d6950e5f86f066e&w=826"
            roundedCircle
            style={{ width: "150px", height: "150px" }}
          />
        </Col>
        <Col xs={12} md={8} lg={7} className="text-center text-md-start">
          <h2>{student.name}</h2>
          <p>
            <strong>Board:</strong> {student.board}
          </p>
          <p>
            <strong>Grade:</strong> {student.grade}
          </p>
          <p>
            <strong>Division:</strong> {student.div}
          </p>
          <p>
            <strong>Enrollment No.:</strong> {student.enrollmentNo}
          </p>
          <div className="d-flex flex-column flex-md-row gap-3 pb-4">
            <Link to="/ViewProfile" className="btn btn-primary">
              Profile
            </Link>
            <Link to="/ChangePassword" className="btn btn-secondary">
              Change Password
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentProfile;
