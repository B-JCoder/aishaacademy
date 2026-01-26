"use client";
import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar />

      <PagesHero
        title="Contact Us"
        description="We are here to answer your questions and help you start your journey."
        imageSrc="/images/img3.jpg"
        badge={{ text: "Get in Touch", icon: Phone }}
      />

      <section className="py-20">
        <div className="mx-auto lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Whether you are interested in online classes, physical
                  enrollment, or just want to learn more about our methodology,
                  our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                      Visit Campus
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      4640 Rue de Salaberry,
                      <br />
                      Montréal, QC H4J 1H6
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@aishaacademy.com
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      admissions@aishaacademy.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                      Call / WhatsApp
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +1 514-562-7711
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available Mon-Fri, 9am - 5pm EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" /> Office Hours
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-card p-8 sm:p-10 rounded-3xl shadow-xl border border-border">
              <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="inquiry"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800"
                  >
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Online Classes</option>
                    <option>Physical Campus</option>
                    <option>Jobs/Careers</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 dark:bg-gray-800 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed - Visual only for now */}
      <section className="h-96 w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="flex flex-col items-center">
            <MapPin className="w-12 h-12 mb-2 opacity-50" />
            <span className="font-bold text-lg">Google Map Location</span>
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </main>
  );
}
