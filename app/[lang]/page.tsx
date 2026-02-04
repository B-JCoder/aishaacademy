import React from "react";
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
import { getDictionary } from "@/lib/dictionary";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden">
      <Navbar lang={lang} dict={dict} />
      <HeroSection dict={dict.hero} />
      <StatCounter />
      <ProgramsOverview />
      <WhyUs />

      <ProcessFlow />
      <Testimonials />
      <PricingPlans />

      <CtaBanner />
      <FAQSection />
      <GoogleMap />
      <Footer />
    </main>
  );
}
