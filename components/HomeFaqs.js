"use client";
import Link from "next/link";
import React, { useState } from "react";

const HomeFaqs = () => {
  const faqData = [
    {
      question: "Who are your clients?",
      answer: `Our clients encompass anyone with a project in mind or those harboring an idea.
           At Chill Academy, we specialize in transforming ideas, no matter how small, into successful business ventures.
            Fueled by passion, our team of developers is dedicated to turning any conceivable idea into a tangible, codable project.`,
    },
    {
      question: "Where are your clients based?",
      answer: `Chill Academy doesn't have geographical limitations. We've assembled a diverse team of developers from around the world,
         embracing the richness of varied perspectives and eliminating borders or language barriers. Our primary goal is global recognition,
          earning the trust of clients by not just delivering projects but ensuring their ongoing satisfaction long after project completion.`,
    },
    {
      question: "How much is the initial price to start working with you?",
      answer: `The cost, particularly the initial investment, is project-dependent. It hinges on factors such as project requirements and
         deadlines provided by our clients. At Chill Academy, we emphasize transparency and are always available to discuss your project,
          providing consultations free of charge.`,
    },
  ];

  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prevOpenQuestions) => ({
      ...prevOpenQuestions,
      [index]: !prevOpenQuestions[index],
    }));
  };

  return (
    <section className="bg-blue-100 dark:bg-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h1>

        <div className="mt-8 space-y-8 lg:mt-12">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gray-100 rounded-lg dark:bg-gray-900"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex items-center justify-between w-full"
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  {item.question}
                </h1>
                <span
                  className={`text-white ${
                    openQuestions[index] ? "bg-blue-500" : "bg-gray-500"
                  } rounded-full`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              </button>

              {openQuestions[index] && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
          <div className="flex justify-center items-center">
            <Link
              href="/Faqs"
              class=" relative px-5 py-2 font-medium text-white group"
            >
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blue-500 group-hover:bg-blue-700 group-hover:skew-x-12"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue-700 group-hover:bg-blue-500 group-hover:-skew-x-12"></span>
              <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-blue-600 -rotate-12"></span>
              <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-blue-400 -rotate-12"></span>
              <span class="relative text-center">
                Need Help? Visit our FAQs
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaqs;
