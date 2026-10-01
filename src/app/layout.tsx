import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { BackToTop } from "@/components/BackToTop";

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
  themeColor: "#08090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.amdgmedia.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ajin Shibu — Social Work, Mental Health & Social Impact",
  description:
    "Official portfolio of Ajin Shibu: Social Work Professional, MSW Scholar in Medical & Psychiatry, Founder & Chairman of AMDG Group, and Founder of YUVA Manass.",
  keywords: [
    "Ajin Shibu",
    "Social Work Professional",
    "Medical and Psychiatric Social Work",
    "Youth Mental Health",
    "AMDG Group",
    "YUVA Manass",
    "Marian College Kuttikkanam",
    "LISSAH College",
    "KAPS Kerala",
    "Social Entrepreneurship",
    "Kerala Social Worker",
  ],
  authors: [{ name: "Ajin Shibu", url: siteUrl }],
  creator: "Ajin Shibu",
  publisher: "Ajin Shibu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ajin Shibu — Social Work, Mental Health & Social Impact",
    description:
      "Official portfolio of Ajin Shibu: Social Work Professional, MSW Scholar in Medical & Psychiatry, Founder & Chairman of AMDG Group, and Founder of YUVA Manass.",
    siteName: "Ajin Shibu",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajin Shibu — Social Work, Mental Health & Social Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajin Shibu — Social Work, Mental Health & Social Impact",
    description:
      "Official portfolio of Ajin Shibu: Social Work Professional, MSW Scholar in Medical & Psychiatry, Founder & Chairman of AMDG Group, and Founder of YUVA Manass.",
    images: ["/og-image.png"],
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
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ajin Shibu",
  givenName: "Ajin",
  familyName: "Shibu",
  jobTitle: "Social Work Professional",
  description:
    "Social Work Professional, MSW Scholar in Medical & Psychiatry, Founder & Chairman of AMDG Group, and Founder of YUVA Manass.",
  url: siteUrl,
  sameAs: [
    "https://www.amdgmedia.co.in/",
    "https://instagram.com/yuvamanass_campaign",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Marian College Kuttikkanam (Autonomous)",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "LISSAH College, University of Calicut",
    },
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Kerala Association of Professional Social Workers (KAPS)",
    },
  ],
  knowsAbout: [
    "Medical & Psychiatric Social Work",
    "Youth Mental Health Advocacy",
    "Social Entrepreneurship",
    "Digital Communication Design",
    "Community Fieldwork",
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090b] text-zinc-100 font-sans selection:bg-sky-400 selection:text-black">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-400 focus:text-black focus:font-semibold focus:text-xs focus:tracking-wider focus:uppercase focus:rounded-xs focus:shadow-2xl focus:outline-none"
        >
          Skip to content
        </a>
        <Cursor />
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
