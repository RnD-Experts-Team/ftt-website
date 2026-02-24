import OwnerMessageSection from "../../sections/owner-message/OwnerMessageSection";
import StatsSection from "../../sections/owner-message/StatsSection";

export const metadata = {
  title: "Message from the Owner - First Team Trucking",
  description: "A message from Shawn, owner of First Team Trucking",
};

export default function OwnerMessage() {
  return (
    <div className="relative flex w-full flex-col bg-[#E8E8E0] dark:bg-slate-900 pt-20">
      <main>
        <OwnerMessageSection/>
      </main>
    </div>
  );
}
