import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const ViewProfile = () => {
  const { student } = useAuth(); // Fetch student data from context

  const [studentPhoto, setStudentPhoto] = useState(null);
  const [fatherPhoto, setFatherPhoto] = useState(null);
  const [motherPhoto, setMotherPhoto] = useState(null);
  const [guardianPhoto, setGuardianPhoto] = useState(null);

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    setter(file);
    // Handle file upload logic here
    console.log(file);
  };

  const handleSavePhoto = () => {
    // Here you can handle saving photos (e.g., send to backend, store in state, etc.)
    console.log("Student Photo:", studentPhoto);
    console.log("Father Photo:", fatherPhoto);
    console.log("Mother Photo:", motherPhoto);
    console.log("Guardian Photo:", guardianPhoto);
    // Reset file states if needed
    setStudentPhoto(null);
    setFatherPhoto(null);
    setMotherPhoto(null);
    setGuardianPhoto(null);
  };

  // Handle case when student data is not available
  if (!student) {
    return <p>Loading...</p>; // Or handle this with a more user-friendly message/component
  }

  return (
    <Container className="my-5 card p-4 col-lg-6">
      <h2 className="my-4">Student Profile</h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />

      <div className="profile-details">
        <h4>Personal Information</h4>
        <hr className="page-line" />
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <hr className="page-line" />
        <p>
          <strong>Board:</strong> {student.board}
        </p>
        <hr className="page-line" />
        <p>
          <strong>Grade:</strong> {student.grade}
        </p>
        <hr className="page-line" />
        <p>
          <strong>Div:</strong> {student.div}
        </p>
        <hr className="page-line" />
        <p>
          <strong>APP No.:</strong> {student.applicationNo}
        </p>
        <hr className="page-line" />
        <p>
          <strong>Enr No.:</strong> {student.enrollmentNo}
        </p>
        <hr className="page-line" />
        <p>
          <strong>Date of birth:</strong> {student.dateOfBirth}
        </p>
        <hr className="page-line" />
        <p>
          <strong>Blood group:</strong> {student.bloodGroup}
        </p>
        <hr className="page-line" />
        <p>
          <strong>Gender:</strong> {student.gender}
        </p>
      </div>

      <hr className="page-line" />

      <Form>
        <Form.Group controlId="formStudentPhoto" className="mb-3">
          <Form.Label>Student Photo</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setStudentPhoto)}
          />
          <Form.Text className="text-muted">Max. File Size is 500 KB</Form.Text>
        </Form.Group>

        <Form.Group controlId="formFatherPhoto" className="mb-3">
          <Form.Label>Father Photo</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setFatherPhoto)}
          />
          <Form.Text className="text-muted">Max. File Size is 500 KB</Form.Text>
        </Form.Group>

        <Form.Group controlId="formMotherPhoto" className="mb-3">
          <Form.Label>Mother Photo</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setMotherPhoto)}
          />
          <Form.Text className="text-muted">Max. File Size is 500 KB</Form.Text>
        </Form.Group>

        <Form.Group controlId="formGuardianPhoto" className="mb-3">
          <Form.Label>Guardian Photo</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setGuardianPhoto)}
          />
          <Form.Text className="text-muted">Max. File Size is 500 KB</Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={handleSavePhoto}>
          Save Photos
        </Button>
      </Form>
    </Container>
  );
};

export default ViewProfile;
