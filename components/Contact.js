"use client";
import React from "react";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
const Contact = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-1 ">
          <div className="flex flex-col ">
        <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl flex justify-center items-center"> <span className='text-header-gradient-2'>Contact Us</span> </h1>
        <p className="text-base text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Dive into digital transformation with Chill IT. We specialize in custom web and mobile app development, tailored to bring your innovative ideas to the forefront. Connect with us for unparalleled solutions and SEO strategies that drive results. Your journey to digital brilliance starts here!</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#468ef9] to-[#0c66ee] inline-flex"></div>
            </div>
            </div>
          <form className="md:col-span-8 p-0 md:p-10 lg:p-10  md:w-[80%] lg:w-[80%] mx-auto mt-10">
            <div className="flex flex-wrap -mx-3  mb-6">
              <div className="w-full md:w-1/2 mb-6 pr-0 md:pr-6 md:mb-0 ">
                <Input color="blue" label="First Name" />
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-4 ">
                <Input color="blue" label="Last Name" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <Input size="md" label="Email" color="blue" />
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <Textarea
                color="blue"
                className="text-xl text-white"
                label="Message "
                size="md"
              />
              <div className="flex justify-center w-full mt-8">
                <div className="md:flex md:items-center"></div>
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gradient-to-r  from-[#468ef9] to-[#0c66ee]  border border-[#0c66ee] group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Begin Your Digital Journey
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
