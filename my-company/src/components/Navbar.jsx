import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </div>
  );
};

const navbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#4CAF50",
  padding: "10px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};

export default Navbar;
