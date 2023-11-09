import React from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./components/Header/HeaderComponent";

const heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I am H1 using React Element"),
  React.createElement("h2", {}, "I am H2 using React Element"),
  React.createElement("h3", {}, "I am H3 using React Element"),
]);

const headingUsingJSX = (
  <div className="title">
    <h1>I am H1 using JSX</h1>
    <h2>I am H2 using JSX</h2>
    <h3>I am H3 using JSX</h3>
  </div>
);
////Composition of a component
const TitleComponent = () => <h1>I am Title component..</h1>;
const HeadingComponent = () => {
  return (
    <div className="title">
      {TitleComponent()}
      <TitleComponent />
      <TitleComponent></TitleComponent>
      <h1>I am H1 using Functional Component</h1>
      <h2>I am H2 using Functional Component</h2>
      <h3>I am H3 using Functional Component</h3>
    </div>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
