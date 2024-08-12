import ExtraSection1 from "@/components/ExtraSection/ExtraSection1";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import ProductCard from "@/components/AllCard/ProductCard";
import CategoryCard from "@/components/AllCard/CategoryCard";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
export default function Home() {
  return (
    <div className="mx-auto container">
      <HeroSection />
      <ProductCard />
      <CategoryCard />
      <HowItWorks />
      <ExtraSection1 />
     
    </div>
  );
}
