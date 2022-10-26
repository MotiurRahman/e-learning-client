import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { id, title } = useLoaderData();
  return (
    <div className="h-100 d-flex align-items-center">
      <h3>Title: {title}</h3>
    </div>
  );
};

export default Checkout;
