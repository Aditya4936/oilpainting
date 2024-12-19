import React from "react";
import { BsPlayBtn } from "react-icons/bs";
import Button from "./Button";
import img1 from "../assets/review/Father-and-son.jpg";
import img2 from "../assets/review/Kiran-ganatra.jpg";
import img3 from "../assets/review/story-img.jpg";
import { BiStar } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const data = [
  {
    name: "parmeshver shah",
    locaiton: "ahmedabad",
    img: img1,
    review:
      "I am very happy with the service of Oilpixel. I have ordered a portrait painting of my son and the painting was very beautiful. The artist has done a great job. I am very happy with the service of Oilpixel. I have ordered a portrait painting of my son and the painting was very beautiful. The artist has done a great job.",
  },
  {
    name: "kiran ganatra",
    locaiton: "ahmedabad",
    img: img2,
    review:
      "I am very happy with the service of Oilpixel. I have ordered a portrait painting of my son and the painting was very beautiful. The artist has done a great job. I am very happy with the service of Oilpixel. I have ordered a portrait painting of my son and the painting was very beautiful. The artist has done a great job.",
  },
  {
    name: "Radhika Sachdev",
    locaiton: "ahmedabad",
    img: img3,
    review:
      "Aarzoo’s portrait got delivered in a very attractive wrap in the afternoon, and although I was greatly tempted to open it, I waited for her to arrive from school, and be surprised. Was she delighted? You bet she was. When I told her, “Kapil Uncle has made it from her photograph and sent it from Ahmadabad,” she did a double-take, “Not possible!” she stamped her foot down. “Only an artist can make such a beautiful painting” she reasoned.",
  },
];
const Section3 = () => {
  return (
    <div className="md:mt-[60px]  container">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full">
        {/* Text Section */}
        <div className="text-black   py-6 md:py-0  flex flex-col md:items-end items-start  md:w-[41%] text-right">
          {/* Title */}
          <p className="md:hidden block font-extralight text-3xl  leading-tight w-full mt-10 uppercase text-start ">
            our Customer Stories Near To Our heart
          </p>
          <p className="hidden md:block text-[65px] font-extralight leading-tight w-full  uppercase text-right">
            Our <br /> Customer <br /> Stories <br /> Near <br /> To Our
            <br /> heart
          </p>
          {/* Divider */}
          <div className="flex flex-start md:justify-end w-full">
            <div className="h-[2px] rounded-full w-16 md:w-[150px] bg-black mt-8 md:mt-14 mb-8 md:mb-[40px] "></div>
          </div>

          {/* Subtitle */}
          <div className="font-light text-lg md:text-2xl pb-3  w-full md:w-[290px] text-left md:text-right">
            it keeps us motivated
          </div>
          <Button text="Read More" />
        </div>
        {/* review */}
        <div className="w-full lg:w-1/2 md:ml-[8%]  ">
          <Swiper
           modules={[Autoplay]}
           navigation
           pagination={{ clickable: true }}
           autoplay={{ delay: 6000 }}
           loop
           className="w-full"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <>
                  <div className="mb-3">
                    <img
                      src={item.img}
                      alt=""
                      className="md:w-full  object-cover"
                    />
                  </div>
                  <div className="flex justify-between gap-3">
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl md:text-2xl uppercase">
                        {item.name}
                      </span>
                      <span className="font-extralight text-lg md:text-xl text-gray-600">
                        {item.locaiton}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <BiStar className="text-yellow-400 text-2xl md:text-3xl" />
                      <BiStar className="text-yellow-400 text-2xl md:text-3xl" />
                      <BiStar className="text-yellow-400 text-2xl md:text-3xl" />
                      <BiStar className="text-yellow-400 text-2xl md:text-3xl" />
                    </div>
                  </div>
                  <div className=" md:text-lg mt-3 text-justify">
                    {item.review}
                  </div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section3;
