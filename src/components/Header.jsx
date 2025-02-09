import React from "react";
import logo from "../assets/images/logo.png";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" width={80} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}
