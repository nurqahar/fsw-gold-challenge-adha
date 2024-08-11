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
const route = "course";
const apiUrl = `http://localhost:3001/api/${route}`;

const Course = () => {
  const [courses, setCourses] = useState([
    { id: 1, mataPelajaran: "Sistem Kontrol Industri"},
    { id: 2, mataPelajaran: "Sistem Kontrol Elektronik"},
  ]);

  const handleEditClick = (e) => {
    console.log("Edit button clicked");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}`);
        if (!response.ok) throw new Error("Error fetching users");
        const data = await response.json();
        setCourses(data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center">
        <Col md={8} lg={12}>
          <Card className="mt-4">
            {courses.map((course) => {
              return (
                <CardBody>
                  <Row className="justify-content-center align-items-center">
                    <Col md={8}>
                      <h2>Course {course.id}</h2>
                      <CardText>
                        {course.mataPelajaran}
                      </CardText>
                    </Col>
                    <Col md={4} className="text-center">
                      <Button color="primary" onClick={handleEditClick}>
                        Edit Course
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

export default Course;
