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
const ROUTE_TEACHERS = "teachers";
const API_URL_TEACHERS = `http://localhost:3000/api/${ROUTE_TEACHERS}`;

const Teachers = () => {
  const [teachers, setTeacher] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const handleEditClick = (e) => {
    console.log("Edit button clicked");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL_TEACHERS}`);
        setTeacher(await response.data);
        setLoading(false);
      } catch (err) {
        setError("something went wrong");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  if (isLoading) {
    return <Container className="mt-4">Loading...</Container>;
  }
  if (error) {
    return (
      <Container className="mt-4">
        <h2>{error}! Please try again.</h2>
        <Button onClick={refreshPage}>REFRESH PAGE</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card border="primary">
            <Card.Header className="text-center">
              <strong>Teachers</strong>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Teacher Name" className="mb-3">
                    <Form.Control type="text" placeholder="Teacher Name" />
                  </FloatingLabel>
                </Form.Group>
                <Button className="btn btn-primary mx-1">Add Teacher</Button>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Teacher</th>
                      <th>Sex</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers &&
                      teachers.map((teacher, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <Form.Group className="m-auto mb-2 w-50">
                                <Form.Control
                                  type="text"
                                  value={teacher.teacher}
                                />
                              </Form.Group>
                            </td>
                            <td>
                              <Form.Group className="m-auto mb-2 w-55">
                                <Form.Select value={teacher.sex}>
                                  <option value="LAKI-LAKI">LAKI-LAKI</option>
                                  <option value="PEREMPUAN">PEREMPUAN</option>
                                </Form.Select>
                              </Form.Group>
                            </td>
                            <td>
                              <>
                                <Button className="btn btn-warning mx-1">
                                  Save
                                </Button>
                                <Button className="btn btn-danger mx-1">
                                  Delete
                                </Button>
                              </>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Teachers;
