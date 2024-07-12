import SigninPage from "./components/SigninPage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import { useLayoutEffect } from "react";
import ChangePassword from "./components/ChangePassword";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures scrolling to the top on route change */}
      <Routes>
        <Route path="/" element={<SigninPage />} />
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
        <Route path="/ChangePassword" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
