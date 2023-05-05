import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { AboutUs } from "./container";
import { SpecialMenu, Laurels, FindUs } from "./container";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/menu" element={<SpecialMenu />} />
      <Route path="/awards" element={<Laurels />} />
      <Route path="/contact" element={<FindUs />} />
    </Routes>
  </>
);

export default App;
