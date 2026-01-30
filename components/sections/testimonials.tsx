"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";

// Placeholder data simulating Google Reviews
const testimonials = [
  {
    name: "inma azeem",
    role: "2 months ago",
    content:
      "The services which are provided by the aisha academy are really good including the teachers are qualified and well behaved.For kids it’s one of the best academy to learn Quran.",
    rating: 5,
  },
  {
    name: "Hatem Baccari",
    role: "1 month ago",
    content:
      "Mashallah beautiful place and great environment fro kids. Haroun is a dedicated teacher and has years of experience in this field. Highly recommend his institution for in person and online studies.",
    rating: 5,
  },
  {
    name: "Tasmia Rahman",
    role: "3 weeks ago",
    content:
      "Aisha academy is a very good quran and islamic knowledge maktab and i sighned my 2 daughters in there and ever since they were there they improved a lot i recommend this maktab",
    rating: 5,
  },
  {
    name: "Brother Ahmed",
    role: "Father of a Hifz student",
    content:
      "The structure and discipline in the Hifz program are impressive. My son has memorized 5 Juz in a year with excellent Tajweed.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Online Student parent",
    content:
      "We live far from the center, so the online classes are perfect. It feels just like a physical class. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden relative">
      {/* Decorative background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-bold text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
            What Our Community Says
          </h2>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Main Card */}
          <div className="relative p-8 md:p-14 w-full mx-auto max-w-4xl rounded-3xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center space-y-8 group transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)]">
            {/* Quote Icon */}
            <div className="absolute top-10 left-10 opacity-10 text-primary pointer-events-none">
              <Quote size={80} />
            </div>

            <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white text-4xl font-serif font-bold shadow-lg ring-4 ring-white dark:ring-gray-800">
              {testimonials[current].name[0]}
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex justify-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className={`transition-all duration-300 ${i < testimonials[current].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                  />
                ))}
              </div>

              <p className="font-medium text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto font-serif italic">
                "{testimonials[current].content}"
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {testimonials[current].name}
                </h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wider mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - placed on sides for desktop, below for mobile */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:-px-12 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto hidden md:flex p-4 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto hidden md:flex p-4 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-lg border border-gray-100 dark:border-gray-700 hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Nav & Dots */}
          <div className="flex items-center gap-6 mt-12 mb-8">
            <button
              onClick={prevSlide}
              className="md:hidden p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`cursor-pointer h-2.5 rounded-full transition-all duration-500 ${index === current ? "w-8 bg-primary" : "w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50"}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="md:hidden p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Google Review Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-8 pb-10"
          >
            <Link
              href="https://www.google.com/maps/place/Aisha+Academy/@45.5331873,-73.7057605,17z/data=!4m8!3m7!1s0x4cc923deb024b139:0xa2cc331d97d9d599!8m2!3d45.5331873!4d-73.7057605!9m1!1b1!16s%2Fg%2F11s8gfv8tg?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-gray-800 dark:text-white font-semibold group"
            >
              <FaGoogle className="text-xl text-[#DB4437] group-hover:scale-110 transition-transform" />
              <span>Write a Review on Google</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
