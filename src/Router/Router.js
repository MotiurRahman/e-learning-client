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
import Checkout from "../Pages/Checkout/Checkout";
import Contents from "../Pages/Contents/Contents";
import SpecificContent from "../Pages/Contents/SpecificContent";
import Courses from "../Pages/Courses/Courses";

const router = [
  {
    path: "/",
    element: <Main></Main>,
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
          return fetch(
            "https://b610-lerning-platform-server-side-motiur-rahman-motiurrahman.vercel.app/courses"
          );
        },
        element: <Courses></Courses>,
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
    element: <SubMain></SubMain>,
    children: [
      {
        path: "course/:cat_id",
        loader: async ({ params }) => {
          return fetch(
            `https://b610-lerning-platform-server-side-motiur-rahman-motiurrahman.vercel.app/course/${params.cat_id}`
          );
        },
        element: <Contents></Contents>,
      },
      {
        path: "course/:cat_id/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://b610-lerning-platform-server-side-motiur-rahman-motiurrahman.vercel.app/course/${params.cat_id}/${params.id}`
          );
        },
        element: <SpecificContent></SpecificContent>,
      },
      {
        path: "checkout/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://b610-lerning-platform-server-side-motiur-rahman-motiurrahman.vercel.app/course/react/${params.id}`
          );
        },
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
];

export default router;
