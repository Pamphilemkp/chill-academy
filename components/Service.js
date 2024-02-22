import React from "react";
import Image from "next/image";
import ServiceBackground from "../public/images/ServiceBackground.gif";
import rightArrow from "../public/images/rightarrow.png";
import webDesignLogo from "../public/images/Services/ServiceCardImages/WebDesign.png";
import SEO from "../public/images/Services/ServiceCardImages/SEOWeb.png";
import LearningCode from "../public/images/Services/ServiceCardImages/Learning.png";
import Innovation from "../public/images/Services/ServiceCardImages/Innovation.png";
import greenTick from "../public/images/Services/green tick.png";
import { useTranslation } from 'react-i18next';


const Service = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="card-background pb-8">
        <div className="  flex flex-col justify-center items-center w-full">
          <div className="flex justify-center items-center ">
            <Image src={rightArrow} alt="rightarrow" width={50} height={10} />
            <p className="text-white text-opacity-90 -ml-2 font-bold">
              {t('services-component')}
            </p>
          </div>
          <h1 className="font-bold text-3xl text-opacity-90 text-wrap leading-relaxed w-80 text-center">
            {t('Your')}{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
              <span className="relative text-white ">{t('one-shop')}</span>
            </span>{" "}
            {t('for-your-need')}<span className="text-red-500">.</span>
          </h1>
        </div>

        <div className=" w-full  ">
          <div className="w-full flex gap-8 mt-6  justify-center flex-wrap items-center  ">
            <div className="container lg:w-[46%] lg:h-[32vh] md:w-[43%] md:h-[36vh]  w-[80%] h-[50%] flex-col flex flex-wrap  md:flex-col  items-center justify-center   isolate aspect-video bg-black/70  shadow-lg ring-1 ring-black/5 border border-[#0c66ee]  rounded-3xl transform    hover:bg-black/70  transition duration-500 hover:scale-110 drop-shadow-2xl">
              <div className="w-full flex flex-col">
                <div className="flex lg:flex-row md:flex-col flex-col md:justify-center md:items-center  ">
                  <div className=" lg:w-[30%] lg:h-[100%] md:w-full w-[100%] flex justify-center items-center">
                    <Image
                      src={webDesignLogo}
                      alt="rightarrow"
                      className=" md:mt-4 w-[45%] md:w-[40%] mt-4  lg:w-[100%] "
                    />
                  </div>
                  <div className="lg:w-[70%] md:w-[100%] flex flex-col justify-center text-white overflow-hidden p-2 gap-3 lg:gap-2 md:gap-2">
                    <h3 className="font-bold lg:text-sm md:text-lg   text-header-gradient-2 text-sm text-center md:text-left lg:text-left">
                      {t('Web-Mobile-Development')}
                    </h3>
                    <h4 className="lg:text-xs md:text-base -mt-1 text-xs">
                      {t('Web-Mobile-Development-desc')}
                    </h4>
                    <ul className=" flex flex-col gap-2 ">
                      <li className="flex  ">
                        <div className="flex text-sm justify-center items-start  gap-2 ">
                          <Image
                            src={greenTick}
                            alt="greenTick"
                            width={20}
                            height={10}
                          />
                          <div className="flex lg:gap-3 md:gap-3 gap-3 ">
                            <div className="">
                              <span className="font-bold text-header-gradient-2 lg:text-xs md:text-sm text-xs  ">
                                {t('Web-Apps:')}
                              </span>
                            </div>
                            <div className="flex justify-center items-center ">
                              {" "}
                              <p className="lg:text-xs md:text-sm text-xs">
                                {t('Web-Apps-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex justify-center items-start gap-2 ">
                          <Image
                            src={greenTick}
                            alt="greenTick"
                            width={20}
                            height={10}
                          />
                          <div className="flex lg:gap-0 md:gap-3 gap-2">
                            <div className="flex w-[35%] lg:w-[40%] md:w-[40%] ">
                              <span className="font-bold text-header-gradient-2 lg:text-xs md:text-sm text-xs">
                                {t('Mobile-Apps')}
                              </span>{" "}
                            </div>
                            <div className="flex ">
                              <p className="lg:text-xs md:text-sm text-xs">
                                {t('Mobile-Apps-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex text-sm justify-center gap-2">
                          <div className="flex justify-center items-start ">
                            <Image
                              src={greenTick}
                              alt="greenTick"
                              width={25}
                              height={10}
                              className=""
                            />
                          </div>
                          <div className="flex lg:gap-0 md:gap-3 gap-2">
                            <div className="w-[32%] lg:w-[36%] md:w-[36%]">
                              <span className="font-bold text-header-gradient-2 text-xs lg:text-xs md:text-sm">
                                {t('Websites')}
                              </span>{" "}
                            </div>
                            <div>
                              <p className=" lg:text-xs md:text-sm text-xs">
                                {" "}
                                {t('Websites-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container lg:w-[46%] lg:h-[32vh] md:w-[43%] md:h-[36vh]  w-[80%] h-[50%] flex-col flex flex-wrap  md:flex-col  items-center justify-center   isolate aspect-video bg-black/70  shadow-lg ring-1 ring-black/5 border border-[#0c66ee]  rounded-3xl transform    hover:bg-black/70  transition duration-500 hover:scale-110 drop-shadow-2xl">
              <div className="w-full flex flex-col">
                <div className="flex lg:flex-row md:flex-col flex-col md:justify-center md:items-center  ">
                  <div className=" lg:w-[30%] lg:h-[100%] md:w-full w-[100%] flex justify-center items-center">
                    <Image
                      src={SEO}
                      alt="SEO Logo"
                      className=" md:mt-4 w-[45%] md:w-[40%] mt-4  lg:w-[90%] "
                    />
                  </div>
                  <div className="lg:w-[70%] md:w-[100%] flex flex-col justify-center text-white overflow-hidden p-2 gap-3 lg:gap-2 md:gap-2">
                    <h3 className="font-bold lg:text-sm md:text-lg   text-header-gradient-2 text-sm text-center md:text-left lg:text-left">
                    {t('service-1')}
                    </h3>
                    <h4 className="lg:text-xs md:text-base -mt-1 text-xs">
                    {t('service-1-desc')}
                    </h4>
                    <ul className=" flex flex-col gap-2 ">
                      <li className="flex  ">
                        <div className="flex text-sm justify-center items-start  gap-2 ">
                          <Image
                            src={greenTick}
                            alt="greenTick"
                            width={20}
                            height={10}
                          />
                          <div className="flex lg:gap-6 md:gap-11 gap-6 ">
                            <div className="">
                              <span className="font-bold text-header-gradient-2 lg:text-xs md:text-sm text-xs  ">
                              SEO Boost:
                              </span>
                            </div>
                            <div className="flex justify-center items-center ">
                              {" "}
                              <p className="lg:text-xs md:text-sm text-xs">
                                {t('seo-boost')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex justify-center items-start gap-2 ">
                          <Image
                            src={greenTick}
                            alt="greenTick"
                            width={20}
                            height={10}
                          />
                          <div className="flex lg:gap-0 md:gap-3 gap-2">
                            <div className="flex w-[27%] lg:w-[30%] md:w-[40%] ">
                              <span className="font-bold text-header-gradient-2 lg:text-xs md:text-sm text-xs">
                              {t('Upgrade-Projects:')}
                              </span>{" "}
                            </div>
                            <div className="flex ">
                              <p className="lg:text-xs md:text-sm text-xs">
                              {t('Upgrade-Projects-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex text-sm justify-center gap-2">
                          <div className="flex justify-center items-start ">
                            <Image
                              src={greenTick}
                              alt="greenTick"
                              width={20}
                              height={10}
                              className=""
                            />
                          </div>
                          <div className="flex lg:gap-0 md:gap-3 gap-2">
                            <div className="w-[24%] lg:w-[29%] md:w-[36%]">
                              <span className="font-bold text-header-gradient-2 text-xs lg:text-xs md:text-sm">
                              {t('IT-Support')}
                              </span>{" "}
                            </div>
                            <div>
                              <p className="lg:text-xs md:text-sm text-xs">
                                {" "}
                                {t('IT-Support-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container lg:w-[46%] lg:h-[32vh] md:w-[43%] md:h-[36vh]  w-[80%] h-[50%] flex-col flex flex-wrap  md:flex-col  items-center justify-center   isolate aspect-video bg-black/70  shadow-lg ring-1 ring-black/5 border border-[#0c66ee]  rounded-3xl transform    hover:bg-black/70  transition duration-500 hover:scale-110 drop-shadow-2xl">
              <div className="w-full flex flex-col">
                <div className="flex lg:flex-row md:flex-col flex-col md:justify-center md:items-center  ">
                  <div className=" lg:w-[30%] lg:h-[100%] md:w-full w-[100%] flex justify-center items-center">
                    <Image
                      src={LearningCode}
                      alt="Learning Logo"
                      className=" md:mt-4 w-[45%] md:w-[40%] mt-4  lg:w-[100%] "
                    />
                  </div>
                  <div className="lg:w-[70%] md:w-[100%] flex flex-col justify-center text-white overflow-hidden p-2 gap-3 lg:gap-2 md:gap-2">
                    <h3 className="font-bold lg:text-sm md:text-lg   text-header-gradient-2 text-sm text-center md:text-left lg:text-left">
                    {t('service-2')}
                    </h3>
                    <h4 className="lg:text-xs md:text-base -mt-1 text-xs">
                      {t('service-2-desc')}
                    </h4>
                    <ul className=" flex flex-col gap-2 ">
                      <li className="flex  ">
                        <div className="flex text-sm justify-center items-start  gap-2 ">
                          <Image
                            src={greenTick}
                            alt="greenTick"
                            width={20}
                            height={10}
                          />
                          <div className="flex lg:gap-0 md:gap-0  ">
                            <div className="">
                              <span className="font-bold text-header-gradient-2 lg:text-xs md:text-sm text-xs  ">
                              {t('service3')}
                              </span>
                            </div>
                            <div className="flex justify-center items-center ">
                              {" "}
                              <p className="lg:text-xs md:text-sm text-xs">
                              {t('service3-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex justify-center items-start gap-2 ">
                          <Image
                            src={greenTick}
                            alt="greenTick"
                            width={20}
                            height={10}
                          />
                          <div className="flex lg:gap-0 md:gap-3 gap-2">
                            <div className="flex w-[45%] lg:w-[51%] md:w-[50%] ">
                              <span className="font-bold text-header-gradient-2 lg:text-xs md:text-sm text-xs">
                              {t('Tech-Tricks')}
                              </span>{" "}
                            </div>
                            <div className="flex ">
                              <p className="lg:text-xs md:text-sm text-xs">
                                {t('Tech-Tricks-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex text-sm justify-center gap-2">
                          <div className="flex justify-center items-start ">
                            <Image
                              src={greenTick}
                              alt="greenTick"
                              width={25}
                              height={10}
                              className=""
                            />
                          </div>
                          <div className="flex lg:gap-0 md:gap-3 gap-2">
                            <div className="w-[38%] lg:w-[44%] md:w-[45%]">
                              <span className="font-bold text-header-gradient-2 text-xs lg:text-xs md:text-sm">
                              {t('Software-Deals')}
                              </span>{" "}
                            </div>
                            <div>
                              <p className=" lg:text-xs md:text-sm text-xs">
                                {" "}
                                {t('Software-Deals-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container lg:w-[46%] lg:h-[32vh] md:w-[43%] md:h-[36vh]  w-[80%] h-[50%] flex-col flex flex-wrap  md:flex-col  items-center justify-center   isolate aspect-video bg-black/70  shadow-lg ring-1 ring-black/5 border border-[#0c66ee]  rounded-3xl transform    hover:bg-black/70  transition duration-500 hover:scale-110 drop-shadow-2xl">
              <div className="w-full flex flex-col">
                <div className="flex lg:flex-row md:flex-col flex-col md:justify-center md:items-center  ">
                  <div className=" lg:w-[30%] lg:h-[100%] md:w-full w-[100%] flex justify-center items-center">
                    <Image
                      src={Innovation}
                      alt="Innovation Logo"
                      className=" md:mt-4 w-[45%] md:w-[40%] mt-4  lg:w-[100%] "
                    />
                  </div>
                  <div className="lg:w-[70%] md:w-[100%] flex flex-col justify-center text-white overflow-hidden p-2 gap-3 lg:gap-2 md:gap-2">
                    <h3 className="font-bold lg:text-sm md:text-lg   text-header-gradient-2 text-sm text-center md:text-left lg:text-left">
                    {t('service-4')}
                    </h3>
                    <h4 className="lg:text-xs md:text-base -mt-1 text-xs">
                    {t('service-4-desc')}
                    </h4>
                    <ul className=" flex flex-col gap-2 ">
                      <li className="flex  ">
                        <div className="flex text-sm justify-center items-start  gap-2 ">
                          <Image
                            src={greenTick}
                            alt="greenTick"
                            width={20}
                            height={10}
                          />
                          <div className="flex lg:gap-0 md:gap-3  ">
                            <div className="">
                              <span className="font-bold text-header-gradient-2 lg:text-xs md:text-sm text-xs  ">
                              {t('Developer-Hirings')}
                              </span>
                            </div>
                            <div className="flex justify-center items-center ">
                              {" "}
                              <p className="lg:text-xs md:text-sm text-xs">
                              {t('Developer-Hirings-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex justify-center items-start gap-2 ">
                          <Image
                            src={greenTick}
                            alt="greenTick"
                            width={20}
                            height={10}
                          />
                          <div className="flex lg:gap-0 md:gap-3 ">
                            <div className="flex w-[53%] lg:w-[52%] md:w-[62%] ">
                              <span className="font-bold text-header-gradient-2 lg:text-xs md:text-sm text-xs">
                              {t('Innovative-Solutions')}
                              </span>{" "}
                            </div>
                            <div className="flex ">
                              <p className="lg:text-xs md:text-sm text-xs">
                              {t('Innovative-Solutions-desc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex text-sm justify-center gap-2">
                          <div className="flex justify-center items-start ">
                            <Image
                              src={greenTick}
                              alt="greenTick"
                              width={25}
                              height={10}
                              className=""
                            />
                          </div>
                          <div className="flex lg:gap-0 md:gap-3 ">
                            <div className="w-[39%] lg:w-[38%] md:w-[36%]">
                              <span className="font-bold text-header-gradient-2 text-xs lg:text-xs md:text-sm">
                              {t('Partnership-Collaboration')}
                              </span>{" "}
                            </div>
                            <div>
                              <p className=" lg:text-xs md:text-sm text-xs">
                                {" "}
                                {t("Partnership-Collaboration-desc")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
