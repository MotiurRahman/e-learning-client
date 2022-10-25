import React from "react";
import Blog from "../Components/Blog/Blog";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Main from "../Layout/Main";
import Courses from "../Pages/Courses/Courses";
import LearnReact from "../Pages/Lear-react/LearnReact";

const router = [
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/courses", element: <Courses></Courses> },
      { path: "/faq", element: <FAQ></FAQ> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/lear-react", element: <LearnReact></LearnReact> },
      { path: "/login", element: <Login></Login> },
      { path: "/registration", element: <Registration></Registration> },
    ],
  },
];

export default router;
