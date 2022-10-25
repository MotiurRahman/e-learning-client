import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h3 className="mt-5 text-center">
        Please read the privacy policy and terms and conditions.{" "}
        <Link to="/registration">Back to Registration Page</Link>
      </h3>
    </div>
  );
};

export default Terms;
