import React from "react";
import ReactDOM from "react-dom";
import CarList from "./components/CarList";

const App = () => {
  return <CarList/>
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
