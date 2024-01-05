"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import Service from "./Service";

const Section = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 dark:text-gray-100 mt-4">
      <div className="p-6 space-y-8">
        <main>
          <div className="container mx-auto space-y-16">
            <section className="">
              <span className="block mb-2 text-xs font-medium tracki uppercase  text-center lg:text-center text-orange-500 dark:text-violet-400">
                How it works
              </span>
              <h2 className=" text-xl lg:text-5xl font-bold lg:text-center  dark:text-gray-50 relative text-center">
                {" "}
                <span className="relative">
                  Chill Academy Formula:
                  <span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-cyan-400 to-purple-300
 rounded-full"
                  ></span>
                </span>
              </h2>

              <div className="grid gap-8 my-16 lg:grid-cols-3">
                <div class="relative max-w-sm h-[27rem] bg-blue-100 dark:bg-gray-700 border border-[#0c66ee]  rounded-3xl flex justify-center items-center transform transition-all hover:-translate-y-2 duration-300 shadow-[5px_5px_0px_0px_rgb(29,112,240)] hover:shadow-2xl mt-4">
                  <div
                    class="w-72 h-48 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] absolute -top-8 flex flex-col justify-center
    items-center rounded-3xl"
                  >
                    <img
                      class=" rounded-full mb-10"
                      src="/images/listening.png"
                      alt="userimg"
                    />
                  </div>
                  <div
                    class="w-full h-36 px-6 mt-36 flex flex-col justify-evenly 
font-bold text-gray-800 text-base"
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Listening:
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100 mt-2">
                      " Our formula is simple – we listen, we solve. Your project
                      becomes our priority, and we commit to delivering the best
                      solution possible. We actively listen to your ideas and
                      requirements to fully grasp your vision. "
                    </p>
                  </div>
                  <div class="w-72 h-20 bg-[var(--color-2)] absolute -bottom-6"></div>
                </div>
                <div class="relative max-w-sm h-[27rem] bg-blue-100 dark:bg-gray-700 border border-[#0c66ee]  rounded-3xl flex justify-center items-center transform transition-all hover:-translate-y-2 duration-300 shadow-[5px_5px_0px_0px_rgb(29,112,240)] hover:shadow-2xl  mt-4 ">
                  <div
                    class="w-72 h-48 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] absolute -top-8 flex flex-col justify-center
    items-center rounded-3xl"
                  >
                    <img
                      class=" rounded-full mb-10"
                      src="/images/problem-solving-unscreen.gif"
                      alt="userimg"
                    />
                  </div>
                  <div
                    class="w-full h-36 px-6 mt-14 flex flex-col justify-evenly 
font-bold text-gray-800 text-base"
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Problem-Solving:
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100 mt-2">
                     " We approach your project as our own, taking ownership of
                      the challenges and finding the best solutions. "
                    </p>
                  </div>
                  <div class="w-72 h-20 bg-[var(--color-2)] absolute -bottom-6"></div>
                </div>
                <div class="relative max-w-sm h-[27rem] bg-blue-100 dark:bg-gray-700 border border-[#0c66ee]  rounded-3xl flex justify-center items-center transform transition-all hover:-translate-y-2 duration-300 shadow-[5px_5px_0px_0px_rgb(29,112,240)] hover:shadow-2xl mt-4">
                  <div
                    class="w-72 h-48 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] absolute -top-8 flex flex-col justify-center
    items-center rounded-3xl"
                  >
                    <img
                      class=" h-48 rounded-full mb-10"
                      src="/images/handshake.png"
                      alt="userimg"
                    />
                  </div>
                  <div
                    class="w-full h-36 px-6 mt-12 flex flex-col justify-evenly 
font-bold text-gray-800 text-base"
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Reliability:
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100 mt-2">
                      " You can count on us to deliver your project on time and
                      within budget. "
                    </p>
                  </div>
                </div>
              </div>
            </section>
     
            {/* <section>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="overflow-hidden rounded border-gray-900 dark:border-gray-300 lg:flex lg:col-span-3">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://source.unsplash.com/random/485x365"
                    alt=""
                    className="object-cover w-full h-auto max-h-96 bg-gray-400 dark:bg-gray-500"
                  />
                  <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-gray-400 dark:bg-gray-900">
                    <span className="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-400 dark:text-gray-900">
                      Business
                    </span>
                    <h2 className="text-xl md:flex-1">
                      {`Already have a project? We're here to improve it. Looking for talented developers? Our pool of skilled professionals is ready
                                         to showcase their expertise through part-time, full-time, or contract opportunities.`}
                    </h2>
                    <div>
                      <p className="dark:text-gray-400">November 30, 2020</p>
                      <p className="dark:text-gray-400">By Leroy Jenkins</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-center align-center p-6 bg-gray-400 border border-gray-900 dark:border-gray-300   rounded lg:p-8 lg:py-12 dark:bg-gray-900">
                  <h3 className="font-medium dark:text-gray-50 text-lg">
                    Engaging
                  </h3>
                  <p className="">
                    {`At Chill Academy, we prioritize active and meaningful engagement with our clients.
                             We listen attentively, making your ideas our own. This deep involvement ensures
                              a thorough understanding of your vision and goals, forming the basis for a 
                              successful collaboration.`}
                  </p>
                </div>
                <div className="flex flex-col gap-3 justify-center align-center p-6  bg-gray-400 border border-gray-900 dark:border-gray-300  rounded lg:p-8 lg:py-12 dark:bg-gray-900">
                  <h3 className="font-medium dark:text-gray-50 text-lg">
                    Creating
                  </h3>
                  <p className="">
                    {` Once engaged, we take the gathered information and use it to create a comprehensive project plan.
                             We conceptualize and design solutions tailored to your specific requirements. The emphasis on "creating"
                              underscores our proactive approach to turning ideas into tangible and effective projects.`}
                  </p>
                </div>
                <div className="flex flex-col gap-3 justify-center align-center p-6 bg-gray-400 border border-gray-900 dark:border-gray-300     rounded lg:p-8 lg:py-12 dark:bg-gray-900">
                  <h3 className="font-medium dark:text-gray-50 text-lg">
                    Caring
                  </h3>
                  <p className="">
                    {`We extend our commitment beyond the planning stage at Chill IT. Caring signifies ongoing support, meticulous
                                 attention to detail, and a genuine dedication to your project's success. From inception to completion, we ensure
                                  your satisfaction, reflecting our long-term commitment to the implemented solution's success.`}
                  </p>
                </div>
              </div>
            </section> */}
          </div>
        </main>
      </div>
    </div>
  );
};
export default Section;
