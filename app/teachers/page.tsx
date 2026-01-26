"use client";
import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { GraduationCap, Award, Book } from "lucide-react";

export default function TeachersPage() {
  const teachers = [
    {
      name: "Sheikh Abdullah",
      role: "Head of Quran Department",
      qual: "Ijazah in 10 Qira'at, Al-Azhar University",
      bio: "Sheikh Abdullah has over 15 years of experience teaching Quran and Tajweed. His gentle approach helps students fall in love with the Quran.",
      specialty: "Hifz & Tajweed",
      image: "/images/teacher-1.png", // Placeholder
    },
    {
      name: "Ustadha Fatima",
      role: "Lead Female Instructor",
      qual: "Masters in Islamic Studies",
      bio: "Specializing in young children's education, Ustadha Fatima creates a nurturing environment for our youngest learners.",
      specialty: "Kids Foundation",
      image: "/images/teacher-2.png",
    },
    {
      name: "Ustadh Ahmed",
      role: "Arabic Language Specialist",
      qual: "BA Arabic Literature",
      bio: "Native Arabic speaker with a passion for teaching the language of the Quran to non-native speakers.",
      specialty: "Arabic Language",
      image: "/images/teacher-3.png",
    },
    {
      name: "Ustadha Zainab",
      role: "Islamic Studies Teacher",
      qual: "Alimiyzah Degree",
      bio: "Connecting modern challenges with Islamic solutions for our youth and adult students.",
      specialty: "Tarbiya & Ethics",
      image: "/images/teacher-4.png",
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Esteemed Teachers
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Qualified, experienced, and dedicated mentors guiding your children
            on the path of knowledge.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-sm border border-border group hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  {/* Placeholder generic avatar if image fails */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-primary/20">
                    <GraduationCap className="w-24 h-24" />
                  </div>
                  {/* <Image src={teacher.image} alt={teacher.name} fill className="object-cover" /> */}
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4">
                    {teacher.specialty}
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-primary mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                    {teacher.role}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4 bg-muted p-2 rounded-lg">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="line-clamp-1">{teacher.qual}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {teacher.bio}
                  </p>
                </div>
              </div>
            ))}

            {/* Join Team Card */}
            <div className="bg-primary text-white rounded-3xl overflow-hidden shadow-sm border border-border p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Book className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4">
                Join Our Team
              </h3>
              <p className="text-primary-100 mb-8">
                Are you a qualified Quran teacher passionate about education? We
                are always looking for talented individuals.
              </p>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-accent transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
