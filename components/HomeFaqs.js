"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const HomeFaqs = () => {
  
  const { t } = useTranslation();

  const faqData = [
      {
        question: t('faq-1'),
        answer: t('faq-1-Answer')
      },
      {
        question: t('faq-2'),
        answer: t('faq-2-Answer')
      },
      {
        question: t('faq-3'),
        answer: t('faq-3-Answer')
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
        {t('faqs-heading')}
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
              className=" relative px-5 py-2 font-medium text-white group"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blue-500 group-hover:bg-blue-700 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue-700 group-hover:bg-blue-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-blue-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-blue-400 -rotate-12"></span>
              <span className="relative text-center">
                {t('home-faqs-btn')}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaqs;
