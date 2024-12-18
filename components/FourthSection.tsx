"use client";
import React, { useRef, useEffect, useState } from "react";
import WorkCard from "./WorkCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface FourthSectionProps {
  workItems: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    imageUrl: string;
    bgColor: string;
  }[];
}

const FourthSection: React.FC<FourthSectionProps> = ({ workItems }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  // Adjust scroll distance based on viewport width
  useEffect(() => {
    const updateScrollDistance = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      if (width >= 1024) setScrollDistance(width * 0.8); // Desktop
      else if (width >= 768) setScrollDistance(width * 0.6); // Tablet
      else setScrollDistance(width); // Mobile
    };

    // Run on mount
    updateScrollDistance();
    // Update on resize
    window.addEventListener("resize", updateScrollDistance);
    return () => window.removeEventListener("resize", updateScrollDistance);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollDistance, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl mx-auto overflow-hidden gap-8">
      {/* Left Side - Fixed Width on Large Screens */}
      <div className="flex flex-col w-full lg:max-w-sm flex-shrink-0 space-y-6 px-4 sm:px-6">
        <div>
          <h2 className="text-4xl lg:text-6xl font-inter text-black mb-2">
            my <span className="font-bold">work</span>
          </h2>
          <p className="text-xl lg:text-2xl font-inter text-gray-800 mb-4">
            2010-2024
          </p>
        </div>
        <p className="text-base lg:text-lg font-plus-jakarta text-gray-700 leading-relaxed mb-8">
          A Creative Director with a passion for crafting compelling visual
          brand strategies. Over the years, I’ve led successful campaigns across
          diverse industries, blending creativity with strategic thinking to
          elevate brands. From filmmaking to stand-up comedy, my love for
          storytelling drives everything I do. I thrive on bringing innovative
          ideas to life while shaping the future of branding.
        </p>
        <button className="w-40 h-12 bg-black text-white text-lg lg:text-xl font-inter hover:bg-gray-700 transition-colors">
          WHAT I DO
        </button>
      </div>

      {/* Right Side - Carousel */}
      <div className="relative w-full max-w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth snap-x snap-mandatory flex-nowrap pb-4"
        >
          {workItems.map((item, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 mx-2"
              style={{
                width: viewportWidth && viewportWidth >= 1024
                  ? "calc(33.33% - 16px)"
                  : viewportWidth && viewportWidth >= 640
                  ? "calc(50% - 16px)"
                  : "calc(100% - 16px)",
              }}
            >
              <WorkCard
                title={item.title}
                subtitle={item.subtitle}
                description1={item.description1}
                description2={item.description2}
                imageUrl={item.imageUrl}
                bgColor={item.bgColor}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end mt-4 space-x-4">
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Scroll Left"
          >
            <FaArrowLeft className="text-gray-800" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Scroll Right"
          >
            <FaArrowRight className="text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
