import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AOS from "aos";
AOS.init({ delay: 200, duration: 1200, once: false });
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
