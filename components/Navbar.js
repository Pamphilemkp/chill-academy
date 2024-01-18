"use client";
import React, { useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentRoute = usePathname();

  return (
    <div className="bg-blue-100 dark:bg-gray-800 dark:text-black text-white relative z-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <div className="rounded-circle overflow-hidden">
              <style>{`
                .rounded-circle {
                  border-radius: 50%;
                  width: auto; 
                  height: auto; 
                }
              `}</style>
              <Image
                src="/images/Chill logo.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-circle"
              />
            </div>
            <span className="ml-2 text-xl text-header-gradient-2 font-bold tracking-wide  uppercase">
              Chill Academy
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-4 lg:flex">
            <li>
              <Link
                href="/"
                aria-label="Home page"
                title="Home page"
                className={ currentRoute === '/' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                 : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Features"
                aria-label="Our product"
                title="Our product"
                className={ currentRoute === '/Features' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                 : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"}
              >
                Features & Products
              </Link>
            </li>
            <li>
              <Link
                href="/Pricing"
                aria-label="Product pricing"
                title="Product pricing"
                className={ currentRoute === '/Pricing' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"} >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                aria-label="About us"
                title="About us"
                className={ currentRoute === '/About' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                 : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"}>
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/Faqs"
                aria-label="Faqs"
                title="Faqs"
                className={ currentRoute === '/Faqs' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"}   >
               Faqs
              </Link>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <div
                className="items-center flex-shrink-0 hidden lg:flex"
                bis_skin_checked="1"
              >
                <button className="self-center px-4 py-2 text-white rounded">
                  <ThemeSwitcher />
                </button>
                <button className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
                  Get Started
                </button>
              </div>
              <button className="p-4 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <div className="rounded-circle overflow-hidden">
                          <style>{`
                                  .rounded-circle {
                                    border-radius: 50%;
                                  }
                                `}  
                          </style>
                          <Image
                            src="/images/Chill logo.jpg"
                            alt="Logo"
                            width={50}
                            height={50}
                            className="rounded-circle"
                          />
                        </div>
                        <span className="ml-2 text-xl text-header-gradient font-bold tracking-wide text-gray-800 ">
                          Chill Academy
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                    <li>
                        <Link
                          href="/"
                          aria-label="Home page"
                          title="Home page"
                          className={ currentRoute === '/' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                          : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Faqs"
                          aria-label="Faqs"
                          title="Faqs"
                          className={ currentRoute === '/Faqs' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                          : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"}
                        >
                          Faqs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Features"
                          aria-label="Our product"
                          title="Our product"
                          className={ currentRoute === '/Features' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                          : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"}
                        >
                          Features & products
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Pricing"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className={ currentRoute === '/Pricing' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                          : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"}
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/About"
                          aria-label="About us"
                          title="About us"
                          className={ currentRoute === '/About' ? "font-medium tracking-wide text-gray-800 transition duration-300 border-b-2 border-green-900 dark:border-yellow-500 rounded-full px-4 py-2 hover:bg-gradient-to-r from-[#46f9de] to-[#0cee88] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"
                          : "font-medium tracking-wide text-gray-800 rounded-full transition duration-300  px-4 py-2 hover:bg-gradient-to-r from-[#468ef9] to-[#0c66ee] dark:text-white  hover:bg-[#0c66ee] hover:text-white hover:border-transparent hover:shadow-md inline-block"}
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/signup"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Get Started
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
