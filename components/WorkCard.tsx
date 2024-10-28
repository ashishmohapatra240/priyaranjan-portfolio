// components/WorkCard.tsx
import React from "react";
import Image from "next/image";

interface WorkCardProps {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  imageUrl: string;
  bgColor: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  subtitle,
  description1,
  description2,
  imageUrl,
  bgColor,
}) => {
  return (
    <div className="flex flex-col w-full h-96 bg-white overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-48 relative overflow-hidden">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      {/* Text Section */}
      <div
        className="flex flex-col justify-start p-6 text-black"
        style={{ backgroundColor: bgColor }}
      >
        <h3 className="text-xl lg:text-2xl font-inter font-bold leading-tight">
          {title} <br /> {subtitle}
        </h3>
        <p className="text-sm lg:text-lg mt-2">{description1}</p>
        <p className="text-sm lg:text-lg">{description2}</p>
      </div>
    </div>
  );
};

export default WorkCard;
