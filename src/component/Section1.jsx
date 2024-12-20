import React from "react";
import Button from "./Button";
import img1 from "../assets/section1/1.png";
import img2 from "../assets/section1/2.png";
import img3 from "../assets/section1/3.png";
import img4 from "../assets/section1/4.png";
import img5 from "../assets/section1/5.png";
import img6 from "../assets/section1/6.png";
import img7 from "../assets/section1/7.png";
import img8 from "../assets/section1/8.png";
import img9 from "../assets/section1/9.png";
import img10 from "../assets/section1/10.png";
import img11 from "../assets/section1/11.png";
import img12 from "../assets/section1/12.png";
import { BiArrowToRight } from "react-icons/bi";

const data = [
  { name: "Self Portrait Paintings", img: [img1, img2, img3] },
  { name: "Couple Portrait Paintings", img: [img4, img5, img12] },
  { name: "Family Portrait Paintings", img: [img6, img7, img8] },
  { name: "Child Portrait Paintings", img: [img9, img10, img11] },
];

const Section1 = () => {
  return (
    <div className="px-5 pt-16 2xl:container ">
      <div className="flex  md:flex-row flex-col justify-center w-full ">
        {/* Left Sticky Section */}
        <div className="md:w-1/2 md:relative ">
          <div className="sticky top-20 md:flex flex-col items-end text-end gap-10 hidden md:mr-10">
            <p className="text-[65px] leading-[75px] font-extralight">
              WE <br /> CREATE <br />
              BEAUTIFUL <br /> WORKS <br />
              OF ART <br /> FROM YOUR <br />
              FAVORITE <br /> PHOTOS
            </p>
            <div className="md:w-[300px]">
              <div className="h-1 bg-black w-full mb-5"></div>
              <Button text="Paint My Picture" />
            </div>
          </div>
          <div className="flex flex-col items-start text-start gap-10 md:hidden">
            <p className="text-[30px] leading-[35px] font-extralight w-full ">
              WE CREATE BEAUTIFUL WORKS OF ART FROM YOUR FAVORITE PHOTOS
            </p>
            <div className="md:w-[300px]">
              <div className="h-[1px] bg-black w-full mb-5"></div>
              <Button text="Paint My Picture" />
            </div>
          </div>
        </div>
        {/* Right Content Section */}
        <div className="flex flex-col gap-10 md:w-1/2 mt-4 md:mt-0">
          <div className="md:font-normal font-light text-lg md:text-xl ">
            OilPixel, a digital painting studio, paints your story on a blank
            canvas, vividly manifesting every single bit of your persona. Our
            digital brush strokes gracefully create the work of art- portrait
            painting, photo restoration, photo finishing, or photo manipulation,
            bringing out your emotions dramatically. With the extensive
            experience of a decade, our masterpieces captivate both your heart
            and soul. <br /> <br /> Be it self-portrait, couple portrait, child
            portrait, pet portrait, festive paintings, or the like, our deft
            artist paints it to perfection, bringing that beautiful smile to
            your face. Your every piece of art is important to us. We make sure
            it is safely and securely delivered to your doorstep, bringing that
            beautiful smile to your face.
          </div>

          {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-5 w-full">
              {/* Item Name */}
              <p className="text-xl font-bold sidebar0text w-fit ">{item.name}</p>

              {/* Image Carousel */}
              <div className="flex overflow-x-auto items-center hide-scrollbar w-full">
                {item.img.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Image of ${item.name} - ${idx + 1}`}
                    className=" aspect-square md:w-64 w-48"
                  />
                ))}

                {/* View All Section */}
                <button className="flex items-center ml-4 w-32 text-lg font-semibold  hover:underline">
                  <span>View All</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
