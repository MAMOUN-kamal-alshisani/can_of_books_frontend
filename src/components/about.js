import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../css/about.css";
import myImg from "../image/mine.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="about-card-container">
          <Card style={{ width: "20rem" }} className="about-card">
            <Card.Img variant="top" src={myImg} alt="mamoun" />
            <Card.Body>
              <Card.Text>
                <b>Name:</b>Mamoun Al-shishani <br />
                <b>Major:</b>Management Information System <br />
                <b>Profession:</b>SoftWare Developer <br />
                <b>Email:</b>mamoun.bursi@yahoo.com <br />
              </Card.Text>
              <Card.Text>
                <div className="social-media-div">
                  <a
                    href="https://www.linkedin.com/in/mamounalshishani-350277210"
                    target={"_blank"}
                  >
                    {" "}
                    <BsLinkedin className="linkedin-icon" />{" "}
                  </a>
                  <a
                    href="https://github.com/MAMOUN-kamal-alshisani"
                    target={"_blank"}
                  >
                    {" "}
                    <BsGithub className="Github-icon" />{" "}
                  </a>
                  <a
                    href="mailto:mamoun.alshishani@yahoo.com"
                    target={"_blank"}
                  >
                    {" "}
                    <AiTwotoneMail className="my-email" />{" "}
                  </a>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default About;
