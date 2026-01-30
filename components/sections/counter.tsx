"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, BookOpen, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";

// --- Reusable Stat Item Component ---
interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay: number;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  value,
  label,
  delay,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Observe when the counter enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2 },
    );

    const node = countRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  // Counting animation
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center justify-center text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 hover:shadow-accent/10 hover:border-accent/30 hover:scale-105 transition-all"
    >
      <div className="p-4 rounded-full bg-accent/10 mb-4 text-accent">
        {icon}
      </div>
      <div ref={countRef} className="text-4xl font-serif font-bold text-white">
        {count}
        {suffix}
      </div>
      <p className="text-gray-300 font-medium mt-2">{label}</p>
    </motion.div>
  );
};

// --- Main Section ---
export const StatCounter: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-secondary/20 opacity-70"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-serif font-bold text-center text-white mb-16"
        >
          Our <span className="text-accent italic">Impact</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <StatItem
            icon={<Users className="h-8 w-8" />}
            value={50}
            label="Qualified Teachers"
            delay={0.1}
            suffix="+"
          />
          <StatItem
            icon={<BookOpen className="h-8 w-8" />}
            value={500}
            label="Students Enrolled"
            delay={0.2}
            suffix="+"
          />
          <StatItem
            icon={<Award className="h-8 w-8" />}
            value={10}
            label="Years Experience"
            delay={0.3}
            suffix="+"
          />
          <StatItem
            icon={<Globe className="h-8 w-8" />}
            value={120}
            label="Online Classes"
            delay={0.4}
            suffix="/wk"
          />
        </div>
      </div>
    </section>
  );
};

export default StatCounter;
