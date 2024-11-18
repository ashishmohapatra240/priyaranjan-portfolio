// components/ThirdSection.tsx
import React from "react";
import { FaInstagram, FaBehance } from "react-icons/fa";

const ThirdSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-16 gap-8 md:gap-16 max-w-7xl mx-auto">
      <div className="flex flex-col max-w-lg w-full text-center md:text-left order-2 md:order-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-inter text-black mb-6">
          I am <span className="font-bold">priyaranjan</span>
        </h1>
        <p className="text-base md:text-lg font-plus-jakarta text-gray-700 leading-relaxed mb-8">
          A Creative Director with a passion for crafting compelling visual
          brand strategies. Over the years, I&apos;ve led successful campaigns
          across diverse industries, blending creativity with strategic thinking
          to elevate brands. From filmmaking to stand-up comedy, my love for
          storytelling drives everything I do. I thrive on bringing innovative
          ideas to life while shaping the future of branding.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black hover:text-gray-700 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black hover:text-gray-700 transition-colors"
          >
            <FaBehance />
          </a>
        </div>
      </div>

      <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 order-1 md:order-2 flex-shrink-0">
        <div className="w-full h-full bg-black border border-gray-300"></div>
      </div>
    </section>
  );
};

export default ThirdSection;
