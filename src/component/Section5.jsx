import React from 'react';
import img from '../assets/BLOG_03_NOV.jpg';
import Button from './Button';

const Section5 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch mt-16 lg:h-screen 2xl:container">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full lg:h-screen md:px-[8%] md:py-5 py-[50px] px-[15px] bg-black text-white lg:text-right text-start flex flex-col md:items-end items-start justify-center">
        <div className="text-3xl pb-[30px] lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase font-light">
          <span className="hidden md:block leading-[1.2]">It's all <br /> about <br /> Colorful <br /> words</span>
          <span className="block md:hidden">it's all about colorful words</span>
        </div>
        <div className="h-[2px] rounded-full bg-white w-1/3" />
        <button className="bg-white text-black px-5 py-3 mt-[30px] text-sm hover:transition-all duration-300 hover:bg-black hover:text-white border border-white">
          Read More
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full">
        {/* Top Block */}
        <div className="flex flex-col lg:flex-row h-1/2 bg-[#f9edda]">
          <img
            src={img}
            className="lg:w-1/2 w-full h-full object-cover"
            alt="Blog Preview"
          />
          <div className="flex flex-col justify-center p-6 lg:p-8">
            <p className="text-base lg:text-lg font-light text-gray-600 mb-3">
              Nov 24, 2024
            </p>
            <h3 className="text-lg lg:text-xl font-semibold mb-5">
              Surprise Your Loved Ones: Custom Digit Portraits For Every Occasion
            </h3>
            <Button text="Read More" />
          </div>
        </div>

        {/* Bottom Block */}
        <div className="flex flex-col lg:flex-row h-1/2 bg-[#d6dbe6]">
          <div className="flex flex-col justify-center p-6 lg:p-8">
            <p className="text-base lg:text-lg font-light text-gray-600 mb-3">
              Nov 24, 2024
            </p>
            <h3 className="text-lg lg:text-xl font-semibold mb-5">
              Surprise Your Loved Ones: Custom Digit Portraits For Every Occasion
            </h3>
            <Button text="Read More" />
          </div>
          <img
            src={img}
            className="lg:w-1/2 w-full h-full object-cover lg:block hidden"
            alt="Blog Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
