"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import bulb from "../assets/images/bulb.gif";
import Typewriter from "typewriter-effect";
const Hero = () => {
  useEffect(() => {
    // Your code for useEffect goes here
  }, []);
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div
          className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-between"
          bis_skin_checked="1"
        >
          <div
            className="flex flex-col justify-center p-5 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
            bis_skin_checked="1"
          >
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              Welcome to
              <span>
              <h1 className="text-header-gradient ">
                <Typewriter
                  options={{
                    strings: ["Chill IT|"],
                    autoStart: true,
                    loop: true,
                    
                  }}
                />
              </h1>
              </span>
            </h1>
            <div className="flex justify-center">
              <p className="mt-4 mb-8 text-lg sm:mb-12">
                Where Ideas Come to Life
              </p>
              <Image
                src={bulb}
                alt="SmallGIF"
                width={50}
                height={10}
                unoptimized
                style={{ maxHeight: "45px" }}
              />
            </div>
            <p
              className="  mb-8 text-lg sm:mb-12"
              style={{ marginTop: "-30px" }}
            >
              Empower your vision with our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 font-bold">
                innovative solutions
              </span>
              . We're not just developers; we're partners in turning your ideas
              into reality. Let's build something extraordinary together
            </p>

            <div
              className="flex flex-col md:gap-5 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
              bis_skin_checked="1"
              style={{ marginTop: "-20px" }}
            >
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
              >
                Our Services
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 max-w-full px-8 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
              >
                Get Started
              </a>
            </div>
          </div>
          <div
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            bis_skin_checked="1"
          >
            <Image
              src="/images/Team.svg"
              alt="Team"
              width={1000}
              height={900}
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
