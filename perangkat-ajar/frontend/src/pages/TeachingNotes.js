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
  const [studentsDB, setStudentsDB] = useState([]);
  const [classesDB, setClassesDB] = useState([]);
  const [subjectsDB, setSubjectsDB] = useState([]);
  const [teachingNotesDB, setTeachingNotesDB] = useState([]);
  const [teachersDB, setTeachersDB] = useState([]);
  const [isSearch, setSearch] = useState(false);
  const [teachingNotes, setTeachingNotes] = useState();
  const [valueSearch, setValueSearch] = useState();
  const [students, setStudents] = useState([]);

  const onChangeStudent = (event) => {
    console.log(event);
    const studentEdit = event.student;
    const studentSex = students[event.index].sex;
    const updatedStudent = students.map((student, studentIndex) => {
      const studentDef = students[studentIndex].student;
      const studentId = students[studentIndex].id;
      if (studentIndex === event.index) {
        return { id: studentId, student: studentEdit, sex: studentSex };
      } else {
        return { id: studentId, student: studentDef, sex: studentSex };
      }
    });

    console.log("--1", updatedStudent);
    setStudents(updatedStudent);
  };

  const onChangeValue = (event) => {
    setTeachingNotes({
      date: event.date,
      class: event.class,
      subject: event.subject,
      teacher: event.teacher,
      content: event.content,
      time: event.time,
      total_content_time: event.total_content_time,
      school_year: event.school_year,
      semester: event.semester,
    });
  };

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

      const resTeachingNotesDB = await axios.get(
        `${API_URL_TEACHING_NOTES}?date=${date}&subject_id=${subjectId}&class_id=${classId}&teacher_id=${teacherId}`
      );
      setTeachingNotesDB(resTeachingNotesDB.data);

      const resStudents = await axios.get(
        `${API_URL_STUDENTS}?class_id=${classId}`
      );
      setStudentsDB(resStudents.data);

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
    teachersDB.map((teacher) => {
      if (
        teacher.teacher.toLowerCase() ===
        event.target.elements[0].value.toLowerCase()
      ) {
        teacherId = teacher.id;
      }
      return teacherId;
    });
    classesDB.map((class_result) => {
      if (
        class_result.class.toLowerCase() ===
        event.target.elements[1].value.toLowerCase()
      ) {
        classId = class_result.id;
      }
      return classId;
    });
    subjectsDB.map((subject) => {
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
      studentsDB.map((student) => {
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
    teachersDB.map((teacher) => {
      if (
        teacher.teacher.toLowerCase() ===
        event.target.elements[0].value.toLowerCase()
      ) {
        teacherId = teacher.id;
      }
      return teacherId;
    });
    classesDB.map((class_result) => {
      if (
        class_result.class.toLowerCase() ===
        event.target.elements[1].value.toLowerCase()
      ) {
        classId = class_result.id;
      }
      return classId;
    });
    subjectsDB.map((subject) => {
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

    for (
      let index = 9;
      index < event.target.elements.length - 10 / 4;
      index += 4
    ) {
      studentsDB.map((student) => {
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

      // await axios.post(
      //   `${API_URL_TEACHING_NOTES}/${subjectId}/${teacherId}/${classId}/${studentId}`,
      //   {
      //     presence: presence,
      //     content: content,
      //     notes: notes,
      //     time: time,
      //     total_content_time: total_content_time,
      //     date: date,
      //     school_year: school_year,
      //     semester: semester,
      //     grade: grade,
      //   }
      // );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resClasses = await axios.get(`${API_URL_CLASSES}`);
        const resSubjects = await axios.get(`${API_URL_SUBJECTS}`);
        const resTeachers = await axios.get(`${API_URL_TEACHERS}`);
        setClassesDB(resClasses.data);
        setSubjectsDB(resSubjects.data);
        setTeachersDB(resTeachers.data);

        setLoading(false);
      } catch (err) {
        setError("something went wrong");
        setLoading(false);
      }
    };

    const setResultData = () => {
      setLoading(true);

      try {
        if (teachingNotesDB.length !== 0) {
          setTeachingNotes({
            date: moment(teachingNotesDB[0].date).format("YYYY-MM-DD"),
            class: classesDB[teachingNotesDB[0].class_id - 1].class,
            subject: subjectsDB[teachingNotesDB[0].subject_id - 1].subject,
            teacher: teachersDB[teachingNotesDB[0].teacher_id - 1].teacher,
            content: teachingNotesDB[0].content,
            time: teachingNotesDB[0].time,
            total_content_time: teachingNotesDB[0].total_content_time,
            school_year: teachingNotesDB[0].school_year,
            semester: teachingNotesDB[0].semester,
          });
        }
        if (valueSearch && teachingNotesDB.length == 0) {
          setTeachingNotes({
            date: valueSearch.date,
            class: classesDB[valueSearch.classId].class,
            subject: subjectsDB[valueSearch.subjectId].subject,
            teacher: teachersDB[valueSearch.teacherId].teacher,
            content: "",
            time: "",
            total_content_time: "",
            school_year: "",
            semester: "",
          });
        }

        if (studentsDB) {
          console.log(students);
        }
        setLoading(false);
      } catch (error) {
        setError("something went wrong");
        setLoading(false);
      }
    };

    fetchData();
    setResultData();
  }, [teachingNotesDB, studentsDB]);

  if (isLoading) {
    return <Container className="mt-4">Loading...</Container>;
  }
  if (error) {
    return <Container className="mt-4">{error}! Please try again.</Container>;
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
                    {classesDB &&
                      classesDB.map((class_name) => {
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
                    {subjectsDB &&
                      subjectsDB.map((subject) => {
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
                    {teachersDB &&
                      teachersDB.map((teacher) => {
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
              <Form
                onSubmit={teachingNotesDB.length !== 0 ? saveChanges : save}
              >
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Teacher" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Teacher"
                      value={teachingNotes && teachingNotes.teacher}
                      onChange={(e) => {
                        onChangeValue({
                          ...teachingNotes,
                          teacher: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Class" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Class"
                      value={teachingNotes && teachingNotes.class}
                      onChange={(e) => {
                        onChangeValue({
                          ...teachingNotes,
                          class: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Subject" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      value={teachingNotes && teachingNotes.subject}
                      onChange={(e) => {
                        onChangeValue({
                          ...teachingNotes,
                          subject: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Content" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Content"
                      value={teachingNotes && teachingNotes.content}
                      onChange={(e) => {
                        onChangeValue({
                          ...teachingNotes,
                          content: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Date" className="mb-3">
                    <Form.Control
                      type="date"
                      placeholder="Date"
                      value={teachingNotes && teachingNotes.date}
                      onChange={(e) => {
                        onChangeValue({
                          ...teachingNotes,
                          date: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Time" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Time"
                      value={teachingNotes && teachingNotes.time}
                      onChange={(e) => {
                        onChangeValue({
                          ...teachingNotes,
                          time: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Total Content Time" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Total Content Time"
                      value={teachingNotes && teachingNotes.total_content_time}
                      onChange={(e) => {
                        onChangeValue({
                          ...teachingNotes,
                          total_content_time: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="School Year" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="School Year"
                      value={teachingNotes && teachingNotes.school_year}
                      onChange={(e) => {
                        onChangeValue({
                          ...teachingNotes,
                          school_year: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="m-auto mb-3 w-50">
                  <FloatingLabel label="Semester" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Semester"
                      value={teachingNotes && teachingNotes.semester}
                      onChange={(e) => {
                        onChangeValue({
                          ...teachingNotes,
                          semester: e.target.value,
                        });
                      }}
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
                    {students.length !== 0 &&
                      students.map((student, studentIndex) => {
                        return (
                          <tr>
                            <td></td>
                            <td>
                              <Form.Group className="m-auto mb-2 w-50">
                                <Form.Control
                                  type="text"
                                  value={student.student}
                                  onChange={(e) => {
                                    onChangeStudent({
                                      index: studentIndex,
                                      student: e.target.value,
                                    });
                                  }}
                                />
                              </Form.Group>
                            </td>
                            <td>
                              <Form.Group className="m-auto mb-2 w-60">
                                <Form.Select
                                  // name={`presence${teachingNoteIndex + 1}`}

                                  onChange={(e) => {
                                    onChangeStudent({
                                      presence: e.target.value,
                                    });
                                  }}
                                >
                                  <option value="HADIR"></option>
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
                                  // name={`notes${teachingNoteIndex + 1}`}
                                />
                              </Form.Group>
                            </td>
                            <td>
                              <Form.Group className="m-auto mb-2 w-50">
                                <Form.Control
                                  type="text"
                                  // name={`grade${teachingNoteIndex + 1}`}
                                />
                              </Form.Group>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
                {/* button */}
                {teachingNotesDB.length !== 0 ? (
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
