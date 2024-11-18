import { FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto">
        I make my work speak
      </h1>

      <div className="absolute bottom-8 flex justify-center w-full">
        <FaArrowDown className="text-2xl sm:text-3xl animate-bounce" />
      </div>
    </div>
  );
}
