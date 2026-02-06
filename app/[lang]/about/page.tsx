import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Testimonials from "@/components/sections/testimonials";
import {
  Heart,
  Globe,
  BookOpen,
  Shield,
  Users,
  Clock,
  MapPin,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import ContactForm from "@/components/sections/contact-form";
import Newsletter from "@/components/sections/newsletter";

import { getDictionary } from "@/lib/dictionary";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar lang={lang} dict={dict} />

      {/* Hero */}
      <PagesHero
        title={dict.about.hero.title}
        description={dict.about.hero.description}
        badge={{ text: dict.about.hero.badge, icon: Globe }}
        primaryAction={{
          text: dict.about.hero.primaryAction,
          href: "/admissions",
        }}
        video={
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/He-NKKRNQrk?si=VcZLl6UvIgClpLcI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        }
      />

      {/* History & Story */}
      <section className="py-20">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 border-4 border-white/50">
                <Image
                  src="/images/physical-learning-man.png"
                  alt="Our History"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-card p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="font-serif text-4xl text-primary font-bold mb-1">
                  10+
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {dict.about.history.stat}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-primary dark:text-white">
                {dict.about.history.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {dict.about.history.p1}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {dict.about.history.p2}
              </p>
              <div className="pt-4">
                <Link
                  href="/admissions"
                  className="text-accent font-bold hover:underline flex items-center gap-2"
                >
                  {dict.about.hero.primaryAction} <Users className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-card p-10 rounded-3xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Globe className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                {dict.about.mission.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans text-lg">
                {dict.about.mission.desc}
              </p>
            </div>
            <div className="bg-white dark:bg-card p-10 rounded-3xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Heart className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                {dict.about.vision.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans text-lg">
                {dict.about.vision.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Modes of Learning */}
      <section className="py-20">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary dark:text-white mb-4">
              {dict.about.learningWay.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {dict.about.learningWay.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl aspect-[16/9] shadow-lg">
              <Image
                src="/images/physical-learning.png"
                alt="Physical Campus"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 text-white mb-2">
                  <MapPin className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold">
                    {dict.about.learningWay.physical.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {dict.about.learningWay.physical.desc}
                </p>
                <Link
                  href="/physical-classes"
                  className="inline-block bg-white text-primary px-6 py-3 rounded-full font-bold w-max hover:bg-accent hover:text-white transition-colors"
                >
                  {dict.about.learningWay.physical.action}
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl aspect-[16/9] shadow-lg">
              <Image
                src="/images/online-learning.png"
                alt="Online Learning"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 text-white mb-2">
                  <Monitor className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold">
                    {dict.about.learningWay.online.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {dict.about.learningWay.online.desc}
                </p>
                <Link
                  href="/online-classes"
                  className="inline-block bg-white text-primary px-6 py-3 rounded-full font-bold w-max hover:bg-accent hover:text-white transition-colors"
                >
                  {dict.about.learningWay.online.action}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Methodology */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              {dict.about.methodology.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-sans max-w-2xl mx-auto">
              {dict.about.methodology.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform">
              <BookOpen className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold font-serif mb-3 dark:text-white">
                {dict.about.methodology.items[0].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
                {dict.about.methodology.items[0].desc}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform">
              <Shield className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold font-serif mb-3 dark:text-white">
                {dict.about.methodology.items[1].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
                {dict.about.methodology.items[1].desc}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform">
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold font-serif mb-3 dark:text-white">
                {dict.about.methodology.items[2].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
                {dict.about.methodology.items[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials lang={lang} />

      <FAQSection dict={dict.faq} />
      <ContactForm dict={dict.contact} />
      <Newsletter dict={dict} lang={lang} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
