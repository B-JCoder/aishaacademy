"use client";

import React, { useState } from "react";
import { Check, ChevronDown, Monitor, MapPin, Loader2 } from "lucide-react";
import { sendEnrollmentEmail } from "@/app/actions/send-email";
import { toast } from "sonner";

export default function AdmissionsForm() {
  const [learningMode, setLearningMode] = useState<"online" | "physical">(
    "online",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append("learningMode", learningMode);

    try {
      const result = await sendEnrollmentEmail(formData);
      if (result.success) {
        toast.success("Enrollment application sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || "Failed to send application.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      id="admission-form"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 dark:text-white drop-shadow-sm">
            Join Aisha Academy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Take the first step towards a journey of spiritual growth and
            Quranic excellence. Fill out the form below to enroll.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 overflow-hidden">
          {/* Mode Selector */}
          <div className="grid grid-cols-2 border-b border-gray-100 dark:border-gray-700">
            <button
              onClick={() => setLearningMode("online")}
              type="button"
              className={`p-6 flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-300 ${
                learningMode === "online"
                  ? "bg-primary/5 text-primary border-b-2 border-primary"
                  : "bg-transparent text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              }`}
            >
              <div
                className={`p-2.5 rounded-full transition-colors ${learningMode === "online" ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-gray-100 dark:bg-gray-700 text-gray-400"}`}
              >
                <Monitor className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <span className="block font-bold">Online Classes</span>
                <span className="text-xs opacity-80">Learn from anywhere</span>
              </div>
            </button>
            <button
              onClick={() => setLearningMode("physical")}
              type="button"
              className={`p-6 flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-300 ${
                learningMode === "physical"
                  ? "bg-primary/5 text-primary border-b-2 border-primary"
                  : "bg-transparent text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              }`}
            >
              <div
                className={`p-2.5 rounded-full transition-colors ${learningMode === "physical" ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-gray-100 dark:bg-gray-700 text-gray-400"}`}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <span className="block font-bold">Physical Classes</span>
                <span className="text-xs opacity-80">Montreal Campus</span>
              </div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-12 space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                  1
                </span>
                Student Information
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="studentName"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder="Enter student's full name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="age"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder="Student's age"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="gender"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      id="gender"
                      name="gender"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none text-gray-700 dark:text-gray-200"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                  2
                </span>
                Parent/Guardian Details
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="parentName"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder="Parent's full name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    City/Residence
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    placeholder="e.g. Montreal"
                  />
                </div>
              </div>
            </div>

            {/* Course Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                  3
                </span>
                Course Preferences (
                {learningMode === "online" ? "Online" : "Physical"})
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="course"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Select Program
                  </label>
                  <div className="relative">
                    <select
                      id="course"
                      name="course"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none text-gray-700 dark:text-gray-200"
                    >
                      <option value="">Choose a program...</option>
                      <option value="nazra">Nazra Quran (Reading)</option>
                      <option value="hifz">Hifz (Memorization)</option>
                      <option value="tajweed">Tajweed (Rules)</option>
                      <option value="arabic">Arabic Language</option>
                      <option value="islamic_studies">Islamic Studies</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="preferredDays"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Preferred Days
                  </label>
                  <div className="relative">
                    <select
                      id="preferredDays"
                      name="preferredDays"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none text-gray-700 dark:text-gray-200"
                    >
                      <option value="weekdays">Weekdays (Mon-Fri)</option>
                      <option value="weekend">Weekends (Sat-Sun)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="preferredTime"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Preferred Time
                  </label>
                  <div className="relative">
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none text-gray-700 dark:text-gray-200"
                    >
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Additional Notes / Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 resize-none"
                placeholder="Any specific requirements or questions?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending Application...</span>
                </>
              ) : (
                <>
                  <span>Submit Application</span>
                  <Check className="w-5 h-5" />
                </>
              )}
            </button>
            <p className="text-center text-sm text-gray-500">
              We will contact you within 24 hours to confirm your enrollment
              details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
