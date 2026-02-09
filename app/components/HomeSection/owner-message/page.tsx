import OwnerMessageSection from "../../sections/owner-message/OwnerMessageSection";
import StatsSection from "../../sections/owner-message/StatsSection";

export const metadata = {
  title: "Message from the Owner - First Team Trucking",
  description: "A message from Shawn, owner of First Team Trucking",
};

export default function OwnerMessage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main >
        <OwnerMessageSection/>
      </main>
    </div>
  );
}
