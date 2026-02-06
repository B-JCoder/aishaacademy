"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UserPlus,
  CalendarCheck,
  BookOpenCheck,
  GraduationCap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProcessFlow = ({ dict }: { dict: any }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const icons = [
    <UserPlus key="user" />,
    <CalendarCheck key="cal" />,
    <BookOpenCheck key="book" />,
    <GraduationCap key="grad" />,
  ];

  const steps = dict.steps.map((step: any, idx: number) => ({
    ...step,
    number: `0${idx + 1}`,
    icon: icons[idx],
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1.5,
        },
      });

      // Animate the main vertical line
      tl.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
        },
      );

      // Animate each step card and connectors
      const cards = gsap.utils.toArray<HTMLElement>(".step-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Animate the connector lines moving outward
        const connector = card.querySelector(".connector-line");
        if (connector) {
          gsap.fromTo(
            connector,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
            },
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full py-32 px-6 overflow-hidden bg-[#543021] text-white"
    >
      {/* Background Overlay for texture/depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-32 relative z-10"
      >
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 font-serif bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
          {dict.title}
        </h2>
        <p className="text-amber-100/80 text-lg max-w-2xl mx-auto font-light">
          {dict.subtitle}
        </p>
      </motion.div>

      {/* Center Vertical Timeline Line */}
      <div className="absolute left-1/2 top-[300px] bottom-20 w-[4px] -translate-x-1/2 bg-gray-800/50 rounded-full h-[90%]">
        <div
          ref={lineRef}
          className="w-full bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-700 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.8)]"
          style={{ height: "0%" }}
        ></div>
      </div>

      {/* Steps Container */}
      <div className="relative z-10 flex flex-col gap-32 w-full max-w-6xl">
        {steps.map((step: any, index: number) => (
          <div
            key={index}
            className={`step-card relative flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            } justify-center w-full`}
          >
            {/* Horizontal Connector Line Container */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 flex items-center hidden sm:flex ${
                index % 2 === 0
                  ? "right-1/2 flex-row-reverse"
                  : "left-1/2 flex-row"
              }`}
              style={{ width: "50%" }}
            >
              {/* The Dot on the Main Line */}
              <div className="w-5 h-5 bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,1)] z-20 shrink-0"></div>

              {/* The Line connecting Dot to Card */}
              <div className="connector-line h-[2px] w-full bg-gradient-to-r from-amber-400/80 to-transparent origin-left shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
            </div>

            <div
              className={`w-full sm:w-[45%] ${index % 2 === 0 ? "mr-auto sm:mr-[55%]" : "ml-auto sm:ml-[55%]"}`}
            >
              <div className="relative p-8 sm:p-10 bg-[#3d2216]/80 backdrop-blur-md border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)] rounded-2xl group hover:border-amber-400/60 hover:shadow-[0_0_60px_rgba(245,158,11,0.3)] transition-all duration-500 text-center sm:text-left">
                {/* Glow Behind Box */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon & Number Header */}
                <div
                  className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? "" : "flex-row-reverse sm:flex-row"} justify-center sm:justify-start`}
                >
                  <div className="w-16 h-16 rounded-xl bg-amber-900/30 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(
                      step.icon as React.ReactElement<{ className?: string }>,
                      {
                        className: "w-8 h-8",
                      },
                    )}
                  </div>
                  <span className="text-5xl font-extrabold text-amber-50/20 font-serif select-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-bold text-amber-50 mb-4 font-serif group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-amber-100/70 leading-relaxed font-sans text-base sm:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessFlow;
