import React from "react";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import AdminHomePage from "./AdminHomePage";

const AdminDashboard = () => {
  return (
    <div className="min-vh-100 bg-white">
      <AdminHeader />
      <AdminHomePage />
      <Sidebar />
    </div>
  );
};

export default AdminDashboard;
