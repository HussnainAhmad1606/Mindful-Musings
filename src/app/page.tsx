import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import Image from "next/image";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";

export default function Home() {
  return (
   <div>
    <HeroSection/>

    <AboutMe/>

    <FeaturedArticles/>

    <SubscribeNewsletter/>
   </div>
  );
}
