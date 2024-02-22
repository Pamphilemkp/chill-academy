"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import Service from "./Service";
import { useTranslation } from 'react-i18next';

const Section = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-blue-100 dark:bg-gray-800  dark:text-gray-100 mt-4">
      <div className="p-6 space-y-8">
        <main>
          <div className="container mx-auto space-y-16">
            <section className="">
              <span className="block mb-2 text-xs font-medium tracki uppercase  text-center lg:text-center text-orange-500 dark:text-violet-400">
              {t('section-works')}
              </span>
              <h2 className=" text-xl lg:text-5xl font-bold lg:text-center text-gray-800 dark:text-gray-50 relative text-center">
                {" "}
                <span className="relative">
                  {t('formula-title')}
                  <span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-cyan-400 to-purple-300 rounded-full"
                  ></span>
                </span>
              </h2>

              <div className="grid gap-8 my-16 lg:grid-cols-3">
                <div className="relative max-w-sm h-[27rem] bg-blue-100 dark:bg-gray-700 border border-[#0c66ee]  rounded-3xl flex justify-center items-center transform transition-all hover:-translate-y-2 duration-300 shadow-[5px_5px_0px_0px_rgb(29,112,240)] hover:shadow-2xl mt-4">
                  <div
                    className="w-72 h-48 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] absolute -top-8 flex flex-col justify-center  items-center rounded-3xl"
                  >
                    <Image
                      width={1000}
                      height={1000}
                      className=" rounded-full mb-10"
                      src="/images/listening.png"
                      alt="userimg"
                    />
                  </div>
                  <div
                    className="w-full h-36 px-6 mt-36 flex flex-col justify-evenly font-bold text-gray-800 text-base"
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {t('formula1')}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100 mt-2">
                      {t('formula1-desc')}
                    </p>
                  </div>
                  <div className="w-72 h-20 bg-[var(--color-2)] absolute -bottom-6"></div>
                </div>
                <div className="relative max-w-sm h-[27rem] bg-blue-100 dark:bg-gray-700 border border-[#0c66ee]  rounded-3xl flex justify-center items-center transform transition-all hover:-translate-y-2 duration-300 shadow-[5px_5px_0px_0px_rgb(29,112,240)] hover:shadow-2xl  mt-4 ">
                  <div
                    className="w-72 h-48 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] absolute -top-8 flex flex-col justify-center items-center rounded-3xl"
                  >
                    <Image
                      width={1000}
                      height={1000}
                      className=" rounded-full mb-10"
                      src="/images/problem-solving-unscreen.gif"
                      alt="userimg"
                    />
                  </div>
                  <div
                    className="w-full h-36 px-6 mt-14 flex flex-col justify-evenly font-bold text-gray-800 text-base"
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {t('formula2')}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100 mt-2">
                      {t('formula2-desc')}
                    </p>
                  </div>
                  <div className="w-72 h-20 bg-[var(--color-2)] absolute -bottom-6"></div>
                </div>
                <div className="relative max-w-sm h-[27rem] bg-blue-100 dark:bg-gray-700 border border-[#0c66ee]  rounded-3xl flex justify-center items-center transform transition-all hover:-translate-y-2 duration-300 shadow-[5px_5px_0px_0px_rgb(29,112,240)] hover:shadow-2xl mt-4">
                  <div
                    className="w-72 h-48 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] absolute -top-8 flex flex-col justify-center items-center rounded-3xl"
                  >
                    <Image
                      width={1000}
                      height={1000}
                      className=" h-48 rounded-full mb-10"
                      src="/images/handshake.png"
                      alt="userimg"
                    />
                  </div>
                  <div
                    className="w-full h-36 px-6 mt-12 flex flex-col justify-evenly font-bold text-gray-800 text-base"
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                     {t('formula3')}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100 mt-2">
                      {t('formula3-desc')}
                    </p>
                  </div>
                </div>
              </div>
            </section>
     
          </div>
        </main>
      </div>
    </div>
  );
};
export default Section;
