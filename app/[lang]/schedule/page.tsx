"use client";
import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/sections/faq";
import { Clock, Calendar } from "lucide-react";

export default function SchedulePage() {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-primary/5">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Schedule & Hours
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
            Our operating hours are designed to be flexible for busy families.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="bg-secondary p-6 text-white text-center">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <h2 className="text-2xl font-bold font-serif">Weekly Schedule</h2>
              <p className="opacity-90">Montreal Eastern Time (ET)</p>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              <ScheduleRow day="Monday" time="5:00 PM – 8:00 PM" />
              <ScheduleRow day="Tuesday" time="5:00 PM – 8:00 PM" />
              <ScheduleRow day="Wednesday" time="5:00 PM – 8:00 PM" />
              <ScheduleRow day="Thursday" time="5:00 PM – 8:00 PM" />
              <ScheduleRow day="Friday" time="Closed" isClosed />
              <ScheduleRow day="Saturday" time="9:30 AM – 1:00 PM" highlight />
              <ScheduleRow day="Sunday" time="9:30 AM – 1:00 PM" highlight />
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
            <p>
              Note: Private classes may be scheduled outside of these hours upon
              request.
            </p>
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </main>
  );
}

function ScheduleRow({ day, time, isClosed = false, highlight = false }: any) {
  return (
    <div
      className={`flex justify-between items-center p-6 ${
        highlight
          ? "bg-gray-50 dark:bg-gray-800/50"
          : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
      } transition-colors`}
    >
      <div className="flex items-center gap-4">
        <Calendar
          className={`w-5 h-5 ${
            highlight ? "text-secondary" : "text-gray-400"
          }`}
        />
        <span
          className={`font-medium ${
            highlight
              ? "text-gray-900 dark:text-white font-bold"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {day}
        </span>
      </div>
      <span
        className={`font-bold ${
          isClosed
            ? "text-red-500"
            : highlight
              ? "text-primary"
              : "text-gray-900 dark:text-white"
        }`}
      >
        {time}
      </span>
    </div>
  );
}
