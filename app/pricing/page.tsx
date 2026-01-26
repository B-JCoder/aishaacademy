"use client";
import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Check } from "lucide-react";
import Pricing from "@/components/sections/pricing";

export default function PricingPage() {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
            Invest in your child's spiritual future with our affordable plans.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Plan 1 */}
            <PriceCard
              title="Weekday Physical"
              price="$65"
              period="/month"
              features={[
                "Mon-Thu Classes",
                "2 Hours Daily",
                "Small Groups",
                "Personal Attention",
              ]}
              highlight={true}
            />
            {/* Plan 2 */}
            <PriceCard
              title="Weekend Physical"
              price="$65"
              period="/month"
              features={[
                "Sat & Sun Classes",
                "Morning or Afternoon",
                "Intensive Learning",
                "Activity Based",
              ]}
            />
            {/* Plan 3 */}
            <PriceCard
              title="Online Classes"
              price="$60"
              period="/month"
              features={[
                "3 Days / Week",
                "Zoom Sessions",
                "Flexible Location",
                "Recorded Lessons",
              ]}
            />
            {/* Plan 4 */}
            <PriceCard
              title="Private 1-on-1"
              price="$12.50"
              period="/session"
              features={[
                "35 Min Session",
                "100% Focus",
                "Flexible Timing",
                "Custom Pace",
              ]}
            />
          </div>
        </div>
      </section>

      <Pricing />

      <Footer />
    </main>
  );
}

function PriceCard({ title, price, period, features, highlight = false }: any) {
  return (
    <div
      className={`rounded-3xl p-8 border hover:border-accent/50 transition-all flex flex-col ${
        highlight
          ? "bg-white shadow-xl border-accent ring-1 ring-accent"
          : "bg-white border-secondary/20"
      }`}
    >
      <h3 className="text-lg font-bold text-primary font-serif mb-4">
        {title}
      </h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold text-accent">{price}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((f: string, i: number) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-foreground"
          >
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/enroll"
        className={`block w-full py-3 rounded-xl font-bold text-center transition-colors ${
          highlight
            ? "bg-accent text-primary-foreground hover:bg-accent/90"
            : "bg-muted text-primary hover:bg-muted/80"
        }`}
      >
        Enroll Now
      </Link>
    </div>
  );
}
