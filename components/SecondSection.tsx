import Image from "next/image";

export default function SecondSection() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black space-x-20">
      <Image
        src="/images/logo_white.png"
        width={240}
        height={240}
        alt="Picture of the author"
      />{" "}
      <h1 className="text-4xl md:text-6xl font-bold text-center text-white">089</h1>
    </div>
  );
}
