import React from "react";
import ReactDom from "react-dom";
import reelLogo from "../../assets/reel.png";
import userLogo from "../../assets/user.png";
import "./headerStyles.css";

//Create a Header Component from scratch using Functional components in jsx
// 1. add logo on left
// 2. add a search bar in middle
// 3. add user icon on right
// 4. add css to make it nice

const HeaderComponent = () => {
  return (
    <div className="container">
      <img src={reelLogo} className="img" alt="logo" />
      <input
        type="search"
        className="search-input"
        placeholder="search here.."
      />
      <img src={userLogo} alt="icon" className="img" />
    </div>
  );
};

export default HeaderComponent;
