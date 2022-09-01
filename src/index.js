import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Jobs from "./routes/jobs/jobs";
import Categories from "./routes/categories/categories";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
