"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQSection({ dict }: { dict: any }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider border border-primary/10">
            {dict.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white">
            {dict.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {dict.questions.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-white dark:bg-gray-800 border-primary shadow-xl shadow-primary/5 scale-[1.02]"
                  : "bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 hover:border-primary/30"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
              >
                <div className="flex items-start gap-4 pr-4">
                  <HelpCircle
                    className={`shrink-0 w-6 h-6 mt-1 transition-colors duration-300 ${
                      activeIndex === idx ? "text-primary" : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`text-lg sm:text-xl font-bold font-serif transition-colors duration-300 ${
                      activeIndex === idx
                        ? "text-primary dark:text-white"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.q}
                  </span>
                </div>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeIndex === idx
                      ? "bg-primary text-white rotate-180"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {activeIndex === idx ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-2">
                      <div className="h-px w-full bg-gray-100 dark:bg-gray-700 mb-6"></div>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-sans">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
