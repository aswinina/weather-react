import React from "react";
import Weather from "./weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://aswinisureddy-profile.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aswini Sureddy
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/aswinina/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://celadon-sawine-789a6a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

