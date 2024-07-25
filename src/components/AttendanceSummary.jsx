import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const AttendanceSummary = () => {
  const { student } = useAuth(); // Assuming useAuth provides the authenticated student data

  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/attendance/${student.enrollmentNo}`
        );
        setAttendanceData(response.data);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchAttendanceData();
  }, [student.enrollmentNo]);

  return (
    <Container className="card my-5 p-4 min-vh-100">
      <h2 className="text-center mb-4">
        Attendance Summary for Enrollment No: {student.enrollmentNo}
      </h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Date/Time</th>

            {attendanceData.length > 0 &&
              attendanceData[0].records.map((record) => (
                <th key={record._id}>{record.timeSlot}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendanceRecord) => (
            <tr key={attendanceRecord._id}>
              <td>{new Date(attendanceRecord.date).toLocaleDateString()}</td>

              {attendanceRecord.records.map((record) => (
                <td key={record._id}>{record.attendance}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AttendanceSummary;
