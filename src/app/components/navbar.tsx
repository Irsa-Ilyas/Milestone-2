import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>
          <span>B</span>ON<span>V</span>OYAGE
        </h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link className="link" href="/">
              HomePage
            </Link>
          </li>
          <li>
            <Link className="link" href={"/about"}>
              About US
            </Link>
          </li>
          <li>
            <Link className="link" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" href="#">
              Tour
            </Link>
          </li>
          <li>
            <Link className="link" href="#">
              Destination
            </Link>
          </li>
          <li>
            <Link className="link" href="#">
              Elements
            </Link>
          </li>
          <li>
            <CiSearch />
          </li>
          <li>
            <CiShoppingCart />
          </li>
          <li>
            <RxHamburgerMenu />
          </li>
        </ul>
        <div className="hamburger">
          <ul>
            <li>
              <RxHamburgerMenu />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
