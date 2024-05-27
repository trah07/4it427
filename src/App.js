import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById("root");

const Car = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", null, props.brand),
    React.createElement("h3", null, props.model),
    React.createElement("h3", null, props.year),
  ]);
};

const App = () =>
  React.createElement(
    "div",
    {},
    React.createElement(Car, {
      brand: "Toyota",
      model: "Corolla",
      year: 2020,
    }),
  );

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
