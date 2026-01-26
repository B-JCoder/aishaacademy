"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  return (
    <header className="fixed left-0 top-0 w-full flex items-center h-24 z-50 bg-primary/95 backdrop-blur-md border-b border-primary/20 shadow-sm">
      <nav className="relative mx-auto lg:max-w-[1400px] w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
        <div className="flex items-center min-w-max">
          <Link href="/" className="font-bold flex items-center gap-x-2">
            <span className="text-2xl font-serif text-white tracking-wide">
              Aisha Academy
            </span>
          </Link>
        </div>

        <div
          className={`
            absolute top-full left-0 bg-primary dark:bg-gray-950 lg:!bg-transparent border-b border-primary/20 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none lg:w-max lg:top-0 lg:relative lg:flex duration-300 lg:transition-none ease-linear
            ${
              openNavbar
                ? "translate-y-0 opacity-100 visible w-full"
                : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"
            }
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-6 lg:items-center text-white/90 dark:text-gray-300 lg:w-full lg:justify-center font-medium font-sans text-sm xl:text-base">
            <li>
              <Link
                href="/"
                className="hover:text-accent transition-colors block py-2 lg:py-0"
                onClick={() => setOpenNavbar(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-accent transition-colors block py-2 lg:py-0"
                onClick={() => setOpenNavbar(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="hover:text-accent transition-colors block py-2 lg:py-0"
                onClick={() => setOpenNavbar(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="/online-classes"
                className="hover:text-accent transition-colors block py-2 lg:py-0 text-accent font-semibold"
                onClick={() => setOpenNavbar(false)}
              >
                Online Classes
              </Link>
            </li>
            <li>
              <Link
                href="/physical-classes"
                className="hover:text-accent transition-colors block py-2 lg:py-0 text-accent font-semibold"
                onClick={() => setOpenNavbar(false)}
              >
                Physical Classes
              </Link>
            </li>
            <li>
              <Link
                href="/teachers"
                className="hover:text-accent transition-colors block py-2 lg:py-0"
                onClick={() => setOpenNavbar(false)}
              >
                Teachers
              </Link>
            </li>
            <li>
              <Link
                href="/admissions"
                className="hover:text-accent transition-colors block py-2 lg:py-0"
                onClick={() => setOpenNavbar(false)}
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors block py-2 lg:py-0"
                onClick={() => setOpenNavbar(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:hidden mt-8">
            <Link
              href="/admissions"
              className="flex items-center justify-center h-12 px-6 rounded-full bg-accent text-white font-bold hover:bg-accent/90 shadow-md transition-all"
              onClick={() => setOpenNavbar(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            href="/admissions"
            className="flex items-center justify-center h-11 px-8 rounded-full bg-accent hover:bg-accent/90 text-white font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Enroll Now
          </Link>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleNavbar}
            aria-label="Toggle navbar"
            className="p-3 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {openNavbar ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
