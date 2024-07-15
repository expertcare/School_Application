import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageServiceRequest = () => {
  // Sample service requests
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: "PSR000207027",
      enrollmentNumber: "EN12345", // Added enrollment number
      name: "Self drop/ pickup intimation",
      status: "Open",
      date: "01-07-2024 10:38:19 AM",
      closingDate: "02-07-2024 02:38 PM",
      details: "Please confirm new pickup point",
    },
    {
      id: "PSR000182876",
      enrollmentNumber: "EN67890", // Added enrollment number
      name: "Request for change in drop and pick up point",
      status: "Closed",
      date: "05-06-2024 10:52:28 AM",
      closingDate: "06-06-2024 02:52 PM",
      details: "Change required due to relocation",
    },
    // Add more service requests as needed
  ]);

  // Function to handle approval of service request
  const handleApprove = (requestId) => {
    // Update the status of the request to "Approved" or any appropriate status
    const updatedRequests = serviceRequests.map((request) =>
      request.id === requestId ? { ...request, status: "Approved" } : request
    );
    setServiceRequests(updatedRequests);
  };

  // Function to handle removal of service request
  const handleRemove = (requestId) => {
    // Remove the request from the list based on the requestId
    const updatedRequests = serviceRequests.filter(
      (request) => request.id !== requestId
    );
    setServiceRequests(updatedRequests);
  };

  return (
    <Container className="card my-4 p-4 min-vh-100">
      <Row>
        <Col>
          <h3 className="my-3">Manage Service Requests</h3>
          <hr className="red-line" />
          <hr className="red-line mb-4" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>No</th>
                <th>Service Request ID</th>
                <th>Enrollment No</th>
                <th>Service Request Name</th>
                <th>Service Request Status</th>
                <th>Service Request Date</th>
                <th>Expected Closing Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {serviceRequests.map((request, index) => (
                <tr key={request.id}>
                  <td>{index + 1}</td>
                  <td>{request.id}</td>
                  <td>{request.enrollmentNumber}</td>
                  {/* Display enrollment number */}
                  <td>{request.name}</td>
                  <td>{request.status}</td>
                  <td>{request.date}</td>
                  <td>{request.closingDate}</td>
                  <td>
                    {request.status === "Open" && (
                      <>
                        <Button
                          variant="success"
                          className="m-2"
                          size="sm"
                          onClick={() => handleApprove(request.id)}
                        >
                          <FontAwesomeIcon icon={faCheck} />
                        </Button>
                      </>
                    )}
                    <Button
                      variant="danger"
                      className="m-2"
                      size="sm"
                      onClick={() => handleRemove(request.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageServiceRequest;
