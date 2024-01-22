"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export const metadata = {
  title: 'About',
  description: 'Once Upon a Tech Adventure with Chill Academy In the big world of tech, a bunch of tech-savvy friends decided to team up and do some really cool things. Before Chill Academy became a thing, each of them had their own stories of making cool stuff with computers and gadgets...',
};

export default function Home() {
    const [showDetails, setShowDetails] = useState(false);

    const handleLearnMoreClick = () => {
      setShowDetails(!showDetails);
    };
  
    return (
      <section className="flex items-center bg-blue-100  font-poppins dark:bg-gray-800">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-10">
              <div className="relative lg:max-w-md">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/aboutUsPicture.jpg"
                  alt="aboutimage"
                  className="relative z-10 object-cover w-full rounded h-96"
                />
                <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800">
                  <p className="text-lg font-semibold md:w-72">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>{' '}
                    Successfully Providing business solutions for our partners
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">Chill Academy</h1>
              </div>

              <p className={`mb-6 text-base leading-7 text-gray-500 dark:text-gray-400 `}>
                {`Once Upon a Tech Adventure with Chill Academy
                In the big world of tech, a bunch of tech-savvy friends decided to team up and do some really cool things. Before Chill Academy became a thing, each of them had their
                 own stories of making cool stuff with computers and gadgets.`}
                 <br/>
                 
                {`Now, imagine these tech buddies realizing that they could do even cooler things by working together. That's how Chill Academy came to be – a super team of the best computer
                 geeks, tech experts, and gadget enthusiasts, ready to turn your ideas into real-life digital wonders.
                At Chill Academy, we're not just a group of tech nerds; we're like builders creating dreams in the digital world.
                 Whether it's making awesome websites, fun phone apps, or helping your business get noticed online, we're here for it all.`}
                 <br/>
                 <b>Our mission is simple:</b> <br/>
              </p>
              <button
                onClick={handleLearnMoreClick}
                className="px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600 mb-5"
              >
                {showDetails ? 'Hide details' : 'Learn more'}
              </button>
            </div>
          </div>
          
          <p className={`px-6 md:px-4 mb-6 text-base leading-7 text-gray-500 dark:text-gray-400 ${showDetails ? 'block' : 'hidden'}`}>
                {`
                We want to help people like you, whether you're a student with a cool project or a business looking to shine online. We're here to turn your ideas into fantastic digital creations.
                In the heart of Chill Academy, we believe in teamwork – listening to your ideas, creating cool stuff together, and caring about making things awesome. Our team of tech whizzes is
                here to make sure your project isn't just good but totally amazing.`} <br />
                {` 
                But we're not just about doing the usual stuff. For students finishing up their tech studies, we're here to guide you in turning your school projects into real, useful things.
                And for businesses, we offer partnerships where we're really good at getting projects done on time and making sure everything runs smoothly.
                `}
                <br />

                {`
                Our secret to success is easy – we listen to your ideas, solve any challenges that pop up, and always deliver what we promise. We're reliable,
                and you can count on us to make your digital dreams a reality.
                If you already have a project and want to make it better, or if you're looking for talented tech people, we're here to help.
                Chill Academy is not just a service provider; we're your go-to team for anything digital – making websites, phone apps, helping you show up on Google, and even finding awesome
                tech people for you.
                `}

                <br />
                {` 
                So, let's make some digital magic together! Get in touch with us, and let the Chill Academy team turn your ideas into something amazing. Your adventure into the digital wonderland
                starts right here with Chill Academy!
                `}
              </p>
        </div>
      </section>
    );
}