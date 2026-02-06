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
import Newsletter from "@/components/sections/newsletter";
// import GoogleMap from "@/components/sections/googlemap";
import PricingPlans from "@/components/sections/PricingPlans";
import { getDictionary } from "@/lib/dictionary";
import ContactForm from "@/components/sections/contact-form";

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
      <StatCounter dict={dict.stats} />
      <ProgramsOverview dict={dict.programs} />
      <WhyUs dict={dict.whyUs} />
      <ProcessFlow dict={dict.process} />
      <PricingPlans dict={dict.pricing} />
      <Testimonials lang={lang} />
      <CtaBanner dict={dict.cta} />
      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      {/* <GoogleMap dict={dict.common} /> */}
      <Newsletter dict={dict} lang={lang} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
