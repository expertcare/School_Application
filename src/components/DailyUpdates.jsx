import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const DailyUpdates = () => {
  const updates = [
    {
      date: "2024-11-07",
      title: "Daily Diary Grade 4A",
      description:
        "Dear Parents, Kindly find the attached Daily Diary of 11th July 2024 of Grade 4A. Regards. VIBGYOR High.",
      message: "",
      attachments: [
        { name: "Daily diary 4A", date: "(11th July 2024)", link: "#" },
      ],
    },
    {
      date: "2024-10-07",
      title: "DAILY DIARY GRADE 4A",
      description:
        "Dear Parents, Kindly find the attached Daily Diary of 10th July 2024 Of Grade 4A. Regards. VIBGYOR High.",
      message: "",
      attachments: [
        { name: "Daily diary 4A", date: "(10th July 2024)", link: "#" },
      ],
    },
  ];

  return (
    <Container className="mt-5 card p-4">
      <h2 className="mb-4">Daily Updates</h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />

      {updates.map((update, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Row>
              <Col xs={12} md={2} className="mb-2 mb-md-0">
                <div className="text-center">
                  <h4>{index + 1}</h4>
                  <p>{update.date}</p>
                </div>
              </Col>
              <Col xs={12} md={10}>
                <h5>{update.title}</h5>
                <p>{update.description}</p>
                <p>{update.message}</p>
                <div>
                  <strong>Attachment(s):</strong>
                  <ul>
                    {update.attachments.map((attachment, idx) => (
                      <li key={idx}>
                        {attachment.name} {attachment.date}
                        <a href={attachment.link} className="ml-2">
                          Download
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

export default DailyUpdates;
