import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const UniformOrders = () => {
  const [orders, setOrders] = useState([]);

  // Simulated data for demonstration
  useEffect(() => {
    // Replace with actual fetch logic
    const simulatedOrders = [
      {
        id: 1,
        fullName: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        uniformType: "Shirt",
        size: "Medium",
        quantity: 2,
        additionalNotes: "No special instructions.",
      },
      {
        id: 2,
        fullName: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "987-654-3210",
        uniformType: "Skirt",
        size: "Small",
        quantity: 1,
        additionalNotes: "Deliver before next week.",
      },
      // Add more simulated data as needed
    ];

    setOrders(simulatedOrders);
  }, []);

  return (
    <Container className="card my-5 p-4">
      <h3 className="mb-3">Uniform Orders</h3>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Uniform Type</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Additional Notes</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.fullName}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.uniformType}</td>
                  <td>{order.size}</td>
                  <td>{order.quantity}</td>
                  <td>{order.additionalNotes}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UniformOrders;
