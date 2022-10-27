import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthUserContext } from "../../Context/AuthContext";

const Checkout = () => {
  const { id, title } = useLoaderData();
  const { user } = useContext(AuthUserContext);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center border border-dark mt-5 rounded">
      <h3>Title: {title}</h3>
      <div>
        <h4>User Info</h4>
        <p>User Name: {user.displayName}</p>
        <p>User Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Checkout;
