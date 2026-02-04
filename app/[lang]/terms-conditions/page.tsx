import React from "react";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const TermsConditions = () => {
  return (
    <main className="bg-white dark:bg-gray-950 overflow-hidden min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-5 sm:px-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Terms & Conditions
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. In addition,
              when using this websites particular services, you shall be subject
              to any posted guidelines or rules applicable to such services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              2. Educational Services
            </h2>
            <p>
              Aisha Academy provides Qur&apos;anic and Islamic education
              services both online and in-person. We commit to providing
              qualified teachers and a structured curriculum. However, student
              progress depends on individual effort, attendance, and practice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              3. Registration & Fees
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All students must complete the registration form accurately.
              </li>
              <li>
                Tuition fees must be paid on time (monthly or per session as
                agreed).
              </li>
              <li>
                We reserve the right to suspend classes for non-payment of fees.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              4. Attendance & Conduct
            </h2>
            <p>
              Students are expected to attend classes regularly and on time.
              Respectful behavior towards teachers and fellow students is
              mandatory. Disruptive behavior may result in dismissal from the
              program.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              5. Digital Content & Intellectual Property
            </h2>
            <p>
              All materials provided during the course (books, PDFs, recordings)
              are for the personal use of the registered student only and may
              not be distributed or sold without permission.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              6. Limitation of Liability
            </h2>
            <p>
              Aisha Academy shall not be liable for any indirect, incidental,
              special, consequential or punitive damages, or any loss of profits
              or revenues, whether incurred directly or indirectly, or any loss
              of data, use, goodwill, or other intangible losses, resulting from
              (a) your access to or use of or inability to access or use the
              services; (b) any conduct or content of any third party on the
              services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
              7. Contact Information
            </h2>
            <p>
              Any questions about these Terms & Conditions should be addressed
              to us at:{" "}
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

export default TermsConditions;
