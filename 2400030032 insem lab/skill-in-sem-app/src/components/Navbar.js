import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    marginRight: 12,
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? "600" : "400",
  });

  return (
    <nav style={{ padding: "12px", background: "#e0ec37ff" }}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/courses" style={linkStyle}>Courses</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  );
}
