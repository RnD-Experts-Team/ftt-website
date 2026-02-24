import { Metadata } from "next";
import Navbar from "@/app/components/layout/Navbar";
import ApplyCTABannerSection from "@/app/components/sections/apply-now/ApplyCTABannerSection";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Apply Now | First Team Trucking",
  description:
    "Join First Team Trucking as an Amazon Freight Partner. Start your application and drive your career forward.",
};

export default function ApplyNowPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#E8E8E0] dark:bg-slate-900">
      <Navbar />
      <main className="flex-1 w-full pt-20">
        <ApplyCTABannerSection />
      </main>
      <Footer/>
    </div>
  );
}
