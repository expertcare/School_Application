import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const FeesComponent = () => {
  const { student } = useAuth();

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [feeDetails, setFeeDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for async operations

  // Function to get the current academic year
  const getCurrentAcademicYear = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const month = now.getMonth() + 1; // JavaScript months are 0-based (0 = January, 11 = December)

    let startYear;
    let endYear;

    if (month >= 6) {
      startYear = currentYear;
      endYear = currentYear + 1;
    } else {
      startYear = currentYear - 1;
      endYear = currentYear;
    }

    return `${startYear}-${endYear}`;
  };

  const academicYear = getCurrentAcademicYear();

  const grade = student.grade;

  useEffect(() => {
    const fetchFeeDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/fees/details",
          {
            params: { academicYear, grade },
          }
        );
        if (response.data.success) {
          setFeeDetails(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Failed to fetch fee details. Please try again.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchFeeDetails();
  }, [academicYear, grade]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      toast.warn("Please agree to the Terms & Conditions.");
      return;
    }
    // Handle payment logic here
    try {
      // Example payment API call (adjust URL and payload as needed)
      await axios.post("http://localhost:3000/api/payment", {
        email,
        mobile,
        amount: feeDetails?.totalFee,
      });
      toast.success("Payment processed successfully!");
      // Perform payment-related actions (e.g., redirection)
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="container my-5 card p-4">
      <div className="fees-component">
        <h2>Fees</h2>
        <hr className="red-line" />
        <hr className="red-line" />

        <div className="fee-payments">
          <h5 className="text-center mt-4">Fees Summary</h5>
          <hr className="page-line" />
          <p>
            PLEASE CLICK ON PAY NOW TO EXPLORE PAYMENT OPTIONS & INSTALLMENTS/
            BREAKUPS
          </p>
          <hr className="page-line" />
        </div>

        {loading ? (
          <p>Loading fee details...</p>
        ) : (
          <>
            <div className="total-fees d-flex justify-content-between">
              <h5>TOTAL FEES FOR ACADEMIC YEAR {academicYear}</h5>
              <h5>₹{feeDetails?.totalFee}</h5>
            </div>

            <hr className="page-line" />

            <div className="balance-fees d-flex justify-content-between">
              <h5>BALANCE FEES</h5>
              {/* <h5>₹{feeDetails?.balanceFee.toLocaleString()}</h5> */}
              <h5>₹5000</h5>
            </div>

            <hr className="page-line" />
          </>
        )}

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

        <div className="disclaimer">
          <h5>DISCLAIMER</h5>
          <p>
            FOR E-MANDATE REGISTRATIONS, A TOKEN TRANSACTION OF INR 1 WILL BE
            DEDUCTED FROM CUSTOMER'S BANK ACCOUNT
          </p>
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
              ONLINE COLLECTION OF FEE IS SUBJECT TO POLICIES AND CIRCULARS.
            </li>
            <li>
              PLEASE CONTACT OUR DEDICATED SPECIAL SERVICE DESK AT{" "}
              <a href="tel:+916003000700">+91 600 3000 700</a> OR EMAIL US AT{" "}
              <a href="mailto:psr@vgos.org">psr@vgos.org</a>.
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
          disabled={!isChecked}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default FeesComponent;
