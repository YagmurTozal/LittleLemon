
import React from "react";

import { MotionAnimate } from 'react-motion-animate'

export default function Projects() {
  return (
    <MotionAnimate
      animation='fadeInUp'
      reset={false}
      distance={200}
      delay={0.2}
      speed={2}>
      <h1 className="title-font text-center sm:text-8xl text-6xl mb-1 font-bold animate-text t py-5 text-llyellow transition duration-300 delay-150">Specials</h1>
      <h2 className="   title-font text-center sm:text-xl text-xl mb-1 font-bold animate-text t py-5 text-llgreen transition duration-300 delay-150">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
      <button className="container border rounded text-center ml-14 py-2 mb-2 text-sm font-medium  text-llblack bg-llyellow hover:bg-llred hover:shadow-llyellow shadow-xl active:bg-llred  transition duration-100 delay-150">
              <a
                href="#Menu"
                className="text-2xl bg--500 border-0 border-spacing-x-40 py-2 px-6 focus:outline-none rounded text-llblack transition duration-300 delay-100">
                Online Menu
              </a>
            </button>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <section id="specials" className="text-gray-400 body-font ">
          <div className="max-w-xl mx-auto py-20  ">
            <div className=" bg-gray-200 shadow-md rounded-lg max-w-sm">
              <a href="#Projects">
                <img className="rounded-t-lg p-8" src="./Assets/bruchetta.svg" alt="product" />
              </a>
              <div className="px-7 pb-5">
                <a href="#Projects">
                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight">Bruchetta</h3>
                </a>
                <h4 className="text-xs font-semibold mr-2 py-3 rounded">
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                </h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl px-4 font-bold text-llred">$5.99</span>
                <a href="#Projects"
                  className="text-llblack focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm mr-2">
                  Order a delivery <img className=" inline-block" src="../Assets/Dish icon.svg" alt="order-logo" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="specials" className="text-gray-400  body-font  ">
          <div className="max-w-xl mx-auto py-20">
            <div className=" bg-gray-200 shadow-md rounded-lg max-w-sm">
              <a href="#Projects">
                <img className="rounded-t-lg p-8" src="./Assets/greek salad.jpg" alt="product" />
              </a>
              <div className="px-7 pb-5">
                <a href="#Projects">
                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight">Greek Salad</h3>
                </a>
                <h4 className="text-xs font-semibold mr-2 py-0.5 rounded">
                  The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl px-4 font-bold text-llred">$12.99</span>
                <a href="#Projects"
                  className="text-llblack focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm mr-2">
                  Order a delivery <img className=" inline-block" src="../Assets/Dish icon.svg" alt="order-logo" />
                </a>
              </div>
            </div>
          </div>
        </section>


        <section id="specials" className="text-gray-400  body-font ">
          <div className="max-w-xl mx-auto py-20">
            <div className=" bg-gray-200 shadow-md rounded-lg max-w-sm">
              <a href="#Projects">
                <img className="rounded-t-lg p-8" src="./Assets/lemon dessert.jpg" alt="product" />
              </a>
              <div className="px-7 pb-5">
                <a href="#Projects">
                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight">Lemon Dessert</h3>
                </a>
                <h4 className="text-xs font-semibold mr-2 py-0.5 rounded">
                  This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined.
                </h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl px-4 font-bold text-llred">$5.00</span>
                <a href="#Projects"
                  className=" text-llblack focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm mr-2">
                  Order a delivery <img className=" inline-block" src="../Assets/Dish icon.svg" alt="order-logo" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MotionAnimate >
  );
}
