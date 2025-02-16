import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import "./Header.css"; // Single CSS file for both components

function Header() {
  return (
    <div className="header-container">
      {/* Social Links */}
      <nav className="socials">
        <ul className="socials-links">
          <li>
            <a
              href="https://www.facebook.com/wastebandmn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>{" "}
          <li>
            <a
              href="https://www.instagram.com/wastebandmn/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>{" "}
          <li>
              <a
              href="https://www.youtube.com/watch?v=2pG2s2qdYw4"
              target="_blank"
              rel="noopener noreferrer"
              >
              <FaYoutube />
              </a>
          </li>{" "}
          <li>
            <Link to="/x">
              <FaXTwitter />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navbar Links */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Merch">Shop</Link>
          </li>
          <li>
            <Link to="/">WASTE</Link>
          </li>
          <li>
            <Link to="/Music">Music</Link>
          </li>
          <li>
            <Link to="/Shows">Shows</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
