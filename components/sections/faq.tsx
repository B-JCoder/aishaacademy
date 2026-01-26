"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What age groups do you accept?",
    answer:
      "We accept students as young as 4 years old for our introductory Qaida/Noorani classes. We have specialized programs tailored for children, teenagers, and even adults who wish to perfect their recitation.",
  },
  {
    question: "Do you offer both online and physical classes?",
    answer:
      "Yes! We have a physical campus in Montreal for in-person learning, which fosters community and brotherhood. We also offer comprehensive online classes via Zoom/LMS for students who cannot attend in person, ensuring quality education worldwide.",
  },
  {
    question: "What is your teaching methodology?",
    answer:
      "Our methodology combines traditional emphasis on Tajweed (correct pronunciation) with modern pedagogical techniques. We focus on not just memorization, but understanding and character building (Tarbiyah), ensuring students embody the Quran's teachings.",
  },
  {
    question: "Are the teachers qualified?",
    answer:
      "Absolutely. All our teachers are thoroughly vetted, Hafiz/Hafizza (Quran memorizers), and certified in Tajweed. They also undergo training in child psychology and modern teaching methods to provide a nurturing learning environment.",
  },
  {
    question: "Can I choose a flexible schedule?",
    answer:
      "We understand that families are busy. We offer various time slots including weekday evenings, weekend mornings, and weekend afternoons. Private 1-on-1 sessions also offer maximum flexibility to suit your specific schedule.",
  },
  {
    question: "How do I enroll my child?",
    answer:
      "Enrolling is simple! Click on the 'Enroll Now' button at the top of the page, fill out the registration form, and our admissions team will contact you to schedule an assessment and finalize the placement.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-4xl mx-auto px-5 sm:px-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our programs, schedules, and
            admissions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "bg-white dark:bg-gray-800 border-primary/30 shadow-lg ring-1 ring-primary/20"
                  : "bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-white dark:hover:bg-gray-800"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-bold font-serif transition-colors ${
                    openIndex === index
                      ? "text-primary dark:text-white"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`ml-4 flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? "bg-primary text-white rotate-180"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
