import React from "react";
import Header from "./Header"; // Import Header component
import StudentProfile from "./StudentProfile";
import { useNavigate } from "react-router-dom";

import {
  faUser,
  faImage,
  faBell,
  faFileAlt,
  faCalendarAlt,
  faMoneyBill,
  faBus,
  faMoneyCheckAlt,
  faClipboardList,
  faFileDownload,
  faBookOpen,
  faWrench,
  faTshirt,
  faListUl,
  faEnvelope,
  faClock,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
import ServiceCard from "./ServiceCard";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    navigate("/");
    console.log("Logged out"); // Placeholder for logout logic
  };

  return (
    <div className="bg-light min-vh-100">
      <Header onLogout={handleLogout} />
      <div className="container py-4">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card shadow">
                <StudentProfile />
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
          {/* Card for each service */}
          <ServiceCard
            title="Subject/Service AY 2024-25"
            icon={faCalendarAlt}
            color="#f44336"
            route="/SubjectSelection"
          />
          <ServiceCard title="ID Card Photo" icon={faImage} color="#e91e63" />
          <ServiceCard
            title="Notices"
            icon={faBell}
            color="#9c27b0"
            route="/Notice"
          />
          <ServiceCard
            title="Personal Circulars"
            icon={faFileAlt}
            color="#673ab7"
          />
          <ServiceCard
            title="Daily Updates"
            icon={faClipboardList}
            color="#3f51b5"
            route="/DailyUpdates"
          />
          <ServiceCard
            title="Timetable"
            icon={faClock}
            color="#2196f3"
            route="/Timetable"
          />
          <ServiceCard
            title="Pay Bus Fees"
            icon={faBus}
            color="#00bcd4"
            route="/PayBusFees"
          />
          <ServiceCard
            title="Online Fees"
            icon={faMoneyCheckAlt}
            color="#009688"
            route="/fees"
          />
          <ServiceCard
            title="Activity Fees"
            icon={faMoneyBill}
            color="#4caf50"
            route="/ActivityFeesComponent"
          />
          <ServiceCard
            title="My Payment"
            icon={faMoneyCheckAlt}
            color="#8bc34a"
            route="/MyPaymentFees"
          />
          <ServiceCard
            title="My Attendance"
            icon={faListUl}
            color="#cddc39"
            route="/AttendanceSummary"
          />
          <ServiceCard
            title="My Marksheet"
            icon={faFileAlt}
            color="#ffeb3b"
            route="/MarkSheet"
          />
          <ServiceCard
            title="My Discipline Slips"
            icon={faWrench}
            color="#ffc107"
          />
          <ServiceCard
            title="Parents Manual"
            icon={faBookOpen}
            color="#ff9800"
            route="/ParentsManual"
          />
          <ServiceCard
            title="Forms Download"
            icon={faFileDownload}
            color="#ff5722"
            route="/FormsDownload"
          />
          <ServiceCard
            title="Syllabus"
            icon={faBookOpen}
            color="#795548"
            route="/Syllabus"
          />
          <ServiceCard
            title="Service Request"
            icon={faEnvelope}
            color="#9e9e9e"
            route="/ServiceRequestOutbox"
          />
          <ServiceCard
            title="Order Uniform"
            icon={faTshirt}
            color="#607d8b"
            route="/OrderUniform"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
