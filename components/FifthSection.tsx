import React from "react";

export default function FifthSection() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4 relative">
      <div className="max-w-xl w-full">
        {/* Title Section */}
        <div className="text-black text-6xl font-normal font-['Inter'] mb-4">
          <span>let’s </span>
          <span>speak</span>
        </div>

        {/* Description Section */}
        <div className="text-black text-base lg:text-lg leading-relaxed font-['Plus Jakarta Sans'] mb-8">
          A Creative Director with a passion for crafting compelling visual
          brand strategies. Over the years, I&apos;ve led successful campaigns
          across diverse industries, blending creativity with strategic thinking
          to elevate brands. From filmmaking to stand-up comedy, my love for
          storytelling drives everything I do. I thrive on bringing innovative
          ideas to life while shaping the future of branding.
        </div>

        {/* Button Section */}
        <div className="flex space-x-8 mb-20">
          <button className="text-lg font-['Inter'] text-white bg-black py-2 px-4">
            instagram
          </button>
          <button className="text-lg font-['Inter'] text-black py-2 px-4 border-b-2 border-gray-300">
            behance
          </button>
          <button className="text-lg font-['Inter'] text-black py-2 px-4 border-b-2 border-gray-300">
            text
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-4 left-4 text-black text-base font-normal font-['Inter'] mx-12">
        ©2024 Priyaranjan, All Rights Reserved • Credits
      </div>
    </div>
  );
}
