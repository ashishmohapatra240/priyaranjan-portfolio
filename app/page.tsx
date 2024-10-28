// pages/index.tsx
import FifthSection from "@/components/FifthSection";
import FourthSection from "@/components/FourthSection";
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import SixthSection from "@/components/SixthSection";
import ThirdSection from "@/components/ThirdSection";
import workItems from "@/data/Works";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection workItems={workItems} />
      <FifthSection/>
      <SixthSection/>
    </div>
  );
}
