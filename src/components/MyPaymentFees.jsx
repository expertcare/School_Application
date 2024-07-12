import React from "react";
import { Container, Table } from "react-bootstrap";

const MyPaymentFees = () => {
  const feesData = [
    {
      srNo: 1,
      receiptNumber: "VH50-RCTNO135397",
      receiptDate: "05/07/2024",
      amountPaid: 8100.0,
      status: "Non Cancelled",
    },
    {
      srNo: 2,
      receiptNumber: "VH50-RCTNO135312",
      receiptDate: "01/07/2024",
      amountPaid: 31675.0,
      status: "Non Cancelled",
    },
    // Add more fee details as needed
  ];

  return (
    <Container className="mt-5 mb-5 p-4 card min-vh-100">
      <h3 className="my-3">Fees</h3>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <h4>MY PAYMENTS</h4>
      <hr className="page-line" />
      <h5 className="text-center">FEES DETAIL</h5>
      <hr className="page-line mb-4" />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Receipt Number</th>
            <th>Receipt Date</th>
            <th>Amount Paid</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {feesData.map((fee, index) => (
            <tr key={index}>
              <td>{fee.srNo}</td>
              <td>{fee.receiptNumber}</td>
              <td>{fee.receiptDate}</td>
              <td>{fee.amountPaid}</td>
              <td>{fee.status}</td>
              <td>
                <button className="btn btn-primary">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyPaymentFees;
