import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { getToken } from "./services/auth-service";
import { Notification } from "react-rainbow-components";
import "./index.scss";

axios.interceptors.request.use(
  (request) => {
    const token = getToken();
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    request.headers["Content-Type"] = "application/json";
    return request;
  },
  (error) => console.log(error)
);

axios.interceptors.response.use(
  (request) => request,
  (error) => {
    //Promise.reject("something went wrong");
    if (error.response.status === 400) {
      throw new Error("Check the date you're trying to send and try again!");
    } else if (error.response.status === 401) {
      throw new Error("Check if you've entered the correct login data!");
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
