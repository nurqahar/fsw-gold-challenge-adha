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
const route = "teaching_notes";
const apiUrl = `http://localhost:3001/api/${route}`;
const routeStudent = "student";
const apiUrlStudent = `http://localhost:3001/api/${routeStudent}`;
const routeClasses = "classes";
const apiUrlClasses = `http://localhost:3001/api/${routeClasses}`;
const routeCourse = "course";
const apiUrlCourse = `http://localhost:3001/api/${routeCourse}`;
const routeTeacher = "teacher";
const apiUrlTeacher = `http://localhost:3001/api/${routeTeacher}`;

const TeachingNotes = () => {
  const [students, setStudent] = useState([
    { id: 1, siswa: "Johned", jenis_kelamin: "Laki-laki", kelas_id: "1" },
    { id: 2, siswa: "Jensen", jenis_kelamin: "Laki-laki", kelas_id: "2" },
  ]);

  const [classes, setClasses] = useState([
    { id: 1, kelas: "X TOI 1" },
    { id: 2, kelas: "X TOI 2" },
  ]);

  const [courses, setCourses] = useState([
    { id: 1, mataPelajaran: "Sistem Kontrol Industri" },
    { id: 2, mataPelajaran: "Sistem Kontrol Elektronik" },
  ]);

  const [teachingNotes, setTeachingNotes] = useState([
    {
      id: 1,
      presensi: "HADIR",
      materi: "PLC",
      catatan: "baik",
      jam: "07:00",
      jumlah_jp: "5 jp",
      tanggal: "22-Agustus-2024",
      tahun_ajaran: "2024/2025",
      semester: "1",
      nilai: " ",
      siswa_id: "Johned",
      kelas_id: "X TOI 1",
      guru_id: "john",
      mata_pelajaran_id: "Sistem Kontrol Industri",
    },
    {
      id: 2,
      presensi: "HADIR",
      materi: "PLC",
      catatan: "baik",
      jam: "07:00",
      jumlah_jp: "5 jp",
      tanggal: "22-Agustus-2024",
      tahun_ajaran: "2024/2025",
      semester: "1",
      nilai: " ",
      siswa_id: "Jensen",
      kelas_id: "X TOI 2",
      guru_id: "john",
      mata_pelajaran_id: "Sistem Kontrol Elektronik",
    },
  ]);

  const [teachers, setTeacher] = useState([
    { id: 1, guru: "John Doe", jenis_kelamin: "Laki-Laki" },
    { id: 2, guru: "Jensen", jenis_kelamin: "Laki-Laki" },
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
                      <h2>Catatan Mengajar</h2>
                      <CardText>Siswa: {students[index].siswa} | {teachingNote.presensi}</CardText>
                      <CardText>Kelas: {classes[index].kelas}</CardText>
                      <CardText>Mapel: {courses[index].mataPelajaran}</CardText>
                      <CardText>Materi: {teachingNote.materi}</CardText>
                      <CardText>Guru: {teachers[index].guru}</CardText>
                      <CardText>{teachingNote.tanggal}</CardText>
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
