import Hero from "@/components/sections/Hero";
import MissionVision from "@/components/sections/MissionVision";
import FeaturedContent from "@/components/sections/FeaturedContent";
import OurHumans from "@/components/sections/OurHumans";
import LatestArticles from "@/components/sections/LatestArticles";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionVision />
      <FeaturedContent />
      <OurHumans />
      <LatestArticles />
      <CTASection />
    </>
  );
}
