import React from "react";
import "../index.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-lg navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand" href="/">
          <span>
            <img
              src=".././images/hamburger.png"
              alt="Food"
              style={{ height: "40px" }}
            />
          </span>{" "}
          Recipe ~ King{" "}
        </a>
    

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
