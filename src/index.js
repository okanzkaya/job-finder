import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Jobs from "./routes/jobs/jobs";
import Categories from "./routes/categories/categories";
import AboutUs from "./routes/about-us/about-us";
import Profile from "./routes/profile/profile";
import NotFound from "./routes/not-found/not-found";
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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />s
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
