import React, { useState } from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const IDCardPhoto = () => {
  const { student } = useAuth(); // Assuming useAuth provides student details

  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) {
        toast.warn("File size exceeds 500 KB limit.");
        return;
      }
      setPhoto(file);
      setPhotoUrl(URL.createObjectURL(file));
    }
  };

  // Function to upload photo
  const handleUpload = async () => {
    if (!photo) {
      toast.warn("Please select a photo to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", photo);
    formData.append("enrollmentNo", student.enrollmentNo);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/idcard/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data); // Handle response data as needed

      toast.success(response.data.message);
      setPhoto(null);
      // setPhotoUrl("");
    } catch (error) {
      console.error("Error uploading photo:", error);
      toast.error(error.response.data.error);
    }
  };

  // Function to remove uploaded photo from server
  const handleDeletePhoto = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/idcard/remove/${student.enrollmentNo}`
      );

      console.log(response.data); // Handle response data as needed

      toast.success(response.data.message);
      setPhoto(null);
      setPhotoUrl("");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <Container className="id-card-photo-container card mt-5 mb-5 p-4 min-vh-100">
      <Row className="justify-content-center">
        <Col>
          <h3 className="my-3">Add ID Card Photo</h3>
          <hr className="red-line" />
          <hr className="red-line" />
          <div className="photo-wrapper">
            {photoUrl ? (
              <Image src={photoUrl} className="photo-preview" />
            ) : (
              <div
                className="photo-placeholder mt-4"
                style={{
                  width: "150px",
                  height: "150px",
                  border: "1px solid black",
                }}
              >
                No Photo
              </div>
            )}
          </div>

          <small className="text-danger">Max. File Size is 500 KB</small>

          <Form.Group controlId="formFile" className="mt-3">
            <Form.Label>Select Photo</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="mt-3"
            onClick={handleUpload}
            disabled={!photo}
          >
            Upload Photo
          </Button>

          <Button
            variant="danger"
            className="mt-3 ms-2"
            onClick={handleDeletePhoto}
          >
            Remove Photo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default IDCardPhoto;
