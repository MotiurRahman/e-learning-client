import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthUserContext } from "../../Context/AuthContext";
import { Image } from "react-bootstrap";

const Header = () => {
  const themeChange = () => {};
  const { user, logout } = useContext(AuthUserContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="text-decoration-none" to="/">
              <img
                alt=""
                src="/logo.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <span className="text-light ms-2">E-React</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navLinks">
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Courses
              </NavLink>
              <NavLink to="/faq">FAQ</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </Nav>
            <Nav className="navLinks">
              <NavLink to="/lear-react">
                Start Learnning React {user ? "with " + user.displayName : ""}
              </NavLink>
              <NavLink>
                <button className="btn btn-dark" onClick={themeChange}>
                  Toggle Dark/Light Mode
                </button>
              </NavLink>
              {user ? (
                <>
                  <NavLink onClick={logout}>Logout</NavLink>
                  <NavLink to="/profile">
                    <Image
                      rounded
                      roundedCircle
                      style={{ height: "40px" }}
                      src={user?.photoURL}
                      alt="Profile Image"
                    ></Image>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/registration">Registration</NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
