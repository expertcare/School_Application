import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Button,
  Spinner,
  Alert,
  Modal,
  Form,
} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const ViewEditNotice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [formData, setFormData] = useState({
    circularNo: "",
    date: "",
    subject: "",
    recipientType: "",
    content: "", // Added content field
  });

  useEffect(() => {
    // Fetch all notices
    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/notices");
        setNotices(response.data.data);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to fetch notices");
        toast.error("Failed to fetch notices");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const handleEditClick = (notice) => {
    setSelectedNotice(notice);
    setFormData({
      circularNo: notice.circularNo,
      date: notice.date.split("T")[0], // Format for date input
      subject: notice.subject,
      recipientType: notice.recipientType,
      content: notice.content, // Set content field
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedNotice(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/notices/${selectedNotice._id}`,
        formData
      );
      setNotices((prevNotices) =>
        prevNotices.map((notice) =>
          notice._id === selectedNotice._id
            ? { ...notice, ...formData }
            : notice
        )
      );
      toast.success("Notice updated successfully");
      handleCloseModal();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to update notice");
      toast.error("Failed to update notice");
    }
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      try {
        await axios.delete(`http://localhost:3000/api/notices/${id}`);
        setNotices((prevNotices) =>
          prevNotices.filter((notice) => notice._id !== id)
        );
        toast.success("Notice deleted successfully");
      } catch (error) {
        setError(error.response?.data?.message || "Failed to delete notice");
        toast.error("Failed to delete notice");
      }
    }
  };

  if (loading) return <Spinner animation="border" />;

  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="my-5 card p-4 min-vh-100">
      <h3 className="mb-4">View Notices</h3>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Circular No</th>
            <th>Date</th>
            <th>Subject</th>
            <th>Recipient Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {notices.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No notices available
              </td>
            </tr>
          ) : (
            notices.map((notice) => (
              <tr key={notice._id}>
                <td>{notice.circularNo}</td>
                <td>{new Date(notice.date).toLocaleDateString()}</td>
                <td>{notice.subject}</td>
                <td>{notice.recipientType}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleEditClick(notice)}
                    className="me-2 btn-sm px-4"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteClick(notice._id)}
                    className="btn-sm px-4"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Notice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="circularNo">
              <Form.Label>Circular No</Form.Label>
              <Form.Control
                type="text"
                name="circularNo"
                value={formData.circularNo}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="recipientType">
              <Form.Label>Recipient Type</Form.Label>
              <Form.Control
                as="select"
                name="recipientType"
                value={formData.recipientType}
                onChange={handleInputChange}
              >
                <option value="">Select recipient type</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="all">All</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="content"
                value={formData.content}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ViewEditNotice;
