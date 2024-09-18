import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  FloatingLabel,
} from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import "./teachingNotes.css";

const routeTeachingNotes = "teaching_notes";
const apiUrlTeachinNotes = `http://localhost:3000/api/${routeTeachingNotes}`;
const routeStudent = "students";
const apiUrlStudent = `http://localhost:3000/api/${routeStudent}`;
const routeClasses = "classes";
const apiUrlClasses = `http://localhost:3000/api/${routeClasses}`;
const routeSubject = "subjects";
const apiUrlCourse = `http://localhost:3000/api/${routeSubject}`;
const routeTeacher = "teachers";
const apiUrlTeacher = `http://localhost:3000/api/${routeTeacher}`;

const TeachingNotes = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teachingNotes, setTeachingNotes] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [inputSearch, setInputSearch] = useState([]);

  const handleEditClick = (e) => {
    console.log("Edit button clicked");
  };

  const searchTeachingNotes = async (event) => {
    event.preventDefault();
    const date = event.target.date.value
    const subjectId = event.target.subject.value
    const classId = event.target.class.value
    const resTeachingNotes = await axios.get(`${apiUrlTeachinNotes}?date=${date}&subject_id=${subjectId}&class_id=${classId}`)
    console.log(resTeachingNotes.data);
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resClasses = await axios.get(`${apiUrlClasses}`);
        const resStudents = await axios.get(`${apiUrlStudent}`);
        const resSubjects = await axios.get(`${apiUrlCourse}`);
        const resTeachers = await axios.get(`${apiUrlTeacher}`);
        const resTeachingNotes = await axios.get(`${apiUrlTeachinNotes}`);

        setTeachingNotes(resTeachingNotes.data);
        setClasses(resClasses.data);
        setStudents(resStudents.data);
        setSubjects(resSubjects.data);
        setTeachers(resTeachers.data);
        setLoading(false);
      } catch (err) {
        setError("something went wrong");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Card border="primary">
            <Card.Header className="text-center">
              <strong>Search Teaching Note</strong>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={searchTeachingNotes}>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Date" className="mb-3">
                    <Form.Control
                      type="date"
                      name="date"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <FloatingLabel label="Class" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Class"
                      name="class"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <FloatingLabel label="Subject" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                    />
                  </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* READ VALUE */}
      <Row className=" justify-content-center mt-5">
        <Col>
          <Card>
            <Card.Body>Teaching Notes</Card.Body>
            <Form>
              <Form.Group className="m-auto mb-3 w-50">
                <FloatingLabel label="Content" className="mb-3">
                  <Form.Control type="text" placeholder="Content" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="m-auto mb-3 w-50">
                <FloatingLabel label="Date" className="mb-3">
                  <Form.Control type="date" placeholder="Date" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="m-auto mb-3 w-50">
                <FloatingLabel label="Time" className="mb-3">
                  <Form.Control type="text" placeholder="Time" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="m-auto mb-3 w-50">
                <FloatingLabel label="Total Content Time" className="mb-3">
                  <Form.Control type="text" placeholder="Total Content Time" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="m-auto mb-3 w-50">
                <FloatingLabel label="School Year" className="mb-3">
                  <Form.Control type="text" placeholder="School Year" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="m-auto mb-3 w-50">
                <FloatingLabel label="Semester" className="mb-3">
                  <Form.Control type="text" placeholder="Semester" />
                </FloatingLabel>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row className=" justify-content-center mt-1">
        <Col>
          <Card>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Presence</th>
                  <th>Notes</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
              {teachingNotes.length !== 0 ? (
                ):("")}
                <tr>
                  <td key={1}>index</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeachingNotes;
