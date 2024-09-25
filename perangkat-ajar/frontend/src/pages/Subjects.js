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
const ROUTE_SUBJECTS = "subjects";
const API_URL_SUBJECTS = `http://localhost:3000/api/${ROUTE_SUBJECTS}`;

const Subjects = () => {
  const [subjects, setSubject] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleEditClick = (e) => {
    console.log("Edit button clicked");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL_SUBJECTS}`);
        setSubject(await response.data);
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
              <strong>Subjects</strong>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <FloatingLabel label="Subject Name" className="mb-3">
                    <Form.Control type="text" placeholder="Subject Name" />
                  </FloatingLabel>
                </Form.Group>
                <Button className="btn btn-primary mx-1">Add Subject</Button>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Subject</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects &&
                      subjects.map((subject, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <Form.Group className="m-auto mb-2 w-60">
                                <Form.Control
                                  type="text"
                                  value={subject.subject}
                                />
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

export default Subjects;
