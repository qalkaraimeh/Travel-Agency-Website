import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
