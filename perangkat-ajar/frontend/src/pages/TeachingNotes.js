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
  const [resultSearchClass, setResultSearchClass] = useState();

  const searchTeachingNotes = async (event) => {
    event.preventDefault();

    const resSubjects = await axios.get(`${apiUrlCourse}`);
    const resClasses = await axios.get(`${apiUrlClasses}`);
    const resStudents = await axios.get(`${apiUrlStudent}`);
    setSubjects(resSubjects.data);
    setClasses(resClasses.data);
    setStudents(resStudents.data);

    const date = event.target.date.value;
    // const subjectId = event.target.class.value;
    // const classId = event.target.class.value;
    console.log(event.target.elements);
    console.log(event.target.class.value);

    // const resTeachingNotes = await axios.get(
    // `${apiUrlTeachinNotes}?date=${date}&subject_id=${subjectId}&class_id=${classId}`
    // );
    // setTeachingNotes(resTeachingNotes.data);
  };

  const saveChanges = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resClasses = await axios.get(`${apiUrlClasses}`);
        // const resStudents = await axios.get(`${apiUrlStudent}`);
        const resSubjects = await axios.get(`${apiUrlCourse}`);
        const resTeachers = await axios.get(`${apiUrlTeacher}`);
        // const resTeachingNotes = await axios.get(`${apiUrlTeachinNotes}`);

        // setTeachingNotes(resTeachingNotes.data);
        setClasses(resClasses.data);
        // setStudents(resStudents.data);
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
      {/* SEARCH */}
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
                    <Form.Control type="date" name="date" />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Select name="class">
                    <option>Pilih Kelas</option>
                    <option value="1">X TOI 1</option>
                    <option value="2">X TOI 2</option>
                    <option value="3">XI TOI 1</option>
                    <option value="4">XI TOI 2</option>
                    <option value="5">XII TOI 1</option>
                    <option value="6">XII TOI 2</option>
                  </Form.Select>
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
          {teachingNotes.length !== 0 ? (
            <Card>
              <Card.Body>Teaching Notes</Card.Body>
              <Form onSubmit={saveChanges}>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Class" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Class"
                      value={
                        teachingNotes.length !== 0
                          ? classes[teachingNotes[0].class_id - 1].class
                          : ""
                      }
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Subject" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      value={
                        teachingNotes.length !== 0
                          ? subjects[teachingNotes[0].subject_id - 1].subject
                          : ""
                      }
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Content" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Content"
                      value={
                        teachingNotes.length !== 0
                          ? teachingNotes[0].content
                          : ""
                      }
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Date" className="mb-3">
                    <Form.Control
                      type="date"
                      placeholder="Date"
                      value={
                        teachingNotes.length !== 0
                          ? moment(teachingNotes[0].date).format("YYYY-MM-DD")
                          : ""
                      }
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Time" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Time"
                      value={
                        teachingNotes.length !== 0 ? teachingNotes[0].time : ""
                      }
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Total Content Time" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Total Content Time"
                      value={
                        teachingNotes.length !== 0
                          ? teachingNotes[0].total_content_time
                          : ""
                      }
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="School Year" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="School Year"
                      value={
                        teachingNotes.length !== 0
                          ? teachingNotes[0].school_year
                          : ""
                      }
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Semester" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Semester"
                      value={
                        teachingNotes.length !== 0
                          ? teachingNotes[0].semester
                          : ""
                      }
                    />
                  </FloatingLabel>
                </Form.Group>
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
                    {teachingNotes.length !== 0
                      ? teachingNotes.map((teachingNote, index) => {
                          return (
                            <tr>
                              <td key={index}>{index + 1}</td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-50">
                                  <Form.Control
                                    type="text"
                                    value={students && students[index].student}
                                  />
                                </Form.Group>
                              </td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-60">
                                  <Form.Select>
                                    <option value="HADIR">
                                      {teachingNote.presence}
                                    </option>
                                    <option value="ALPA">ALPA</option>
                                    <option value="SAKIT">SAKIT</option>
                                    <option value="NO DATA">NO DATA</option>
                                  </Form.Select>
                                </Form.Group>
                              </td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-50">
                                  <Form.Control
                                    type="text"
                                    value={teachingNote.notes}
                                  />
                                </Form.Group>
                              </td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-50">
                                  <Form.Control
                                    type="text"
                                    value={teachingNote.grade}
                                  />
                                </Form.Group>
                              </td>
                            </tr>
                          );
                        })
                      : ""}
                  </tbody>
                </Table>
                <Button className="btn btn-warning">Save Changes</Button>
              </Form>
            </Card>
          ) : (
            <Card>
              <Card.Body>Teaching Notes</Card.Body>
              <Form onSubmit={saveChanges}>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Class" className="mb-3">
                    <Form.Control type="text" placeholder="Class" />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Subject" className="mb-3">
                    <Form.Control type="text" placeholder="Subject" />
                  </FloatingLabel>
                </Form.Group>
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
                    <Form.Control
                      type="text"
                      placeholder="Total Content Time"
                    />
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
                    <tr>
                      <td></td>
                      <td>
                        <Form.Group className="m-auto mb-2 w-50">
                          <Form.Control
                            type="text"
                            value={students && students[0].student}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="m-auto mb-2 w-60">
                          <Form.Select>
                            <option value="HADIR">HADIR</option>
                            <option value="ALPA">ALPA</option>
                            <option value="SAKIT">SAKIT</option>
                            <option value="NO DATA">NO DATA</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="m-auto mb-2 w-50">
                          <Form.Control type="text" />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group className="m-auto mb-2 w-50">
                          <Form.Control type="text" />
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Button className="btn btn-warning">Save Changes</Button>
              </Form>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TeachingNotes;
