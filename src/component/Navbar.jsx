import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsX,
} from "react-icons/bs";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/">
          <img
            src="https://www.oilpixel.com/ast/themes/oilpixel/images/logo.svg"
            alt="logo"
            className="max-w-full"
          />
        </a>

        <div className="flex flex-row items-center gap-5">
          <p>Order Now</p>
          <div className="rounded-button  " onClick={toggleDrawer}>
            <GiHamburgerMenu />
          </div>
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full md:w-1/2 w-[70%] bg-white shadow-2xl  transform transition-transform duration-300 overflow-hidden ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-start m-4">
            <button onClick={toggleDrawer} className="rounded-button">
              <AiOutlineClose  />
            </button>
          </div>
          <div className="flex md:flex-row flex-col md:items-start items-start gap-16 justify-around mt-10 md:py-20 px-[8%]  uppercase  ">
            <ul className="flex flex-col md:items-start items-start gap-6  ">
              <li>
                <a
                  href="/"
                  className="lg:text-2xl md:text-xl text-lg sidebartext"
                >
                  Home
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-2xl hover:underline  transition-transform duration-300 "
                >
                  About
                </a>
              </li> */}
              <li>
                <a
                  href="/details"
                  className="lg:text-2xl md:text-xl text-lg  sidebartext"
                >
                  Details
                </a>
              </li>
              {/* <li>
                <a
                  href="/"
                  className="text-2xl hover:underline  transition-transform duration-300 "
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-2xl hover:underline  transition-transform duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-2xl hover:underline  transition-transform duration-300"
                >
                  Contact
                </a>
              </li> */}
            </ul>
            <div className="flex flex-col md:items-start items-start gap-6  ">
              <div className="flex flex-col ">
                <p className="text-2xl ">Get in touch</p>
                <div className="h-1 bg-black w-1/2 mt-2"></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl ">Call us </p>
                <div className="font-bold text-xl hover:text-red-500 cursor-pointer transition-colors duration-700">
                  +91 (79) 400 98 388
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl ">Email us </p>
                <div className="font-bold text-xl hover:text-red-500 cursor-pointer transition-colors duration-700">
                  paint@oilpixel.com
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <BsInstagram cursor={"pointer"} className="icon1 text-4xl" />
                <BsLinkedin cursor={"pointer"} className="icon1 text-4xl" />
                <BsPinterest cursor={"pointer"} className="icon1 text-4xl" />
                <BsFacebook cursor={"pointer"} className="icon1 text-4xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className=" inset-0 bg-black bg-opacity-50"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
