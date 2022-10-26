import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="mt-5">
      <h4>All the Contents</h4>
      {courseTitle.map((title) => (
        <p key={title.id}>
          <Link to={`/course/react/${title.id}`}> {title.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSidebar;
