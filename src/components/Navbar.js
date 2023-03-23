import { Outlet, Link, Navigate,useNavigate } from "react-router-dom";

import React from "react";
import Reservations from "./Reservations";



export default function Navbar() {
  return (
    <>
    <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img src="../Assets/Logo.svg" class="h-6 mr-3 sm:h-12" alt="Little lemon Logo" />
        </a>
        <div className="flex md:order-2">
          <button type="button" className="text-llblack bg-llyellow hover:bg-llred focus:ring-4 focus:outline-none focus:ring-llyellow font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 transition duration-300 delay-100">Order Online</button>
          <a href="/Reservations">
          <button type="button" className=" ml-4 text-llblack bg-llyellow hover:bg-llred focus:ring-4 focus:outline-none focus:ring-llyellow font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-3 md:mr-0 transition duration-300 delay-100">Reserve a Table</button>
          </a>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <a href="#About" className="block py-2 pl-3 pr-4 text-llgreen rounded hover:bg-llyellow md:hover:bg-transparent md:hover:text-llyellow md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#Specials" className="block py-2 pl-3 pr-4 text-llgreen rounded hover:bg-llyellow md:hover:bg-transparent md:hover:text-llyellow md:p-0 ">Specials</a>
            </li>
            <li>
              <a href="/About" className="block py-2 pl-3 pr-4 text-llgreen rounded hover:bg-llyellow md:hover:bg-transparent md:hover:text-llyellow md:p-0">Info</a>
            </li>
            <li>
              <a href="/Contact" className="block py-2 pl-3 pr-4 text-llgreen rounded hover:bg-llyellow md:hover:bg-transparent md:hover:text-llyellow md:p-0">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );

}
