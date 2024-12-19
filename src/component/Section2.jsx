import React from "react";
import img1 from "../assets/section2/1.png";
import { BsPlayBtn } from "react-icons/bs";

const Section2 = () => {
  return (
    <div className="mt-[60px] 2xl:container  ">
      <div className="flex flex-col md:flex-row lg:h-screen items-stretch w-full h-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-full">
          <img
            src={img1}
            alt="Cherish special moments"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 bg-black h-full text-white flex flex-col justify-center items-start px-6 md:px-[8%] py-10 md:py-20">
          {/* Title */}
          <p className="block md:hidden font-extralight text-4xl leading-tight uppercase text-center mb-8">
            Cherish special moments of your life
          </p>
          <p className="hidden md:block text-[55px] lg:text-[65px] lg:leading-[60px] font-extralight leading-tight uppercase text-left mb-10">
            Cherish <br /> special <br /> moments <br /> of your <br /> life
          </p>

          {/* Divider */}
          <div className="h-[2px] w-1/3 md:w-[100px] bg-white mb-10"></div>

          {/* Subtitle */}
          <p className="font-light text-lg md:text-2xl mb-10 w-full md:w-[320px] text-center md:text-left">
            Digitally Drawn Handmade Couple Portrait Painting
          </p>

          {/* Button */}
          <div className="bg-white text-lg md:text-xl text-black py-3 px-6 border-2 rounded-sm cursor-pointer hover:bg-black hover:text-white hover:border-white transition-all duration-300 flex gap-3 items-center">
            Watch The Making <BsPlayBtn className="text-2xl md:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
