import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SubjectSelection = () => {
  return (
    <Container className="mt-5 mb-5 p-4 card min-vh-100">
      <h3 className="my-3">Subjects For Academic Year 2024-25</h3>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <Row>
        <Col>
          <h4 className="mb-4">Step 1</h4>
          <p>
            <strong className="text-primary fs-5 mt-4">
              Subject Selection
            </strong>
          </p>

          <hr className="page-line" />
          <p>
            NOTE:
            <br />
            1. Subject Selection is not applicable.
            <br />
            2. Subject Selection option is given in certain grades only.
            <br />
            3. In case of any queries related to Subject Selection, kindly raise
            the service request, or contact the School Relationship Team.
          </p>
          <hr className="page-line" />
        </Col>
      </Row>
    </Container>
  );
};

export default SubjectSelection;
