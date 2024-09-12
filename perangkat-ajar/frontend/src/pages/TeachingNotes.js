import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardText,
} from "reactstrap";
const routeTeachingNotes = "teaching_notes";
const apiUrl = `http://localhost:3001/api/${routeTeachingNotes}`;
const routeStudent = "students";
const apiUrlStudent = `http://localhost:3001/api/${routeStudent}`;
const routeClasses = "classes";
const apiUrlClasses = `http://localhost:3001/api/${routeClasses}`;
const routeSubject = "subjects";
const apiUrlCourse = `http://localhost:3001/api/${routeSubject}`;
const routeTeacher = "teachers";
const apiUrlTeacher = `http://localhost:3001/api/${routeTeacher}`;

const TeachingNotes = () => {
  const [students, setStudent] = useState([
    { id: 1, student: "Johned", sex: "Laki-laki", class_id: "1" },
    { id: 2, student: "Jensen", sex: "Laki-laki", class_id: "2" },
  ]);

  const [classes, setClasses] = useState([
    { id: 1, class: "X TOI 1" },
    { id: 2, class: "X TOI 2" },
  ]);

  const [courses, setCourses] = useState([
    { id: 1, subject: "Sistem Kontrol Industri" },
    { id: 2, subject: "Sistem Kontrol Elektronik" },
  ]);

  const [teachingNotes, setTeachingNotes] = useState([
    {
      id: 1,
      presence: "HADIR",
      content: "PLC",
      notes: "baik",
      time: "07:00",
      total_content_time: "5 jp",
      date: "22-Agustus-2024",
      school_year: "2024/2025",
      semester: "1",
      grade: " ",
      student_id: "Johned",
      class_id: "X TOI 1",
      teacher_id: "john",
      subject_id: "Sistem Kontrol Industri",
    },
    {
      id: 2,
      presence: "HADIR",
      content: "PLC",
      notes: "baik",
      time: "07:00",
      total_content_time: "5 jp",
      date: "22-Agustus-2024",
      school_year: "2024/2025",
      semester: "1",
      grade: " ",
      student_id: "Jensen",
      class_id: "X TOI 2",
      teacher_id: "john",
      subject_id: "Sistem Kontrol Elektronik",
    },
  ]);

  const [teachers, setTeacher] = useState([
    { id: 1, teacher: "John Doe", sex: "Laki-Laki" },
    { id: 2, teacher: "Jensen", sex: "Laki-Laki" },
  ]);

  const handleEditClick = (e) => {
    console.log("Edit button clicked");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseClasses = await fetch(`${apiUrlClasses}`);
        if (!responseClasses.ok) throw new Error("Error fetching users");
        const dataClasses = await responseClasses.json();

        const responseStudent = await fetch(`${apiUrlStudent}`);
        if (!responseStudent.ok) throw new Error("Error fetching users");
        const dataStudent = await responseStudent.json();

        const responseCourse = await fetch(`${apiUrlCourse}`);
        if (!responseCourse.ok) throw new Error("Error fetching users");
        const dataCourse = await responseCourse.json();

        const responseTeacher = await fetch(`${apiUrlTeacher}`);
        if (!responseTeacher.ok) throw new Error("Error fetching users");
        const dataTeacher = await responseTeacher.json();

        const response = await fetch(`${apiUrl}`);
        if (!response.ok) throw new Error("Error fetching users");
        const data = await response.json();

        setTeachingNotes(data);
        setStudent(dataStudent);
        setCourses(dataCourse);
        setClasses(dataClasses);
        setTeacher(dataTeacher);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center">
        <Col md={8} lg={12}>
          <Card className="mt-4">
            {teachingNotes.map((teachingNote, index) => {
              return (
                <CardBody>
                  <Row className="justify-content-center align-items-center">
                    <Col md={8}>
                      <h2>Teaching Notes</h2>
                      <CardText>
                        Student: {students[index].student} |{" "}
                        {teachingNote.presence}
                      </CardText>
                      <CardText>Class: {classes[index].class}</CardText>
                      <CardText>Subject: {courses[index].subject}</CardText>
                      <CardText>Content: {teachingNote.content}</CardText>
                      <CardText>Teacher: {teachers[index].teacher}</CardText>
                      <CardText>{teachingNote.date}</CardText>
                    </Col>
                    <Col md={4} className="text-center">
                      <Button color="primary" onClick={handleEditClick}>
                        Edit Teaching Note
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              );
            })}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeachingNotes;
