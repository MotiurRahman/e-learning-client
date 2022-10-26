import React from "react";
import { useLoaderData } from "react-router-dom";

const LearnReact = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  return (
    <div>
      <h4>this is learn react4 page.{courseDetails.length}</h4>
    </div>
  );
};

export default LearnReact;
