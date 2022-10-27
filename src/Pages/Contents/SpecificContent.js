import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { jsPDF } from "jspdf";

const SpecificContent = () => {
  const { id, title, image, desc, cat_id } = useLoaderData();
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Title: " + title + "\n\n" + desc, 10, 10);
    doc.save(title + ".pdf");
  };

  return (
    <div>
      <div className="my-3 mt-md-5 ">
        <h5 className="py-3">
          Title: {title}
          <button
            onClick={generatePDF}
            className="btn btn-outline-secondary ms-2 ms-md-3 mt-md-0 mt-2"
          >
            Download
          </button>
        </h5>
        <img
          className="img-fluid mx-auto"
          style={{ height: "300px" }}
          src={`https://b610-lerning-platform-server-side-motiur-rahman-motiurrahman.vercel.app${image}`}
          alt=""
        />
        <p className="py-3">{desc}</p>
        <Link to={`/checkout/${id}`}>
          <button className="btn btn-outline-secondary">
            Get premium access.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SpecificContent;
