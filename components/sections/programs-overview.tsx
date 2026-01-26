"use client";
import React from "react";
import Link from "next/link";
import { BookOpen, Users, Wifi, Clock } from "lucide-react";

const programs = [
  {
    title: "Weekday Physical Classes",
    description: "Structured learning in a focused environment.",
    icon: <Users className="w-8 h-8 text-primary" />,
    features: ["Ages 5+", "Mon-Thu", "5:30 PM - 7:30 PM"],
    link: "/programs#weekday",
  },
  {
    title: "Weekend Physical Classes",
    description: "Perfect for school-going children.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    features: ["Morning & Afternoon", "Sat & Sun", "Structured Curriculum"],
    link: "/programs#weekend",
  },
  {
    title: "Online Quran Classes",
    description: "Live Zoom sessions from the comfort of home.",
    icon: <Wifi className="w-8 h-8 text-primary" />,
    features: ["Flexible", "Mon-Wed-Fri", "Personalized"],
    link: "/programs#online",
  },
  {
    title: "Private One-on-One",
    description: "Personalized attention for faster progress.",
    icon: <Clock className="w-8 h-8 text-primary" />,
    features: ["35 min sessions", "Flexible Scheduling", "Focus on Weak Areas"],
    link: "/programs#private",
  },
];

export default function ProgramsOverview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Our Programs
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            Choose the perfect learning path for your child. Whether online or
            in-person, we ensure quality education with qualified teachers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-secondary/20 hover:border-accent transition-all hover:shadow-2xl hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-muted dark:bg-gray-700 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-3">
                {program.title}
              </h3>
              <p className="text-foreground dark:text-gray-300 text-sm mb-6 leading-relaxed">
                {program.description}
              </p>
              <ul className="space-y-2 mb-8">
                {program.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={program.link}
                className="inline-flex items-center text-accent font-bold hover:text-secondary transition-colors"
              >
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
