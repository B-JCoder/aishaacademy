"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 sm:pt-32 pb-20 overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 dark:bg-gray-950/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs sm:text-sm">
              Admissions Open – 2026
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-white leading-tight">
              Nurturing Young Hearts with the{" "}
              <span className="text-accent italic">Quran</span>
            </h1>

            <p className="text-gray-200 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg">
              Trusted Quran education for children aged 4+. Online & Physical
              classes in{" "}
              <span className="text-white font-semibold">Montreal</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Link
                href="/admissions"
                className="h-12 px-6 rounded-full bg-accent text-primary font-bold text-sm
                flex items-center justify-center hover:scale-105 transition"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact"
                className="h-12 px-6 rounded-full bg-white/10 border border-white/20
                text-white font-bold text-sm flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative">
            {/* ⚠️ SAME LAYOUT — ALWAYS 2 COLUMNS */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* ===== LEFT COLUMN ===== */}
              <div className="space-y-4">
                {/* ONLINE CARD */}
                <Link
                  href="/online-classes"
                  className="group block rounded-2xl overflow-hidden border border-white/10
                  transition transform hover:-translate-y-2 hover:-rotate-1"
                >
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src="/images/online-learning.png"
                      alt="Online Quran Learning"
                      fill
                      className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3">
                      <div
                        className="flex justify-between items-center bg-primary/70 backdrop-blur-md
                        rounded-lg px-3 py-2 text-xs sm:text-sm"
                      >
                        <span className="text-white font-semibold">Online</span>
                        <span className="bg-accent text-primary px-2 py-0.5 rounded-full font-bold">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* AYAT */}
                <div
                  className="min-h-[3.8rem] sm:min-h-[4.5rem] px-2 rounded-2xl
                  bg-white/5 border border-white/10 flex items-center justify-center"
                >
                  <span className="font-arabic text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                    مِنَ الْجِنَّةِ وَالنَّاسِ
                  </span>
                </div>
              </div>

              {/* ===== RIGHT COLUMN ===== */}
              <div className="space-y-4 pt-8 sm:pt-10">
                {/* AYAT */}
                <div
                  className="min-h-[3.8rem] sm:min-h-[4.5rem] px-2 rounded-2xl
                  bg-white/5 border border-white/10 flex items-center justify-center"
                >
                  <span className="font-arabic text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                    ٱلْحَمْدُ لِلَّٰهِ رَبِّ ٱلْعَٰلَمِينَ
                  </span>
                </div>

                {/* PHYSICAL CARD */}
                <Link
                  href="/physical-classes"
                  className="group block rounded-2xl overflow-hidden border border-white/10
                  transition transform hover:-translate-y-2 hover:rotate-1"
                >
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src="/images/physical-learning.png"
                      alt="Physical Quran Learning"
                      fill
                      className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3">
                      <div
                        className="flex justify-between items-center bg-primary/70 backdrop-blur-md
                        rounded-lg px-3 py-2 text-xs sm:text-sm"
                      >
                        <span className="text-white font-semibold">
                          Physical
                        </span>
                        <span className="bg-accent text-primary px-2 py-0.5 rounded-full font-bold">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
