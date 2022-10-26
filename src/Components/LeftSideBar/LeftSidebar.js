import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const LeftSidebar = () => {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/course/react")
      .then((res) => res.json())
      .then((data) => setTitle(data));
  });
  return (
    <div>
      <h3>All the course header</h3>
      {}
    </div>
  );
};

export default LeftSidebar;
