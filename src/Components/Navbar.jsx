import React from "react";
import { Link, NavLink } from "react-router";
import appLogo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="text-2xl font-bold  tracking-wide  flex items-center space-x-2 "
        >
          <img src={appLogo} alt="appLogo" className="w-10 h-10" />{" "}
          <span className="hover:text-secondary transition-colors bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 shadow"
                  : "hover:text-primary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 shadow"
                  : "hover:text-primary"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 shadow"
                  : "hover:text-primary"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/Arafat-niloy"
          target="_blank"
          className="btn btn-primary px-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "
        >
          <FaGithub size={20} /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
