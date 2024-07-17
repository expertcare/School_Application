// components/DisciplineSlips.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const DisciplineSlips = () => {
  const { student } = useAuth(); // Assuming student object with enrollmentNo
  const [disciplineSlips, setDisciplineSlips] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch discipline slips when component mounts or when student changes
    if (student && student.enrollmentNo) {
      fetchDisciplineSlips(student.enrollmentNo);
    }
  }, [student]); // Dependency on student object changes

  const fetchDisciplineSlips = async (enrollmentNo) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/discipline-slip/${enrollmentNo}`
      );
      setDisciplineSlips(response.data);
      setError("");
    } catch (error) {
      setDisciplineSlips([]);
      setError("Discipline slips not found for this enrollment number");
      console.error("Error fetching discipline slips:", error);
    }
  };

  return (
    <div className="container card my-5 p-4 min-vh-100">
      <h2 className="mb-4">Discipline Slips</h2>
      <hr className="red-line" />
      <hr className="red-line mb-4" />

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {disciplineSlips.map((slip) => (
          <div key={slip._id} className="col">
            <div className="card h-100">
              <div className="card-body shadow">
                <h5 className="card-title">Discipline Slip</h5>
                <p className="card-text">
                  <strong>Reason:</strong> {slip.reason}
                </p>
                <p className="card-text">
                  <strong>Issued At:</strong>{" "}
                  {new Date(slip.issuedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisciplineSlips;
