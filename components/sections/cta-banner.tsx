"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner({ dict }: { dict: any }) {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-cta"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-primary mb-6">
            {dict.title}
          </h2>
          <p className="text-primary/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            {dict.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="px-10 py-4 bg-primary text-white rounded-xl font-bold hover:bg-gray-900 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              aria-label={dict.enroll}
            >
              {dict.enroll}
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 bg-white/20 backdrop-blur-md text-primary border border-primary/20 rounded-xl font-bold hover:bg-white/30 transition-all shadow-md hover:-translate-y-1 active:scale-95"
              aria-label={dict.contact}
            >
              {dict.contact}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
