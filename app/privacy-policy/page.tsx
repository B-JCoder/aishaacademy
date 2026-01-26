import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const PrivacyPolicy = () => {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-5 sm:px-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              1. Introduction
            </h2>
            <p>
              Welcome to Aisha Academy (“us”, “we”, or “our”). We respect your
              privacy and are committed to protecting your personal data. This
              privacy policy will inform you as to how we look after your
              personal data when you visit our website (regardless of where you
              visit it from) and tell you about your privacy rights and how the
              law protects you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              2. Information We Collect
            </h2>
            <p>
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Identity Data:</strong> Includes first name, last name,
                username or similar identifier, marital status, title, date of
                birth and gender.
              </li>
              <li>
                <strong>Contact Data:</strong> Includes billing address,
                delivery address, email address and telephone numbers.
              </li>
              <li>
                <strong>Technical Data:</strong> Includes internet protocol (IP)
                address, your login data, browser type and version, time zone
                setting and location, browser plug-in types and versions,
                operating system and platform and other technology on the
                devices you use to access this website.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              3. How We Use Your Data
            </h2>
            <p>
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To register you as a new student/customer.</li>
              <li>
                To process and deliver your orders (including managing
                payments).
              </li>
              <li>To serve you relevant educational content and updates.</li>
              <li>
                To improve our website, services, marketing and customer
                relationships.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              4. Data Security
            </h2>
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors and other third parties who have a business need to
              know.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:{" "}
              <a
                href="mailto:info@aishaacademy.com"
                className="text-primary hover:underline"
              >
                info@aishaacademy.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
