import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";


const Rutass = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />   
        {/* <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="*" element={<p>Error</p>} /> */}
    </Routes>
  );
};

export default Rutass;