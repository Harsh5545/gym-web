import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeNavbarBg = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const [toggle, setToggle] = useState(false);
  const toggleNavbar = () => {
    setToggle(!toggle);
  };
  window.addEventListener("scroll", changeNavbarBg);
  return (
    <header className={navbar ? "sticky" : ""}>
      <div className="container d-flex  jc-between">
        <div className="logo">
          <Link to="/">GYM</Link>
        </div>
        <nav className={toggle ? "nav-links toggleNavbar" : "nav-links d-flex"}>
          <ul className="d-flex">
            <li>
              <Link to="/" style={{ color: navbar ? "#fff" : "#000" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: navbar ? "#fff" : "#000" }}>
                About
              </Link>
            </li>
            <li>
              <a href="#program" style={{ color: navbar ? "#fff" : "#000" }}>
                Program
              </a>
            </li>
            <li>
              <a href="#training" style={{ color: navbar ? "#fff" : "#000" }}>
                Training
              </a>
            </li>
            <li>
              <a href="#pricing" style={{ color: navbar ? "#fff" : "#000" }}>
                Pricing
              </a>
            </li>
          </ul>
          <Link to="/joinus">
            <button className="join-us">Join us</button>
          </Link>
          <button className="btn-close" onClick={toggleNavbar}>
            X
          </button>
        </nav>
        <div>
          <button className="btn-menu" onClick={toggleNavbar}>
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
