import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CardDetails from "../pages/CardDetails/CardDetails";

const Rutass = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/details" element={<CardDetails />} />
      {/*<Route path="*" element={<p>Error</p>} /> */}
    </Routes>
  );
};

export default Rutass;
