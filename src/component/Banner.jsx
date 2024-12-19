import React from "react";
import b1 from "../assets/1.png";
import b2 from "../assets/2.png";
import b3 from "../assets/3.png";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const images = [
  {
    src: b1,
    alt: "Family picture retraining",
    text: `RETRAIN  YOUR  FAMILY  PICTURES`,
  },
  {
    src: b2,
    alt: "Children memory rejoining",
    text: `REJOINS  MEMORYS  OF YOUR  CHILDREN`,
  },
  {
    src: b3,
    alt: "Rare pictures restoration",
    text: `RESTORE  YOUR  RARE  PICTURES`,
  },
];

const Banner = () => {
  return (
    <div className="mt-[120px] flex flex-col md:flex-row justify-center items-center md:gap-10 2xl:container ">
      <Swiper
        modules={[Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="w-full md:w-[40%] px-5 md:px-0 text-right">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain md:max-h-[500px]"
                />
              </div>
              <div className="flex flex-col items-center md:items-start gap-6 md:w-[50%] text-left px-5 md:px-0">
                <h1 className="hidden md:block text-[60px] md:text-[90px] md:leading-[90px] leading-tight font-light text-black">
                  {image.text.split("  ").map((word, idx) => (
                    <span key={idx} className="block">
                      {word}
                    </span>
                  ))}
                </h1>
                <h1 className="block md:hidden text-[40px] leading-tight font-light text-black text-center">
                  {image.text}
                </h1>
                <Button text="Order Your Digital Oil Painting" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
