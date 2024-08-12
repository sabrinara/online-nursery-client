import ExtraSection1 from "@/components/ExtraSection/ExtraSection1";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import CategoryCard from "@/components/AllCard/CategoryCard";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import TopProducts from "@/components/TopProducts/TopProducts";
import HomeCategory from "@/components/HomeCategory/HomeCategory";
export default function Home() {
  return (
    <div className="mx-auto container">
      <HeroSection />
      <TopProducts />
      <HomeCategory />
      <HowItWorks />
      <ExtraSection1 />

    </div>
  );
}
