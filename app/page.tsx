import Link from "next/link";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import ProgramsOverview from "@/components/sections/programs-overview";
import WhyUs from "@/components/sections/why-us";
import Testimonials from "@/components/sections/testimonials";
import CtaBanner from "@/components/sections/cta-banner";
import FAQSection from "@/components/sections/faq";
import StatCounter from "@/components/sections/counter";
import ProcessFlow from "@/components/sections/ProcessFlow";
import GoogleMap from "@/components/sections/googlemap";
import PricingPlans from "@/components/sections/PricingPlans";
// import TeacherCarousel from "@/components/sections/TeacherCarousel"

const page = () => {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden">
      <Navbar />
      <HeroSection />
      <StatCounter />
      <ProgramsOverview />
      <WhyUs />

      <ProcessFlow />
      <PricingPlans />
      <Testimonials />
      <CtaBanner />
      <FAQSection />
      <GoogleMap />
      <Footer />
    </main>
  );
};

export default page;
