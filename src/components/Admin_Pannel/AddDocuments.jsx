import React, { useState } from "react";

const AddDocuments = () => {
  const [grades, setGrades] = useState(
    Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`)
  );
  const [selectedGrade, setSelectedGrade] = useState("Grade 1");
  const [syllabusFiles, setSyllabusFiles] = useState({});
  const [synopsisFiles, setSynopsisFiles] = useState({});
  const [formsFile, setFormsFile] = useState(null);
  const [parentsManualFile, setParentsManualFile] = useState(null);

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
  };

  const handleSyllabusUpload = (e) => {
    const file = e.target.files[0];
    setSyllabusFiles((prevFiles) => ({
      ...prevFiles,
      [selectedGrade]: file,
    }));
  };

  const handleSynopsisUpload = (e) => {
    const file = e.target.files[0];
    setSynopsisFiles((prevFiles) => ({
      ...prevFiles,
      [selectedGrade]: file,
    }));
  };

  const handleFormsUpload = (e) => {
    const file = e.target.files[0];
    setFormsFile(file);
  };

  const handleParentsManualUpload = (e) => {
    const file = e.target.files[0];
    setParentsManualFile(file);
  };

  const handleSyllabusSubmit = (e) => {
    e.preventDefault();
    console.log("Syllabus and Synopsis submitted:", {
      syllabusFiles,
      synopsisFiles,
    });
    setSyllabusFiles({});
    setSynopsisFiles({});
  };

  const handleFormsSubmit = (e) => {
    e.preventDefault();
    console.log("Forms submitted:", {
      formsFile,
    });
    setFormsFile(null);
  };

  const handleParentsManualSubmit = (e) => {
    e.preventDefault();
    console.log("Parents Manual submitted:", {
      parentsManualFile,
    });
    setParentsManualFile(null);
  };

  return (
    <div className="container my-5">
      <div className="card p-4">
        <h2 className="mb-4">Add Documents</h2>

        <hr className="red-line" />
        <hr className="red-line mb-4" />

        {/* Syllabus and Synopsis File Upload */}
        <div className="mb-4">
          <h4>Syllabus and Synopsis Upload</h4>
          <form onSubmit={handleSyllabusSubmit}>
            <div className="mb-3">
              <label className="form-label">Select Grade:</label>
              <select
                className="form-select"
                value={selectedGrade}
                onChange={handleGradeChange}
              >
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <div>
                <label className="form-label">Upload Syllabus:</label>
                <input
                  type="file"
                  className="form-control mb-2"
                  onChange={handleSyllabusUpload}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              <div>
                <label className="form-label">Upload Synopsis:</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleSynopsisUpload}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit Syllabus & Synopsis
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
