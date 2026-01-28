"use client";
import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import { Check, Clock, Calendar, Users, MapPin, Monitor } from "lucide-react";
import PagesHero from "@/components/sections/pageshero";

const programs = [
  {
    id: "foundation",
    title: "Kids Islamic Foundation (Nazra)",
    price: "$50",
    period: "/month",
    schedule: "3 Days/Week",
    mode: "Online & Physical",
    age: "Ages 4-7",
    description:
      "Building a strong relationship with Allah through fun, interactive learning. Covering Quran reading, basic Duas, and Islamic manners.",
    features: [
      "Noorani Qaida Mastery",
      "Short Surah Memorization",
      "Daily Duas & Etiquette",
      "Fun Islamic Stories",
    ],
    color: "accent",
  },
  {
    id: "tajweed",
    title: "Quran with Tajweed",
    price: "$65",
    period: "/month",
    schedule: "Weekend or Weekday",
    mode: "Online & Physical",
    age: "Ages 7+",
    description:
      "Master the art of recitation. Learn to read the Quran with proper pronunciation and rules as revealed to the Prophet (PBUH).",
    features: [
      "Correct Pronunciation (Makharij)",
      "Rules of Tajweed (Theory & Practice)",
      "Melodious Recitation",
      "Fluency Building",
    ],
    color: "primary",
  },
  {
    id: "hifz",
    title: "Hifz Program",
    price: "$120",
    period: "/month",
    schedule: "5 Days/Week (Intensive)",
    mode: "Physical (Recommended) / Online",
    age: "Ages 8+ (Interview Required)",
    description:
      "A dedicated path to becoming a Guardian of the Quran. Intensive memorization with revision and regular testing.",
    features: [
      "Individualized Plan",
      "Daily Revision (Muraja'ah)",
      "Regular Assessments",
      "Certified Instructors",
    ],
    color: "secondary",
  },
  {
    id: "islamic-studies",
    title: "Islamic Studies",
    price: "$40",
    period: "/month",
    schedule: "Weekend Only",
    mode: "Physical & Online",
    age: "Ages 6-16",
    description:
      "Understanding the Deen. A comprehensive curriculum covering Seerah, Fiqh, Aqeedah, and Islamic History.",
    features: [
      "Life of the Prophet (Seerah)",
      "Fiqh of Worship",
      "Articles of Faith",
      "Contemporary Issues",
    ],
    color: "accent",
  },
  {
    id: "arabic",
    title: "Arabic Language",
    price: "$60",
    period: "/month",
    schedule: "2 Days/Week",
    mode: "Online Only",
    age: "Ages 10+ & Adults",
    description:
      "Learn the language of the Quran. Unlock the meaning of the divine words through grammar, vocabulary, and conversation.",
    features: [
      "Quranic Vocabulary",
      "Nahu & Sarf (Grammar)",
      "Reading Comprehension",
      "Speaking Practice",
    ],
    color: "primary",
  },
  {
    id: "adults",
    title: "Adult Learning Program",
    price: "$80",
    period: "/month",
    schedule: "Flexible / Evenings",
    mode: "Online Only",
    age: "Adults (Men & Women)",
    description:
      "It's never too late to learn. Private or small group classes tailored for busy adults wishing to improve their recitation or understanding.",
    features: [
      "Flexible Timing",
      "Privacy Respected",
      "Tailored Curriculum",
      "Correction of Recitation",
    ],
    color: "secondary",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar />

      <PagesHero
        title="Our Programs"
        description="Comprehensive Quranic education tailored to your spiritual journey. Choose the path that fits your goals and schedule."
        imageSrc="/images/programs.jpg"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 grid gap-8 md:gap-12">
          {programs.map((program, idx) => (
            <div
              key={idx}
              id={program.id}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-800 hover:border-accent transition-all flex flex-col lg:flex-row gap-10"
            >
              <div className="w-full lg:w-2/3 space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-primary/10 text-primary flex items-center gap-2">
                    <Users className="w-4 h-4" /> {program.age}
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-secondary/10 text-secondary flex items-center gap-2">
                    <Monitor className="w-4 h-4" /> {program.mode}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white leading-tight">
                  {program.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-y-2 gap-x-8 text-sm font-medium text-gray-500 pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    {program.schedule}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    45-60 min/session
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/3 flex flex-col justify-center">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center border dashed border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center">
                  <div className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-2">
                    Tuition Fee
                  </div>
                  <div className="flex items-baseline justify-center gap-1 mb-6">
                    <span className="text-4xl font-bold text-primary dark:text-white">
                      {program.price}
                    </span>
                    <span className="text-gray-500">{program.period}</span>
                  </div>
                  <Link
                    href="/admissions"
                    className="block w-full py-3.5 md:py-4 rounded-xl font-bold text-white text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] bg-accent hover:bg-accent/90 focus:ring-2 focus:ring-accent/50 focus:outline-none"
                  >
                    Enroll Now
                  </Link>
                  <p className="mt-4 text-xs text-gray-400">
                    *Sibling discounts available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <FAQSection />

      <Footer />
    </main>
  );
}
