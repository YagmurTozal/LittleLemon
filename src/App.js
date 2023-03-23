import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Reservations from "./components/Reservations";

// Yagmur Tozal
export default function App() {
  return (
    <main className=" text-gray-400 ">
      <Navbar />
      <About/>
      <Specials/>
      <Testimonials/>
      <Info/>
      <Footer/>
      <Reservations/>
    </main>
  );
}
