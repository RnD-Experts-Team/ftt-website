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
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="pt-20">
        <ApplyCTABannerSection />
      </main>
      <Footer/>
    </div>
  );
}
