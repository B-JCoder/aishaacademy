import React from "react";
import Navbar from "@/components/layout/header";
import { getDictionary } from "@/lib/dictionary";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import AdmissionsForm from "@/components/sections/admissions-form";
import Newsletter from "@/components/sections/newsletter";
import { CheckCircle } from "lucide-react";

export default async function EnrollPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar lang={lang} dict={dict} />

      {/* Spacer for fixed header if needed, but AdmissionsForm has padding */}
      <PagesHero
        title={dict.admissions.hero.title}
        description={dict.admissions.hero.description}
        imageSrc="/images/online-learning.png"
        badge={{ text: dict.admissions.hero.badge, icon: CheckCircle }}
      />

      <AdmissionsForm dict={dict.admissions.form} />

      <FAQSection dict={dict.faq} />

      <Newsletter dict={dict} lang={lang} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
