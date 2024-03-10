"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import rightArrow from "../public/images/rightarrow.png";
import Image from "next/image";
import Webdesignicon from "../public/images/DetailService/WebDesignIcon.svg";
import DesignWonders from "../public/images/DetailService/DesignWonders.svg";
import WebUpdateIcon from "../public/images/DetailService/WebUpdateIcon.svg";
import MobileDesign from "../public/images/DetailService/MobileDesign.svg";
import BusinessPortfolio from '../public/images/DetailService/BusinessPortfolio.svg';
import EvaluateIcon from "../public/images/DetailService/EvaluateIcon.svg";
import SocialPortfolio from '../public/images/DetailService/SocialPortfolio.svg';
import PersonalPortfolio from '../public/images/DetailService/PersonalPortfolio.svg';
import SEOIcon from "../public/images/DetailService/SEOIcon.svg";
import AssignmentIcon from "../public/images/DetailService/AssignmentIcon.svg";
import YoutubeIcon from "../public/images/DetailService/YoutubeIcon.svg";
import TeachingIcon from "../public/images/DetailService/TeachingIcon.svg";
import CodeLearn from "../public/images/DetailService/CodeLearn.svg";
import ITSupportIcon from "../public/images/DetailService/ITSupportIcon.svg";
const ProductComponent = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default to first item open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index); // Allow toggling the open panel
  };

  useEffect(() => {
    // Ensure the first accordion is open by default when the component mounts
    setOpenIndex(0);
  }, []);

  const accordionData = [
    {
      title: "Web Development",

      cards: [
        {
          icon: (
            <Image
              src={Webdesignicon}
              className="h-14 w-14"
              alt="Webdesignicon"
            ></Image>
          ),
          title: "Web App Excellence",
          sub_title: "Innovative, Tailored Web Solutions",
          description:
            "Transform your vision with our expertly crafted web applications. At Chill Academy, we blend creativity and technology to enhance your digital footprint. Experience custom, user-friendly solutions that propel your business forward in the digital world.",
        },
        {
          icon: (
            <Image
              src={DesignWonders}
              className="h-14 w-14"
              alt="DesignWonders"
            ></Image>
          ),
          title: "Web Design Wonders",
          sub_title: "Versatile, Engaging Websites",
          description:
            "Chill Academy excels in creating websites that connect with your audience. From sleek e-commerce sites to engaging blogs, we deliver designs that stand out. Expect user-friendly, visually appealing sites tailored to your needs.",
        },
        {
          icon:  <Image src={WebUpdateIcon } className='h-14 w-14' alt="WebUpdateIcon "></Image>,
          title: "Custom Web & Mobile Solutions",
          sub_title: "Innovative Custom Software Development",
          description: "Chill Academy specializes in custom software solutions for web and mobile platforms. Our team crafts unique, adaptable applications tailored to meet your specific needs, ensuring innovation and functionality in every build.",
         
        },
      ],
    },
    {
      title: "Mobile Development",
      cards: [
        {
        
          icon:     <Image src={MobileDesign} className='h-14 w-14' alt="MobileDesign"></Image>,
          title: "Mobile App Mastery",
          sub_title: "Simple, Effective Mobile Solutions",
          description: "At Chill Academy, we create easy-to-use mobile apps that boost your online presence. Our approach is all about making your web experience better through smart, user-friendly mobile applications.",
      
        },
      
      ],
    },
    {
      title: "Portfolio Development",
      cards: [
        {
          icon: (
            <Image
              src={BusinessPortfolio}
              className="h-14 w-14"
              alt="BusinessPortfolioicon"
            ></Image>
          ),
          title: "Business Portfolio",
          sub_title: "Building Trust and Credibility",
          description:
            "Demonstrate your expertise and value proposition by presenting impactful case studies. Detail challenges solved, strategies implemented, and quantifiable results achieved to build trust and attract potential clients.",
        },
        {
          icon: (
            <Image
              src={PersonalPortfolio}
              className="h-14 w-14"
              alt="PersonalPortfolio"
            ></Image>
          ),
          title: "Social Media Portfolio",
          sub_title: "Visually Captivating Content",
          description:
            "Capture attention with high-quality visuals, showcasing your best work on platforms like Instagram, Behance, or Dribbble. Use engaging captions and relevant hashtags to reach a wider audience and amplify your brand voice.",
        },
        {
          icon:  <Image src={SocialPortfolio } className='h-14 w-14' alt="SocialPortfolio "></Image>,
          title: "Personal Portfolio",
          sub_title: "Highlighting Your Individuality",
          description: "Choose projects that best represent your skills, interests, and career aspirations. Tailor your portfolio content to showcase your unique strengths and passion for your field.",
         
        },
      ],
    },
    {
      title: "SEO Powerhouse: Drive Traffic and Conversions",
      cards: [
        {
      
          icon: <Image src={SEOIcon} className='h-14 w-14' alt="SEOIcon"></Image>,
          title: "SEO Success Strategy",
          sub_title: "Boost Your Site's Visibility",
          description: "Elevate your online presence with Chill IT's SEO Optimization. Our expert strategies ensure your website ranks higher and reaches the right audience. Experience the power of targeted visibility and improved search rankings with us.",
         
        },
    
      ],
    },
    {
      title: "Expert Help for Projects & Assignments",
      cards: [
        {
          icon: <Image src={AssignmentIcon} className='h-14 w-14' alt="AssignmentIcon"></Image>,
          title: "Project & Assignment Mastery",
          sub_title: "Expert Help for Your Academic Journey",
          description: "Chill Academy specializes in assisting with assignments and final year projects. Our team offers expert guidance and hands-on support, helping students navigate and excel in their academic tasks across various subjects.",
         
        },
        {
          icon:  <Image src={EvaluateIcon} className='h-14 w-14' alt="EvaluateIcon"></Image>,
          title: "Elevate Your Project",
          sub_title: "Revolutionize with Cutting-Edge Upgrades",
          description: "At Chill Academy, we transform your existing projects with the latest tech advancements. Our team expertly integrates innovative features and enhancements, ensuring your project stays ahead in the digital realm.",
         
        },
    
      ],
    },
    {
      title: "Design Dynamics: Elevating Brands with Logo Creation & Video Editing",
      cards: [
        {
          icon: <Image src={YoutubeIcon } className='h-14 w-14' alt="YoutubeIcon "></Image> ,
          title: "YouTube & Branding Creatives",
          sub_title: "Expert Video & Logo Design",
          description: "Enhance your YouTube presence with Chill Academy video editing and logo design. We create engaging content and logos that amplify your digital identity.",
         
        },
    
      ],
    },
    {
      title: "1-on-1 Success: Personalized Online Tutoring",
      cards: [
        {
          icon: <Image src={TeachingIcon} className='h-14 w-14' alt="TeachingIcon"></Image> ,
          title: "1:1 Online Tutoring",
          sub_title: "Customized Learning for Every Student",
          description: "Chill Academy Online Tutoring offers interactive, personalized learning experiences. Our tutors use the latest technology to make education accessible and engaging, catering to diverse learning needs and goals.",
         
        },
    
      ],
    },
    {
      title: "Learn to Code with Ease: Courses for Everyone",
      cards: [
        {
          id: 8,
          icon:  <Image src={CodeLearn} className='h-14 w-14' alt="CodeLearn"></Image> ,
          title: "Code Learning Made Easy",
          sub_title: "Unlock Coding Skills at Any Level",
          description: "Chill Academy coding courses are designed for learners of all ages and levels. Our interactive, tech-driven approach makes learning to code accessible, enjoyable, and effective for everyone.",
         
        },
    
      ],
    },
    {
      title: "Chill Academy: Your Remote IT Experts(Get Fast, Reliable Solutions for Computer & Software Issues)      ",
      cards: [
        {
  
          icon:  <Image src={ITSupportIcon} className='h-14 w-14' alt="ITSupportIcon"></Image> ,
          title: "Remote IT Solutions",
          sub_title: "Expert Help for Computer & Software Issues",
          description: "Chill Academy provides fast, remote IT services for troubleshooting computer and software problems. Our experts specialize in system diagnostics, Windows issues, and software repairs, offering efficient solutions remotely.",
         
        },
    
      ],
    },
  ];

  return (
    <div className="bg-gray-800 flex flex-col justify-center -mt-10 min-h-screen">
      <div className="text-center ">
        <div className="flex justify-center items-center mt-8">
          <Image src={rightArrow} alt="rightarrow" width={50} height={10} />
          <p className="text-white text-opacity-90 -ml-2 font-bold">
            OUR Products
          </p>
        </div>
        <h1 className="title-font mb-4 text-lg font-extrabold leading-10 tracking-tight sm:leading-none">
          Ignite Your{" "}
          <span className="text-header-gradient-2"> Digital Future</span>:
          Powerful Products to Achieve Your Vision
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
         {`Take your digital presence to the next level with Chill Academy's
          innovative products. We offer easy-to-understand solutions designed to
          make your ideas a reality, boost your online presence, and help you
          reach your goals.`}
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#468ef9] to-[#0c66ee] inline-flex"></div>
        </div>
      </div>
      <div className="p-4 w-full max-w-[95%] ml-auto mr-auto">
        {accordionData.map((item, index) => (
          <div key={index} className="mb-8 last:mb-0 p-1">
            <button
              className={`accordion-header flex justify-between items-center w-full px-5 py-3 text-left font-semibold dark:text-white dark:bg-blue-gray-900 bg-white rounded-lg shadow-md transition duration-300 ease-in-out ${
                openIndex === index ? "bg-indigo-200" : "hover:bg-gray-50"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <FontAwesomeIcon
                icon={openIndex === index ? faMinus : faPlus}
                className="text-lg"
              />
            </button>
            <div
              className={`accordion-body overflow-hidden  transition-height duration-500 ease-in-out ${
                openIndex === index ? "max-h-[90%] md:max-h-[90vh] lg:max-h-[80vh]" : "max-h-0"
              }`}
            >
              {item.cards && (
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                  {item.cards.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="p-10 md:w-1/3 md:mb-0 mb-8 flex flex-col mt-4 "
                    >
                      <div className="pattern-dots-md gray-light">
                        <div className="rounded bg-blue-100 dark:bg-gray-900 p-4 transform translate-x-6 -translate-y-6 transition duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 shadow-lg hover:shadow-2xl">
                          <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-green-200 dark:bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2 ">
                            {card.icon}
                          </div>
                          <div className="flex-grow text-gray-900 dark:text-white">
                            <h2 className="text-xl title-font font-medium mb-3">
                              <span className="text-header-gradient-2 font-bold">
                                Chill Academy:
                              </span>{" "}
                              {card.title}
                            </h2>
                            <h4 className="text-xs text-blue-gradient -mt-3 font-bold">
                              {card.sub_title}
                            </h4>
                            <p className="leading-relaxed text-sm text-justify">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
