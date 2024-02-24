"use client";
// testimonials-carousel.js
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
    name: "Maria Kate",
    heading: "From Dream to Reality",
    sub_heaidng:"How We Launched Our Startup with Chill Academy",
    testimony:
      "Struggling to turn your innovative idea into a reality? Discover how Chill Academy helped us launch our startup, providing expert guidance and cutting-edge solutions throughout the journey. Read on to learn how their team's dedication and expertise fueled our success.",
    // Include the SVG and rating here if necessary
  },
  {
    id: 2,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg",
    name: "John Doe",
    heading: "Scaling New Heights",
    sub_heaidng:"Chill Academy's Impact on Our Business Growth",
    testimony:
      "Facing limitations in your current digital infrastructure? Learn how Chill Academy's customized solutions and strategic approach helped our business scale new heights. Dive into their seamless integration process and discover how their team empowered us to achieve ambitious goals.",
  },
  {
    id: 3,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    name: "Anna Deynah",
    heading: " Confidence in Every Line of Code",
    sub_heaidng:"Why We Trust Chill Academy's Software Development",
    testimony:
      " Seeking a reliable partner for your next software development project? Uncover why we choose Chill Academy for their meticulous testing and unwavering commitment to quality. Read on to experience the peace of mind and exceptional results that come with their expertise.",
  },
  {
    id: 4,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    name: "Anna Deynah",
    heading: " Beyond the Classroom",
    sub_heaidng:" Empowering Our Team with Chill Academy's Learning Solutions",
    testimony:
      " Looking to equip your team with the latest tech skills? Explore how Chill Academy's personalized learning platforms and engaging content empowered our team. Discover how their interactive approach made the learning process enjoyable and accessible, unlocking valuable skillsets for everyone involved.",
  },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [activeIndex]);

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What clients saying
        </h1>

        <div class="flex justify-center mx-auto mt-6">
          <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <div className="relative ">
          <div className="relative w-full overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative w-full transition-transform duration-[600ms] ease-in-out ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              >
                <div class="flex items-center justify-center px-5 py-5 mt-24">
                  <div class="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
                    <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                      <a href="#" class="relative block">
                        <img
                          alt="profil"
                          src={testimonial.image}
                          class="mx-auto object-cover rounded-full h-20 w-20 "
                        />
                      </a>
                    </div>
                    <div class="w-full mb-10">
                      <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                        “
                      </div>
                      <p class="px-5 text-xs text-center text-gray-600 dark:text-gray-100">
                        {testimonial.testimony}
                      </p>
                      <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                        ”
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold text-lg">
                     {testimonial.heading}
                      </p>
                      <p class="text-xs text-center text-gray-500 dark:text-gray-300">
                      {testimonial.sub_heaidng}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 z-10 flex w-10 items-center justify-center  bg-opacity-50 text-white hover:bg-opacity-75"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-6 w-6"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 z-10 flex w-10 items-center justify-center  bg-opacity-50 text-white hover:bg-opacity-75"
            onClick={nextSlide}
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-6 w-6"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
