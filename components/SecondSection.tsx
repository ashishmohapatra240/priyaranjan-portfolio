import Image from "next/image";

export default function SecondSection() {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center min-h-screen bg-black gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 py-16">
      <Image
        src="/images/logo_white.png"
        width={160}
        height={160}
        alt="Picture of the author"
        className="w-40 sm:w-48 md:w-56 lg:w-60"
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">089</h1>
    </div>
  );
}
