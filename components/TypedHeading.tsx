"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

interface TypedHeadingProps {
  strings?: string[];
  onComplete?: () => void;
  loop?: boolean;
}

const TypedHeading: React.FC<TypedHeadingProps> = ({
  strings = ["Aisha Academy", "Quran Education", "Islamic Studies"],
  onComplete,
  loop = true,
}) => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      loop: loop,
      onComplete: () => {
        if (onComplete) onComplete();
      },
    };

    const typed = new Typed(typedRef.current!, options);

    return () => {
      typed.destroy(); // cleanup on unmount
    };
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-md tracking-tight text-center py-4"
    >
      <span ref={typedRef} className="text-accent"></span>
    </motion.h1>
  );
};

export default TypedHeading;
