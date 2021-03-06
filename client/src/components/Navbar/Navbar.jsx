import React, {Component} from "react";
import {Nav, Navbar, Dropdown, Button} from "react-bootstrap";
import "./Navbar.css";
import {Link} from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Logo from "../../assets/logo1.jpeg";

class NavBar extends Component {
  state = {loginOpen: false, signupOpen: false};

  handleLoginOpen = () => {
    this.setState({loginOpen: true});
  };

  handleLoginClose = () => {
    this.setState({loginOpen: false});
  };
  handleSignupOpen = () => {
    this.setState({signupOpen: true});
  };

  handleSignupClose = () => {
    this.setState({signupOpen: false});
  };

  render() {
    return (
      <>
        <div>
          <Navbar bg="info" expand="lg" className="navBar fixed-top">
            <Link to="/">
              <img src={Logo} className="logo-img" />
              <Navbar.Brand className="navbar-brand">artHeist</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-5 mr-auto">
                <Nav.Link className="mb4">
                  <Link to="/userProfile" style={{color: "inherit"}}>
                    Feed
                  </Link>
                </Nav.Link>
                <Link to="/contest" className="contest-link">
                  <Nav.Link href="#contests" to="/contest">
                    Contest
                  </Nav.Link>
                </Link>
                <Nav.Link href="#createContest">Create Contest</Nav.Link>
                <Nav.Link>
                  <Link to="/profileChange" style={{color: "inherit"}}>
                    Artists
                  </Link>
                </Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Link to="/aboutUs">
                      <Dropdown.Item href="aboutUs">About Us</Dropdown.Item>
                    </Link>
                    <Dropdown.Item href="#/action-2">
                      What we do ?
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Creators</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Testimonials
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Contact Us</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <Button
                variant="outline"
                onClick={this.handleSignupOpen}
                className="signUpBtn"
              >
                Sign Up
              </Button>
              <Button
                variant="outline"
                onClick={this.handleLoginOpen}
                className="loginBtn"
              >
                Login
              </Button>
            </Navbar.Collapse>
          </Navbar>
          {this.state.loginOpen ? (
            <Login
              handleClose={this.handleLoginClose}
              openButton={this.state.loginOpen}
            />
          ) : null}
          {this.state.signupOpen ? (
            <Signup
              handleClose={this.handleSignupClose}
              openButton={this.state.signupOpen}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default NavBar;
