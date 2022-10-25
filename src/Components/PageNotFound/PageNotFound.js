import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="text-center mt-5">
      <h3>Oops 404</h3>
      <p>
        Sorry, there's no page at that URL. You can go{" "}
        <Link to="/"> Back to Home Page</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
