import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, icon, color, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route); // Navigate to the specified route when clicked
  };

  return (
    <div className="col">
      <Card
        className="shadow h-100"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <Card.Body className="text-center ">
          <FontAwesomeIcon
            icon={icon}
            size="2x"
            className="mb-4 fa-icon"
            style={{ color: color, transition: "color 0.3s ease" }}
          />
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
