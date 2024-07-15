import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddNotice = () => {
  const [circularNo, setCircularNo] = useState("");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [attachments, setAttachments] = useState([]);

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

  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data to be sent to the backend or handle locally
    const notice = {
      circularNo,
      date,
      subject,
      content,
      attachments,
    };

    console.log("Submitted Notice:", notice);

    // Clear form fields after submission
    setCircularNo("");
    setDate("");
    setSubject("");
    setContent("");
    setAttachments([]);
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

        <Form.Group controlId="attachments">
          <Form.Label>Attachments</Form.Label>
          <Form.Control
            type="file"
            multiple
            onChange={handleAttachmentChange}
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddNotice;
