"use client";
import React from "react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 text-9xl font-serif text-white rotate-12">
          "
        </div>
        <div className="absolute bottom-10 right-10 text-9xl font-serif text-white -rotate-12">
          "
        </div>
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-8">
        <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl md:text-5xl max-w-3xl mx-auto">
          "Give Your Child the Gift of the Quran – Enroll Today"
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto font-sans">
          Join the Aisha Academy family and start your child's journey of faith
          and knowledge.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href="/enroll"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-accent text-primary-foreground hover:bg-accent/90 transition-all font-bold font-sans shadow-lg"
          >
            Enroll Now
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all font-bold font-sans shadow-lg border border-white/20"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
