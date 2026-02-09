
import Hero from "../components/HomeSection/hero/page";
import OwnerMessage from "../components/HomeSection/owner-message/page";
import Testimonials from "../components/HomeSection/testimonials/page";
import WhyFTT from "../components/HomeSection/why-ftt/page";
import SignOnBonus from "../components/HomeSection/sign-on-bonus/page";
import PayGrowth from "../components/HomeSection/pay-growth/page";
import Benefits from "../components/HomeSection/benefits/page";
import Requirements from "../components/HomeSection/requirements/page";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <OwnerMessage/>
      </div>
      <div id="testimonials">
        <Testimonials/>
      </div>
      <div id="why-ftt">
        <WhyFTT/>
      </div>
      <div id="sign-on-bonus">
        <SignOnBonus/>
      </div>
      <div id="pay-growth">
        <PayGrowth/>
      </div>
      <div id="benefits">
        <Benefits/>
      </div>
      <div id="requirements">
        <Requirements/>
      </div>
    </div>
  );
}
