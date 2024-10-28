import React from "react";
import Image from "next/image";

export default function SixthSection() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6 lg:px-16 py-12">
      {/* Text Section */}
      <div className="flex flex-col space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-black text-4xl lg:text-6xl font-['Inter'] font-normal">
            I do <span className="font-bold italic">make</span>
          </h1>
          <h2 className="text-black text-2xl lg:text-3xl font-normal font-['Inter'] mt-4">
            things happen for your brand
          </h2>
        </div>

        {/* Description */}
        <div className="text-black text-base leading-relaxed font-['Plus Jakarta Sans'] space-y-2">
          <p>
            A Creative Director with a passion for crafting compelling visual
            brand strategies. Over the years, I&apos;ve led successful campaigns
            across diverse industries, blending creativity with strategic
            thinking to elevate brands. From filmmaking to stand-up comedy, my
            love for storytelling drives everything I do.
          </p>
        </div>

        <div className="text-black text-3xl lg:text-4xl font-normal font-['Inter'] mt-8">
          creative direction
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/images/abstract.png"
          alt="Abstract shapes"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
}