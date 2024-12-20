

import React from "react";
import img1 from "../../assets/Details/adult_res.jpg";
import img2 from "../../assets/Details/kid_res.jpg";
import img3 from "../../assets/Details/1.jpg";
import img4 from "../../assets/Details/2.jpg";
import img5 from "../../assets/Details/3.png";
import img6 from "../../assets/Details/4.png";
import img7 from "../../assets/Details/b.jpg";
import img8 from "../../assets/Details/5.png";
import img9 from "../../assets/Details/6.png";
import Button from "../Button";

const data = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
];

const Details_section_1 = () => {
  return (
    <div className="lg:mt-[120px] mt-[80px] ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl pb-6 sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center tracking-wider">
          Related Gallery
        </h1>
        <div className="mb-6 w-32 h-[2px] rounded-full bg-black " />
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 items-stretch justify-center mt-12 "
      
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden`}
          >
            <img
              src={item.img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 pb-10">
        <Button text="View All" />
      </div>
    </div>
  );
};

export default Details_section_1;
