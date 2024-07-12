import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  // Dummy data for student profile
  const student = {
    name: "John Doe",
    board: "CBSE",
    grade: "Grade IV",
    division: "A",
    enrollmentNo: "2021001",
  };

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
            <strong>Division:</strong> {student.division}
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
