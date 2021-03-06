import React from "react";
import {connect} from "react-redux";
import {Form, Button, Image, Container, Row, Col} from "react-bootstrap";
import "./SignUpPage.scss";

class SignUpPage extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "#1B1C1D"}}>
        <Container>
          <br />
          <h1 style={{color: "white"}}>Additional Details</h1>
          <div
            style={{display: "flex", justifyContent: "center", height: "20vh"}}
          >
            <Image
              src={user.avatar}
              roundedCircle
              style={{maxHeight: "100%"}}
            />
            <br />
          </div>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  placeholder={user.name.trim().split(" ")[0].toUpperCase()}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="Last Name"
                  required
                  defaultValue={user.name.trim().split(" ")[1].toUpperCase()}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Username" required />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridAboutMe">
                <Form.Label>About Me</Form.Label>
                <Form.Control as="textarea" placeholder="About Me" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridInstaId">
                <Form.Label>Instagram Id</Form.Label>
                <Form.Control placeholder="Instagram Id" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="String"
                  required
                  placeholder="Phone Number"
                  defaultValue={
                    user.mobile_number !== null && user.mobile_number
                  }
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.File
                  size="lg"
                  id="exampleFormControlFile1"
                  label="Change Profile Image"
                  style={{color: "white"}}
                />
              </Form.Group>
            </Form.Row>
            <div style={{display: "flex", justifyContent: "center"}}>
              <Button variant="primary" type="submit" size="lg">
                Sign Up
              </Button>
            </div>
          </Form>
          <br />
          <br />
          <br />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.auth,
});

export default connect(mapStateToProps)(SignUpPage);
