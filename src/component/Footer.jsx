import React from "react";
import { BiX } from "react-icons/bi";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { PiIntersectThreeLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="container mx-auto w-full py-[5%] bg-gray-100 mt-10 ">
      <>
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="font-extralight text-[26px] sm:text-[30px] lg:text-[36px] text-center uppercase pb-5 pt-10">
            Stay Updated
          </h1>
          <div className="w-[50px] sm:w-[75px] lg:w-[100px] h-[2px] bg-black rounded-full mb-10"></div>

          {/* Email Section */}
          <>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] py-2 px-5 bg-transparent rounded-sm mb-5 outline-0 border-0 border-b-[1px] border-b-black text-center"
            />
          </>
          <button className="mb-[50px] bg-black text-white font-bold py-2 px-5 border-2 uppercase rounded-sm cursor-pointer hover:bg-white hover:text-red-600 hover:border-black transition-all duration-700">
            Sign Up
          </button>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 font-light uppercase lg:text-lg   w-full text-center">
            <div>Self Portrait Paintings</div>
            <div>Child Portrait Paintings</div>
            <div>Family Portrait Paintings</div>
            <div>Couple Portrait Paintings</div>
            <div>Celebration Paintings</div>
            <div>Photo Restoration Service</div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 font-light uppercase mt-10 text-gray-400 w-full text-center text-xs sm:text-sm cursor-pointer">
            <div>Making my painting</div>
            <div>Gallery</div>
            <div>Blog</div>
            <div>FAQ</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Sitemap</div>
          </div>
          {/* social media icon */}
          <div className=" flex flex-wrap justify-center gap-3 sm:gap-5 pt-10 lg:text-2xl text-xl">
            <div className=" icon">
              <CiFacebook />
            </div>
            <div className=" icon">
                <CiTwitter />
            </div>
            <div className=" icon">
                <CiInstagram />
            </div>
            <div className=" icon">
                <CiYoutube />
            </div>
            
          </div>

          {/* Privacy Policy */}
          <div className="flex justify-center mt-10 text-gray-400 text-xs sm:text-sm cursor-pointer hover:text-red-500 transition-all duration-700">
            <div>Privacy Policy | Cookie Policy</div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Footer;
