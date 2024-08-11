import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
const route = "teacher";
const apiUrl = `http://localhost:3001/api/${route}`;

const Teacher = () => {
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
        const response = await fetch(`${apiUrl}`);
        if (!response.ok) throw new Error("Error fetching users");
        const data = await response.json();
        setTeacher(data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center">
        <Col md={8} lg={12}>
          <Card className="mt-4">
            {teachers.map((teacher) => {
              return (
                <CardBody>
                  <Row className="justify-content-center align-items-center">
                    <Col md={8}>
                      <h2>Teacher {teacher.id}</h2>
                      <CardTitle tag="h5">{teacher.guru}</CardTitle>
                      <CardText>
                        Jenis Kelamin: {teacher.jenis_kelamin}
                      </CardText>
                    </Col>
                    <Col md={4} className="text-center">
                      <Button color="primary" onClick={handleEditClick}>
                        Edit Teacher
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

export default Teacher;
