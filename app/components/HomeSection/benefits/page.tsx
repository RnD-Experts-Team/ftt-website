import BenefitsCTASection from "../../sections/benefits/BenefitsCTASection";
import BenefitsHeroSection from "../../sections/benefits/BenefitsHeroSection";
import CompensationMetricsSection from "../../sections/benefits/CompensationMetricsSection";
import DetailedBenefitsSection from "../../sections/benefits/DetailedBenefitsSection";

export default function Benefits() {
  return (
    <>
      <main className="min-h-screen bg-background-light dark:bg-background-dark px-4 py-12">
        <div className="max-w-7xl px-6 mx-auto w-full pt-16 lg:py-24  ">
          <BenefitsHeroSection />
          <CompensationMetricsSection />
          <DetailedBenefitsSection />
          <BenefitsCTASection />
        </div>
      </main>
    
    </>
  );
}