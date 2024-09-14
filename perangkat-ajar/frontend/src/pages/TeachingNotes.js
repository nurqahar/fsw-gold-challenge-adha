import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
const routeTeachingNotes = "teaching_notes";
const apiUrl = `http://localhost:3000/api/${routeTeachingNotes}`;
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

  const handleEditClick = (e) => {
    console.log("Edit button clicked");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resClasses = await axios.get(`${apiUrlClasses}`);
        const resStudents = await axios.get(`${apiUrlStudent}`);
        const resSubjects = await axios.get(`${apiUrlCourse}`);
        const resTeachers = await axios.get(`${apiUrlTeacher}`);
        const resTeachingNotes = await axios.get(`${apiUrl}`);

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
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter date" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
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
            <Card.Body className="text-center">Teaching Note</Card.Body>
            <Card.Body>
              {teachingNotes.length !== 0 ? (
                <Card.Text className="d-flex justify-content-between align -items-center">
                  Date: {teachingNotes[0].date} | Subject: {subjects[0].subject} | Teacher: {teachers[0].teacher} | Class: {classes[0].class}
                </Card.Text>
              ) : (
                ""
              )}

              {teachingNotes.length !== 0
                ? teachingNotes.map((teachingNote, index) => {
                    return (
                      <div>
                        <ul>
                          <li className="d-flex justify-content-between align -items-center">
                            Student: {students && students[index].student} |{" "}
                            {teachingNote.presence}
                          </li>
                        </ul>
                      </div>
                    );
                  })
                : ""}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeachingNotes;
