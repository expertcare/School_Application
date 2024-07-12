import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Notice = () => {
  const notices = [
    {
      title: "Notice 1",
      description: "This is the first notice description.",
      fileLink: "#", // Replace with actual link
    },
    {
      title: "Notice 2",
      description: "This is the second notice description.",
      fileLink: "#", // Replace with actual link
    },
    {
      title: "Notice 3",
      description: "This is the third notice description.",
      fileLink: "#", // Replace with actual link
    },
  ];

  return (
    <Container className="mt-5 mb-5 p-4 card min-vh-100">
      <h3 className="my-3">Notices</h3>
      <hr className="red-line" />
      <hr className="red-line" />

      <Row>
        {notices.map((notice, index) => (
          <Col key={index} md={4} className="mt-4">
            <Card className="shadow h-100" style={{ cursor: "pointer" }}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faBell}
                  size="2x"
                  className="mb-4 text-primary"
                />
                <Card.Title>{notice.title}</Card.Title>
                <Card.Text>{notice.description}</Card.Text>
                <Button
                  variant="primary"
                  href={notice.fileLink}
                  target="_blank"
                >
                  View Notice
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Notice;
