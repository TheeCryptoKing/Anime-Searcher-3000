import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./stylesheets/index.css";

import Home from "./components/Home";
import FanficsPage from "./components/FanficsPage";
import FavoritesPage from "./components/FavoritesPage";
import Search from "./components/Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Favorites" element={<FavoritesPage />} />
      <Route path="/Fanfics" element={<FanficsPage />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);
