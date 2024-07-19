import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Timetable = () => {
  const { student } = useAuth();

  const [timetables, setTimetables] = useState(null); // Start with null instead of []

  useEffect(() => {
    fetchTimetables();
  }, []);

  const fetchTimetables = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/timetable/${student.grade}/${student.div}`
      );

      setTimetables(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error fetching timetables:", error);
      // Handle error states or display an error message to the user
      toast.error(error.response.data.error);
    }
  };

  return (
    <Container className="card my-5 p-4 min-vh-100">
      <h3 className="mb-3">View Timetable</h3>
      <hr className="red-line" />
      <hr className="red-line mb-3" />

      {timetables === null ? (
        <div className="text-center my-3">
          <hr className="page-line" />
          <h4>Time Table not found</h4>
          <hr className="page-line" />
          <hr className="page-line mt-5" />
        </div>
      ) : (
        <>
          <h4 className="text-center m-5">
            CLASS TIME TABLE : {timetables.grade} - Div {timetables.division}
          </h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              {timetables.timetable.map((slot, idx) => (
                <tr key={`${idx}`}>
                  <td>{slot.time}</td>
                  <td>{slot.monday}</td>
                  <td>{slot.tuesday}</td>
                  <td>{slot.wednesday}</td>
                  <td>{slot.thursday}</td>
                  <td>{slot.friday}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default Timetable;
