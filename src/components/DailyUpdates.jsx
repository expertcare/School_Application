import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // Assuming you have an AuthContext for authentication

const DailyDiaryViewer = () => {
  const { student } = useAuth(); // Assuming this provides grade and division
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    fetchDiaryEntries(student.grade, student.div);
  }, [student]);

  const fetchDiaryEntries = async (grade, div) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/daily-diary/${grade}/${div}`
      );
      setDiaryEntries(response.data);
    } catch (error) {
      console.error("Error fetching diary entries:", error);
      // Handle error states or display an error message to the user
    }
  };

  return (
    <Container className="card my-5 p-4">
      <h3 className="mb-3">Daily Diary Viewer</h3>
      <hr className="red-line" />
      <hr className="red-line mb-3" />

      {student && (
        <div className="mb-3">
          <h5>
            Viewing diary entries for Grade: {student.grade} | Division:{" "}
            {student.div}
          </h5>
        </div>
      )}

      <hr className="page-line" />

      <h4>Diary Entries</h4>

      {diaryEntries.length === 0 ? (
        <p>No diary entries found for the selected grade and division.</p>
      ) : (
        diaryEntries.map((entry) => (
          <div key={entry._id} className="mb-4">
            <h5>
              Date: {new Date(entry.date).toLocaleDateString()} | Grade:{" "}
              {entry.grade} | Division: {entry.division}
            </h5>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Subject</th>
                  <th>Topic</th>
                  <th>Sub Topic</th>
                  <th>CW</th>
                  <th>Reinforcement</th>
                  <th>Submission Date</th>
                </tr>
              </thead>
              <tbody>
                {entry.periods.map((period) => (
                  <tr key={period._id}>
                    <td>{period.period}</td>
                    <td>{period.subject}</td>
                    <td>{period.topic}</td>
                    <td>{period.subTopic}</td>
                    <td>{period.cw}</td>
                    <td>{period.reinforcement}</td>
                    <td>{period.submissionDate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <hr className="page-line" />
          </div>
        ))
      )}
    </Container>
  );
};

export default DailyDiaryViewer;
