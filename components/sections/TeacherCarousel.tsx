"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Globe, Award } from "lucide-react";

const teachers = [
  {
    name: "Sheikh Abdullah",
    role: "Head of Quranic Studies",
    image: "/images/teacher-1.jpg", // You'll need to ensure these exist or use placeholders
    bio: "Ijazah holder with 15 years of teaching experience in Tajweed and Hifz.",
  },
  {
    name: "Ustadha Fatima",
    role: "Senior Islamic Studies",
    image: "/images/teacher-2.jpg",
    bio: "Specializes in child psychology and Islamic character building.",
  },
  {
    name: "Sheikh Ahmed",
    role: "Arabic Language Expert",
    image: "/images/teacher-3.jpg",
    bio: "Native Arabic speaker passionate about making Arabic accessible to kids.",
  },
  {
    name: "Ustadha Maryam",
    role: "Hifz Coordinator",
    image: "/images/teacher-4.jpg",
    bio: "Guided over 50 students to complete their full Quran memorization.",
  },
];

const TeacherCarousel = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-3xl rounded-l-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/5 blur-3xl rounded-t-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold tracking-widest uppercase">
            Expert Guidance
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-serif font-bold text-white">
            Meet Our <span className="italic text-accent">Mentors</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our qualified and compassionate teachers are dedicated to nurturing
            your child's spiritual path.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image Placeholder if no real image */}
              <div className="absolute inset-0 bg-gray-800">
                {/* 
                   Using a colored gradient/placeholder if image fails, 
                   but assuming next/image will be used.
                   Ideally, replace src with real images or a reliable placeholder service.
                */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-600">
                  <span className="text-6xl opacity-20">
                    <Award />
                  </span>
                </div>
                {/* Uncomment Image component when images are ready */}
                {/* 
                <Image 
                  src={teacher.image} 
                  alt={teacher.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                /> 
                */}
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-1 bg-accent mb-4 rounded-full" />
                <h3 className="text-xl font-bold text-white mb-1">
                  {teacher.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  {teacher.role}
                </p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {teacher.bio}
                </p>

                {/* Social Icons (Conceptual) */}
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                    <Globe size={16} />
                  </div>
                  <div className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                    <Linkedin size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherCarousel;
