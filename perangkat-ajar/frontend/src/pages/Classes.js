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
const route = "classes";
const apiUrl = `http://localhost:3001/api/${route}`;

const Classes = () => {
  const [classes, setClasses] = useState([
    { id: 1, kelas: "X TOI 1" },
    { id: 2, kelas: "X TOI 2" },
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
        setClasses(data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center">
        <Col md={8} lg={12}>
          <Card className="mt-4">
            {classes.map((kelas) => {
              return (
                <CardBody>
                  <Row className="justify-content-center align-items-center">
                    <Col md={8}>
                      <CardTitle tag="h5">Kelas ke-{kelas.id}</CardTitle>
                      <CardText>{kelas.kelas}</CardText>
                    </Col>
                    <Col md={4} className="text-center">
                      <Button color="primary" onClick={handleEditClick}>
                        Edit Class
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

export default Classes;
