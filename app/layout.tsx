import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Amiri,
  Scheherazade_New,
  Lateef,
  Noto_Naskh_Arabic,
  Poppins,
} from "next/font/google";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/components/ui/whatsapp-button";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const scheherazade = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const lateef = Lateef({
  variable: "--font-lateef",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"], // Poppins supports Latin
  weight: ["400", "600", "700"],
});

export const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-nastaliq",
});

export const metadata: Metadata = {
  title: "Aisha Academy | Young Hearts with the Quran",
  description:
    "Trusted Quran education for children in Montreal. Online and physical classes available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoNastaliq.variable}`}>
      <body
        className={`${playfair.variable} ${inter.variable} ${amiri.variable} ${scheherazade.variable} ${lateef.variable} ${notoNaskh.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
