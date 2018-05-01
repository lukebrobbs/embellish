import "./404.css";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <p class="zoom-area" />
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <h1>Page not found</h1>
      <div class="link-container">
        <Link to={"/"} className="more-link">
          Go back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
