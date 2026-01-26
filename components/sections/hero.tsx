"use client";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src="/videos/aisha academy francais.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* Overlays for better readability */}
        <div className="absolute inset-0 bg-primary/80 dark:bg-gray-950/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-secondary/40"></div>
      </div>

      {/* Decorative Ornaments */}
      <div className="absolute top-0 inset-x-0 h-64 flex items-start px-5 sm:px-10 md:px-12 lg:px-5 pointer-events-none">
        <div className="h-24 w-2/3 bg-gradient-to-br from-primary opacity-20 blur-2xl dark:from-primary"></div>
        <div className="h-20 w-3/5 bg-gradient-to-r from-secondary opacity-40 blur-2xl dark:from-secondary"></div>
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & Buttons */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 text-accent text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Admissions Open for 2026
            </div>

            <h1 className="font-serif font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight drop-shadow-sm leading-relaxed text-white">
              Nurturing Young Hearts with the{" "}
              <span className="text-accent italic">Quran</span>
            </h1>

            <p className="text-gray-100 max-w-2xl text-lg sm:text-xl drop-shadow-sm mx-auto lg:mx-0 font-sans">
              Trusted Quran education for children aged 4+ with experienced
              teachers. Online & In-Person classes in{" "}
              <span className="text-white font-semibold">Montreal</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
              <Link
                href="/admissions"
                className="w-full sm:w-auto flex items-center justify-center h-14 px-8 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold transition-all transform hover:scale-105 shadow-lg shadow-accent/20 font-sans"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto flex items-center justify-center h-14 px-8 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all font-bold font-sans"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column: Two Images */}
          <div className="relative order-first lg:order-last">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <Link
                  href="/online-classes"
                  className="block relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform hover:-rotate-2 transition-transform duration-500 group cursor-pointer"
                >
                  <Image
                    src="/images/online-learning.png"
                    alt="Online Quran Learning"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                    <p className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                      Online Academy{" "}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </p>
                  </div>
                </Link>
                <div className="h-20 sm:h-24 bg-primary/20 backdrop-blur-3xl rounded-2xl sm:rounded-3xl border border-white/5 flex items-center justify-center">
                  <span className="text-white font-serif text-3xl sm:text-4xl opacity-50">
                    بِسْمِ اللَّهِ
                  </span>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                <div className="h-20 sm:h-24 bg-white/5 backdrop-blur-3xl rounded-2xl sm:rounded-3xl border border-white/5"></div>
                <Link
                  href="/physical-classes"
                  className="block relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform hover:rotate-2 transition-transform duration-500 group cursor-pointer"
                >
                  <Image
                    src="/images/physical-learning.png"
                    alt="Physical Quran Learning"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                    <p className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                      Physical Classes{" "}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 mt-12">
          <div className="text-center lg:text-left">
            <div className="text-3xl font-bold text-white drop-shadow-sm">
              Hifz
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider mt-1">
              Memorization
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl font-bold text-white drop-shadow-sm">
              Tajwid
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider mt-1">
              Perfect Recitation
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl font-bold text-white drop-shadow-sm">
              Tarbiya
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider mt-1">
              Character Building
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl font-bold text-white drop-shadow-sm">
              Arabic
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider mt-1">
              Quranic Language
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
