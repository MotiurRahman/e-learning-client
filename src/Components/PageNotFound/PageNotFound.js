import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="text-center mt-5">
      <h3>Oops 404 page not found</h3>
      <Link to="/"> Back to Home Page</Link>
    </div>
  );
};

export default PageNotFound;
