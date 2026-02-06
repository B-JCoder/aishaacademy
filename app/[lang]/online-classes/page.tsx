import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { Monitor, Video, Globe, Clock, ShieldCheck } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";

export default async function OnlineClassesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="bg-background min-h-screen">
      <Navbar lang={lang} dict={dict} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-primary dark:bg-gray-950">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-800 opacity-90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-sm font-bold">
              <Globe className="w-4 h-4" />
              {dict.onlineClasses.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              {dict.onlineClasses.hero.title}
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              {dict.onlineClasses.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/admissions"
                className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {dict.onlineClasses.hero.start}
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                {dict.onlineClasses.hero.howItWorks}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative group">
              <Image
                src="/images/online-learning.png"
                alt="Student learning online"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs animate-bounce-slow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Live Sessions
                </p>
                <p className="text-xs text-gray-500">Zoom / Google Meet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">
              {dict.onlineClasses.howItWorks.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {dict.onlineClasses.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border group hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {dict.onlineClasses.howItWorks.steps[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {dict.onlineClasses.howItWorks.steps[0].desc}
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border group hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {dict.onlineClasses.howItWorks.steps[1].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {dict.onlineClasses.howItWorks.steps[1].desc}
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border group hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {dict.onlineClasses.howItWorks.steps[2].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {dict.onlineClasses.howItWorks.steps[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                {dict.onlineClasses.benefits.title}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {dict.onlineClasses.benefits.items[0].title}
                    </h4>
                    <p className="text-muted-foreground">
                      {dict.onlineClasses.benefits.items[0].desc}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {dict.onlineClasses.benefits.items[1].title}
                    </h4>
                    <p className="text-muted-foreground">
                      {dict.onlineClasses.benefits.items[1].desc}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {dict.onlineClasses.benefits.items[2].title}
                    </h4>
                    <p className="text-muted-foreground">
                      {dict.onlineClasses.benefits.items[2].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/online-learning.png"
                alt="Benefits of Online Learning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <p className="text-white font-serif text-2xl italic">
                  {dict.onlineClasses.benefits.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials lang={lang} />

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            {dict.onlineClasses.cta.title}
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            {dict.onlineClasses.cta.description}
          </p>
          <Link
            href="/admissions"
            className="inline-block px-10 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-lg text-lg"
          >
            {dict.onlineClasses.cta.button}
          </Link>
        </div>
      </section>

      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang={lang} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
