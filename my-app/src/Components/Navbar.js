import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Style/navbar.css";
import { FaReact, FaLaravel } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <span className="text-info">
            React <FaReact />{" "}
          </span>
          <span className="text-danger">
            Laravel <FaLaravel />
          </span>
        </Link>

        <div className="">
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="about">
              About
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Users/Users-Data">
              Users
            </NavLink>
            <NavLink className="nav-item nav-link" to="Login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="Register">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
