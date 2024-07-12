import React, { useState } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ServiceRequestOutbox = () => {
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: "PSR000207027",
      name: "Self drop/ pickup intimation",
      status: "Closed",
      date: "01-07-2024 10:38:19 AM",
      closingDate: "02-07-2024 02:38 PM",
    },
    {
      id: "PSR000182876",
      name: "Request for change in drop and pick up point",
      status: "Closed",
      date: "05-06-2024 10:52:28 AM",
      closingDate: "06-06-2024 02:52 PM",
    },
    // Add more service requests as needed
  ]);

  // Sample student data
  const students = [
    {
      name: "John Doe",
      location: "Kolhapur",
      applicationNo: "VH50-APPNO7073",
      enrollmentNo: "VH50-ENRNO6882",
      boardGradeDivision: "CBSE / Grade IV / A",
    },
    // Add more students as needed
  ];

  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState("");
  const [requestText, setRequestText] = useState("");

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to handle category dropdown change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Function to handle service request text change
  const handleRequestTextChange = (e) => {
    setRequestText(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., submit to backend, update state, etc.)
    // Reset form fields and hide form
    setCategory("");
    setRequestText("");
    setShowForm(false);
  };

  return (
    <Container className="card my-4 p-4 min-vh-100">
      <Row>
        <Col>
          <h3 className="my-3">Service Request</h3>
          <hr className="red-line" />
          <hr className="red-line mb-4" />
        </Col>
      </Row>

      <Row>
        <Col>
          <h5>Parent Service Request [Outbox]</h5>
          <hr className="page-line" />
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Location</th>
                <th>Application No</th>
                <th>Enrollment No</th>
                <th>Board / Grade / Division</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.location}</td>
                  <td>{student.applicationNo}</td>
                  <td>{student.enrollmentNo}</td>
                  <td>{student.boardGradeDivision}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Button variant="primary" onClick={toggleForm}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            Generate New Parent Service Request
          </Button>
        </Col>
      </Row>

      {showForm && (
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select category</option>
                  <option value="Drop/Pickup Intimation">
                    Drop/Pickup Intimation
                  </option>
                  <option value="Change in Drop/Pickup Point">
                    Change in Drop/Pickup Point
                  </option>
                  {/* Add more options as needed */}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formRequestText" className="mt-2">
                <Form.Label>Service Request Details</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter details of the service request"
                  value={requestText}
                  onChange={handleRequestTextChange}
                />
              </Form.Group>
              <Button className="my-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      )}

      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>No</th>
                <th>Service Request ID</th>
                <th>Service Request Name</th>
                <th>Service Request Status</th>
                <th>Service Request Date</th>
                <th>Expected Closing Date</th>
              </tr>
            </thead>
            <tbody>
              {serviceRequests.map((request, index) => (
                <tr key={request.id}>
                  <td>{index + 1}</td>
                  <td>{request.id}</td>
                  <td>{request.name}</td>
                  <td>{request.status}</td>
                  <td>{request.date}</td>
                  <td>{request.closingDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceRequestOutbox;
