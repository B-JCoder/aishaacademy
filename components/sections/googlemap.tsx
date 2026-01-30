"use client";

import React from "react";
import { motion } from "framer-motion";

const GoogleMap = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-primary overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-secondary/20 opacity-70"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold text-white text-center"
        >
          Our Location
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-gray-300 text-center"
        >
          Visit Aisha Academy — Nurturing Young Hearts in Montreal.
        </motion.p>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            mt-12 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl 
            border border-white/10 relative overflow-hidden
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
            transition-all duration-500
          "
        >
          {/* Gradient Border (premium effect) */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-secondary/50 to-accent/50 opacity-20 pointer-events-none" />

          {/* Map */}
          <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178799.46740632298!2d-73.71187331250002!3d45.559182700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMap;
