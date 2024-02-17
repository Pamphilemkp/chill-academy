"use client";
import React from "react";
import Image from "next/image";
import bulb from "../assets/images/bulb.gif";
import Typewriter from "typewriter-effect";
const Hero = () => {

  return (
    <div className="bg-blue-100 dark:bg-gray-800 text-gray-100 custom-box pb-4 ">
      <section >
        <div
          className="container flex flex-col justify-center p-0 md:p-6 lg:p-6 mx-auto py-12 lg:py-4 lg:flex-row lg:justify-between  " 
          bis_skin_checked="1"
        >
          <div
            className="flex flex-col justify-center p-0 md:p-5 lg:p-5 text-center smmargin-top  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
            bis_skin_checked="1"
          >
            <h1 className="text-5xl font-bold leading sm:text-6xl text-black dark:text-white">
              Welcome to
              <div className="text-header-gradient mt-4 lg:mt-2 uppercase">
                <Typewriter
                  options={{
                    strings: ["Chill Academy|"],
                    autoStart: true,
                    loop: true,
                    
                  }}
                />
              </div>
            </h1>
            <div className="flex justify-center">
              <p className="mt-3 mb-8 text-lg sm:mb-12  text-gray-800 dark:text-white">
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
              className="  mb-8 text-lg sm:mb-12  text-gray-800 dark:text-white "
              style={{ marginTop: "-40px"}}
            >
              Empower your vision with our{" "}
              <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-blue-500 to-teal-400  text-lg">
                innovative solutions
              </span>
             {` . We're not just developers; we're partners in turning your ideas
              into reality. Let's build something extraordinary together`}
            </p>

            <div
              className="flex flex-col md:gap-5 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
              bis_skin_checked="1"
              style={{ marginTop: "-20px" }}
            >
              <a
                rel="noopener noreferrer"
                href="#services"
                className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
              >
                Our Services
              </a>
              <a
                rel="noopener noreferrer"
                href="/Contact"
                className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 max-w-full px-8 py-4 bg-inherit dark:text-gradient-3  border border-[#0c66ee] flex items-center justify-center text-black text-bold text-gradient-3"
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
