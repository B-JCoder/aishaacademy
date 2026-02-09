"use client";
import React from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Testimonials = ({ lang }: { lang: string }) => {
  const titles: any = {
    en: {
      title: "What Parents Say",
      subtitle: "Join hundreds of happy families",
      button: "Write a Review on Google",
    },
    fr: {
      title: "Ce que disent les parents",
      subtitle: "Rejoignez des centaines de familles heureuses",
      button: "Écrire un avis sur Google",
    },
  };

  const currentStrings = titles[lang] || titles.en;

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden relative">
      <Script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        async
        strategy="afterInteractive"
      />
      {/* Decorative background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">
            {currentStrings.subtitle}
          </span>
          <h2 className="font-bold text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
            {currentStrings.title}
          </h2>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Elfsight Google Reviews Widget */}
          <div className="w-full">
            <div
              className="sk-ww-google-reviews"
              data-embed-id="25652829"
            ></div>
          </div>

          {/* Google Review Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-12 pb-10"
          >
            <Link
              href="https://g.page/r/CZnV2ZcdM8yiEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-gray-800 dark:text-white font-semibold group"
            >
              <FaGoogle className="text-xl text-[#DB4437] group-hover:scale-110 transition-transform" />
              <span>{currentStrings.button}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
