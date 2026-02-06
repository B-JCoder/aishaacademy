import React from "react";
import Navbar from "@/components/layout/header";
import { getDictionary } from "@/lib/dictionary";
import Footer from "@/components/layout/footer";
import AdmissionsForm from "@/components/sections/admissions-form";
import Newsletter from "@/components/sections/newsletter";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import { CheckCircle, FileText, CreditCard, GraduationCap } from "lucide-react";
import PricingPlans from "@/components/sections/PricingPlans";
import ContactForm from "@/components/sections/contact-form";

export default async function AdmissionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="bg-background min-h-screen">
      <Navbar lang={lang} dict={dict} />

      {/* Header */}
      <PagesHero
        title={dict.admissions.hero.title}
        description={dict.admissions.hero.description}
        imageSrc="/images/img1.png"
        badge={{ text: dict.admissions.hero.badge, icon: CheckCircle }}
        primaryAction={{
          text: dict.admissions.hero.action,
          href: "#admission-form",
        }}
      />

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">
              {dict.admissions.howToEnroll.title}
            </h2>
            <p className="text-muted-foreground">
              {dict.admissions.howToEnroll.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: dict.admissions.howToEnroll.steps[0].title,
                desc: dict.admissions.howToEnroll.steps[0].desc,
              },
              {
                icon: CheckCircle,
                title: dict.admissions.howToEnroll.steps[1].title,
                desc: dict.admissions.howToEnroll.steps[1].desc,
              },
              {
                icon: CreditCard,
                title: dict.admissions.howToEnroll.steps[2].title,
                desc: dict.admissions.howToEnroll.steps[2].desc,
              },
              {
                icon: GraduationCap,
                title: dict.admissions.howToEnroll.steps[3].title,
                desc: dict.admissions.howToEnroll.steps[3].desc,
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-border text-center hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <PricingPlans dict={dict.pricing} />

      {/* Form Section */}
      <AdmissionsForm dict={dict.admissions.form} />

      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang={lang} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
