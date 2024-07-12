import { faBus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";

const PayBusFees = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isChecked) {
      // Handle payment logic (e.g., API call, redirect to payment gateway)
      alert("Payment processed successfully!");
    } else {
      alert("Please agree to the declaration before proceeding.");
    }
  };

  // data for Pickup and Drop details
  const pickupDetails = {
    zone: "Zone 4",
    route: "NAGALA PARK, GREEN FIELD, NEW SHAHUPURI",
    stop: "AYODHYA PARK",
  };

  const dropDetails = {
    zone: "Zone 4",
    route: "NAGALA PARK, GREEN FIELD, NEW SHAHUPURI",
    stop: "AYODHYA PARK",
  };

  return (
    <Container className="mt-5 mb-5 p-4 card min-vh-100">
      <div className="d-flex my-4 gap-4">
        <FontAwesomeIcon icon={faBus} size="2x" style={{ color: "#00bcd4" }} />
        <h2>Transport Service</h2>
      </div>

      <hr className="red-line" />
      <hr className="red-line mb-4" />

      <h4>Currently Applied Route Stop For Year 24-25</h4>

      <hr className="page-line" />

      {/* Pickup Details Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>PickupZone</th>
            <th>PickupRoute</th>
            <th>PickupStop</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pickupDetails.zone}</td>
            <td>{pickupDetails.route}</td>
            <td>{pickupDetails.stop}</td>
          </tr>
        </tbody>
      </Table>

      {/* Drop Details Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>DropZone</th>
            <th>DropRoute</th>
            <th>DropStop</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dropDetails.zone}</td>
            <td>{dropDetails.route}</td>
            <td>{dropDetails.stop}</td>
          </tr>
        </tbody>
      </Table>

      <hr className="page-line" />
      <h4>Currently Applied Fees For Year 24-25</h4>
      <hr className="page-line" />

      {/* Applied fees table  */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>SR. NO.</th>
            <th>PARTICULARS</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <p className="text-danger">Please tick on below check box to proceed.</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="I / We hereby fully understand and agree to pay the bus fees for Academic Year 2024-25. I/We have read and agree to the declaration."
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          className="mt-2"
          type="submit"
          disabled={!isChecked}
        >
          Pay Now
        </Button>
        <hr className="page-line" />
      </Form>
    </Container>
  );
};

export default PayBusFees;
