"use client";
import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CheckCircle } from "lucide-react";

export default function EnrollPage() {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-secondary/5">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Enroll Online
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
            Take the first step towards your child's Islamic education today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-4">
                Registration Form
              </h2>
              <p className="text-gray-500 font-sans">
                Please fill out the details below. We will contact you within 24
                hours.
              </p>
            </div>

            <form className="space-y-8 font-sans">
              {/* Parent Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                    1
                  </span>
                  Parent / Guardian Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground dark:text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Parent Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground dark:text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="+1 514..."
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-foreground dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-gray-100 dark:border-gray-800" />

              {/* Student Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                    2
                  </span>
                  Student Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground dark:text-gray-300">
                      Student Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Child's Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground dark:text-gray-300">
                      Age
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Age"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Gender
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        Boy
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        Girl
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100 dark:border-gray-800" />

              {/* Program Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                    3
                  </span>
                  Program Preference
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Weekday Physical (Mon-Thu)",
                    "Weekend Physical (Sat-Sun)",
                    "Online Classes",
                    "Private Tutoring",
                    "Other / Not Sure",
                  ].map((p) => (
                    <label
                      key={p}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-primary transition-colors bg-gray-50 dark:bg-gray-800"
                    >
                      <input
                        type="radio"
                        name="program"
                        className="accent-primary w-5 h-5"
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {p}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-accent hover:bg-accent/90 text-primary-foreground font-bold text-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all mt-8"
              >
                Submit Application
              </button>
              <p className="text-center text-sm text-gray-500">
                * No payment required at this stage. We will contact you to
                confirm enrollment.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
