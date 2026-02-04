import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/sections/faq";
import PagesHero from "@/components/sections/pageshero";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/sections/contact-form";
import { getDictionary } from "@/lib/dictionary";

export default async function ContactPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await (params as any);
  const dict = await getDictionary(lang as any);

  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar lang={lang} dict={dict} />

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
            <ContactForm />
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
