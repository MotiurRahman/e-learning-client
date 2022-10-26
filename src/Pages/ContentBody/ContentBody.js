import React from "react";
import { Link } from "react-router-dom";

const ContentBody = ({ courseDetail }) => {
  const { id, title, image, desc, cat_id } = courseDetail;
  return (
    <div className="mt-5">
      <h5>Title: {title}</h5>
      <p>
        {desc}
        <Link to={`/course/${cat_id}/${id}`}> Details</Link>
      </p>
    </div>
  );
};

export default ContentBody;
