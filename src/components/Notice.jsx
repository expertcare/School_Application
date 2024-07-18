import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/notices", {
          params: { recipientType: "student" },
        });

        if (response.data.success) {
          setNotices(response.data.data); // Updated to match API response
        } else {
          toast.error("Failed to load notices.");
        }
      } catch (error) {
        toast.error("Error: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const handleCardClick = (notice) => {
    setSelectedNotice(notice);
  };

  const handleClose = () => {
    setSelectedNotice(null);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Container className="mt-5 mb-5 p-4 card min-vh-100">
      <h3 className="my-3">Notices</h3>
      <hr className="red-line" />
      <hr className="red-line" />

      <Row>
        {notices.length === 0 ? (
          <Col>
            <p>No notices available.</p>
          </Col>
        ) : (
          notices.map((notice) => (
            <Col key={notice._id} md={4} className="mt-4">
              <Card
                className="shadow h-100"
                style={{ cursor: "pointer" }}
                onClick={() => handleCardClick(notice)}
              >
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faBell}
                    size="2x"
                    className="mb-4 text-primary"
                  />
                  <Card.Title>{notice.subject || "No Title"}</Card.Title>
                  <Card.Text className="my-3">
                    <strong>Circular No:</strong> {notice.circularNo || "N/A"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Modal for displaying full notice details */}
      <Modal show={selectedNotice !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedNotice?.subject || "No Title"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Circular No:</strong> {selectedNotice?.circularNo || "N/A"}
          </p>
          <p>
            <strong>Date:</strong> {formatDate(selectedNotice?.date) || "N/A"}
          </p>
          <p>
            <strong>Subject:</strong> {selectedNotice?.subject || "N/A"}
          </p>
          <pre style={{ whiteSpace: "pre-line" }}>
            {selectedNotice?.content || "No Description"}
          </pre>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Notice;
