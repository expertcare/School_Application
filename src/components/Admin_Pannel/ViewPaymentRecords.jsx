import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";

const ViewPaymentRecords = () => {
  const [paymentRecords, setPaymentRecords] = useState([]);
  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");

  // Dummy data for demonstration
  useEffect(() => {
    // Simulating fetching payment records from an API or local storage
    const fetchedPaymentRecords = [
      {
        id: 1,
        studentName: "John Doe",
        grade: "4",
        division: "A",
        amount: 5000,
        date: "2024-07-10",
        status: "Paid",
      },
      {
        id: 2,
        studentName: "Jane Smith",
        grade: "4",
        division: "B",
        amount: 3500,
        date: "2024-07-11",
        status: "Pending",
      },
      {
        id: 3,
        studentName: "Michael Johnson",
        grade: "5",
        division: "A",
        amount: 4500,
        date: "2024-07-12",
        status: "Paid",
      },
      // Add more records as needed
    ];

    // Extracting unique grades and divisions for dropdowns
    const uniqueGrades = Array.from(
      new Set(fetchedPaymentRecords.map((record) => record.grade))
    );
    setGrades(["All", ...uniqueGrades]);

    const uniqueDivisions = Array.from(
      new Set(fetchedPaymentRecords.map((record) => record.division))
    );
    setDivisions(["All", ...uniqueDivisions]);

    setPaymentRecords(fetchedPaymentRecords);
  }, []);

  // Filter payment records based on selected grade and division
  const filteredPaymentRecords = paymentRecords.filter((record) => {
    if (selectedGrade !== "All" && record.grade !== selectedGrade) {
      return false;
    }
    if (selectedDivision !== "All" && record.division !== selectedDivision) {
      return false;
    }
    return true;
  });

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
  };

  return (
    <div className="container card my-5 p-4 min-vh-100">
      <h2 className="mb-3">View Payment Records</h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <Form className="mb-3">
        <Form.Group controlId="gradeSelect">
          <Form.Label>Select Grade</Form.Label>
          <Form.Control
            as="select"
            onChange={handleGradeChange}
            value={selectedGrade}
          >
            {grades.map((grade, index) => (
              <option key={index} value={grade}>
                {grade}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="divisionSelect">
          <Form.Label>Select Division</Form.Label>
          <Form.Control
            as="select"
            onChange={handleDivisionChange}
            value={selectedDivision}
          >
            {divisions.map((division, index) => (
              <option key={index} value={division}>
                {division}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Grade</th>
            <th>Division</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPaymentRecords.map((record, index) => (
            <tr key={record.id}>
              <td>{index + 1}</td>
              <td>{record.studentName}</td>
              <td>{record.grade}</td>
              <td>{record.division}</td>
              <td>{record.amount}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewPaymentRecords;
