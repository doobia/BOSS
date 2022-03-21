import React from "react";
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Todo App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/login" className="nav-link active">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              signup
            </NavLink>
            <NavLink to="/signout" className="nav-link">
              Sign Out
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
