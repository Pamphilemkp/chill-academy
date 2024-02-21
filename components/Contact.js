"use client";
import React, { useState, useEffect } from "react";
import { Input, Button,Textarea } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";

const Contact = () => {

 const [firstName, SetFirstName] = useState('');
 const [lastName, SetLastName] = useState('');
 const [email, SetEmail] = useState('');
 const [message, SetMessage] = useState('');
 const [error, setErrors] = useState({});


 // 
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    unregister,
    reset,
  } = useForm({
    mode: "onTouched",

  });


  //  initialise the components with the use components
  const domain = watch("domain");
  
  // * Remove from FORM
  useEffect(() => {
    if (domain !== "others") {
      unregister("otherdomainname");
    }
  }, [domain, unregister]);

  const onSubmit = (data) => console.log(data);


// check if the data collected from the form meet the requirement

 const validateForm = () => {
  let formIsValid = true;
  const newErrors = {};

              // for first name
              if (firstName.length === 1 || firstName.length <= 2) {
                formIsValid = false;
                newErrors.firstName = 'Please your First Name should at least have 2 letters';
              }
          
              if (firstName.trim() === '') {
                formIsValid = false;
                newErrors.firstName = 'Please enter your First Name ';
          
              }

            // for last name
            if (lastName.length === 1 || lastName.length <= 3) {
              formIsValid = false;
              newErrors.lastName = 'Please your Last Name should at least have 2 letters';
            }
        
            if (lastName.trim() === '') {
              formIsValid = false;
              newErrors.firstName = 'Please enter your Last Name';
        
            }
      
            // for email
            if (!email) {
              formIsValid = false;
              newErrors.email = 'Please enter your Email';
            } else if (!/\S+@\S+\.\S+/.test(email)) {
              formIsValid = false;
              newErrors.email = 'Please enter a valid Email';
            }

            // for comment
            if (message.length === 1 || message.length <= 3) {
              formIsValid = false;
              newErrors.message = 'Please your comment should at least have 3 letters';
            }
        
            if (!comment) {
              formIsValid = false;
              newErrors.message = 'Please enter your message';
            }
  
      setErrors(newErrors);
      return formIsValid;
 }



 // submitting the data if collected information is correct
    const handleSubmited= (e) => {
      e.preventDefault();
        
      if (validateForm()) {
        // Handle form submission if everything is ok send to the server

      navigate('/');

      }

    };


  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-1 ">
          <div className="flex flex-col ">
        <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl flex justify-center items-center"> <span className='text-header-gradient-2'>Contact Us</span> </h1>
        <p className="text-base text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Dive into digital transformation with Chill IT. We specialize in custom web and mobile app development, tailored to bring your innovative ideas to the forefront. Connect with us for unparalleled solutions and SEO strategies that drive results. Your journey to digital brilliance starts here!</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#468ef9] to-[#0c66ee] inline-flex"></div>
            </div>
            </div>
          <form className="md:col-span-8 p-10  w-[80%] mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-3  mb-6">
              <div className="w-full md:w-1/2 mb-6 pr-0 md:pr-6 md:mb-0 ">
              <Controller
              name="Username"
              rules={{
                required: "Username is Required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                color="blue"
                label="First Name"
                  {...field}
                  error={Boolean(errors?.Username?.message)}
                />
              )}
            />
            {errors?.Username?.message && (
              <span className="error-text">{errors?.Username?.message}</span>
            )}
                {/* <Input
                color="blue"
                label="First Name"
                value={firstName}
                onChange={(e) => SetFirstName(e.target.value)}
                /> */}
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-4 ">
                <Input
                color="blue"
                label="Last Name"
                value={lastName}
                onChange={(e) => SetLastName(e.target.value)}
               />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email ID is Required",
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Email ID is invaild",
                },
              }}
              render={({ field }) => (
                <Input
                  type="email"
                  size="md"
                  label="Email"
                  color={"blue"}
                  {...field}
                  error={Boolean(errors?.email?.message)}
                />
              )}
            />
            {errors?.email?.message && (
              <span className="error-text">{errors?.email?.message}</span>
            )}

              {/* <Input
              size="md"
              label="Email"
              color={"blue"}
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              /> */}
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <Textarea
              error={true}
                color="blue"
                className="text-xl text-white"
                label="Message "
                size="md"
                value={message}
                onChange={(e) => SetMessage(e.target.value)}
              />
              <div className="flex justify-center w-full mt-8">
                <div className="md:flex md:items-center"></div>
                <div
                  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gradient-to-r  from-[#468ef9] to-[#0c66ee]  border border-[#0c66ee] group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <Button type="submit" className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Begin Your Digital Journey
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
