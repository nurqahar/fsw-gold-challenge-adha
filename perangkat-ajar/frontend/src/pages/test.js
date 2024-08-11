import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Teacher = () => {
  const [teachers, setTeacher] = useState([
    { id: 1, guru: "John Doe", jenis_kelamin: "Laki-Laki" },
    { id: 2, guru: "Jensen", jenis_kelamin: "Laki-Laki" },
  ]);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...teachers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} lg={4}>
          <h2 className="text-center">Log In</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="teacher">Teacher</Label>
              <Input
                type="teacher"
                name="teacher"
                id="teacher"
                value={form.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit" color="primary" block>
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Teacher;
