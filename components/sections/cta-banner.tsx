"use client";
import React from "react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-8">
        <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl md:text-6xl max-w-4xl mx-auto leading-tight drop-shadow-lg">
          "Give Your Child the Gift of the Quran – Enroll Today"
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed tracking-wide">
          Join the Aisha Academy family and start your child's journey of faith
          and knowledge.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
          <Link
            href="/enroll"
            className="group inline-flex items-center justify-center h-14 px-8 rounded-full bg-accent text-primary hover:bg-white hover:text-primary transition-all duration-300 font-bold font-sans shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Enroll Now
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 font-bold font-sans shadow-lg border border-white/20 hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
