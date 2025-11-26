import Hero from "@/components/sections/Hero";
import MissionVision from "@/components/sections/MissionVision";
import ImpactStats from "@/components/sections/ImpactStats";
import HomeFeatured from "@/components/sections/HomeFeatured";
import FellowshipCTA from "@/components/sections/FellowshipCTA";
import CollectiveShowcase from "@/components/sections/CollectiveShowcase";
import ConnectShowcase from "@/components/sections/ConnectShowcase";
import OurHumans from "@/components/sections/OurHumans";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionVision />
      <ImpactStats />
      <HomeFeatured />
      <FellowshipCTA />
      <CollectiveShowcase />
      <ConnectShowcase />
      <OurHumans />
    </>
  );
}
