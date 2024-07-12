import React from "react";

const AttendanceSummary = () => {
  const attendanceData = {
    totalDays: 37,
    totalWorkingDays: 25,
    totalHolidays: 12,
    totalPresentDays: 24,
    totalAbsentDays: 1,
    extraDaysAttended: 0,
    absentDaysList: [
      { date: "07 - 08 - 2024", day: "Monday" },
      // Add more absent days as needed
    ],
  };

  return (
    <div className="container min-vh-100">
      <div className="card mt-5 p-4">
        <div>
          <h3 className="my-4">Attendance Summary</h3>
          <div>
            <hr className="red-line" />
            <hr className="red-line" />
          </div>
          <h4 className="my-3">Summary</h4>
          <hr className="page-line" />
          <div className="row mt-4">
            <div className="col-md-12">
              <p>Total Days: {attendanceData.totalDays}</p>
              <hr className="page-line" />

              <p>Total Working days: {attendanceData.totalWorkingDays}</p>
              <hr className="page-line" />

              <p>Total Holidays: {attendanceData.totalHolidays}</p>
              <hr className="page-line" />

              <p>Total Present days: {attendanceData.totalPresentDays}</p>
              <hr className="page-line" />

              <p>Total Absent days: {attendanceData.totalAbsentDays}</p>
              <hr className="page-line" />

              <p>Extra Days Attended: {attendanceData.extraDaysAttended}</p>
              <hr className="page-line" />
            </div>
          </div>

          <h4 className="mt-4">My Absent Days List</h4>
          <hr className="page-line" />
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.absentDaysList.map((absentDay, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{absentDay.date}</td>
                  <td>{absentDay.day}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
