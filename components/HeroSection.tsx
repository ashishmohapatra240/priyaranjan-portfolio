import { FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        I make my work speak
      </h1>

      <div className="absolute bottom-10 flex justify-center w-full">
        <FaArrowDown className="text-3xl animate-bounce" />
      </div>
    </div>
  );
}
