import BannerSignUp from "@/components/organism/BannerSignUp";
import Category from "@/components/organism/Category";
import Clients from "@/components/organism/Clients";
import FeaturedJob from "@/components/organism/FeaturedJob";
import Hero from "@/components/organism/Hero";
import LatestJob from "@/components/organism/LatestJob";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
        <Image src={"/images/pattern.png"} alt="/images/pattern.png" fill />
      </div>
      <div className="px-32 mb-10">
        <Hero />
        <Clients />
        <Category />
        <BannerSignUp />
        <FeaturedJob />
        <LatestJob />
      </div>
    </>
  );
}
