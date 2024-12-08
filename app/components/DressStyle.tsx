import React from "react";
import Image from "next/image";

const DressStyle = () => {
  return (
    <div className="w-[90%] max-w-[1239px] mx-auto mt-12 bg-[#F0F0F0] rounded-2xl p-14">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="font-IntegralCF text-4xl font-extrabold leading-[57.6px]">
          BROWSE DRESS BY STYLE
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Casual Image (Card 1) */}
        <div className="bg-white rounded-[20px] overflow-hidden h-[250px] col-span-1">
          <div className="relative w-full h-full">
            <Image
              src="/images/dress-1.png"
              alt="Casual Style"
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute top-4 left-4 text-black font-semibold text-xl">
              Casual
            </span>
          </div>
        </div>

        {/* Formal Image (Card 2) */}
        <div className="bg-white rounded-[20px] overflow-hidden h-[289px] col-span-2 sm:col-span-1 lg:col-span-2">
          <div className="relative w-full h-full">
            <Image
              src="/images/dress-2.png"
              alt="Formal Style"
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute top-4 left-4 text-black font-semibold text-xl">
              Formal
            </span>
          </div>
        </div>

        {/* Party Image (Card 3) */}
        <div className="bg-white rounded-[20px] overflow-hidden h-[289px] col-span-2 sm:col-span-1 lg:col-span-2">
          <div className="relative w-full h-full">
            <Image
              src="/images/dress-3.png"
              alt="Party Style"
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute top-4 left-4 text-black font-semibold text-xl">
              Party
            </span>
          </div>
        </div>

        {/* Gym Image (Card 4) */}
        <div className="bg-white rounded-[20px] overflow-hidden h-[250px] col-span-1">
          <div className="relative w-full h-full">
            <Image
              src="/images/dress-4.png"
              alt="Gym Style"
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute top-4 left-4 text-black font-semibold text-xl">
              Gym
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
