import React from 'react';
import rightArrow from "../public/images/rightarrow.png";
import Image from "next/image";
const services = [
  {
    id: 1,
    icon:  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>, 
    title: "Chill Academy: Web App Excellence",
    description: "Transform your vision with our expertly crafted web applications. At Chill Academy, we blend creativity and technology to enhance your digital footprint. Experience custom, user-friendly solutions that propel your business forward in the digital world.",
   
  },
  {
    id: 2,
    icon:      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>,
    title: "Chill Academy: Mobile App Mastery",
    description: "At Chill Academy, we create easy-to-use mobile apps that boost your online presence. Our approach is all about making your web experience better through smart, user-friendly mobile applications.",

  },
  {
    id: 3,
    icon:  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>,
    title: "Chill Academy: Web Design Wonders",
    description: "Chill Academy excels in creating websites that connect with your audience. From sleek e-commerce sites to engaging blogs, we deliver designs that stand out. Expect user-friendly, visually appealing sites tailored to your needs.",
   
  },
  {
    id: 3,
    icon:  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>,
    title: "Chill Academy: SEO Success Strategy",
    description: "Elevate your online presence with Chill IT's SEO Optimization. Our expert strategies ensure your website ranks higher and reaches the right audience. Experience the power of targeted visibility and improved search rankings with us.",
   
  },

];
const DetailServices = () => {
  return (
    <>
      <section className="text-gray-200 bg-gray-900">
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
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 transition duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 shadow-lg hover:shadow-2xl">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
               {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3">{service.title}</h2>
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
