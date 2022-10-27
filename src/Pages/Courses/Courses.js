import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Courses = () => {
  const courseList = useLoaderData();
  //console.log(courseList);
  return (
    <div>
      <h3 className="text-center p-2 mt-3">All The Courses</h3>
      <Container className="mt-3 mx-auto">
        <Row xs={2} md={3} lg={4}>
          {courseList.map((course) => (
            <Col>
              <Course key={course.id} course={course}></Course>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
