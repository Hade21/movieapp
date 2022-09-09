import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailMovie from "../pages/detailMovie/DetailMovie";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<DetailMovie />} />
    </Routes>
  );
};

export default Router;
