import RequirementsCTASection from "../../sections/requirements/RequirementsCTASection";
import RequirementsGridSection from "../../sections/requirements/RequirementsGridSection";
import RequirementsHeroSection from "../../sections/requirements/RequirementsHeroSection";
import RequirementsImageSection from "../../sections/requirements/RequirementsImageSection";

export default function Requirements() {
    return (
        <>
            <main className=" bg-[#f8efef] dark:bg-slate-900 w-full pt-20">
                <RequirementsHeroSection />
                {/* <RequirementsGridSection /> */}
                <RequirementsCTASection />
                {/* <RequirementsImageSection /> */}
            </main>
        </>
    )}