import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home/Home";

const SubMain = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default SubMain;
