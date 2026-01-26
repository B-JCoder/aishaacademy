"use client";
import React from "react";
import Link from "next/link";
import { BookOpen, Users, Wifi, Clock } from "lucide-react";

const programs = [
  {
    title: "Weekday Physical Classes",
    description: "Structured learning in a focused environment.",
    icon: <Users className="w-8 h-8" />,
    features: ["Ages 5+", "Mon-Thu", "5:30 PM - 7:30 PM"],
    link: "/programs#weekday",
  },
  {
    title: "Weekend Physical Classes",
    description: "Perfect for school-going children.",
    icon: <BookOpen className="w-8 h-8" />,
    features: ["Morning & Afternoon", "Sat & Sun", "Structured Curriculum"],
    link: "/programs#weekend",
  },
  {
    title: "Online Quran Classes",
    description: "Live Zoom sessions from the comfort of home.",
    icon: <Wifi className="w-8 h-8" />,
    features: ["Flexible", "Mon-Wed-Fri", "Personalized"],
    link: "/programs#online",
  },
  {
    title: "Private One-on-One",
    description: "Personalized attention for faster progress.",
    icon: <Clock className="w-8 h-8" />,
    features: ["35 min sessions", "Flexible Scheduling", "Focus on Weak Areas"],
    link: "/programs#private",
  },
];

export default function ProgramsOverview() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Light Mode Delicate Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/10 mb-2">
            Our Offerings
          </span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl drop-shadow-sm">
            Our Programs
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans text-lg">
            Choose the perfect learning path for your child. Whether online or
            in-person, we ensure quality education with qualified teachers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-white/50 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                <div className="text-primary dark:text-white group-hover:text-secondary transition-colors duration-300">
                  {program.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                {program.description}
              </p>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={program.link}
                className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group/link"
              >
                Learn more{" "}
                <span className="ml-2 transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
