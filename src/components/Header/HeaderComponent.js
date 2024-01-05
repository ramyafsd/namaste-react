import React from "react";
import "./headerStyles.css";
import logo from "../../../public/assets/F-letter.jpg";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} />
        <div>FOODIEE</div>
      </div>
      <div className="menu-container">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
