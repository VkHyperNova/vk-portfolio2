import React from 'react'
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                        Hello, I am Veikko
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Programmer
                    </p>
                    <div>
                        <button className='px-6 py-5 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
                        <button className='px-6 py-5 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Request CV</button>
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