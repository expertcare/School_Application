import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Timetable = () => {
  const timetables = [
    {
      date: "2024-23-06",
      title: "TimeTable Grade 4A",
      description:
        "Kindly find the attached Time Table of Grade 4A for academic year 2024-25. Thank You. Regards. VIBGYOR High.",
      attachments: [
        { name: "Screenshot_20240623-151350_1.jpg", link: "#" }, // Replace with actual link
      ],
    },
    // Add more timetable entries as needed
  ];

  return (
    <Container className="mt-5 mb-5 p-4 card min-vh-100 col-lg-8">
      <h3 className="my-3">Timetable</h3>
      <hr className="red-line" />
      <hr className="red-line mb-4" />

      {timetables.map((timetable, index) => (
        <Card key={index} className="shadow mb-4">
          <Card.Body>
            <Row>
              <Col md={2}>
                <div className="text-center">
                  <h4>{index + 1}</h4>
                  <p>{timetable.date}</p>
                </div>
              </Col>
              <Col md={10}>
                <h5>{timetable.title}</h5>
                <p>{timetable.description}</p>
                <div>
                  <strong>Attachment(s):</strong>
                  <ul>
                    {timetable.attachments.map((attachment, idx) => (
                      <li key={idx}>
                        <a
                          href={attachment.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {attachment.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Timetable;
