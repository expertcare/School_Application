import React, { useState } from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";

const IDCardPhoto = () => {
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoUrl(URL.createObjectURL(file));
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoUrl("");
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
                className="photo-placeholder mt-4 "
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
            variant="danger"
            className="mt-3"
            onClick={handleRemovePhoto}
            disabled={!photo}
          >
            Remove Photo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default IDCardPhoto;
