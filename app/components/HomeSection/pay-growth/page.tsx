import { Metadata } from "next";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import PayGrowthHeroSection from "@/app/components/sections/pay-growth/PayGrowthHeroSection";
import PerformancePathSection from "@/app/components/sections/pay-growth/PerformancePathSection";
import TieredComparisonSection from "@/app/components/sections/pay-growth/TieredComparisonSection";
import PayGrowthCTASection from "@/app/components/sections/pay-growth/PayGrowthCTASection";



export default function PayGrowth() {
  return (
    
    <div className="max-w-7xl px-6 mx-auto w-full py-16 lg:py-24  ">
      <PayGrowthHeroSection />
      <PerformancePathSection />
      <TieredComparisonSection />
      <PayGrowthCTASection />
    </div>
    
  );
}
