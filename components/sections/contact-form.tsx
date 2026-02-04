"use client";

import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-email";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white dark:bg-card p-8 sm:p-10 rounded-3xl shadow-xl border border-border">
      <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6">
        Send a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
              placeholder="+1 (555) 000-0000"
            />
          </div>
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
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
            placeholder="email@example.com"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="inquiry"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Inquiry Type
          </label>
          <select
            id="inquiry"
            name="inquiry"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Admissions">Admissions</option>
            <option value="Online Classes">Online Classes</option>
            <option value="Physical Campus">Physical Campus</option>
            <option value="Jobs/Careers">Jobs/Careers</option>
          </select>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800 resize-none"
            placeholder="How can we help you?"
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
              Sending Message...
            </>
          ) : (
            <>
              Send Message <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
