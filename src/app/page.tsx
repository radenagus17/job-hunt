import BannerSignUp from "@/components/organism/BannerSignUp";
import Category from "@/components/organism/Category";
import Clients from "@/components/organism/Clients";
import FeaturedJob from "@/components/organism/FeaturedJob";
import Hero from "@/components/organism/Hero";
import LatestJob from "@/components/organism/LatestJob";

export default function Home() {
  return (
    <div className="px-32 mb-10">
      <Hero />
      <Clients />
      <Category />
      <BannerSignUp />
      <FeaturedJob />
      <LatestJob />
    </div>
  );
}
