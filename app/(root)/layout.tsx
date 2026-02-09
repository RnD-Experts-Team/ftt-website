import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ApplyFooterSection from "../components/sections/apply-now/ApplyFooterSection";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
