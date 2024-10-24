import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <h1>
          <span>B</span>ON<span>V</span>OYAGE
        </h1>
      </div>
      <div className="footer-links">
        <ul className="links">
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} href="">
              HomePage
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} href="">
              About US
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} href="">
              Destination
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} href="">
              Tour
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} href="">
              Blog
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} href="">
              Elements
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
