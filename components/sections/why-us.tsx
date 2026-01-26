"use client";
import React from "react";
import {
  CheckCircle2,
  Heart,
  Shield,
  GraduationCap,
  MapPin,
} from "lucide-react";

const reasons = [
  {
    title: "Qualified Teachers",
    description:
      "Experienced male and female teachers dedicated to your child's growth.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Structured Curriculum",
    description:
      "A balanced mix of Quran reading, Tajweed, and Islamic manners (Tarbiyah).",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Child-Friendly Approach",
    description: "We make learning enjoyable and engaging for young minds.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Safe Environment",
    description: "A secure and inclusive space for all students.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Montreal-Based",
    description: "Convenient physical location for local community members.",
    icon: <MapPin className="w-6 h-6" />,
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white sm:text-4xl md:text-5xl">
              Why Parents Trust Aisha Academy
            </h2>
            <p className="text-foreground dark:text-gray-300 text-lg leading-relaxed font-sans">
              We understand that choosing a Quran teacher is one of the most
              important decisions for your child. Here is why hundreds of
              families choose us.
            </p>

            <div className="space-y-6 pt-4">
              {reasons.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary dark:text-white font-serif">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden border-none border-gray-100 dark:border-gray-800 shadow-2xl transition-all duration-500">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/He-NKKRNQrk?si=VcZLl6UvIgClpLcI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
