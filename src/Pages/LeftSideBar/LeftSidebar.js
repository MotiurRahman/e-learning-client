import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

const LeftSidebar = () => {
  const [courseTitle, setcourseTitle] = useState([]);

  useEffect(() => {
    fetch(
      "https://b610-lerning-platform-server-side-motiur-rahman-motiurrahman.vercel.app/course/react"
    )
      .then((res) => res.json())
      .then((data) => setcourseTitle(data));
  }, []);

  return (
    <div className="mt-3 mt-md-5 border border-dark m-5 p-3 rounded">
      <h4 className="text-primary">All the Contents</h4>
      {courseTitle.map((title) => (
        <p key={title.id}>
          <FaHandPointRight></FaHandPointRight>
          <Link
            className="text-decoration-none"
            to={`/course/react/${title.id}`}
          >
            {title.title}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSidebar;
