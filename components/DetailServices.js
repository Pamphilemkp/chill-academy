import React from 'react';
import rightArrow from "../public/images/rightarrow.png";
import Image from "next/image";
import Webdesignicon from "../public/images/DetailService/WebDesignIcon.svg";
import MobileDesign from "../public/images/DetailService/MobileDesign.svg";
import DesignWonders from "../public/images/DetailService/DesignWonders.svg";
import SEOIcon from "../public/images/DetailService/SEOIcon.svg";
import AssuranceIcon from "../public/images/DetailService/AssuranceIcon.svg";
import EvaluateIcon from "../public/images/DetailService/EvaluateIcon.svg";
import TeachingIcon from "../public/images/DetailService/TeachingIcon.svg";
import CodeLearn from "../public/images/DetailService/CodeLearn.svg";
import ITSupportIcon from "../public/images/DetailService/ITSupportIcon.svg";
import AssignmentIcon from "../public/images/DetailService/AssignmentIcon.svg";
import WebUpdateIcon from "../public/images/DetailService/WebUpdateIcon.svg";
import YoutubeIcon from "../public/images/DetailService/YoutubeIcon.svg";
import { useTranslation } from 'react-i18next';


const DetailServices = () => {

  
  const { t } = useTranslation();

const services = [
  {
    id: 1,
    icon:    <Image src={Webdesignicon} className='h-14 w-14' alt="Webdesignicon"></Image>, 
    title: t('ds-1-title'),
    sub_title: t('ds-1-sub_title'),
    description: t('ds-1-description'),
   
  },
  {
    id: 2,
    icon:     <Image src={MobileDesign} className='h-14 w-14' alt="MobileDesign"></Image>,
    title: t('ds-2-title'),
    sub_title: t('ds-2-sub_title'),
    description: t('ds-2-description'),
  },
  {
    id: 3,
    icon:  <Image src={DesignWonders} className='h-14 w-14' alt="DesignWonders"></Image>,
    title: t('ds-3-title'),
    sub_title: t('ds-3-sub_title'),
    description: t('ds-3-description'),
   
  },
  {
    id: 4,
    icon: <Image src={SEOIcon} className='h-14 w-14' alt="SEOIcon"></Image>,
    title: t('ds-4-title'),
    sub_title: t('ds-4-sub_title'),
    description: t('ds-4-description'),
  },
  {
    id: 5,
    icon:  <Image src={EvaluateIcon} className='h-14 w-14' alt="EvaluateIcon"></Image>,
    title: t('ds-5-title'),
    sub_title: t('ds-5-sub_title'),
    description: t('ds-5-description'),
  },
  {
    id: 6,
    icon: <Image src={AssuranceIcon} className='h-14 w-14' alt="AssuranceIcon"></Image> ,
    title: t('ds-6-title'),
    sub_title: t('ds-6-sub_title'),
    description: t('ds-6-description'),
  },
  {
    id: 7,
    icon: <Image src={TeachingIcon} className='h-14 w-14' alt="TeachingIcon"></Image> ,
    title: t('ds-7-title'),
    sub_title: t('ds-7-sub_title'),
    description: t('ds-7-description'),
  },
  {
    id: 8,
    icon:  <Image src={CodeLearn} className='h-14 w-14' alt="CodeLearn"></Image> ,
    title: t('ds-8-title'),
    sub_title: t('ds-8-sub_title'),
    description: t('ds-8-description'),
  },
  {
    id: 9,
    icon:  <Image src={ITSupportIcon} className='h-14 w-14' alt="ITSupportIcon"></Image> ,
    title: t('ds-9-title'),
    sub_title: t('ds-9-sub_title'),
    description: t('ds-9-description'),
  },
  {
    id: 10,
    icon: <Image src={AssignmentIcon} className='h-14 w-14' alt="AssignmentIcon"></Image>,
    title: t('ds-10-title'),
    sub_title: t('ds-10-sub_title'),
    description: t('ds-10-description'),
  },
  {
    id: 11,
    icon: <Image src={YoutubeIcon } className='h-14 w-14' alt="YoutubeIcon "></Image> ,
    title: t('ds-11-title'),
    sub_title: t('ds-11-sub_title'),
    description: t('ds-11-description'),
   
  },
  {
    id: 12,
    icon:  <Image src={WebUpdateIcon } className='h-14 w-14' alt="WebUpdateIcon "></Image>,
    title: t('ds-12-title'),
    sub_title: t('ds-12-sub_title'),
    description: t('ds-12-description'),
  },

];

  return (
      <section  className="text-gray-200 bg-gray-900" id="services">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="text-center mb-20">
          <div className="flex justify-center items-center ">
            <Image src={rightArrow} alt="rightarrow" width={50} height={10} />
            <p className="text-white text-opacity-90 -ml-2 font-bold">
              {t('our-service')}
            </p>
          </div>
            <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">{t('Discover-our')} <span className='text-header-gradient-2'>{t('tech-solution')}</span> - {t('tech-finish')}</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">{t('')}{`Step into a world where your digital aspirations meet our technological prowess. At Chill Academy, we're not just about providing services; we're about crafting solutions that resonate with your unique needs. From developing cutting-edge applications to enhancing your online presence, our team is dedicated to elevating your project to new heights. Embark on a journey with us where innovation, efficiency, and client-focused solutions converge.`}</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#468ef9] to-[#0c66ee] inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {services.map((service) => (
            <div key={service.id} className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <div className="pattern-dots-md gray-light">
                <div className="rounded bg-blue-100 dark:bg-gray-800 p-4 transform translate-x-6 -translate-y-6 transition duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 shadow-lg hover:shadow-2xl">
                  <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-green-200 dark:bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2 ">
               {service.icon}
                  </div>
                  <div className="flex-grow text-gray-900 dark:text-white">
                    <h2 className="text-xl title-font font-medium mb-3"><span className='text-header-gradient-2 font-bold'>Chill Academy:</span> {service.title}</h2>
                    <h4 className='text-xs text-blue-gradient -mt-3 font-bold'>{service.sub_title}</h4>
                    <p className="leading-relaxed text-sm text-justify">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
           ))}
           
          </div>
        </div>
      </section>
  );
};

export default DetailServices;
