import ExtraSection1 from "@/components/ExtraSection/ExtraSection1";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import ProductCard from "@/components/ProductCard/ProductCard";
export default function Home() {
  return (
    <div className="mx-auto container">
      <HeroSection />
      <ProductCard />
      <ExtraSection1 />
     
    </div>
  );
}
