import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const AddNotice = () => {
  const [circularNo, setCircularNo] = useState("");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [recipientType, setRecipientType] = useState("all");

  const handleCircularNoChange = (e) => {
    setCircularNo(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleRecipientTypeChange = (e) => {
    setRecipientType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notice = {
      circularNo,
      date,
      subject,
      content,
      recipientType,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/notices",
        notice
      );

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }

      // Clear form fields after submission
      setCircularNo("");
      setDate("");
      setSubject("");
      setContent("");
      setRecipientType("all");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container card my-5 p-4">
      <h2 className="mb-3">Add Notice</h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="circularNo">
          <Form.Label>Circular No</Form.Label>{" "}
          <span className="text-danger">*</span>
          <Form.Control
            type="text"
            placeholder="Enter circular number"
            value={circularNo}
            onChange={handleCircularNoChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label> <span className="text-danger">*</span>
          <Form.Control
            type="date"
            placeholder="Enter date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>{" "}
          <span className="text-danger">*</span>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={handleSubjectChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>{" "}
          <span className="text-danger">*</span>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Enter content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="recipientType">
          <Form.Label>Recipient Type</Form.Label>{" "}
          <span className="text-danger">*</span>
          <Form.Control
            as="select"
            value={recipientType}
            onChange={handleRecipientTypeChange}
            required
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="all">All</option>
          </Form.Control>
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddNotice;
