import React from "react";
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

const Profile = () => {
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
  };

  const handleEditClick = (e) => {
    // this func. can be used to trigger any desired action when the edit profile is cliced
    console.log("Edit button clicked");
  };

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center">
        <Col md={8} lg={12}>
          <Card className="mt-4">
            <CardBody>
              <Row className="justify-content-center align-items-center">
                <Col md={4} className="text-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="img-thumnbail mb-3"
                  />
                  <Button color="primary" onClick={handleEditClick}>
                    Edit Profile
                  </Button>
                </Col>
                <Col md={8}>
                  <CardTitle tag="h5">{profile.name}</CardTitle>
                  <CardText>Email: {profile.email}</CardText>
                  <CardText>Bio: {profile.bio}</CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
