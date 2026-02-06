import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Pricing from "@/components/sections/pricing";
import Newsletter from "@/components/sections/newsletter";
import FAQSection from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description:
    "Affordable Quran and Islamic studies plans for families in Montreal and online. Quality education that fits your budget.",
};

import { getDictionary } from "@/lib/dictionary";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar lang={lang} dict={dict} />

      <section className="pt-32 pb-10 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            {dict.pricing.title}{" "}
            <span className="text-accent italic">{dict.pricing.highlight}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
            {dict.pricing.description}
          </p>
        </div>
      </section>

      <Pricing dict={dict.pricing} />

      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang={lang} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
