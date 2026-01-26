"use client";
import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import AdmissionsForm from "@/components/sections/admissions-form";
import { CheckCircle } from "lucide-react";

export default function EnrollPage() {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar />

      {/* Spacer for fixed header if needed, but AdmissionsForm has padding */}
      <PagesHero
        title="Enroll Online"
        description="Take the first step towards your child's Islamic education today."
        imageSrc="/images/online-learning.png"
        badge={{ text: "New Term Open", icon: CheckCircle }}
      />

      <AdmissionsForm />

      <FAQSection />

      <Footer />
    </main>
  );
}
