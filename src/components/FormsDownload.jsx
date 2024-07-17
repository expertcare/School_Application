import React, { useState, useEffect } from "react";
import { Card, Spinner, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

const FormsDownload = () => {
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/documents/forms"
        );

        setLoading(false);

        setDocuments(response.data);
      } catch (error) {
        console.log(error.message || "Failed to fetch documents");
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleDownload = async (path, filename) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/documents/download/${encodeURIComponent(
          path
        )}`,
        {
          responseType: "blob", // Ensure response type is blob (binary data)
        }
      );

      toast.success("Form downloaded successfully");

      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      toast.error("Error downloading file:", error);
    }
  };

  const renderFileCard = (path, filename) => (
    <Card
      key={filename}
      className="shadow h-100 col-md-3 mt-4"
      style={{ cursor: "pointer" }}
      onClick={() => handleDownload(path, filename)}
    >
      <Card.Body>
        <FontAwesomeIcon
          icon={faFileAlt}
          size="2x"
          className="mb-4 text-primary"
        />
        <Card.Title>{filename}</Card.Title>
      </Card.Body>
    </Card>
  );

  return (
    <div className="container card mt-5 mb-5 p-4 min-vh-100">
      <h3 className="my-3 ">Forms</h3>
      <hr className="red-line" />
      <hr className="red-line" />

      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {!loading && documents.length === 0 && (
        <Alert variant="info" className="mt-4">
          No forms found.
        </Alert>
      )}

      {!loading &&
        Array.isArray(documents) &&
        documents.length > 0 &&
        documents.map((document) =>
          renderFileCard(document.path, document.filename)
        )}
    </div>
  );
};

export default FormsDownload;
