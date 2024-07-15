import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faFileInvoiceDollar,
  faBell,
  faFile,
  faExclamationCircle,
  faShirt,
  faUserGraduate,
  faTasksAlt,
} from "@fortawesome/free-solid-svg-icons";

const AdminCard = ({ icon, iconColor, title, description, linkTo }) => (
  <Col md={4} className="mb-4">
    <Link to={linkTo} className="text-decoration-none">
      <Card className="h-100 shadow">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <FontAwesomeIcon
            icon={icon}
            className={`text-${iconColor} mb-3`}
            size="2x"
          />
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-center">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  </Col>
);

const AdminHomePage = () => {
  return (
    <Container className="mt-4 col-md-10 col-lg-8">
      <h2 className="text-center my-5">Admin Dashboard</h2>
      <Row>
        <AdminCard
          icon={faClock}
          iconColor="primary"
          title="Manage Daily Updates"
          description="View, add, or edit daily updates for different grades and divisions."
          linkTo="/admin/daily_updates"
        />
        <AdminCard
          icon={faCalendarAlt}
          iconColor="success"
          title="Manage Time Tables"
          description="Create and update timetables for various grades and academic years."
          linkTo="/admin/create_timetable"
        />
        <AdminCard
          icon={faFileInvoiceDollar}
          iconColor="info"
          title="View Payment Records"
          description="View and manage payment records categorized by grades and divisions."
          linkTo="/admin/view_payment_records"
        />
        <AdminCard
          icon={faBell}
          iconColor="warning"
          title="Manage Notices"
          description="Add, edit, or delete notices for communication with parents and staff."
          linkTo="/admin/add_notices"
        />
        <AdminCard
          icon={faFile}
          iconColor="dark"
          title="Add Documents"
          description="Upload syllabus or synopsis for respective grade, and add forms and upload file manuals."
          linkTo="/admin/add_documents"
        />
        <AdminCard
          icon={faExclamationCircle}
          iconColor="danger"
          title="Issue Discipline Slip"
          description="Issue discipline slip to students."
          linkTo="/admin/add_discipline_slips"
        />
        <AdminCard
          icon={faShirt}
          iconColor="secondary"
          title="Uniform Orders"
          description="View the students details who have ordered the uniforms."
          linkTo="/admin/uniform_orders"
        />
        <AdminCard
          icon={faUserGraduate}
          iconColor="primary"
          title="Create Student"
          description="View and create student."
          linkTo="/admin/student_form"
        />
        <AdminCard
          icon={faTasksAlt}
          iconColor="info"
          title="Manage Service Request"
          description="View and manage service requests from parents."
          linkTo="/admin/manage_service_request"
        />
      </Row>
    </Container>
  );
};

export default AdminHomePage;
