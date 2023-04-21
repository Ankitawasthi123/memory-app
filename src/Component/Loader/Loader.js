import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loader.scss";

const Loader = () => {
  return (
    <>
      <div className="spinner">
        <Spinner animation="border" variant="danger" />
      </div>
      <div className="loader-skin"></div>
    </>
  );
};

export default Loader;
