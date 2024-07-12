import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Syllabus = () => {
  const syllabusItems = [
    {
      title: "Complete Syllabus",
      description: "Download the Complete Syllabus",
      fileLink: "#", // Replace with actual link
    },
    {
      title: "Synopsis",
      description: "Download the synopsis.",
      fileLink: "#", // Replace with actual link
    },
  ];

  return (
    <Container className="card my-5 p-4 min-vh-100">
      <h3 className="my-3">Syllabus</h3>
      <hr className="red-line" />
      <hr className="red-line" />

      <Row>
        {syllabusItems.map((item, index) => (
          <Col key={index} md={4} className="mt-4">
            <Card className="shadow h-100" style={{ cursor: "pointer" }}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faBook}
                  size="2x"
                  className="mb-4 text-primary"
                />
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary" href={item.fileLink} target="_blank">
                  Download Syllabus
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Syllabus;
