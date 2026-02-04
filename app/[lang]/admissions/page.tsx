import React from "react";
import Navbar from "@/components/layout/header";
import { getDictionary } from "@/lib/dictionary";
import Footer from "@/components/layout/footer";
import AdmissionsForm from "@/components/sections/admissions-form";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import { CheckCircle, FileText, CreditCard, GraduationCap } from "lucide-react";
import PricingPlans from "@/components/sections/PricingPlans";

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
        title="Admissions Information"
        description="Begin your journey of sacred knowledge. We have a simple and transparent admission process for both online and physical classes."
        imageSrc="/images/img1.png"
        badge={{ text: "Join Today", icon: CheckCircle }}
        primaryAction={{ text: "Apply Now", href: "#admission-form" }}
      />

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">
              How to Enroll
            </h2>
            <p className="text-muted-foreground">
              Follow these simple steps to join our academy
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "1. Submit Application",
                desc: "Fill out the online admission form below with your details.",
              },
              {
                icon: CheckCircle,
                title: "2. Assessment / Demo",
                desc: "We'll schedule a quick assessment or free demo class.",
              },
              {
                icon: CreditCard,
                title: "3. Pay Fees",
                desc: "Secure your spot by paying the first month's fee.",
              },
              {
                icon: GraduationCap,
                title: "4. Start Learning",
                desc: "Receive your schedule and join your class!",
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
      <PricingPlans />

      {/* Form Section */}
      <AdmissionsForm />

      <FAQSection />

      <Footer />
    </main>
  );
}
