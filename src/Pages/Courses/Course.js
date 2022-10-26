import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, title, cat_id } = course;
  return (
    <Card className="m-3">
      <Link className="text-decoration-none" to={`/course/${cat_id}`}>
        <Card.Body className="text-center bg-dark text-light rounded">
          {title}
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Course;
