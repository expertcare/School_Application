import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const OrderUniform = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    uniformType: "",
    size: "",
    quantity: 1,
    additionalNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    console.log("Form submitted with data:", formData);
    // Reset form fields after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      uniformType: "",
      size: "",
      quantity: 1,
      additionalNotes: "",
    });
  };

  return (
    <Container className="my-5 card p-4 col-lg-6">
      <Row>
        <Col>
          <h3 className="my-3">Order Uniform</h3>
          <hr className="red-line" />
          <hr className="red-line mb-4" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="uniformType">
              <Form.Label>Uniform Type</Form.Label>
              <Form.Control
                as="select"
                name="uniformType"
                value={formData.uniformType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select uniform type</option>
                <option value="Shirt">Shirt</option>
                <option value="Pants">Pants</option>
                <option value="Skirt">Skirt</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                name="size"
                placeholder="Enter size (e.g., Small, Medium)"
                value={formData.size}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="additionalNotes">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="additionalNotes"
                placeholder="Any additional notes or instructions"
                value={formData.additionalNotes}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button className="my-3" variant="primary" type="submit">
              Submit Order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderUniform;
