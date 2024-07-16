import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Button,
  Table,
  Alert,
  Spinner,
  Modal,
} from "react-bootstrap";

const StudentSearch = () => {
  const [board, setBoard] = useState("");
  const [grade, setGrade] = useState("");
  const [div, setDiv] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editStudent, setEditStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/students/${board}/${grade}/${div}`
      );
      setStudents(response.data);
    } catch (err) {
      setError("Error fetching student data");
    } finally {
      setLoading(false);
    }
  };

  // Handle the edit button click
  const handleEditClick = (student) => {
    setEditStudent(student);
    setShowModal(true);
  };

  // Handle the save button click
  const handleSaveClick = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/students/${editStudent._id}`,
        editStudent
      );
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student._id === editStudent._id ? editStudent : student
        )
      );
      setShowModal(false);
      setEditStudent(null);
    } catch (err) {
      setError("Error updating student data");
    }
  };

  // Handle input changes for the student being edited
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  return (
    <Container className="my-5 card p-4 col-lg-10">
      <h2 className="mb-4">Search Students</h2>
      <hr className="red-line" />
      <hr className="red-line" />

      <Form onSubmit={handleSearch} className="my-4">
        <Form.Group controlId="board">
          <Form.Label>Board</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter board"
            value={board}
            onChange={(e) => setBoard(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="grade">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="div">
          <Form.Label>Div</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter division"
            value={div}
            onChange={(e) => setDiv(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          View Students
        </Button>
      </Form>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      {students.length > 0 && (
        <Table striped bordered hover responsive>
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>Board</th>
              <th>Grade</th>
              <th>Div</th>
              <th>Application No</th>
              <th>Enrollment No</th>
              <th>Date of Birth</th>
              <th>Blood Group</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.board}</td>
                <td>{student.grade}</td>
                <td>{student.div}</td>
                <td>{student.applicationNo}</td>
                <td>{student.enrollmentNo}</td>
                <td>{new Date(student.dateOfBirth).toLocaleDateString()}</td>
                <td>{student.bloodGroup}</td>
                <td>{student.gender}</td>
                <td>
                  <Button
                    variant="warning"
                    className="btn-sm px-4"
                    onClick={() => handleEditClick(student)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal for editing student */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editStudent && (
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={editStudent.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formBoard">
                <Form.Label>Board</Form.Label>
                <Form.Control
                  type="text"
                  name="board"
                  value={editStudent.board}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formGrade">
                <Form.Label>Grade</Form.Label>
                <Form.Control
                  type="text"
                  name="grade"
                  value={editStudent.grade}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formDiv">
                <Form.Label>Div</Form.Label>
                <Form.Control
                  type="text"
                  name="div"
                  value={editStudent.div}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default StudentSearch;
