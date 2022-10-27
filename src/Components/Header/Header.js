import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthUserContext } from "../../Context/AuthContext";
import { Col, Image } from "react-bootstrap";
import LeftSidebar from "../../Pages/LeftSideBar/LeftSidebar";

const Header = () => {
  const { user, logout, themeColor, setThemeColor } =
    useContext(AuthUserContext);

  // Handle Toggle Button for theme
  const handleThemeChange = (e) => {
    if (e.target.value == "dark") {
      setThemeColor("dark");
    } else {
      setThemeColor("light");
    }
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg={themeColor} variant="dark">
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
              <span className="ms-2">E-Learning</span>
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
              <Link>{user ? "Welcome Mr." + user.displayName : ""}</Link>
              <div
                className="btn-group my-2 px-3"
                role="group"
                onChange={handleThemeChange}
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnDark"
                  value="dark"
                  autocomplete="off"
                />
                <label
                  className="btn btn-outline-primary m-auto"
                  htmlFor="btnDark"
                >
                  Drak Mode
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnLight"
                  value="light"
                  autocomplete="off"
                />
                <label
                  className="btn btn-outline-primary m-auto"
                  htmlFor="btnLight"
                >
                  Light Mode
                </label>
              </div>
              {user ? (
                <>
                  <NavLink className="my-2 mx-3" onClick={logout}>
                    Logout
                  </NavLink>
                  <NavLink to="/profile">
                    <Image
                      rounded
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title={user?.displayName}
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
            <Col lg={4} className="d-block d-lg-none">
              <LeftSidebar></LeftSidebar>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
