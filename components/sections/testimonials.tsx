"use client";
import React, { useState } from "react";
import { Star, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-bold text-gray-800 dark:text-white text-3xl font-serif">
            What Our Community Says
          </h2>
        </div>
        <div className="relative flex flex-col">
          <div className="p-6 w-full mx-auto max-w-4xl md:p-10 rounded-2xl bg-white dark:bg-gray-950 border border-gray-100/10 dark:border-gray-900 shadow-2xl shadow-gray-700/40 dark:shadow-none flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
            <div className="w-20 md:w-24 h-20 md:h-24 object-cover rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-3xl font-bold">
              {testimonials[current].name[0]}
            </div>
            <div className="space-y-2 text-center flex-1">
              <h2 className="text-xl font-semibold leading-none text-gray-800 dark:text-gray-200">
                {testimonials[current].name}
              </h2>
              <p className="text-sky-700 dark:text-sky-300">
                {testimonials[current].role}
              </p>
            </div>
            <p className="font-medium text-gray-700 dark:text-gray-300 max-w-md">
              {testimonials[current].content}
            </p>
            <div className="mx-auto flex items-center gap-2">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-yellow-600 text-2xl flex">
                  ★
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            aria-label="Prev Button"
            className="outline-none absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-900 p-4 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Button"
            className="outline-none absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-900 p-4 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="flex items-center gap-1 border-0 bg-transparent absolute left-1/2 -translate-x-1/2 -bottom-10">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${index === current ? "w-4 bg-blue-600" : "w-2 bg-gray-400 dark:bg-gray-800"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
