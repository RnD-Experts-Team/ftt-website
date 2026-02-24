import BonusCTASection from "../../sections/sign-on-bonus/BonusCTASection";
import BonusHeroSection from "../../sections/sign-on-bonus/BonusHeroSection";
// import DetailsCardsSection from "../../sections/sign-on-bonus/DetailsCardsSection";
// import PerformanceCriteriaSection from "../../sections/sign-on-bonus/PerformanceCriteriaSection";

export default function SignOnBonus() {
    return(
        <main className="min-h-screen bg-[#E8E8E0] dark:bg-slate-900 w-full pt-20">
          <BonusHeroSection />
          {/* <DetailsCardsSection /> */}
          {/* <PerformanceCriteriaSection /> */}
          <BonusCTASection />
        </main>
    )
}