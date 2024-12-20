import React from "react";

const CTA = () => {
  return (
    <div className="bg-black text-white py-20 container mt-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extralight pb-6 sm:text-2xl lg:text-4xl uppercase text-center tracking-wider">
          Make Your Painting
        </h1>
        <div className="mb-6 w-32 h-[2px] rounded-full bg-white mx-auto" />
        <div className="white-button">
            <button className="white-button-content">
                Order Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
