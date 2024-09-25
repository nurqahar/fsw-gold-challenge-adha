import React from "react";
import { Nav } from "reactstrap";
import "./Landing.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const LandingPage = () => {
  return (
    <Nav className="nav">
      <Link to="/" className="site-title">
        PERANGKAT AJAR
      </Link>
      <ul>
        <CustomLink to="/teachers">Teachers</CustomLink>
        <CustomLink to="/subjects">Subjects</CustomLink>
        <CustomLink to="/classes">Classes</CustomLink>
        <CustomLink to="/teaching_notes">Teaching Notes</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </Nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default LandingPage;
