import React, { useState } from "react";
import img1_res from "../../assets/Details/adult_res.jpg";
import img1_org from "../../assets/Details/adult_org.jpg";
import img2_res from "../../assets/Details/kid_res.jpg";
import img2_org from "../../assets/Details/kid_org.jpg";
import { FiInstagram } from "react-icons/fi";
import { AiFillPinterest } from "react-icons/ai";
import Button from "../Button";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaPlus,
  FaStar,
} from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Details_section_1 from "./Details_section_1";
import CTA from "../CTA";

const Details = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showIcon, setShowIcon] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // X-coordinate within the image
    const y = e.clientY - rect.top; // Y-coordinate within the image
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  return (
    <>
      <div className="2xl:container container md:px-0 lg:mt-[120px] mt-[80px]">
        <div className="flex flex-col lg:flex-row gap-4 w-full items-start">
          <div className="lg:w-1/2 w-full">
            <div
              className="imghover "
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={img1_res} alt="Hoverable" />
              {showIcon && (
                <FaPlus
                  className="icon text-2xl md:block hidden"
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                  }}
                />
              )}
            </div>
            <div className="flex gap-4 md:justify-end mt-3 ">
              <span>Share</span>
              <AiFillPinterest className="text-2xl text-black" />
              <FiInstagram className="text-2xl text-black" />
            </div>
          </div>
          <div className=" mt-5 lg:mt-0  lg:w-1/2 w-full xl:pl-20 md:pr-4 pr-0 ">
            <h1 className="text-3xl font-light pb-6 sm:text-2xl md:text-3xl 2xl:text-4xl uppercase">
              photo restoration
            </h1>
            <div className="mb-6 w-1/3 h-[2px] rounded-full bg-black" />
            <div className="text-2xl font-normal pb-5 sm:text-xl md:text-2xl 2xl:text-3xl uppercase">
              <span>16" X 20"</span>
            </div>
            <Button text="order now" />
            <div className="mx-auto md:ml-0 mt-5 font-semibold text-xl flex flex-row gap-3">
              <div className="p-3  border-black border rounded-full hover:border-white hover:bg-black text-black hover:text-white hover:transition-colors duration-700 cursor-pointer">
                <FaArrowLeftLong />
              </div>
              <div className="p-3  border-white border rounded-full hover:border-black hover:bg-white text-white hover:text-black bg-black hover:transition-colors duration-700 cursor-pointer">
                <FaArrowRightLong />
              </div>
            </div>
            <div className="mt-10">
              <img
                src={img1_org}
                alt="adult_org"
                className="w-full max-w-[200px] object-cover"
              />
            </div>
            <div className="mt-10">
              <div className="flex justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-lg md:text-xl uppercase">
                    Madhav Sharma
                  </span>
                  <span className="font-extralight  md:text-lg text-gray-600">
                    Ahmedabad ,india
                  </span>
                </div>
                <div className="flex flex-row gap-4 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <CiStar />
                </div>
              </div>
              <div className=" md:text-lg mt-3 text-justify">
                He was and he is my real hero. Thanks to Oilpixel team to give
                me a portrait of my papa such a real that I still talk with him
                through this frame when ever I am Missing him badly!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Details_section_1 />
      </div>
      <div>
        <CTA />
      </div>
    </>
  );
};

export default Details;
