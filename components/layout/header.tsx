"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Navbar */}
      <nav className="mx-auto lg:max-w-[1400px] w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div
          className="flex h-20 items-center justify-between rounded-b-3xl
          bg-primary/70 backdrop-blur-xl border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.35)] px-6"
        >
          {/* LOGO */}
          <Link href="/" className="relative flex items-center">
            {/* soft glow */}
            <span className="absolute -inset-2 rounded-full bg-accent/20 blur-xl"></span>
            <Image
              src="/images/logo-bg-re.png"
              alt="Logo"
              width={160}
              height={50}
              priority
              className="relative w-40 h-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-8 items-center text-white/90 font-medium">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Programs", "/programs"],
              ["Online Classes", "/online-classes"],
              ["Physical Classes", "/physical-classes"],

              ["Admissions", "/admissions"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="relative hover:text-accent transition
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-accent after:transition-all
                  hover:after:w-full"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <Link
            href="/admissions"
            className="hidden lg:flex items-center h-11 px-7 rounded-full
            bg-accent text-primary font-bold
            shadow-[0_4px_10px_#623F2F] hover:shadow-accent/60
            hover:-translate-y-0.5 active:scale-95 transition"
          >
            Enroll Now
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpenNavbar(!openNavbar)}
            className="lg:hidden p-2 text-white/80 hover:text-accent transition-colors active:scale-95"
            aria-label="Toggle Menu"
          >
            {openNavbar ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {openNavbar && (
          <div
            className="mt-3 rounded-2xl bg-primary/90 backdrop-blur-xl
            border border-white/10 shadow-xl p-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4 text-white/90">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Programs", "/programs"],
                ["Online Classes", "/online-classes"],
                ["Physical Classes", "/physical-classes"],

                ["Admissions", "/admissions"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setOpenNavbar(false)}
                    className="block py-2 hover:text-accent transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/admissions"
              onClick={() => setOpenNavbar(false)}
              className="mt-5 flex justify-center items-center h-12 rounded-full
              bg-accent text-primary font-bold shadow-[0_4px_10px_#623F2F] active:scale-95 transition-transform"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
