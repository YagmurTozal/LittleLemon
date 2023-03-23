import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function App() {
    return (
      <main className="bg-llwhite body-font">
        <About />
        <Specials />
        <Testimonials />
        <Info />
        <Footer />
      </main>
    );
  }
