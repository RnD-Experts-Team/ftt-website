// import WhyFTTCTASection from "../../sections/why-ftt/WhyFTTCTASection";
import WhyFTTHeroSection from "../../sections/why-ftt/WhyFTTHeroSection";

export default function WhyFTT() {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden bg-[#E8E8E0] dark:bg-slate-900">
      <main className="flex-1 w-full pt-20">
        <WhyFTTHeroSection />
        {/* <WhyFTTCTASection /> */}
      </main>
    </div>
      
  );
}