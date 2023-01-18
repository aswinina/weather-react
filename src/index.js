import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import Weather from "./weather";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="Weather">
      <Weather />
      <span className="sourcecode">
        <a href="https://github.com/aswinina/weather-react">
          Open-source code
        </a>
        by Aswini Sureddy
      </span>
    </div>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();