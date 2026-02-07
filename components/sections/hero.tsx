"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TypedHeading from "@/components/TypedHeading";

interface HeroSectionProps {
  dict?: any;
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const hero = dict || {
    title: "Young Hearts with the Quran",
    description:
      "Trusted Quran education for children aged 4+. Online & Physical classes in Montreal.",
    enrollNow: "Enroll Now",
    contactUs: "Contact Us",
    admissionsOpen: "Admissions Open – 2026",
    ayatTranslation:
      '"And Allah is with you and will never deprive you of [the reward of] your deeds."',
    surahRef: "Surah Muhammad [47:35]",
    online: "Online",
    physical: "Physical",
    typedStrings: ["Aisha Academy", "Quran Education", "Islamic Studies"],
  };

  useEffect(() => {
    if (currentSlide === 0) {
      const timer = setTimeout(() => {
        setCurrentSlide(1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  const handleTypingComplete = () => {
    setCurrentSlide(0);
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#FDFBF7]">
      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          /* ================= SLIDE 1: AYAT SLIDE ================= */
          <motion.div
            key="slide1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center pt-20"
          >
            {/* Background elements for Slide 1 */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/slideonimage.png"
                alt="Background"
                fill
                className="object-cover transition-transform duration-[10s] scale-110"
                priority
              />
              {/* Overlays for depth and readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />
              <div className="absolute inset-0 bg-black/20" />

              {/* Dynamic lighting spots */}
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-primary/30 blur-[140px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-accent/20 blur-[140px] rounded-full" />
            </div>

            <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Ayat Calligraphy */}
                <div className="relative z-10 w-full max-w-[90vw] md:max-w-4xl aspect-[4/3] sm:aspect-[2/1] max-h-[35vh] sm:max-h-[45vh] lg:max-h-[55vh] flex items-center justify-center">
                  <motion.div
                    className="relative w-full h-full"
                    animate={{
                      y: [0, -0, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/images/banner-arabic.png"
                      alt="Ayat Al-Quran"
                      fill
                      className="object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)] brightness-125"
                      priority
                    />
                  </motion.div>
                </div>

                {/* English Translation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative z-10 text-center space-y-2 mt-8 sm:mt-12 md:mt-16 px-4"
                >
                  <p className="text-white text-sm sm:text-lg md:text-2xl font-medium tracking-wide italic max-w-3xl leading-relaxed drop-shadow-lg">
                    {hero.ayatTranslation}
                  </p>
                  <div className="w-16 h-[1px] bg-accent/70 mx-auto mt-4" />
                </motion.div>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-center mt-6 sm:mt-8 md:mt-10"
              >
                <div className="inline-block px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium text-xs sm:text-base md:text-lg backdrop-blur-md shadow-xl">
                  {hero.surahRef}
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        ) : (
          /* ================= SLIDE 2: CONTENT SLIDE ================= */
          <motion.div
            key="slide2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center pt-28 sm:pt-32 pb-20"
          >
            {/* Background elements for Slide 2 (Original Background) */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-primary/90 dark:bg-gray-950/90" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary/40" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6">
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* LEFT (Bottom on Mobile) */}
                <div className="text-center lg:text-left space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] sm:text-xs md:text-sm">
                    {hero.admissionsOpen}
                  </div>

                  <div className="scale-90 sm:scale-100 origin-center lg:origin-left">
                    <TypedHeading
                      strings={hero.typedStrings}
                      onComplete={handleTypingComplete}
                      loop={false}
                    />
                  </div>

                  <p className="text-gray-200 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0">
                    {hero.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2 px-4 sm:px-0">
                    <Link
                      href="/admissions"
                      className="h-11 sm:h-12 px-6 rounded-full bg-accent text-primary font-bold text-sm
                      flex items-center justify-center hover:scale-105 transition shadow-[0_4px_6px_#623F2F]"
                    >
                      {hero.enrollNow}
                    </Link>
                    <Link
                      href="/contact"
                      className="h-11 sm:h-12 px-6 rounded-full bg-white/10 border border-white/20
                      text-white font-bold text-sm flex items-center justify-center shadow-[0_4px_6px_#623F2F]"
                    >
                      {hero.contactUs}
                    </Link>
                  </div>
                </div>

                {/* RIGHT (Top on Mobile) */}
                <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto lg:max-w-none">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {/* LEFT COLUMN */}
                    <div className="space-y-4 relative">
                      <div className="absolute -top-12 -left-12 w-32 h-32 opacity-20 pointer-events-none z-0 transform -rotate-12">
                        <Image
                          src="/images/calligraphy-decoration.png"
                          alt="Islamic Calligraphy"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <Link
                        href="/online-classes"
                        className="group block rounded-2xl overflow-hidden border border-white/10
                        transition transform hover:-translate-y-2 hover:-rotate-1 shadow-[0_0_20px_#623F2F]"
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
                            <div className="flex justify-between items-center bg-primary/70 backdrop-blur-md rounded-lg px-3 py-2 text-xs sm:text-sm">
                              <span className="text-white font-semibold">
                                {hero.online}
                              </span>
                              <span className="bg-accent text-primary px-2 py-0.5 rounded-full font-bold">
                                →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="min-h-[3.8rem] sm:min-h-[4.5rem] px-2 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="font-arabic text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                          مِنَ الْجِنَّةِ وَالنَّاسِ
                        </span>
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-4 pt-8 sm:pt-10">
                      <div className="min-h-[3.8rem] sm:min-h-[4.5rem] px-2 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="font-arabic text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                          ٱلْحَمْدُ لِلَّٰهِ رَبِّ ٱلْعَٰلَمِينَ
                        </span>
                      </div>
                      <Link
                        href="/physical-classes"
                        className="group block rounded-2xl overflow-hidden border border-white/10
                        transition transform hover:-translate-y-2 hover:rotate-1 shadow-[0_0_20px_#623F2F]"
                      >
                        <div className="relative w-full aspect-[3/4]">
                          <Image
                            src="/images/physical-learning-man.png"
                            alt="Physical Quran Learning"
                            fill
                            className="object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3">
                            <div className="flex justify-between items-center bg-primary/70 backdrop-blur-md rounded-lg px-3 py-2 text-xs sm:text-sm">
                              <span className="text-white font-semibold">
                                {hero.physical}
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slider Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-accent" : "w-2 bg-primary/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Navigation Arrows (Optional but nice for UX) */}
      {/* <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? 1 : 0))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary hover:bg-white/20 transition hidden md:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? 1 : 0))}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary hover:bg-white/20 transition hidden md:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button> */}
    </section>
  );
}
