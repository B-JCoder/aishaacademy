import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import ProgramsOverview from "@/components/sections/programs-overview";
import WhyUs from "@/components/sections/why-us";
import Testimonials from "@/components/sections/testimonials";
import CtaBanner from "@/components/sections/cta-banner";

const page = () => {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProgramsOverview />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
};

export default page;
