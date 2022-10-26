import React from "react";
import { useLoaderData } from "react-router-dom";
import ContentBody from "../ContentBody/ContentBody";

const Contents = () => {
  const courseDetails = useLoaderData();

  return (
    <div>
      {courseDetails.length == 0 ? (
        <p className="mt-5">Sorry, Only React content is available</p>
      ) : (
        courseDetails.map((courseDetail) => (
          <ContentBody
            key={courseDetail.id}
            courseDetail={courseDetail}
          ></ContentBody>
        ))
      )}
    </div>
  );
};

export default Contents;
