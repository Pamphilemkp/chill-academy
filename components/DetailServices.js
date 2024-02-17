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

const services = [
  {
    id: 1,
    icon:    <Image src={Webdesignicon} className='h-14 w-14' alt="Webdesignicon"></Image>, 
    title: "Web App Excellence",
    sub_title: "Innovative, Tailored Web Solutions",
    description: "Transform your vision with our expertly crafted web applications. At Chill Academy, we blend creativity and technology to enhance your digital footprint. Experience custom, user-friendly solutions that propel your business forward in the digital world.",
   
  },
  {
    id: 2,
    icon:     <Image src={MobileDesign} className='h-14 w-14' alt="MobileDesign"></Image>,
    title: "Mobile App Mastery",
    sub_title: "Simple, Effective Mobile Solutions",
    description: "At Chill Academy, we create easy-to-use mobile apps that boost your online presence. Our approach is all about making your web experience better through smart, user-friendly mobile applications.",

  },
  {
    id: 3,
    icon:  <Image src={DesignWonders} className='h-14 w-14' alt="DesignWonders"></Image>,
    title: "Web Design Wonders",
    sub_title: "Versatile, Engaging Websites",
    description: "Chill Academy excels in creating websites that connect with your audience. From sleek e-commerce sites to engaging blogs, we deliver designs that stand out. Expect user-friendly, visually appealing sites tailored to your needs.",
   
  },
  {
    id: 4,
    icon: <Image src={SEOIcon} className='h-14 w-14' alt="SEOIcon"></Image>,
    title: "SEO Success Strategy",
    sub_title: "Boost Your Site's Visibility",
    description: "Elevate your online presence with Chill IT's SEO Optimization. Our expert strategies ensure your website ranks higher and reaches the right audience. Experience the power of targeted visibility and improved search rankings with us.",
   
  },
  {
    id: 5,
    icon:  <Image src={EvaluateIcon} className='h-14 w-14' alt="EvaluateIcon"></Image>,
    title: "Elevate Your Project",
    sub_title: "Revolutionize with Cutting-Edge Upgrades",
    description: "At Chill Academy, we transform your existing projects with the latest tech advancements. Our team expertly integrates innovative features and enhancements, ensuring your project stays ahead in the digital realm.",
   
  },
  {
    id: 6,
    icon: <Image src={AssuranceIcon} className='h-14 w-14' alt="AssuranceIcon"></Image> ,
    title: "Assurance in Every Code",
    sub_title: "Meticulous Testing for Flawless Software",
    description: "Chill Academy Software Testing Service is dedicated to delivering error-free software. Our team excels in thorough testing methods, ensuring reliability and top performance in every application.",
   
  },
  {
    id: 7,
    icon: <Image src={TeachingIcon} className='h-14 w-14' alt="TeachingIcon"></Image> ,
    title: "1:1 Online Tutoring",
    sub_title: "Customized Learning for Every Student",
    description: "Chill Academy Online Tutoring offers interactive, personalized learning experiences. Our tutors use the latest technology to make education accessible and engaging, catering to diverse learning needs and goals.",
   
  },
  {
    id: 8,
    icon:  <Image src={CodeLearn} className='h-14 w-14' alt="CodeLearn"></Image> ,
    title: "Code Learning Made Easy",
    sub_title: "Unlock Coding Skills at Any Level",
    description: "Chill Academy coding courses are designed for learners of all ages and levels. Our interactive, tech-driven approach makes learning to code accessible, enjoyable, and effective for everyone.",
   
  },
  {
    id: 9,
    icon:  <Image src={ITSupportIcon} className='h-14 w-14' alt="ITSupportIcon"></Image> ,
    title: "Remote IT Solutions",
    sub_title: "Expert Help for Computer & Software Issues",
    description: "Chill Academy provides fast, remote IT services for troubleshooting computer and software problems. Our experts specialize in system diagnostics, Windows issues, and software repairs, offering efficient solutions remotely.",
   
  },
  {
    id: 10,
    icon: <Image src={AssignmentIcon} className='h-14 w-14' alt="AssignmentIcon"></Image>,
    title: "Project & Assignment Mastery",
    sub_title: "Expert Help for Your Academic Journey",
    description: "Chill Academy specializes in assisting with assignments and final year projects. Our team offers expert guidance and hands-on support, helping students navigate and excel in their academic tasks across various subjects.",
   
  },
  {
    id: 11,
    icon: <Image src={YoutubeIcon } className='h-14 w-14' alt="YoutubeIcon "></Image> ,
    title: "YouTube & Branding Creatives",
    sub_title: "Expert Video & Logo Design",
    description: "Enhance your YouTube presence with Chill Academy video editing and logo design. We create engaging content and logos that amplify your digital identity.",
   
  },
  {
    id: 12,
    icon:  <Image src={WebUpdateIcon } className='h-14 w-14' alt="WebUpdateIcon "></Image>,
    title: "Custom Web & Mobile Solutions",
    sub_title: "Innovative Custom Software Development",
    description: "Chill Academy specializes in custom software solutions for web and mobile platforms. Our team crafts unique, adaptable applications tailored to meet your specific needs, ensuring innovation and functionality in every build.",
   
  },

];
const DetailServices = () => {
  return (
    <>
      <section  className="text-gray-200 bg-gray-900" id="services">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="text-center mb-20">
          <div className="flex justify-center items-center ">
            <Image src={rightArrow} alt="rightarrow" width={50} height={10} />
            <p className="text-white text-opacity-90 -ml-2 font-bold">
              OUR SERVICES
            </p>
          </div>
            <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Discover Our <span className='text-header-gradient-2'>Tech Solutions</span> - Your Gateway to Digital Excellence</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Step into a world where your digital aspirations meet our technological prowess. At Chill Academy, we're not just about providing services; we're about crafting solutions that resonate with your unique needs. From developing cutting-edge applications to enhancing your online presence, our team is dedicated to elevating your project to new heights. Embark on a journey with us where innovation, efficiency, and client-focused solutions converge.</p>
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
    </>
  );
};

export default DetailServices;
