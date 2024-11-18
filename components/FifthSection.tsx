import React from "react";

export default function FifthSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8 py-16 relative">
      <div className="max-w-xl w-full space-y-8">
        <div className="text-black text-4xl sm:text-5xl lg:text-6xl font-normal font-['Inter']">
          <span>let&apos;s </span>
          <span>speak</span>
        </div>

        <div className="text-black text-base lg:text-lg leading-relaxed font-['Plus Jakarta Sans'] mb-8">
          A Creative Director with a passion for crafting compelling visual
          brand strategies. Over the years, I&apos;ve led successful campaigns
          across diverse industries, blending creativity with strategic thinking
          to elevate brands. From filmmaking to stand-up comedy, my love for
          storytelling drives everything I do. I thrive on bringing innovative
          ideas to life while shaping the future of branding.
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-8">
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

      <div className="absolute bottom-4 left-4 right-4 text-black text-sm sm:text-base font-normal font-['Inter'] text-center sm:text-left">
        ©2024 Priyaranjan, All Rights Reserved • Credits
      </div>
    </div>
  );
}
