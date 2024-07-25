import { faBus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import axios from "axios";

const PayBusFees = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [wantBusService, setWantBusService] = useState(null);
  const [transportServices, setTransportServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetchTransportServices();
  }, []);

  const fetchTransportServices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/transport-services"
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch transport services");
      }
      const data = response.data;
      if (data.length > 0) {
        setTransportServices(data);
      } else {
        throw new Error("No transport services found");
      }
    } catch (error) {
      console.error("Error fetching transport services:", error);
      // Handle error as needed (e.g., show error message to user)
    }
  };

  const handleSelectChange = (event) => {
    const index = event.target.value;
    setSelectedService(transportServices[index]);
  };

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

  return (
    <Container className="mt-5 mb-5 p-4 card min-vh-100">
      <div className="d-flex my-4 gap-4">
        <FontAwesomeIcon icon={faBus} size="2x" style={{ color: "#00bcd4" }} />
        <h2>Transport Service</h2>
      </div>

      <hr className="red-line" />
      <hr className="red-line mb-4" />

      <Form>
        <Form.Label className="h5">Select a Transport Service:</Form.Label>
        <Form.Select onChange={handleSelectChange}>
          <option>Select</option>
          {transportServices.map((service, index) => (
            <option key={service._id} value={index}>
              {service.zone} - {service.pickupRoute}
            </option>
          ))}
        </Form.Select>

        <hr className="page-line" />
      </Form>

      {selectedService && (
        <div className="text-center">
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
                <td>{selectedService.zone}</td>
                <td>{selectedService.pickupRoute}</td>
                <td>{selectedService.pickupStop}</td>
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
                <td>{selectedService.zone}</td>
                <td>{selectedService.dropRoute}</td>
                <td>{selectedService.dropStop}</td>
              </tr>
            </tbody>
          </Table>

          {/* Applied Fees  */}

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
                <td>1</td>
                <td>Payment For a Bus Service</td>
                <td>{selectedService.amount}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}

      {selectedService && (
        <>
          <p className="text-danger">
            Please tick on below check box to proceed.
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label={`I / We hereby fully understand and agree to pay the bus fees for Academic Year 2024-25. I/We have read and agree to the declaration for ${selectedService.zone} - ${selectedService.pickupRoute}.`}
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
        </>
      )}
    </Container>
  );
};

export default PayBusFees;
