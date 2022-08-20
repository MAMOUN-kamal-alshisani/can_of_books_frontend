import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import '../css/login.css'
// import './Login.css';
import LoginButton from "./LoginButton";

class Login extends React.Component {
  render() {
    return (
      <div className="login-card-div">
    <Card style={{ width: "18rem" }} className='login-card'>
        <Card.Body>
          <Card.Title style={{color:'white'}}>Log In</Card.Title>
          <Card.Text style={{color:'white'}}>Click Below to LogIn</Card.Text>
          <LoginButton  />
        </Card.Body>
      </Card>
      </div>
  
    );
  }
}

export default Login;
