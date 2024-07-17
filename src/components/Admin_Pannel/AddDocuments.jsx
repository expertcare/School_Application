import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function numberToRoman(num) {
  const romanNumerals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
  };

  return romanNumerals[num];
}

const AddDocuments = () => {
  const [grades, setGrades] = useState(
    Array.from({ length: 10 }, (_, i) => `Grade ${numberToRoman(i + 1)}`)
  );
  const [selectedGrade, setSelectedGrade] = useState("Grade I");
  const [syllabusFile, setSyllabusFile] = useState(null);
  const [synopsisFile, setSynopsisFile] = useState(null);
  const [formsFile, setFormsFile] = useState(null);
  const [parentsManualFile, setParentsManualFile] = useState(null);

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
  };

  const handleSyllabusUpload = (e) => {
    setSyllabusFile(e.target.files[0]);
  };

  const handleSynopsisUpload = (e) => {
    setSynopsisFile(e.target.files[0]);
  };

  const handleFormsUpload = (e) => {
    setFormsFile(e.target.files[0]);
  };

  const handleParentsManualUpload = (e) => {
    setParentsManualFile(e.target.files[0]);
  };

  const handleSyllabusSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", syllabusFile);

    try {
      await axios.post(
        `http://localhost:3000/api/documents/syllabus/${selectedGrade}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Syllabus submitted successfully");
      setSyllabusFile(null);
    } catch (error) {
      console.error("Error uploading syllabus:", error);
      toast.error(error.response.data.error);
    }
  };

  const handleFormsSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", formsFile);

    try {
      await axios.post(`http://localhost:3000/api/documents/forms`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Form added successfully");
      console.log("Forms submitted successfully");
      setFormsFile(null);
    } catch (error) {
      console.error("Error uploading forms:", error);
    }
  };

  const handleParentsManualSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", parentsManualFile);

    try {
      await axios.post(
        `http://localhost:3000/api/documents/parents-manual`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Parents Manual submitted successfully");
      setParentsManualFile(null);
    } catch (error) {
      console.error("Error uploading parents manual:", error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="container my-5">
      <div className="card p-4">
        <h2 className="mb-4">Add Documents</h2>

        <hr className="red-line" />
        <hr className="red-line mb-4" />

        {/* Syllabus File Upload */}
        <div className="mb-4">
          <h4>Syllabus Upload</h4>
          <form onSubmit={handleSyllabusSubmit}>
            <div className="mb-3">
              <label className="form-label">Select Grade:</label>
              <select
                className="form-select"
                value={selectedGrade}
                onChange={handleGradeChange}
              >
                {grades.map((grade, index) => (
                  <option key={index} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Upload Syllabus:</label>
              <input
                type="file"
                className="form-control mb-2"
                onChange={handleSyllabusUpload}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit Syllabus
              </button>
            </div>
          </form>
        </div>

        {/* Forms File Upload */}
        <div className="mb-4">
          <h4>Forms Upload</h4>
          <form onSubmit={handleFormsSubmit}>
            <div className="mb-3">
              <label className="form-label">Upload Forms:</label>
              <input
                type="file"
                className="form-control"
                onChange={handleFormsUpload}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit Forms
              </button>
            </div>
          </form>
        </div>

        {/* Parents Manual File Upload */}
        <div className="mb-4">
          <h4>Parents Manual Upload</h4>
          <form onSubmit={handleParentsManualSubmit}>
            <div className="mb-3">
              <label className="form-label">Upload Parents Manual:</label>
              <input
                type="file"
                className="form-control"
                onChange={handleParentsManualUpload}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit Parents Manual
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDocuments;
