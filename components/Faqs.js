'use client'

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const Faqs = () => {
  
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
      {
        question: t('faq-4'),
        answer: t('faq-4-Answer')
      },
      {
        question: t('faq-5'),
        answer: t('faq-5-Answer')
      },
      {
        question: t('faq-6'),
        answer: t('faq-6-Answer')
      },
      {
        question: t('faq-7'),
        answer: t('faq-7-Answer')
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
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">{t('faqs-heading')}</h1>
    
            <div className="container mt-8  space-y-8 lg:mt-12 ">
              {faqData.map((item, index) => (
                <div key={index} className="p-8 bg-gray-100 rounded-lg dark:bg-gray-900">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="flex items-center justify-between w-full"
                  >
                    <h1 className="font-semibold text-gray-700 dark:text-white">{item.question}</h1>
                    <span className={`text-white ${openQuestions[index] ? 'bg-blue-500' : 'bg-gray-500'} rounded-full`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                      </svg>
                    </span>
                  </button>
                  {openQuestions[index] && (
                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};

export default Faqs;
