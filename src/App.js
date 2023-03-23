import React from "react";
import Footer from "./components/Footer";
import Home from "../src/components/Home";
import Navbar from "./components/Navbar";

import { Routes, Route, Router, BrowserRouter } from "react-router-dom";

import Reservations from "./components/Reservations";

// Yagmur Tozal
export default function App() {
  return (
    <main className=" text-gray-400 ">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Reservations" element={<Reservations />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}
