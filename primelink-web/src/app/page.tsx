import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import GlobalReach from "@/components/sections/GlobalReach";
import Metrics from "@/components/sections/Metrics";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-36 lg:pt-40 pb-20 px-4 sm:px-6">
        <Hero />
        <Services />
        <GlobalReach />
        <Metrics />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
