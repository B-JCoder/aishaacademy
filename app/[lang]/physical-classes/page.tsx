import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import { MapPin, Users, BookOpen, Clock, Coffee, Shield } from "lucide-react";
import GoogleMap from "@/components/sections/googlemap";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";
import { getDictionary } from "@/lib/dictionary";

export default async function PhysicalClassesPage({
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
          <div className="absolute inset-0 bg-gradient-to-l from-primary to-primary-800 opacity-90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-last md:order-first">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative group">
              <Image
                src="/images/physical-learning-man.png"
                alt="Student learning at campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs animate-bounce-slow">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Montreal Campus
                </p>
                <p className="text-xs text-gray-500">4640 Rue de Salaberry</p>
              </div>
            </div>
          </div>
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-sm font-bold">
              <Users className="w-4 h-4" />
              {dict.physicalClasses.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              {dict.physicalClasses.hero.title}
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              {dict.physicalClasses.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/admissions"
                className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {dict.physicalClasses.hero.visit}
              </Link>
              <Link
                href="#schedule"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                {dict.physicalClasses.hero.viewSchedule}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Environment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">
              {dict.physicalClasses.facilities.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {dict.physicalClasses.facilities.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {dict.physicalClasses.facilities.items[0].title}
              </h3>
              <p className="text-muted-foreground">
                {dict.physicalClasses.facilities.items[0].desc}
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {dict.physicalClasses.facilities.items[1].title}
              </h3>
              <p className="text-muted-foreground">
                {dict.physicalClasses.facilities.items[1].desc}
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {dict.physicalClasses.facilities.items[2].title}
              </h3>
              <p className="text-muted-foreground">
                {dict.physicalClasses.facilities.items[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-5 sm:px-10">
          <div className="bg-white dark:bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            <div className="bg-primary p-8 text-white text-center">
              <h2 className="text-3xl font-serif font-bold mb-2">
                {dict.physicalClasses.schedule.title}
              </h2>
              <p className="opacity-90">{dict.physicalClasses.schedule.term}</p>
            </div>
            <div className="p-8 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 font-bold text-primary">
                      {dict.physicalClasses.schedule.table.day}
                    </th>
                    <th className="p-4 font-bold text-primary">
                      {dict.physicalClasses.schedule.table.evening}
                    </th>
                    <th className="p-4 font-bold text-primary">
                      {dict.physicalClasses.schedule.table.weekend}
                    </th>
                    <th className="p-4 font-bold text-primary">
                      {dict.physicalClasses.schedule.table.hifz}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium">
                      {dict.physicalClasses.schedule.table.monFri}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      5:30 PM - 7:30 PM
                    </td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">
                      5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">
                      {dict.physicalClasses.schedule.table.sat}
                    </td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">
                      10:00 AM - 12:45 PM / 12:00 PM - 2:45 PM
                    </td>
                    <td className="p-4 text-muted-foreground">
                      9:00 AM - 12:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">
                      {dict.physicalClasses.schedule.table.sun}
                    </td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">
                      10:00 AM - 12:45 PM / 12:00 PM - 2:45 PM
                    </td>
                    <td className="p-4 text-muted-foreground">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 text-center">
          <h2 className="text-3xl font-bold font-serif text-primary mb-8">
            {dict.navigation.contact}
          </h2>
          <GoogleMap dict={dict.common} />
        </div>
      </section>

      <Testimonials lang={lang} />

      {/* CTA */}
      <section className="py-20 bg-accent/10 border-t border-accent/20 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
            {dict.physicalClasses.cta.title}
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            {dict.physicalClasses.cta.description}
          </p>
          <Link
            href="/admissions"
            className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg text-lg"
          >
            {dict.physicalClasses.cta.button}
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
