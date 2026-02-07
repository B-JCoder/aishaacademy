"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  lang?: string;
  dict?: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang = "fr", dict }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const pathname = usePathname();

  const navigation = dict?.navigation || {
    home: "Inicio",
    about: "Nosotros",
    programs: "Programas",
    onlineClasses: "Clases Online",
    physicalClasses: "Clases Físicas",
    admissions: "Admisiones",
    contact: "Contacto",
    enrollNow: "Inscríbete",
  };

  const getLocalizedHref = (href: string) => {
    return `/${lang}${href === "/" ? "" : href}`;
  };

  const toggleLanguage = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    // Replace the locale part of the pathname
    const segments = pathname.split("/");
    segments[1] = newLang;
    return segments.join("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto lg:max-w-[1400px] w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div
          className="flex h-20 items-center justify-between rounded-b-3xl
          bg-primary/70 backdrop-blur-xl border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.35)] px-6"
        >
          {/* LOGO */}
          <Link
            href={getLocalizedHref("/")}
            className="relative flex items-center"
          >
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
          <ul className="hidden lg:flex gap-6 items-center text-white/90 font-medium">
            {[
              [navigation.home, "/"],
              [navigation.about, "/about"],
              [navigation.programs, "/programs"],
              [navigation.onlineClasses, "/online-classes"],
              [navigation.physicalClasses, "/physical-classes"],
              [navigation.admissions, "/admissions"],
              [navigation.contact, "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={getLocalizedHref(href)}
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

          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <Link
              href={toggleLanguage()}
              className="flex items-center gap-2 text-white/90 hover:text-accent font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/5 transition"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === "fr" ? "EN" : "FR"}</span>
            </Link>

            {/* DESKTOP CTA */}
            <Link
              href={getLocalizedHref("/admissions")}
              className="flex items-center h-11 px-7 rounded-full
              bg-accent text-primary font-bold
              shadow-[0_4px_10px_#623F2F] hover:shadow-accent/60
              hover:-translate-y-0.5 active:scale-95 transition"
            >
              {navigation.enrollNow}
            </Link>
          </div>

          {/* HAMBURGER */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href={toggleLanguage()}
              className="flex items-center gap-1.5 text-white/90 hover:text-accent font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 transition"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{lang === "fr" ? "EN" : "FR"}</span>
            </Link>
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              className="p-2 text-white/80 hover:text-accent transition-colors active:scale-95"
              aria-label="Toggle Menu"
            >
              {openNavbar ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {openNavbar && (
          <div
            className="mt-3 rounded-2xl bg-primary/90 backdrop-blur-xl
            border border-white/10 shadow-xl p-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4 text-white/90">
              {[
                [navigation.home, "/"],
                [navigation.about, "/about"],
                [navigation.programs, "/programs"],
                [navigation.onlineClasses, "/online-classes"],
                [navigation.physicalClasses, "/physical-classes"],
                [navigation.admissions, "/admissions"],
                [navigation.contact, "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={getLocalizedHref(href)}
                    onClick={() => setOpenNavbar(false)}
                    className="block py-2 hover:text-accent transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={getLocalizedHref("/admissions")}
              onClick={() => setOpenNavbar(false)}
              className="mt-5 flex justify-center items-center h-12 rounded-full
              bg-accent text-primary font-bold shadow-[0_4px_10px_#623F2F] active:scale-95 transition-transform"
            >
              {navigation.enrollNow}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
