import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-5 text-center">
      <h2 style={{ fontSize: "5vw" }}>Kickstart your career</h2>
      <p style={{ fontSize: "3vw" }}>
        Get certified by completing a React Development Course
      </p>
      <Button className="btn btn-dark" style={{ fontSize: "5vw" }}>
        <Link className="text-decoration-none text-light" to="/courses">
          Get started
        </Link>
      </Button>
    </div>
  );
};

export default Home;
