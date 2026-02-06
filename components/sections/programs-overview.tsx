"use client";
import React from "react";
import Link from "next/link";
import { BookOpen, Users, Wifi, Clock } from "lucide-react";

export default function ProgramsOverview({ dict }: { dict: any }) {
  const programs = [
    {
      ...dict.weekdayPhysical,
      icon: <Users className="w-8 h-8" />,
      link: "/programs#weekday",
    },
    {
      ...dict.weekendPhysical,
      icon: <BookOpen className="w-8 h-8" />,
      link: "/programs#weekend",
    },
    {
      ...dict.online,
      icon: <Wifi className="w-8 h-8" />,
      link: "/programs#online",
    },
    {
      ...dict.private,
      icon: <Clock className="w-8 h-8" />,
      link: "/programs#private",
    },
  ];

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
            {dict.offerings}
          </span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl drop-shadow-sm">
            {dict.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans text-lg">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program: any, idx: number) => (
            <div
              key={idx}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_0_20px_#623F2F] border border-white/50 dark:border-gray-700 transition-all duration-300 hover:shadow-[0_0_30px_#623F2F] hover:-translate-y-2"
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
                {program.features.map((feature: string, i: number) => (
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
