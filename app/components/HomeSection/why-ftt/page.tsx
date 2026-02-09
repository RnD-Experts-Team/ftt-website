import FeaturesGridSection from "../../sections/why-ftt/FeaturesGridSection";
import WhyFTTCTASection from "../../sections/why-ftt/WhyFTTCTASection";
import WhyFTTHeroSection from "../../sections/why-ftt/WhyFTTHeroSection";

export default function WhyFTT() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 lg:py-24 pt-20">
        <WhyFTTHeroSection />
        <FeaturesGridSection />
        <WhyFTTCTASection />
      </main>
    </div>
      
  );
}