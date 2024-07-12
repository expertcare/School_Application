import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const MarkSheet = () => {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to view the marksheet based on enrollmentNo and selectedYear
    console.log(
      `View Marksheet for Enrollment No: ${enrollmentNo}, Year: ${selectedYear}`
    );
    // logic here to fetch or display the marksheet
  };

  return (
    <Container className="mt-5 mb-5 card p-4 min-vh-100 col-lg-6">
      <h2>MarkSheet</h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <Form className="col-md-6" onSubmit={handleSubmit}>
        <Form.Group controlId="enrollmentNo">
          <Form.Label>Enrollment No:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Enrollment No"
            value={enrollmentNo}
            required
            onChange={(e) => setEnrollmentNo(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="year">
          <Form.Label>Year:</Form.Label>
          <Form.Control
            as="select"
            value={selectedYear}
            required
            onChange={handleYearChange}
          >
            <option value="">Select Year</option>
            <option value="2023-24">2023-24</option>
            <option value="2022-23">2022-23</option>
            <option value="2021-22">2021-22</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" className="mt-4" type="submit">
          View Marksheet
        </Button>
      </Form>
    </Container>
  );
};

export default MarkSheet;
