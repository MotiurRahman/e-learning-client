import React from "react";
import Blog from "../Components/Blog/Blog";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Profile from "../Components/Profile/Profile";
import Registration from "../Components/Registration/Registration";
import Terms from "../Components/Terms/Terms";
import Main from "../Layout/Main";
import SubMain from "../Layout/SubMain";
import Courses from "../Pages/Courses/Courses";
import LearnReact from "../Pages/Lear-react/LearnReact";

const router = [
  {
    path: "/",
    element: <SubMain></SubMain>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/faq", element: <FAQ></FAQ> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/registration", element: <Registration></Registration> },
      { path: "/terms", element: <Terms></Terms> },
      {
        path: "/courses",
        loader: async () => {
          return fetch("http://localhost:8000/courses");
        },
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      { path: "*", element: <PageNotFound></PageNotFound> },
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "course/:cat_id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:8000/course/${params.cat_id}`);
        },
        element: (
          <PrivateRoute>
            <LearnReact></LearnReact>
          </PrivateRoute>
        ),
      },
    ],
  },
];

export default router;
