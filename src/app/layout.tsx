import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090a0d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ajin Shibu — Social Work, Mental Health & Social Impact",
  description:
    "Official portfolio of Ajin Shibu: Social Work Professional, Founder & Chairman of AMDG Group, Founder of YUVA Manass, MSW Scholar in Medical & Psychiatry. Member of KAPS (Kerala Association of Professional Social Workers).",
  keywords: [
    "Ajin Shibu",
    "Social Work",
    "Mental Health",
    "AMDG Group",
    "YUVA Manass",
    "Medical and Psychiatric Social Work",
    "Marian College Kuttikkanam",
    "KAPS Kerala",
    "Social Impact",
    "Community Development",
  ],
  authors: [{ name: "Ajin Shibu", url: "https://amdggroup.in" }],
  creator: "Ajin Shibu",
  metadataBase: new URL("https://amdggroup.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amdggroup.in",
    title: "Ajin Shibu — Social Work, Mental Health & Social Impact",
    description:
      "Official portfolio of Ajin Shibu: Social Work Professional, Founder & Chairman of AMDG Group, Founder of YUVA Manass, MSW Scholar in Medical & Psychiatry.",
    siteName: "Ajin Shibu",
    images: [
      {
        url: "/images/ajin-shibu.png",
        width: 800,
        height: 800,
        alt: "Ajin Shibu — Social Work Professional & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajin Shibu — Social Work, Mental Health & Social Impact",
    description:
      "Social Work Professional, Founder & Chairman of AMDG Group, Founder of YUVA Manass, MSW Scholar in Medical & Psychiatry.",
    images: ["/images/ajin-shibu.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#08090b] text-zinc-100 font-sans selection:bg-sky-400 selection:text-black">
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
