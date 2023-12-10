import React from "react";

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-800 ">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2 ">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase text-white text-header-gradient-2 ">
             Chill Academy
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-white">
            CHILL ACADEMY is here to make tech easy for everyone. <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 font-bold">Our mission is simple:</span> guide you through the world of technology in a fun and accessible way. Whether you're new or curious, we're your partners in exploring tech. Let's turn your curiosity into knowledge, making the tech journey personal and enjoyable together.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
          <div>
            <p className="font-semibold tracking-wide text-white"> ABOUT US </p>
            <ul className="text-white mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                 Our Team
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                Approach
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                Clients
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                Testimonials
                </a>
              </li>
            
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-white">SERVICES</p>
            <ul className="mt-2 space-y-2 text-white">
              <li>
                <a
                  href="/"
                  className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                 Web Applications
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                  Mobile Applications
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                  Websites 
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                  SEO Performances
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                  Project Enhancement
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-blue-500 to-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                  Subservices
                </a>
              </li>
            </ul>
          </div>
          <span className="text-base font-bold tracking-wide text-white">
            Social
            <div className="flex items-center mt-4 space-x-3">
              <a
                href="/"
                className="flex bg-white text-pink-400 shadow-lg font-normal h-9 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none max-w-xs transition duration-300 ease-in-out hover:scale-110"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="flex bg-white text-pink-400 shadow-lg font-normal h-9 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none max-w-xs transition duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0078d4"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                  ></path>
                  <path
                    d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                className="flex bg-white text-pink-400 shadow-lg font-normal h-9 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none max-w-xs transition duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#f2faff"
                    d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"
                  ></path>
                  <path
                    fill="#788b9c"
                    d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"
                  ></path>
                  <path
                    fill="#79ba7e"
                    d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"
                  ></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500 text-white">
            Stay connected with Chill ACADEMY! Follow us on our social media channels for the latest updates, news, and tech insights.
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row text-white">
        <p className="text-sm ">
          © Copyright 2023 Chill Academy. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
            <a href="#" className="text-sm  transition hover:text-primary">
              Terms
            </a>
            <a href="#" className="text-sm  transition hover:text-primary">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
