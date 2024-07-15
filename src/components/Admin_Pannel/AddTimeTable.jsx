import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddTimeTable = () => {
  const [date, setDate] = useState("");
  const [grade, setGrade] = useState("");
  const [content, setContent] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
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
    const timeTable = {
      date,
      grade,
      content,
      attachments,
    };

    console.log("Submitted Time Table:", timeTable);

    // Clear form fields after submission
    setDate("");
    setGrade("");
    setContent("");
    setAttachments([]);
  };

  return (
    <div className="container card my-5 p-4">
      <h2 className="mb-3">Add Time Table</h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <Form onSubmit={handleSubmit}>
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

        <Form.Group controlId="grade">
          <Form.Label>Grade</Form.Label> <span className="text-danger">*</span>
          <Form.Control
            type="text"
            placeholder="Enter grade"
            value={grade}
            onChange={handleGradeChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>{" "}
          <span className="text-danger">*</span>
          <Form.Control
            as="textarea"
            rows={5}
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

export default AddTimeTable;
