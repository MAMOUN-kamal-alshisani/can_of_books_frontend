import { React, Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "../css/header.css";
import { withAuth0 } from "@auth0/auth0-react";
class Header extends Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <header>
        {/* <Login/> */}
        <div className="react-icons-container">
          <a
            href="https://www.linkedin.com/in/mamounalshishani-350277210"
            target={"_blank"}
            rel="noreferrer" 
          >
          
            <BsLinkedin className="linkedin-icon" />
          </a>
          <a href="https://github.com/MAMOUN-kamal-alshisani" target={"_blank"} rel="noreferrer" >
          
            <BsGithub className="Github-icon" />
          </a>
          <a href="mailto:mamoun.alshishani@yahoo.com" target={"_blank"} rel="noreferrer" >
          
            <AiTwotoneMail className="Github-icon" />
          </a>
        </div>

        <Navbar>
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Profile">profile</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
           
              </Nav>
            </Navbar.Collapse>
          </Container>
         
        </Navbar>
        <div className="header-log-div">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
        
      </header>
    );
  }
}

export default withAuth0(Header);
