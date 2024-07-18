import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios"; // Import axios
import sizechart from "../assets/UniformBlazerChartSize.jpg";
import { toast } from "react-toastify";

const OrderUniform = () => {
  // Initialize form data state with default values
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    size: "",
    quantity: 1,
    additionalNotes: "",
  });

  // Initialize state for handling submission status
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Handle form input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form (you could add more validations here)
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.gender ||
      !formData.size
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Make POST request to backend API
      const response = await axios.post(
        "http://localhost:3000/api/uniform/orders",
        formData
      );
      console.log("Form submitted with data:", response.data);

      // Update submission status
      toast.success("Order submitted successfully!");

      // Reset form fields after submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        gender: "",
        size: "",
        quantity: 1,
        additionalNotes: "",
      });
    } catch (error) {
      console.error("Error submitting order:", error);
      setSubmissionStatus("Failed to submit order. Please try again.");
    }
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
              <Form.Label>
                Full Name <span className="text-danger">*</span>
              </Form.Label>
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
              <Form.Label>
                Email address <span className="text-danger">*</span>
              </Form.Label>
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
              <Form.Label>
                Phone Number <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>
                Gender <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>
                Size <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                required
              >
                <option value="">Select size</option>
                <option value="XX-Small">XX-Small</option>
                <option value="X-Small">X-Small</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
                <option value="XX-Large">XX-Large</option>
              </Form.Control>
            </Form.Group>

            <div className="my-2">
              <a href={sizechart} target="_blank" rel="noopener noreferrer">
                View Size Chart
              </a>
            </div>

            <Form.Group controlId="quantity">
              <Form.Label>
                Quantity <span className="text-danger">*</span>
              </Form.Label>
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
