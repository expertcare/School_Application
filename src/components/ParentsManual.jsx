import React, { useState, useEffect } from "react";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Card, Spinner, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const ParentsManual = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [documentUrl, setDocumentUrl] = useState(null);

  useEffect(() => {
    const fetchParentsManual = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/documents/parents-manual",
          {
            responseType: "blob", // Ensure response type is blob (binary data)
          }
        );
        setLoading(false);
        const file = new Blob([response.data], { type: "application/pdf" });
        const fileUrl = URL.createObjectURL(file);
        setDocumentUrl(fileUrl);
      } catch (error) {
        setError(error.message || "Failed to fetch Parents Manual");
        setLoading(false);
      }
    };

    fetchParentsManual();
  }, []);

  const handleClick = () => {
    // Open the document in a new tab
    if (documentUrl) {
      window.open(documentUrl, "_blank");
    }
  };

  return (
    <div className="container card mt-5 mb-5 p-4 min-vh-100">
      <h3 className="my-3 ">Parents Manual</h3>
      <hr className="red-line" />
      <hr className="red-line" />

      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && (
        <Card
          className="shadow h-100 col-md-3 mt-4"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <Card.Body>
            <FontAwesomeIcon
              icon={faFileAlt}
              size="2x"
              className="mb-4 text-primary"
            />
            <Card.Title>Parents Manual</Card.Title>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ParentsManual;
