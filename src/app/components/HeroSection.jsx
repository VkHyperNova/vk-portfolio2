"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I am {" "}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Veikko',
                                1000, 
                                'Web Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Programmer
                    </p>
                    <div>
                        <button className="px-6 py-5 rounded-full mr-4 text-white font-bold w-full sm:w-fit bg-gradient-to-r from-gray-600 via-black-500 to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-500 transition-all duration-300">Hire Me</button>
                        <button className="px-6 py-5 rounded bg-transparent text-white border border-white mt-3 w-full sm:w-fit">Request CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#ccc4c40c] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image src="/images/hero-image.png"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                            alt="hero image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection