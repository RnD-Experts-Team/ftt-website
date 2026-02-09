import RequirementsCTASection from "../../sections/requirements/RequirementsCTASection";
import RequirementsGridSection from "../../sections/requirements/RequirementsGridSection";
import RequirementsHeroSection from "../../sections/requirements/RequirementsHeroSection";
import RequirementsImageSection from "../../sections/requirements/RequirementsImageSection";

export default function Requirements() {
    return (
        <>
            <div
            className="absolute inset-0 -z-10 opacity-10"
            style={{
                backgroundImage:
                "radial-gradient(circle at center, #eb1920 0%, transparent 70%)",
            }}
            ></div>
            <RequirementsHeroSection />
            <RequirementsGridSection />
            <RequirementsCTASection />
            <RequirementsImageSection />
        </>
    )}