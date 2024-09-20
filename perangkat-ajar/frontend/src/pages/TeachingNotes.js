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
const API_URL_TEACHING_NOTES = `http://localhost:3000/api/${routeTeachingNotes}`;
const ROUTE_STUDENTS = "students";
const API_URL_STUDENTS = `http://localhost:3000/api/${ROUTE_STUDENTS}`;
const ROUTE_CLASSES = "classes";
const API_URL_CLASSES = `http://localhost:3000/api/${ROUTE_CLASSES}`;
const ROUTE_SUBJECTS = "subjects";
const API_URL_SUBJECTS = `http://localhost:3000/api/${ROUTE_SUBJECTS}`;
const ROUTE_TEACHERS = "teachers";
const API_URL_TEACHERS = `http://localhost:3000/api/${ROUTE_TEACHERS}`;

const TeachingNotes = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teachingNotes, setTeachingNotes] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isSearch, setSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState(null);

  const searchTeachingNotes = async (event) => {
    event.preventDefault();
    try {
      setSearch(true);
      const date = event.target.date.value;
      const classId = event.target.class.value;
      const subjectId = event.target.subject.value;
      const teacherId = event.target.teacher.value;
      setValueSearch({
        date: date,
        classId: classId,
        subjectId: subjectId,
        teacherId: teacherId,
      });

      const resTeachingNotes = await axios.get(
        `${API_URL_TEACHING_NOTES}?date=${date}&subject_id=${subjectId}&class_id=${classId}&teacher_id=${teacherId}`
      );
      setTeachingNotes(resTeachingNotes.data);

      const resStudents = await axios.get(
        `${API_URL_STUDENTS}?class_id=${classId}`
      );
      setStudents(resStudents.data);

      setLoading(false);
    } catch (error) {
      setError("something went wrong");
      setLoading(false);
    }
  };

  const saveChanges = async (event) => {
    event.preventDefault();
    let teacherId = 0;
    let classId = 0;
    let subjectId = 0;
    let studentId = 0;
    let presence = "";
    let notes = "";
    let grade = 0;
    teachers.map((teacher) => {
      if (
        teacher.teacher.toLowerCase() ===
        event.target.elements[0].value.toLowerCase()
      ) {
        teacherId = teacher.id;
      }
      return teacherId;
    });
    classes.map((class_result) => {
      if (
        class_result.class.toLowerCase() ===
        event.target.elements[1].value.toLowerCase()
      ) {
        classId = class_result.id;
      }
      return classId;
    });
    subjects.map((subject) => {
      if (
        subject.subject.toLowerCase() ===
        event.target.elements[2].value.toLowerCase()
      ) {
        subjectId = subject.id;
      }
      return subjectId;
    });

    const content = event.target.elements[3].value;
    const date = event.target.elements[4].value;
    const time = event.target.elements[5].value;
    const total_content_time = event.target.elements[6].value;
    const school_year = event.target.elements[7].value;
    const semester = event.target.elements[8].value;
    let teachingNotesData = [];

    for (
      let index = 9;
      index < event.target.elements.length - 10 / 4;
      index += 4
    ) {
      students.map((student) => {
        if (
          student.student.toLowerCase() ===
          event.target.elements[index].value.toLowerCase()
        ) {
          studentId = student.id;
        }
        return studentId;
      });
      presence = event.target.elements[index + 1].value;
      notes = event.target.elements[index + 2].value;
      grade = event.target.elements[index + 3].value;

      await axios.post(
        `${API_URL_TEACHING_NOTES}/${subjectId}/${teacherId}/${classId}/${studentId}`,
        {
          presence: presence,
          content: content,
          notes: notes,
          time: time,
          total_content_time: total_content_time,
          date: date,
          school_year: school_year,
          semester: semester,
          grade: grade,
        }
      );
    }
  };

  const save = async (event) => {
    event.preventDefault();
    let teacherId = 0;
    let classId = 0;
    let subjectId = 0;
    let studentId = 0;
    let presence = "";
    let notes = "";
    let grade = 0;
    teachers.map((teacher) => {
      if (
        teacher.teacher.toLowerCase() ===
        event.target.elements[0].value.toLowerCase()
      ) {
        teacherId = teacher.id;
      }
      return teacherId;
    });
    classes.map((class_result) => {
      if (
        class_result.class.toLowerCase() ===
        event.target.elements[1].value.toLowerCase()
      ) {
        classId = class_result.id;
      }
      return classId;
    });
    subjects.map((subject) => {
      if (
        subject.subject.toLowerCase() ===
        event.target.elements[2].value.toLowerCase()
      ) {
        subjectId = subject.id;
      }
      return subjectId;
    });

    const content = event.target.elements[3].value;
    const date = event.target.elements[4].value;
    const time = event.target.elements[5].value;
    const total_content_time = event.target.elements[6].value;
    const school_year = event.target.elements[7].value;
    const semester = event.target.elements[8].value;
    let teachingNotesData = [];

    for (
      let index = 9;
      index < event.target.elements.length - 10 / 4;
      index += 4
    ) {
      students.map((student) => {
        if (
          student.student.toLowerCase() ===
          event.target.elements[index].value.toLowerCase()
        ) {
          studentId = student.id;
        }
        return studentId;
      });
      presence = event.target.elements[index + 1].value;
      notes = event.target.elements[index + 2].value;
      grade = event.target.elements[index + 3].value;

      await axios.post(
        `${API_URL_TEACHING_NOTES}/${subjectId}/${teacherId}/${classId}/${studentId}`,
        {
          presence: presence,
          content: content,
          notes: notes,
          time: time,
          total_content_time: total_content_time,
          date: date,
          school_year: school_year,
          semester: semester,
          grade: grade,
        }
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resClasses = await axios.get(`${API_URL_CLASSES}`);
        const resSubjects = await axios.get(`${API_URL_SUBJECTS}`);
        const resTeachers = await axios.get(`${API_URL_TEACHERS}`);
        // const resStudents = await axios.get(`${API_URL_STUDENTS}`);
        // setStudents(resStudents.data);
        setClasses(resClasses.data);
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

  if (isLoading) {
    return <Container className="mt-4">Loading...</Container>;
  }

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
                    <option>Choose Class</option>
                    {classes &&
                      classes.map((class_name) => {
                        return (
                          <option key={class_name.id} value={class_name.id}>
                            {class_name.class}
                          </option>
                        );
                      })}
                    ;
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select name="subject">
                    <option>Choose Subject</option>
                    {subjects &&
                      subjects.map((subject) => {
                        return (
                          <option key={subject.id} value={subject.id}>
                            {subject.subject}
                          </option>
                        );
                      })}
                    ;
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select name="teacher">
                    <option>Choose Teacher</option>
                    {teachers &&
                      teachers.map((teacher) => {
                        return (
                          <option key={teacher.id} value={teacher.id}>
                            {teacher.teacher}
                          </option>
                        );
                      })}
                    ;
                  </Form.Select>
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
          {/* IF TRUE */}
          {isSearch ? (
            <Card>
              <Card.Body>Teaching Notes</Card.Body>
              <Form onSubmit={teachingNotes.length !== 0 ? saveChanges : save}>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Teacher" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Teacher"
                      value={
                        teachingNotes.length !== 0
                          ? teachers[teachingNotes[0].teacher_id - 1].teacher
                          : teachers[valueSearch.teacherId - 1].teacher
                      }
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Class" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Class"
                      value={
                        teachingNotes.length !== 0
                          ? classes[teachingNotes[0].class_id - 1].class
                          : classes[valueSearch.classId - 1].class
                      }
                      defaultValue={null}
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
                          : subjects[valueSearch.subjectId - 1].subject
                      }
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Content" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Content"
                      {...(teachingNotes.length !== 0
                        ? `value=${teachingNotes[0].content}`
                        : "")}
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
                          : valueSearch.date
                      }
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Time" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Time"
                      {...(teachingNotes.length !== 0
                        ? `value=${teachingNotes[0].time}`
                        : "")}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Total Content Time" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Total Content Time"
                      {...(teachingNotes.length !== 0
                        ? `value=${teachingNotes[0].total_content_time}`
                        : "")}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="School Year" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="School Year"
                      value={teachingNotes.length !== 0
                        ? `${teachingNotes[0].school_year}`
                        : null}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Semester" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Semester"
                      {...(teachingNotes.length !== 0
                        ? `value=${teachingNotes[0].semester}`
                        : "")}
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
                    {/* if true TABLE */}
                    {teachingNotes.length !== 0 && students.length !== 0
                      ? teachingNotes.map((teachingNote, teachingNoteIndex) => {
                          return (
                            <tr>
                              <td key={teachingNoteIndex + 1}>
                                {teachingNoteIndex + 1}
                              </td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-50">
                                  <Form.Control
                                    type="text"
                                    name={`student${teachingNoteIndex + 1}`}
                                    value={
                                      students &&
                                      students[teachingNoteIndex].student
                                    }
                                  />
                                </Form.Group>
                              </td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-60">
                                  <Form.Select
                                    name={`presence${teachingNoteIndex + 1}`}
                                  >
                                    <option value="HADIR">
                                      {teachingNote.presence || "HADIR"}
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
                                    name={`notes${teachingNoteIndex + 1}`}
                                    value={teachingNote.notes || ""}
                                  />
                                </Form.Group>
                              </td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-50">
                                  <Form.Control
                                    type="text"
                                    name={`grade${teachingNoteIndex + 1}`}
                                    value={teachingNote.grade || ""}
                                  />
                                </Form.Group>
                              </td>
                            </tr>
                          );
                        })
                      : students.map((student, studentIndex) => {
                          return (
                            <tr>
                              <td key={studentIndex + 1}>{studentIndex + 1}</td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-50">
                                  <Form.Control
                                    type="text"
                                    // name={`student${studentIndex + 1}`}
                                    value={student.student}
                                  />
                                </Form.Group>
                              </td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-60">
                                  <Form.Select
                                  // name={`presence${studentIndex + 1}`}
                                  >
                                    <option value="HADIR">HADIR</option>
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
                                    // name={`notes${studentIndex + 1}`}
                                  />
                                </Form.Group>
                              </td>
                              <td>
                                <Form.Group className="m-auto mb-2 w-50">
                                  <Form.Control
                                    type="text"
                                    // name={`grade${studentIndex + 1}`}
                                  />
                                </Form.Group>
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </Table>
                {/* button */}
                {teachingNotes.length !== 0 ? (
                  <>
                    <Button className="btn btn-warning" type="submit">
                      Save Changes
                    </Button>
                    <Button className="mx-3 btn btn-danger" type="submit">
                      Delete
                    </Button>
                  </>
                ) : (
                  <Button className="btn btn-primary" type="submit">
                    Save
                  </Button>
                )}
              </Form>
            </Card>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TeachingNotes;
