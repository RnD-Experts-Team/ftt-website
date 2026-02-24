import { Metadata } from "next";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import PayGrowthHeroSection from "@/app/components/sections/pay-growth/PayGrowthHeroSection";
import PerformancePathSection from "@/app/components/sections/pay-growth/PerformancePathSection";
// import TieredComparisonSection from "@/app/components/sections/pay-growth/TieredComparisonSection";
import PayGrowthCTASection from "@/app/components/sections/pay-growth/PayGrowthCTASection";



export default function PayGrowth() {
  return (
    <main className="min-h-screen bg-[#E8E8E0] dark:bg-slate-900 w-full pt-20">
      <PayGrowthHeroSection />
      {/* <PerformancePathSection /> */}
      {/* <TieredComparisonSection /> */}
      <PayGrowthCTASection />
    </main>
  );
}
