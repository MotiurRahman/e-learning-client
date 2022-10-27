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
    <div className="mt-5 mx-auto">
      <Container>
        <h3 className="text-center p-2 m-2">All The Courses</h3>
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
