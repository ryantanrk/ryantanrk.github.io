import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Home from "./pages/home/home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <header>
      <div className="title">Ryan Tan Rui Kit</div>
      <div className="subtitle">Software Engineer</div>
    </header>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
