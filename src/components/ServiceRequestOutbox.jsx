import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const ServiceRequestOutbox = () => {
  const { student } = useAuth();

  const [serviceRequests, setServiceRequests] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState("");
  const [requestText, setRequestText] = useState("");

  useEffect(() => {
    fetchServiceRequests();
  }, []);

  const fetchServiceRequests = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/service-requests/${student.enrollmentNo}`
      );
      setServiceRequests(response.data);
    } catch (error) {
      console.error("Error fetching service requests:", error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleRequestTextChange = (e) => {
    setRequestText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/service-requests",
        {
          enrollmentNo: student.enrollmentNo,
          service: category,
          details: requestText,
        }
      );
      setServiceRequests([...serviceRequests, response.data]);
      toast.success("Service request submitted successfully!");
      setCategory("");
      setRequestText("");
      setShowForm(false);
    } catch (error) {
      console.error("Error creating service request:", error);
      toast.error(error.response.data.error);
    }
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
              <tr>
                <td>{student.name}</td>
                <td>{student.location}</td>
                <td>{student.applicationNo}</td>
                <td>{student.enrollmentNo}</td>
                <td>
                  {student.board} / {student.grade} / {student.div}
                </td>
              </tr>
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
                <tr key={request._id}>
                  <td>{index + 1}</td>
                  <td>{request._id}</td>
                  <td>{request.service}</td>
                  <td>{request.status}</td>
                  <td>{new Date(request.date).toLocaleString()}</td>
                  <td>{new Date(request.closingDate).toLocaleString()}</td>
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
