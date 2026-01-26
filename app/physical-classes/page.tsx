"use client";
import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/sections/testimonials";
import { MapPin, Users, BookOpen, Clock, Coffee, Shield } from "lucide-react";

export default function PhysicalClassesPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-primary dark:bg-gray-950">
          <div className="absolute inset-0 bg-gradient-to-l from-primary to-primary-800 opacity-90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-last md:order-first">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative group">
              <Image
                src="/images/physical-learning.png"
                alt="Student learning at campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs animate-bounce-slow">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Montreal Campus
                </p>
                <p className="text-xs text-gray-500">4640 Rue de Salaberry</p>
              </div>
            </div>
          </div>
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-sm font-bold">
              <Users className="w-4 h-4" />
              In-Person Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Traditional Learning in a{" "}
              <span className="text-accent italic">Modern Environment</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Immerse your child in a spiritual atmosphere at our Montreal
              campus. Direct interaction with teachers, peer bonding, and a
              disciplined routine.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/admissions"
                className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Visit Campus
              </Link>
              <Link
                href="#schedule"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Environment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">
              Our Campus Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide a safe, clean, and inspiring environment for students
              to focus on their studies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Structured Classrooms</h3>
              <p className="text-muted-foreground">
                Separate classrooms for different age groups and levels to
                ensure focused learning.
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe Environment</h3>
              <p className="text-muted-foreground">
                CCTV monitored, secure entry/exit, and female supervisors for
                younger children.
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-sm border border-border text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Break & Prayer Areas</h3>
              <p className="text-muted-foreground">
                Designated areas for wudu, prayer, and break times to refresh
                students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-5 sm:px-10">
          <div className="bg-white dark:bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            <div className="bg-primary p-8 text-white text-center">
              <h2 className="text-3xl font-serif font-bold mb-2">
                Weekly Class Schedule
              </h2>
              <p className="opacity-90">Term: Spring 2026</p>
            </div>
            <div className="p-8 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 font-bold text-primary">Day</th>
                    <th className="p-4 font-bold text-primary">
                      Evening Program
                    </th>
                    <th className="p-4 font-bold text-primary">
                      Weekend School
                    </th>
                    <th className="p-4 font-bold text-primary">
                      Hifz Intensive
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium">Monday - Friday</td>
                    <td className="p-4 text-muted-foreground">
                      5:00 PM - 7:00 PM
                    </td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">
                      5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Saturday</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">
                      10:00 AM - 2:00 PM
                    </td>
                    <td className="p-4 text-muted-foreground">
                      9:00 AM - 12:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Sunday</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">
                      10:00 AM - 2:00 PM
                    </td>
                    <td className="p-4 text-muted-foreground">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 text-center">
          <h2 className="text-3xl font-bold font-serif text-primary mb-8">
            Visit Us
          </h2>
          <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
            {/* Embed Google Map would go here */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Google Map Embed</p>
                <p className="text-sm">4640 Rue de Salaberry, Montréal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-accent/10 border-t border-accent/20 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
            Limited Seats in Physical Classes
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            To ensure quality attention, we keep our batch sizes small. Reserve
            your child's spot for the upcoming term.
          </p>
          <Link
            href="/admissions"
            className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg text-lg"
          >
            Enroll for Physical Classes
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
