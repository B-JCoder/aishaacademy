"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function GoogleMap({ dict }: { dict: any }) {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <MapPin className="text-primary w-8 h-8 sm:w-12 sm:h-12" />
            {dict.contactUs}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl font-sans max-w-2xl mx-auto">
            {dict.learnMore}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.136015099279!2d-73.71427842323871!3d45.54149022857032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc922097e30d9fb%3A0xe5a363d6613386ec!2s4640%20Salaberry%20St%2C%20Montreal%2C%20QC%20H4J%201H6%2C%20Canada!5e0!3m2!1sen!2sus!4v1738264560935!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contrast-1`25 dark:invert dark:hue-rotate-180 dark:brightness-90 transition-all duration-700"
          ></iframe>

          {/* Location Overlay Card */}
          <div className="absolute bottom-8 left-8 right-8 sm:left-auto sm:right-8 sm:w-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl z-20">
            <h3 className="text-xl font-bold text-primary mb-2 font-serif">
              Aisha Academy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              4640 Rue de Salaberry,
              <br />
              Montréal, QC H4J 1H6
            </p>
            <a
              href="https://maps.google.com/?q=4640+Salaberry+St,+Montreal,+QC+H4J+1H6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all duration-300"
            >
              Get Directions →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
