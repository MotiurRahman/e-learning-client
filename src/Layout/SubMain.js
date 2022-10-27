import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import LeftSidebar from "../Pages/LeftSideBar/LeftSidebar";

const SubMain = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
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
      <Footer></Footer>
    </div>
  );
};

export default SubMain;
