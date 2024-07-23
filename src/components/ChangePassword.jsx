import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";

const ChangePassword = () => {
  const { student } = useAuth();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "currentPassword":
        setCurrentPassword(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "otp":
        setOtp(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword || !otp) {
      toast.warn("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.warn("New password and confirm password do not match.");
      return;
    }

    if (newPassword.length < 6 || newPassword.length > 12) {
      toast.warn("Password length should be between 6-12 characters.");
      return;
    }

    try {
      // Validate OTP before changing password
      await axios.post("http://localhost:3000/api/auth/change-password", {
        enrollmentNo: student.enrollmentNo,
        currentPassword,
        newPassword,
        otp,
      });

      // Password changed successfully
      toast.success("Password changed successfully!");

      // Reset form fields
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setOtp("");
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(error.response.data.message || "Failed to change password.");
    }
  };
  const handleSendOTP = async () => {
    try {
      // Make API request to send OTP
      await axios.post("http://localhost:3000/api/auth/generate-otp", {
        enrollmentNo: student.enrollmentNo,
      });

      setOtpSent(true);
      toast.success("OTP sent to your registered email.");
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.warn(error.response.data.error);
    }
  };

  return (
    <Container className="my-5 p-4 card col-lg-8">
      <h3 className="my-3">Change Password</h3>
      <hr className="red-line" />
      <hr className="red-line" />

      <p className="mt-3">Login: {student.enrollmentNo}</p>
      <hr className="page-line" />

      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="currentPassword">
          <Form.Label column sm="4">
            Current Password <span className="text-danger">*</span>
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="password"
              name="currentPassword"
              value={currentPassword}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <hr className="page-line" />

        <Form.Group as={Row} controlId="newPassword">
          <Form.Label column sm="4">
            New Password <span className="text-danger">*</span>
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={handleChange}
              minLength={6}
              maxLength={12}
              required
            />
          </Col>
          <small className="text-danger">
            {" "}
            Password length should be between 6-12 characters.
          </small>
        </Form.Group>

        <hr className="page-line" />

        <Form.Group as={Row} controlId="confirmPassword">
          <Form.Label column sm="4">
            Re-enter Password <span className="text-danger">*</span>
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              minLength={6}
              maxLength={12}
              required
            />
          </Col>
          <small className="text-danger">
            {" "}
            Password length should be between 6-12 characters.
          </small>
        </Form.Group>

        <hr className="page-line" />

        <Form.Group as={Row} controlId="otp">
          <Form.Label column sm="2">
            OTP <span className="text-danger">*</span>
          </Form.Label>
          <Col sm="2">
            {!otpSent && (
              <Button className="mt-2 btn-sm my-2 px-2" onClick={handleSendOTP}>
                Send OTP
              </Button>
            )}
          </Col>
          <Col sm="8">
            <Form.Control
              type="text"
              name="otp"
              value={otp}
              onChange={handleChange}
              required
            />
          </Col>

          <small className="text-danger">
            {" "}
            Click on Send OTP Button and Enter OTP received on your registered
            Email account in OTP box. OTP will be valid for 5 minutes only!
          </small>
        </Form.Group>

        <hr className="page-line" />

        <Form.Group as={Row} className="justify-content-center">
          <Col sm="auto">
            <Button variant="primary" type="submit">
              Change Password
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ChangePassword;
