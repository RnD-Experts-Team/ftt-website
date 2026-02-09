import BonusCTASection from "../../sections/sign-on-bonus/BonusCTASection";
import BonusHeroSection from "../../sections/sign-on-bonus/BonusHeroSection";
import DetailsCardsSection from "../../sections/sign-on-bonus/DetailsCardsSection";
import PerformanceCriteriaSection from "../../sections/sign-on-bonus/PerformanceCriteriaSection";

export default function SignOnBonus() {
    return(
        <div className="max-w-7xl px-6 mx-auto w-full pt-16 lg:py-24  ">
          <BonusHeroSection />
          <DetailsCardsSection />
          <PerformanceCriteriaSection />
          <BonusCTASection />
        </div>
    )
}