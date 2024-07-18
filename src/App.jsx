import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SigninPage from "./components/SigninPage";
import Dashboard from "./components/Dashboard";
import AttendanceSummary from "./components/AttendanceSummary";
import FeesComponent from "./components/FeesComponent";
import DailyUpdates from "./components/DailyUpdates";
import MarkSheet from "./components/MarkSheet";
import ParentsManual from "./components/ParentsManual";
import FormsDownload from "./components/FormsDownload";
import Syllabus from "./components/Syllabus";
import Notice from "./components/Notice";
import Timetable from "./components/Timetable";
import SubjectSelection from "./components/SubjectSelection";
import MyPaymentFees from "./components/MyPaymentFees";
import ViewProfile from "./components/ViewProfile";
import PayBusFees from "./components/PayBusFees";
import ActivityFeesComponent from "./components/ActivityFeesComponent";
import ServiceRequestOutbox from "./components/ServiceRequestOutbox";
import OrderUniform from "./components/OrderUniform";
import ChangePassword from "./components/ChangePassword";
import IDCardPhoto from "./components/IDCardPhoto";
import AdminDashboard from "./components/Admin_Pannel/AdminDashboard";
import AddDailyUpdate from "./components/Admin_Pannel/AddDailyUpdate";
import AddTimeTable from "./components/Admin_Pannel/AddTimeTable";
import AddNotice from "./components/Admin_Pannel/AddNotice";
import ViewPaymentRecords from "./components/Admin_Pannel/ViewPaymentRecords";
import AddDocuments from "./components/Admin_Pannel/AddDocuments";
import AddDisciplineSlips from "./components/Admin_Pannel/AddDisciplineSlips";
import UniformOrders from "./components/Admin_Pannel/UniformOrders";
import ManageServiceRequest from "./components/Admin_Pannel/ManageServiceRequest";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentCreation from "./components/Admin_Pannel/StudentCreation";
import StudentSearch from "./components/Admin_Pannel/StudentSearch";
import StudentForm from "./components/Admin_Pannel/StudentForm";
import { ToastContainer } from "react-toastify";
import DisciplineSlips from "./components/DisciplineSlips";
import ManageNotices from "./components/Admin_Pannel/ManageNotices";
import ViewEditNotice from "./components/Admin_Pannel/ViewEditNotice";
import UserForm from "./components/Admin_Pannel/UserForm";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />{" "}
        {/* This ensures scrolling to the top on route change */}
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/login" element={<SigninPage />} />
          <Route element={<ProtectedRoute />}>
            {/* <Route> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendanceSummary" element={<AttendanceSummary />} />
            <Route path="/fees" element={<FeesComponent />} />
            <Route path="/dailyUpdates" element={<DailyUpdates />} />
            <Route path="/markSheet" element={<MarkSheet />} />
            <Route path="/parentsManual" element={<ParentsManual />} />
            <Route path="/formsDownload" element={<FormsDownload />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/subjectSelection" element={<SubjectSelection />} />
            <Route path="/myPaymentFees" element={<MyPaymentFees />} />
            <Route path="/viewProfile" element={<ViewProfile />} />
            <Route path="/payBusFees" element={<PayBusFees />} />
            <Route
              path="/activityFeesComponent"
              element={<ActivityFeesComponent />}
            />
            <Route
              path="/serviceRequestOutbox"
              element={<ServiceRequestOutbox />}
            />
            <Route path="/orderUniform" element={<OrderUniform />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/idCardPhoto" element={<IDCardPhoto />} />
            <Route path="/disciplineSlips" element={<DisciplineSlips />} />
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/daily_updates" element={<AddDailyUpdate />} />
            <Route path="/admin/create_timetable" element={<AddTimeTable />} />
            <Route path="/admin/add_notices" element={<AddNotice />} />
            <Route
              path="/admin/view_edit_notices"
              element={<ViewEditNotice />}
            />
            <Route path="/admin/manage_notices" element={<ManageNotices />} />
            <Route
              path="/admin/view_payment_records"
              element={<ViewPaymentRecords />}
            />
            <Route path="/admin/add_documents" element={<AddDocuments />} />
            <Route
              path="/admin/add_discipline_slips"
              element={<AddDisciplineSlips />}
            />
            <Route path="/admin/uniform_orders" element={<UniformOrders />} />
            <Route path="/admin/student_form" element={<StudentCreation />} />
            <Route path="/admin/create_student" element={<StudentForm />} />
            <Route path="/admin/create_user" element={<UserForm />} />
            <Route path="/admin/view_students" element={<StudentSearch />} />
            <Route
              path="/admin/manage_service_request"
              element={<ManageServiceRequest />}
            />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
