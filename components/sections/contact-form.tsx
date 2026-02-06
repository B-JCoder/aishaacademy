"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-email";
import { toast } from "sonner";

export default function ContactForm({ dict }: { dict: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If dict is contact.form, we need to adjust, but based on user request,
  // we expect the full contact dict now. Handle both cases for safety.
  const info = dict.info || {};
  const hours = dict.hours || {};
  const form = dict.form || dict; // Fallback if form-only dict is passed

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast.success(form.success);
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || form.error);
      }
    } catch (error) {
      toast.error(form.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-6">
                {info.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {info.description}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {info.visitCampus}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    4640 Rue de Salaberry,
                    <br />
                    Montréal, QC H4J 1H6
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {info.emailUs}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@aisha-academy.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {info.callWhatsapp}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +1 514-562-7711
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 text-primary/70">
                    {info.availableTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" /> {hours.title}
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>{hours.mondayFriday}</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>{hours.saturday}</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-600 dark:text-gray-300 font-medium">
                  <span>{hours.sunday}</span>
                  <span className="text-red-500">{hours.closed}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-card p-8 sm:p-10 rounded-3xl shadow-xl border border-border">
            <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6">
              {form.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {form.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
                    placeholder={form.fullNamePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
                    placeholder={form.phonePlaceholder}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
                  placeholder={form.emailPlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="inquiry"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {form.inquiryType}
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
                >
                  <option value="General Inquiry">
                    {form.inquiryOptions?.general}
                  </option>
                  <option value="Admissions">
                    {form.inquiryOptions?.admissions}
                  </option>
                  <option value="Online Classes">
                    {form.inquiryOptions?.online}
                  </option>
                  <option value="Physical Campus">
                    {form.inquiryOptions?.physical}
                  </option>
                  <option value="Jobs/Careers">
                    {form.inquiryOptions?.jobs}
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800 resize-none"
                  placeholder={form.messagePlaceholder}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {form.sending}
                  </>
                ) : (
                  <>
                    {form.submit} <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
