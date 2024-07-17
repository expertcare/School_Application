import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";

const SyllabusComponent = () => {
  const { student } = useAuth(); // Fetch student data from context
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    if (student) {
      const fetchPdf = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/documents/syllabus/${student.grade}`,
            {
              responseType: "blob", // Important: responseType as 'blob' for PDF files
            }
          );

          const blob = new Blob([response.data], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
        } catch (error) {
          console.error("Error fetching PDF:", error);
          // Handle error fetching PDF
        }
      };

      fetchPdf();
    }
  }, [student]); // Include student as a dependency to fetch new PDF when student changes

  const openPdfInNewTab = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  };

  // Show loading or default data if student data is not available
  if (!student) {
    return <p>Loading...</p>; // Or handle this with a more user-friendly message/component
  }

  return (
    <div className="container card my-5 p-4 min-vh-100">
      <h2 className="mb-4">Syllabus</h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <div className="row">
        <div className="col-md-4">
          <Card className="shadow h-100">
            <Card.Body>
              <FontAwesomeIcon
                icon={faBook}
                size="2x"
                className="mb-4 text-primary"
              />
              <Card.Title>{student.grade} Syllabus</Card.Title>
              <Card.Text>Download the Complete Syllabus</Card.Text>
              <Button variant="primary" onClick={openPdfInNewTab}>
                View Syllabus
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SyllabusComponent;
