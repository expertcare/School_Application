import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword || !otp) {
      setFormErrors({
        message: "All fields are required.",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setFormErrors({
        message: "New password and confirm password do not match.",
      });
      return;
    }

    if (newPassword.length < 6 || newPassword.length > 12) {
      setFormErrors({
        message: "Password length should be between 6-12 characters.",
      });
      return;
    }

    // Here you can implement the logic for OTP validation
    // For demo purposes, let's assume OTP validation is successful

    alert("Password changed successfully!");
    // Reset the form
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setOtp("");
    setFormErrors({});
  };

  const handleSendOTP = () => {
    // Simulate sending OTP (for demo purposes)
    setOtpSent(true);
    alert("OTP sent to your registered email.");
  };

  return (
    <Container className="my-5 p-4 card col-lg-8">
      <h3 className="my-3">Change Password</h3>
      <hr className="red-line" />
      <hr className="red-line" />

      <p className="mt-3">Login: VH50-ENRNO6882</p>
      <hr className="page-line" />

      {formErrors.message && (
        <div className="text-danger mb-3">{formErrors.message}</div>
      )}
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
            Email account in OTP box. OTP will be valid for 1 time use in
            current login session only!
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
