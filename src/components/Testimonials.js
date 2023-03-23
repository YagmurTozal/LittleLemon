import React from "react";
import { MotionAnimate } from 'react-motion-animate'

const Testimonials = () => {
    return (
        <MotionAnimate
            animation='fadeInUp'
            reset={false}
            distance={200}
            delay={0.2}
            speed={2}>
            <section className=" body-font bg-llgreen" >
                <h1 className=" title-font text-center sm:text-8xl text-6xl mb-4 font-bold animate-text py-10 text-llyellow transition duration-300 delay-150">Testimonials</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4  text-llgray">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 transition duration-50 delay-150">
                            <div className="h-full text-center ">
                                <p className="leading-relaxed text-llwhite">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                <span className="inline-block h-1 w-10 rounded bg-llyellow mt-6 mb-4"></span>
                                <h2 className="text-llyellow font-medium title-font tracking-wider text-sm">James Parker</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 transition duration-100 delay-150">
                            <div className="h-full text-center">
                                <p className="leading-relaxed text-llwhite">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                <span className="inline-block h-1 w-10 rounded bg-llyellow mt-6 mb-4"></span>
                                <h2 className="text-llyellow font-medium title-font tracking-wider text-sm">Lily Brown</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4 transition duration-100 delay-150">
                            <div className="h-full text-center">
                                <p className="leading-relaxed text-llwhite">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                <span className="inline-block h-1 w-10 rounded bg-llyellow mt-6 mb-4"></span>
                                <h2 className="text-llyellow font-medium title-font tracking-wider text-sm">David Park</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MotionAnimate>
    )
}

export default Testimonials;
