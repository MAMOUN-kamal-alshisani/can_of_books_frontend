import React, { Component } from "react";
import "./App.css";
import BestBooks from "./components/BestBooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import Profile from './components/Profile';
import { withAuth0 } from "@auth0/auth0-react";
import Header from "./components/header";
import About from "./components/about";
import Profile from "./components/profile";
import Footer from "./components/footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <BestBooks /> : <Login />}
            />

            <Route path="/About" element={<About />} />

            <Route path="/Profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
