import React from "react";

import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ParentsManual = () => {
  return (
    <div className="container card mt-5 mb-5 p-4 min-vh-100">
      <h3 className="my-3 ">Parents Manual</h3>
      <hr className="red-line" />
      <hr className="red-line" />

      <Card
        className="shadow h-100 col-md-3 mt-4"
        // onClick={handleClick}
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
    </div>
  );
};

export default ParentsManual;
