"use client";

import { motion } from "framer-motion";
import { UserPlus, Calendar, BookOpenCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-10 h-10" />,
    title: "Register",
    description: "Fill out our simple online form to get started.",
    step: "01",
  },
  {
    icon: <Calendar className="w-10 h-10" />,
    title: "Free Trial",
    description: "Schedule a free trial class to meet your teacher.",
    step: "02",
  },
  {
    icon: <BookOpenCheck className="w-10 h-10" />,
    title: "Start Learning",
    description: "Begin your Quran journey with a personalized plan.",
    step: "03",
  },
];

export default function ProcessFlow() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Starting your Quran education journey is easy. Just follow these
            three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-900 border-2 border-primary/10 shadow-[0_0_30px_-10px] shadow-primary/20 flex items-center justify-center text-primary mb-6 relative z-10 group hover:scale-110 transition-transform duration-300">
                {item.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center shadow-md">
                  {item.step}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                {item.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-1/2 w-full text-primary/20 transform -translate-x-4">
                  <ArrowRight className="w-8 h-8 mx-auto animate-pulse" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
