import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import "./styles.css";
import Navbar from "./Navbar,jsx";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      <Link
        style={{ margin: "10px", color: "white", textDecoration: "none" }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{ margin: "10px", color: "white", textDecoration: "none" }}
        to="/about"
      >
        About
      </Link>
      <Link
        style={{ margin: "10px", color: "white", textDecoration: "none" }}
        to="/services"
      >
        Services
      </Link>
      <Link
        style={{ margin: "10px", color: "white", textDecoration: "none" }}
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
