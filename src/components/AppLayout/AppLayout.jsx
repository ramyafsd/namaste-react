import React from "react";
import HeaderComponent from "../Header";
import CardComponent from "../../../src/components/CardComponent";

const AppLayout = (props) => {
  return (
    <div className="app-container">
      <HeaderComponent />
      <CardComponent />
    </div>
  );
};

export default AppLayout;
