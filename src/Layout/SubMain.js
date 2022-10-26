import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import LeftSidebar from "../Pages/LeftSideBar/LeftSidebar";

const SubMain = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Container>
          <Row>
            <Col lg={4} className="d-none d-lg-block">
              <LeftSidebar></LeftSidebar>
            </Col>
            <Col lg={8}>
              <Outlet></Outlet>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SubMain;
