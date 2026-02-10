import BenefitsCTASection from "../../sections/benefits/BenefitsCTASection";
import BenefitsHeroSection from "../../sections/benefits/BenefitsHeroSection";
// import CompensationMetricsSection from "../../sections/benefits/CompensationMetricsSection";
// import DetailedBenefitsSection from "../../sections/benefits/DetailedBenefitsSection";

export default function Benefits() {
  return (
    <>
      <main className="min-h-screen bg-[#f8efef] dark:bg-slate-900 w-full pt-20">
        <BenefitsHeroSection />
        {/* <CompensationMetricsSection /> */}
        {/* <DetailedBenefitsSection /> */}
        <BenefitsCTASection />
      </main>
    
    </>
  );
}