"use client";
import React from "react";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
const Contact = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 ">
          <div className=" bg-blue-100 dark:bg-gray-900  md:col-span-4 p-4  dark:text-white ">
            <div>
              <div>
                <span className="block mb-2 text-base font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="text-dark  mb-3 text-[32px] font-bold uppercase sm:text-[14px] lg:text-[15px] xl:text-[18px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Let's Bring Your Vision to Life - Contact Chill Academy Today!
                </h2>
                <p className="text-sm leading-relaxed text-body-color dark:text-dark-6 mb-2">
                  Are you ready to transform your ideas into dynamic web and
                  mobile applications? At Chill Academy, we specialize in turning
                  visions into reality. Whether you're looking for innovative
                  web solutions, mobile app development, or effective SEO
                  strategies, our team is here to guide you every step of the
                  way. Don’t wait to make your ideas a success. Get in touch
                  with us now and take the first step towards digital
                  excellence!
                </p>
              
                <div className="mb-2 flex w-full max-w-[370px]">
                  <div className="bg-primary/5 text-primary mr-2 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[20px] sm:max-w-[40px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_941_17577)">
                        <path
                          d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                          fill="currentColor"
                        />
                        <path
                          d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                          fill="currentColor"
                        />
                        <path
                          d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_17577">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-sm font-bold text-dark dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-sm text-body-color dark:text-dark-6">
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex w-full max-w-[370px]">
                  <div className="bg-primary/5 text-primary mr-2 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[20px] sm:max-w-[40px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-sm font-bold text-dark dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-sm text-body-color dark:text-dark-6">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="md:col-span-8 p-10">
          <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl flex justify-center items-center"> <span className='text-header-gradient-2'>Contact Us</span> </h1>
            <div className="flex flex-wrap -mx-3  mb-6 mt-10">
              <div className="w-full md:w-1/2 mb-6 pr-0 md:pr-4 md:mb-0">
                <Input color="blue" label="First Name" />
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-4  ">
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
              <div className="flex justify-between w-full mt-8">
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