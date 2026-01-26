"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-24 overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 dark:bg-gray-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50"></div>
      </div>

      {/* ================= DECORATIVE BLOBS ================= */}
      <div className="absolute top-0 inset-x-0 h-64 flex px-6 pointer-events-none">
        <div className="h-24 w-2/3 bg-gradient-to-br from-primary/40 blur-3xl"></div>
        <div className="h-20 w-3/5 bg-gradient-to-r from-secondary/40 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 backdrop-blur-md border border-accent/30 text-accent text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Admissions Open – 2026
            </div>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white drop-shadow-lg">
              Nurturing Young Hearts with the{" "}
              <span className="text-accent italic">Quran</span>
            </h1>

            <p className="text-gray-200 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl">
              Trusted Quran education for children aged 4+ with experienced
              teachers. Online & Physical classes in{" "}
              <span className="text-white font-semibold">Montreal</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/admissions"
                className="h-14 px-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center
                hover:scale-105 transition shadow-lg shadow-accent/30"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact"
                className="h-14 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20
                text-white font-bold flex items-center justify-center hover:bg-white/20 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative order-first lg:order-last">
            <div className="grid grid-cols-2 gap-6">
              {/* ===== LEFT COLUMN ===== */}
              <div className="space-y-6">
                {/* ONLINE CARD */}
                <Link
                  href="/online-classes"
                  className="group block rounded-[2rem] overflow-hidden
  border border-white/10
  shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]
  hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)]
  transform hover:-translate-y-3 hover:-rotate-2 transition-all duration-700"
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/online-learning.png"
                      alt="Online Quran Learning"
                      fill
                      priority
                      className="object-cover "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex justify-between items-center backdrop-blur-xl bg-primary/70 border border-white/20 rounded-xl px-4 py-3">
                        <span className="text-white font-semibold">
                          Online Quran Academy
                        </span>
                        <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
                          Explore →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* AYAT BOX */}
                <div
                  className="h-24 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10
                flex items-center justify-center relative overflow-hidden shadow-inner shadow-black/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <span
                    className="relative font-arabic text-white text-2xl sm:text-3xl opacity-80
                  drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  >
                    مِنَ الْجِنَّةِ وَالنَّاسِ
                  </span>
                </div>
              </div>

              {/* ===== RIGHT COLUMN ===== */}
              <div className="space-y-6 pt-12">
                {/* AYAT BOX */}
                <div
                  className="h-24 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10
                flex items-center justify-center relative overflow-hidden shadow-inner shadow-black/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <span
                    className="relative font-arabic text-white text-2xl sm:text-3xl opacity-80
                  drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  >
                    ٱلْحَمْدُ لِلَّٰهِ رَبِّ ٱلْعَٰلَمِينَ
                  </span>
                </div>

                {/* PHYSICAL CARD */}
                <Link
                  href="/physical-classes"
                  className="group block rounded-[2rem] overflow-hidden
  border border-white/10
  shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]
  hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)]
  transform hover:-translate-y-3 hover:rotate-2 transition-all duration-700"
                >
                  {/* IMAGE WRAPPER — VERY IMPORTANT */}
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/physical-learning.png"
                      alt="Physical Quran Learning"
                      fill
                      priority
                      className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                    {/* Bottom CTA */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex justify-between items-center backdrop-blur-xl bg-primary/70 border border-white/20 rounded-xl px-4 py-3">
                        <span className="text-white font-semibold">
                          Physical Classes
                        </span>
                        <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
                          Visit →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="pt-20 mt-14 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            ["Hifz", "Memorization"],
            ["Tajwid", "Perfect Recitation"],
            ["Tarbiya", "Character Building"],
            ["Arabic", "Quranic Language"],
          ].map(([title, desc]) => (
            <div key={title} className="text-center">
              <div className="text-3xl font-bold text-white drop-shadow-md">
                {title}
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider mt-1">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
