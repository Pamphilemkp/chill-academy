'use client'

import React, { useState } from 'react';

const Faqs = () => {
    const faqData = [
      {
        question: 'Who are your clients?',
        answer:
          `Our clients encompass anyone with a project in mind or those harboring an idea.
           At Chill Academy, we specialize in transforming ideas, no matter how small, into successful business ventures.
            Fueled by passion, our team of developers is dedicated to turning any conceivable idea into a tangible, codable project.`,
      },
      {
        question: 'Where are your clients based?',
        answer:  `Chill Academy doesn't have geographical limitations. We've assembled a diverse team of developers from around the world,
         embracing the richness of varied perspectives and eliminating borders or language barriers. Our primary goal is global recognition,
          earning the trust of clients by not just delivering projects but ensuring their ongoing satisfaction long after project completion.`,
      },
      {
        question: 'How much is the initial price to start working with you?',
        answer: `The cost, particularly the initial investment, is project-dependent. It hinges on factors such as project requirements and
         deadlines provided by our clients. At Chill Academy, we emphasize transparency and are always available to discuss your project,
          providing consultations free of charge.`,
      },
      {
        question: 'Is it true that getting a meeting with the CEO of Chill Academy is free?',
        answer: `Absolutely! For your initial contact with us, you can enjoy a complimentary 15-minute meeting with the CEO of Chill Academy.
         We believe in fostering open communication and understanding your needs, and this initial consultation comes at no cost to you.`,
      },
      {
        question: 'Can people from everywhere in the world apply for your services?',
        answer: `Absolutely! Just as mentioned earlier, our clients are truly borderless. We welcome individuals and businesses from every 
        corner of the globe. From Australia to Africa, Japan to Europe, and beyond, we receive project inquiries from all continents. 
        At Chill Academy, our team of developers, representing diverse backgrounds, passionately believes in making a positive impact on 
        the world through the power of diversity. We embrace collaboration with individuals and organizations from around the world.`,
      },
      {
        question: 'What are your opening hours?',
        answer: `Chill Academy operates around the clock, 24 hours a day, 7 days a week. Our commitment to diversity strengthens our capabilities,
         allowing you to reach out to us at any time. Whether you have a question, a project idea, or need assistance, feel free to contact
          us anytime, and we'll strive to provide you with a prompt response.`,
      },
      {
        question: 'What can I expect at my first consultation?',
        answer: `During your initial consultation, you have the unique opportunity to meet directly with the CEO of Chill Academy or our 
        Chief Operating Officer (COO). If you specifically wish to meet with our CEO, please share your reasons, and upon review, we can 
        arrange a meeting based on his availability, free of charge for the first 15 minutes. Following this introductory session, you 
        can decide whether to continue your consultation with our CEO, based on the pricing plan we will provide after initial contact.
         In your first consultation, expect to receive comprehensive information. We prioritize your experience and strive to make it 
         unforgettable in the best possible way, ensuring that you gain valuable insights and clarity about your project.`,
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
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>
    
            <div className="container mt-8 space-y-8 lg:mt-12 ">
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
