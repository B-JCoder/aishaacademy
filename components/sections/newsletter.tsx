"use client";

import React, { useState } from "react";
import { Mail, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/app/actions/send-email";

interface NewsletterProps {
  dict: any;
  lang: string;
}

export default function Newsletter({ dict, lang }: NewsletterProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const newsletterDict = dict.newsletter || {
    title: "Stay Updated",
    description:
      "Subscribe to our newsletter for the latest news, events, and educational tips.",
    placeholder: "Enter your email address",
    button: "Subscribe",
    success: "Successfully subscribed!",
    error: "Failed to subscribe. Please try again.",
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await subscribeNewsletter(formData);
      if (result.success) {
        toast.success(newsletterDict.success);
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || newsletterDict.error);
      }
    } catch (error) {
      toast.error(newsletterDict.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="relative rounded-3xl overflow-hidden bg-primary p-8 md:p-12 lg:p-16 shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          ></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Join Our Community</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                {newsletterDict.title}
              </h2>
              <p className="text-gray-100/90 text-lg max-w-lg leading-relaxed font-sans">
                {newsletterDict.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <form onSubmit={handleSubmit} className="relative group">
                <label htmlFor="newsletter-email" className="sr-only">
                  {newsletterDict.placeholder}
                </label>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-accent transition-colors" />
                </div>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  placeholder={newsletterDict.placeholder}
                  className="w-full pl-12 pr-4 sm:pr-32 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-md"
                  aria-label={newsletterDict.placeholder}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 sm:mt-0 sm:absolute sm:right-2 sm:top-2 sm:bottom-2 px-6 rounded-xl bg-accent text-primary font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  aria-label={
                    isSubmitting ? "Subscribing..." : newsletterDict.button
                  }
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>...</span>
                    </>
                  ) : (
                    newsletterDict.button
                  )}
                </button>
              </form>
              <p className="text-gray-200/60 text-xs px-2">
                * We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
