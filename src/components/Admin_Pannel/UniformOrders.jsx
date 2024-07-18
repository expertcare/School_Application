import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const UniformOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch orders from backend
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/uniform/orders"
        );
        setOrders(response.data);
        setLoading(false);
        toast.success("Orders loaded successfully!");
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
        toast.error("Failed to fetch orders. Please try again.");
      }
    };

    fetchOrders();
  }, []); // Empty dependency array ensures this only runs once

  if (loading) return <p>Loading orders...</p>;

  return (
    <Container className="card my-5 p-4 min-vh-100">
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
                <th>Gender</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Additional Notes</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.fullName}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.gender}</td>
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
