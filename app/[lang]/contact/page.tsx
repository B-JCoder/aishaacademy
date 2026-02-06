import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";
import GoogleMap from "@/components/sections/googlemap";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar lang={lang} dict={dict} />

      <PagesHero
        title={dict.contact.hero.title}
        description={dict.contact.hero.description}
        imageSrc="/images/img3.jpg"
        badge={{ text: dict.contact.hero.badge, icon: Phone }}
      />

      <ContactForm dict={dict.contact} />

      <GoogleMap dict={dict.common} />

      <FAQSection dict={dict.faq} />

      <Newsletter dict={dict} lang={lang} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
