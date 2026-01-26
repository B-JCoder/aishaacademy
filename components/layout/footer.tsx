import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-950/20 bg-primary dark:bg-gray-950 border-t border-primary/20 dark:border-gray-900 pt-24 pb-12 text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-white/10 dark:border-gray-900">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="font-bold flex items-center gap-x-2">
              <span className="text-2xl font-serif text-white tracking-wide">
                Aisha Academy
              </span>
            </Link>
            <p className="text-gray-300 dark:text-gray-400 max-w-sm font-sans leading-relaxed">
              Shaping hearts and minds in the light of the Qur&apos;an. A
              dedicated space for spiritual growth and authentic Islamic
              learning for the next generation.
            </p>
            <div className="flex items-center gap-4">
              {/* Social Icons - Using SVGs for reliability */}
              <a
                href="#"
                className="p-2.5 rounded-full bg-white/10 hover:bg-accent hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-white/10 hover:bg-accent hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-white/10 hover:bg-accent hover:text-white transition-all duration-300"
                aria-label="Whatsapp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16.95 7.05a10 10 0 1 0-14.1 0 10 10 0 0 0 14.1 0z" />
                  <path d="M8 8a1.5 1.5 0 0 1 3 0v4" />
                  <path d="M16 8a1.5 1.5 0 0 0-3 0v4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white dark:text-white font-serif tracking-wide">
              Our Programs
            </h4>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400 font-sans">
              <li>
                <Link
                  href="/programs"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Quran with Tajweed
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Hifz Program
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Islamic Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Arabic Language
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white dark:text-white font-serif tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400 font-sans">
              <li>
                <Link
                  href="/online-classes"
                  className="hover:text-accent transition-colors"
                >
                  Online Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/physical-classes"
                  className="hover:text-accent transition-colors"
                >
                  Physical Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/teachers"
                  className="hover:text-accent transition-colors"
                >
                  Our Teachers
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-accent transition-colors"
                >
                  Admission Form
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white dark:text-white font-serif tracking-wide">
              Stay Connected
            </h4>
            <ul className="space-y-4 text-gray-300 dark:text-gray-400 font-sans text-sm">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  4640 Rue de Salaberry,
                  <br /> Montréal, QC H4J 1H6
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-accent shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>info@aishaacademy.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-accent shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+1 514-562-7711</span>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-xs font-semibold">
                Available Online & On-Campus
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 dark:text-gray-500 border-t border-white/5">
          <p>
            © {new Date().getFullYear()} Aisha Academy. Licensed & Registered.
          </p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
