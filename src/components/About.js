import React from "react";
import { MotionAnimate } from 'react-motion-animate';

const About = () => {
    return (
        <MotionAnimate animation='fadeInUp'
            reset={false}
            distance={200}
            delay={0.2}
            speed={2}>
            <section className=" bg-llgreen text-llwhite body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-7xl text-7xl mb-4 font-bold text-llyellow">Little Lemon</h1>
                        <h2 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-llyellow">Chicago</h2>
                        <p className="mb-8 leading-relaxed text-llwhite">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="../Assets/Mario and Adrian A.jpg" />
                    </div>
                </div>
            </section>
        </MotionAnimate>

    )
}

export default About;



