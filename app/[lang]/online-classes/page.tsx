"use client";
import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import { Monitor, Video, Globe, Wifi, Clock, ShieldCheck } from "lucide-react";

export default function OnlineClassesPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-primary dark:bg-gray-950">
          {/* Pattern/Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-800 opacity-90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-sm font-bold">
              <Globe className="w-4 h-4" />
              Join from Anywhere
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              World-Class Islamic Education{" "}
              <span className="text-accent italic">Online</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Experience the same high-quality Quranic education as our physical
              campus, from the comfort of your home. Live, interactive classes
              with qualified teachers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/admissions"
                className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Start Free Trial
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative group">
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white/50">
                <Monitor className="w-20 h-20 opacity-50" />
              </div>
              {/* If user provided online image, use it. Using generic or no image for now to be safe, or generate one? Prompt said "don't use placeholders". I should generate or use an existing one. `public/images/online-learning.png` exists.*/}
              <Image
                src="/images/online-learning.png"
                alt="Student learning online"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs animate-bounce-slow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Live Sessions
                </p>
                <p className="text-xs text-gray-500">Zoom / Google Meet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">
              How Online Classes Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use modern tools to ensure a seamless learning experience that
              feels just like being in a classroom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border group hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Live Video Classes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with your teacher via Zoom or Google Meet. Two-way video
                ensures proper pronunciation (Tajweed) correction and
                engagement.
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border group hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Flexible Schedule</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose timings that work for you. We offer classes 24/7 to
                accommodate students from different time zones worldwide.
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border group hover:border-accent transition-colors">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Progress Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Parents receive regular monthly reports via email. We track
                attendance, memorization progress, and recitation quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                Why Choose Online Learning?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Safety & Comfort</h4>
                    <p className="text-muted-foreground">
                      Learn from the safety of your home. No commuting save time
                      and energy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">One-on-One Attention</h4>
                    <p className="text-muted-foreground">
                      Private classes allow the teacher to focus 100% on one
                      student's pace and needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Recordings Available</h4>
                    <p className="text-muted-foreground">
                      Missed a class? Access class recordings to revise lessons
                      anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/online-learning.png"
                alt="Benefits of Online Learning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <p className="text-white font-serif text-2xl italic">
                  "Learning connects us, no matter the distance."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Start Your Online Journey?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Join hundreds of satisfied students learning Quran online. Book your
            free trial class today.
          </p>
          <Link
            href="/admissions"
            className="inline-block px-10 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-lg text-lg"
          >
            Enroll for Online Classes
          </Link>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </main>
  );
}
