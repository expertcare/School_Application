import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Table, Button } from "react-bootstrap";

const ActivityFeesComponent = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [activities, setActivities] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/activities");
      setActivities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (event) => {
    const index = event.target.value;
    const selectedActivity = activities[index];
    // Check if the activity is already selected
    if (!selectedActivities.includes(selectedActivity)) {
      setSelectedActivities([...selectedActivities, selectedActivity]);
    }
  };

  const handleRemoveActivity = (activity) => {
    const updatedActivities = selectedActivities.filter(
      (act) => act !== activity
    );
    setSelectedActivities(updatedActivities);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment logic here
    if (isChecked) {
      alert("Payment processed successfully!");
      // Perform payment-related actions (e.g., API calls, redirection)
    } else {
      alert("Please agree to the Terms & Conditions.");
    }
  };

  // Function to calculate total amount of selected activities
  const calculateTotalAmount = () => {
    return selectedActivities.reduce(
      (total, activity) => total + parseFloat(activity.amount),
      0
    );
  };

  return (
    <div className="container my-5 card p-4">
      <div className="activity-fees-component">
        <h2>Activity Fees</h2>
        <hr className="red-line" />
        <hr className="red-line mb-4" />

        <Form>
          <div className="activity-select">
            <Form.Label htmlFor="activity-select">
              Select Activities For Fees Payment:
            </Form.Label>
            <Form.Select
              className="form-select mb-3"
              id="activity-select"
              onChange={handleSelectChange}
            >
              <option>-Select-</option>
              {activities.map((activity, index) => (
                <option key={activity._id} value={index}>
                  {activity.activityName}
                </option>
              ))}
            </Form.Select>
          </div>
        </Form>

        <hr className="page-line" />

        <div className="fees-summary">
          <h5>FEES SUMMARY</h5>
          {selectedActivities.length > 0 ? (
            <>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>SR. NO.</th>
                    <th>PARTICULARS</th>
                    <th>AMOUNT</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedActivities.map((activity, index) => (
                    <tr key={activity._id}>
                      <td>{index + 1}</td>
                      <td>{activity.description}</td>
                      <td>{activity.amount}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleRemoveActivity(activity)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h4 className="my-3 me-3 float-end">
                Total Amount: {calculateTotalAmount().toFixed(2)}
              </h4>
            </>
          ) : (
            <p>No activities selected</p>
          )}
        </div>

        <hr className="page-line" />

        <div className="contact-info">
          <h5>CONTACT INFORMATION</h5>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="mobile" className="form-label">
                Mobile No:
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                value={mobile}
                onChange={handleMobileChange}
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>
        </div>

        <hr className="page-line" />

        <div className="notes">
          <h5>NOTE</h5>
          <ol>
            <li>
              CONVENIENCE FEE APPLICABLE AS PER MODE OF PAYMENT.{" "}
              <a href="#">Click Here</a>
            </li>
            <li>
              ONLINE COLLECTION OF FEE IS SUBJECTED TO POLICIES AND CIRCULARS.
            </li>
            <li>
              FOR ANY QUERIES PLEASE REACH OUT TO RESPECTIVE SCHOOL HELPDESK OR
              CALL US AT - 6003000700.
            </li>
          </ol>
        </div>

        <hr className="page-line" />

        <div className="terms">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              required
            />{" "}
            I Agree to the Terms & Conditions.
          </label>
        </div>

        <button
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={!isChecked || selectedActivities.length === 0}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default ActivityFeesComponent;
