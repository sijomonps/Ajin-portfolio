"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Shield,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FileText,
} from "lucide-react";

import { media, type GalleryMediaItem } from "@/data/media";

interface CertificateItem {
  id: string;
  code: string;
  name: string;
  issuer: string;
  scope: string;
  category: "Professional" | "Clinical" | "Fieldwork" | "Technical" | "Design";
  mediaKey: keyof typeof media.certificates;
}

const certificates: CertificateItem[] = [
  {
    id: "kaps",
    code: "01",
    name: "Kerala Association of Professional Social Workers (KAPS)",
    issuer: "KAPS Kerala State Chapter",
    scope: "Official Registered Professional Member · Verified State Standing",
    category: "Professional",
    mediaKey: "kaps",
  },
  {
    id: "iqraa-cert",
    code: "02",
    name: "Psychiatric Social Work Clinical Internship Certificate",
    issuer: "IQRAA International Hospital & Research Centre",
    scope: "NABH-accredited Department of Psychiatry clinical practicum verification.",
    category: "Clinical",
    mediaKey: "iqraa",
  },
  {
    id: "good-samaritan-cert",
    code: "03",
    name: "Rehabilitation Social Work Internship Certificate",
    issuer: "Good Samaritan Rehabilitation & Training Centre",
    scope: "Institutional rehabilitation and client reintegration practicum verification.",
    category: "Clinical",
    mediaKey: "goodSamaritan",
  },
  {
    id: "health-dialogue-cert",
    code: "04",
    name: "Concurrent Fieldwork Practicum Certificate",
    issuer: "Health Dialogue Kozhikode",
    scope: "Community development and AKSHARANILA project verification.",
    category: "Fieldwork",
    mediaKey: "fieldwork",
  },
  {
    id: "sahrudeya-cert",
    code: "05",
    name: "Social Welfare Administration Internship Certificate",
    issuer: "Welfare Services Ernakulam (Sahrudeya)",
    scope: "Non-governmental social administration and rural community welfare verification.",
    category: "Fieldwork",
    mediaKey: "sahrudeya",
  },
  {
    id: "cyber-security",
    code: "06",
    name: "Cyber Security Certificate",
    issuer: "Certified Credential",
    scope: "Information security fundamentals, digital privacy, and ethical data handling.",
    category: "Technical",
    mediaKey: "cybersecurity",
  },
  {
    id: "canva-skills",
    code: "07",
    name: "Visual Communication & Canva Skills Add-on Course",
    issuer: "Institutional Add-on Certification",
    scope: "Visual composition, graphic design, and digital publication.",
    category: "Design",
    mediaKey: "canva",
  },
  {
    id: "graphic-designer",
    code: "08",
    name: "Graphic Designer Certificate",
    issuer: "Design Credential",
    scope: "Digital layout, editorial typography, and visual identity design.",
    category: "Design",
    mediaKey: "graphicDesign",
  },
  {
    id: "software-dev",
    code: "09",
    name: "Software Product Developer Certificate",
    issuer: "Technology Credential",
    scope: "Digital product systems, frontend workflows, and civic platforms.",
    category: "Technical",
    mediaKey: "softwareDev",
  },
  {
    id: "skillup",
    code: "10",
    name: "Skillup Professional Certifications",
    issuer: "Professional Learning",
    scope: "Leadership development, communication, and decision-making.",
    category: "Professional",
    mediaKey: "skillup",
  },
];


const galleryItems: GalleryMediaItem[] = media.gallery;

export function ArchiveCertifications() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredCertId, setHoveredCertId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const categories = ["All", "Professional", "Clinical", "Fieldwork", "Technical", "Design"];

  const filteredCerts = activeCategory === "All"
    ? certificates
    : certificates.filter((c) => c.category === activeCategory);

  // Close lightbox handlers
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
  }, [lightboxIndex]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + galleryItems.length) % galleryItems.length);
  }, [lightboxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      nextLightbox();
    } else if (diff < -45) {
      prevLightbox();
    }
    setTouchStartX(null);
  };

  // Body scroll locking and keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  const activeLightboxItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <section
      id="archive"
      className="relative py-14 sm:py-20 md:py-28 lg:py-36 border-t border-white/[0.08] bg-[#07080b] text-zinc-100 select-none overflow-hidden scroll-mt-20 sm:scroll-mt-24"
      aria-label="Certifications and Visual Archive"
    >
      <div id="credentials" className="scroll-mt-20 sm:scroll-mt-24" />
      {/* Background Architectural Markings */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 left-6 sm:left-8 lg:left-12 font-sans text-[10px] text-white/20 uppercase tracking-widest">
          + SECTION / 08 • CERTIFICATIONS &amp; ARCHIVE
        </div>
        <div className="absolute top-12 right-6 sm:right-8 lg:right-12 font-sans text-[10px] text-white/20 uppercase tracking-widest">
          + VERIFIED DOCUMENTATION
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-20 lg:space-y-28">
        {/* ============================================================== */}
        {/* CHAPTER 1: REFINED CERTIFICATIONS ARCHIVE                      */}
        {/* ============================================================== */}
        <div id="certifications" className="scroll-mt-20 sm:scroll-mt-24">
          {/* Header */}
          <div className="pb-4 border-b border-white/[0.08] mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="type-meta text-sky-400">
                  08 / CREDENTIALS
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="type-meta text-zinc-400">
                  ACCREDITATIONS &amp; CERTIFICATIONS
                </span>
              </div>
              <h2 className="font-editorial-heading text-3xl sm:text-5xl text-zinc-100">
                Credentials<span className="text-sky-400">.</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base font-serif italic text-zinc-400">
                Verified Credentials &amp; Practice Standing.
              </p>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 type-meta">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 min-h-[40px] rounded-xs transition-all uppercase tracking-wider cursor-pointer ${
                    activeCategory === cat
                      ? "bg-white text-zinc-950 font-semibold"
                      : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Refined Archive Interface (Not Boring Identical Cards) */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onMouseLeave={() => setHoveredCertId(null)}
            className="border-t border-white/[0.08]"
          >
            {filteredCerts.map((cert) => {
              const isHovered = hoveredCertId === cert.id;
              const isOtherHovered = hoveredCertId !== null && !isHovered;

              return (
                <div
                  key={cert.id}
                  onMouseEnter={() => setHoveredCertId(cert.id)}
                  className={`group relative py-4 sm:py-6 border-b border-white/[0.06] transition-all duration-300 cursor-default ${
                    isHovered
                      ? "pl-2 sm:pl-4 bg-white/[0.015]"
                      : isOtherHovered
                      ? "opacity-40"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Subtle Underline and Indicator */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-300 ${
                      isHovered ? "bg-sky-400 opacity-80" : "bg-transparent opacity-0"
                    }`}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                    {/* Index & Issuer */}
                    <div className="lg:col-span-4 flex items-baseline gap-3">
                      <span
                        className={`font-sans text-xs tracking-widest font-medium transition-colors duration-300 ${
                          isHovered ? "text-sky-400 font-semibold" : "text-zinc-600"
                        }`}
                      >
                        {cert.code}
                      </span>
                      <div>
                        <span className="type-meta text-sky-400 block">
                          {cert.issuer}
                        </span>
                        <span className="type-meta text-zinc-500 text-[10px]">
                          {cert.category} CREDENTIAL
                        </span>
                      </div>
                    </div>

                    {/* Name & Subtle Scope Underline */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                      <div className="space-y-1">
                        <h3
                          className={`font-serif text-xl sm:text-2xl font-normal text-zinc-100 transition-colors tracking-tight ${
                            isHovered ? "text-white" : ""
                          }`}
                        >
                          {cert.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-sans font-light text-zinc-400 leading-[1.7] max-w-2xl">
                          {cert.scope}
                        </p>
                      </div>

                      <div className="shrink-0 pt-1 md:pt-0">
                        {cert.id === "kaps" ? (
                          <span className="inline-flex items-center gap-1.5 type-meta text-[10px] text-sky-400 px-2 py-0.5 rounded-xs bg-sky-400/10 border border-sky-400/20">
                            <Shield className="h-3 w-3" />
                            <span>Professional Member</span>
                          </span>
                        ) : (
                          <span className="type-meta text-[10px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                            VERIFIED DOSSIER
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Optional Real Certificate Document Preview on Desktop Hover (Zero Layout Shift) */}
                  {media.certificates[cert.mediaKey]?.isReal && (
                    <div
                      className={`pointer-events-none hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 translate-x-3 scale-95"
                      }`}
                    >
                      <div className="relative w-28 h-20 rounded-xs overflow-hidden border border-white/20 shadow-2xl bg-black/90">
                        <Image
                          src={media.certificates[cert.mediaKey].src}
                          alt={media.certificates[cert.mediaKey].alt}
                          fill
                          sizes="112px"
                          className={`object-cover ${media.certificates[cert.mediaKey].objectPosition || "object-top"}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        <span className="absolute bottom-1 right-1.5 type-meta text-[8px] text-sky-400">
                          DOCUMENT
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* CHAPTER 2: VISUAL ARCHIVE GALLERY (Editorial Asymmetric Layout) */}
        {/* ============================================================== */}
        <div>
          {/* Header */}
          <div className="pb-4 border-b border-white/[0.08] mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="type-meta text-sky-400">
                  09 / VISUAL ARCHIVE
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="type-meta text-zinc-400">
                  CURATED FOLIO SPECIMENS
                </span>
              </div>
              <h2 className="font-editorial-heading text-3xl sm:text-5xl text-zinc-100">
                Visual Archive<span className="text-sky-400">.</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base font-serif italic text-zinc-400">
                The Curated Visual Archive &amp; Field Records.
              </p>
            </div>

            <span className="type-meta text-zinc-500">
              [ Click item to expand lightbox ]
            </span>
          </div>

          {/* Editorial Composition Grid (Varied Sizes & Large Feature) */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
            {galleryItems.map((item, index) => {
              const isFeature = item.id === "portrait-feature";

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  data-cursor="image"
                  className={`group relative rounded-sm border border-white/[0.08] bg-[#0c0e12] overflow-hidden cursor-pointer transition-all duration-500 hover:border-sky-400/40 hover:shadow-2xl ${item.spanClass}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open lightbox for ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxIndex(index);
                    }
                  }}
                >
                  {isFeature ? (
                    /* Large Feature Real Image (Authentic Portrait) */
                    <div className="relative w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[500px] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt || item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className={`object-cover ${item.objectPosition || "object-top"} transition-all duration-700 ease-out ${
                          item.isReal
                            ? "contrast-[1.05] brightness-[1.02] opacity-95 group-hover:opacity-100 group-hover:scale-105"
                            : "grayscale contrast-110 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                        }`}
                        loading="lazy"
                      />
                      {/* Ambient Gradient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                      {/* Top Specimen Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-2.5 py-1 rounded-xs bg-black/70 backdrop-blur-md border border-white/10 type-meta text-[10px] text-sky-400">
                          {item.tag}
                        </span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 z-10 space-y-1.5">
                        <span className="type-meta text-zinc-400 block">
                          {item.category}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-zinc-300 font-light">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Expand Icon */}
                      <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                        <Maximize2 className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  ) : (
                    /* Supporting Archival Folio Plates (Authentic Typographic Specimens with Ambient Image) */
                    <div className="relative p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full space-y-5 overflow-hidden">
                      {/* Background Specimen Image */}
                      <Image
                        src={item.src}
                        alt={item.alt || item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={`object-cover ${item.objectPosition || "object-center"} transition-all duration-700 ease-out group-hover:scale-105 ${
                          item.isReal
                            ? "opacity-60 group-hover:opacity-85 contrast-[1.05] brightness-[1.02]"
                            : "grayscale contrast-110 opacity-25 group-hover:opacity-40 group-hover:grayscale-0"
                        }`}
                        loading="lazy"
                      />
                      {/* Dark Vignette Overlay for Legibility */}
                      <div
                        className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
                          item.isReal
                            ? "bg-gradient-to-t from-[#0c0e12]/90 via-[#0c0e12]/60 to-[#0c0e12]/40"
                            : "bg-gradient-to-t from-[#0c0e12]/95 via-[#0c0e12]/85 to-[#0c0e12]/70"
                        }`}
                      />

                      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <span className="type-meta text-sky-400">
                          FOLIO // {item.code}
                        </span>
                        <span className="type-meta text-zinc-500 text-[10px]">
                          {item.tag}
                        </span>
                      </div>

                      <div className="relative z-10 space-y-2">
                        <span className="type-meta text-zinc-500 text-[10px] block">
                          {item.category}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-zinc-100 group-hover:text-white tracking-tight transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-sans text-sky-400/90 font-medium">
                          {item.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm font-sans font-light text-zinc-300 leading-[1.7] pt-1 line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans text-zinc-500">
                        <span className="type-meta text-zinc-400 text-[10px]">EXPAND ARCHIVE RECORD</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* ACCESSIBLE FULLSCREEN LIGHTBOX                                 */}
      {/* ============================================================== */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={activeLightboxItem.title}
            className="fixed inset-0 z-50 bg-[#050608]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-8 overflow-y-auto max-h-[100dvh]"
          >
            {/* Modal Body Container */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full max-w-4xl bg-[#0c0e12] border border-white/[0.12] rounded-sm overflow-hidden shadow-2xl p-4 sm:p-10 space-y-5 my-auto max-h-[92dvh] overflow-y-auto"
            >
              {/* Top Controls: Index, Category & Close Button */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="type-meta text-sky-400 font-semibold">
                    SPECIMEN {activeLightboxItem.code} OF {String(galleryItems.length).padStart(2, "0")}
                  </span>
                  <span className="h-3 w-px bg-white/20" />
                  <span className="type-meta text-zinc-400">
                    {activeLightboxItem.category}
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    type="button"
                    onClick={prevLightbox}
                    aria-label="Previous archive item"
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xs text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextLightbox}
                    aria-label="Next archive item"
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xs text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close lightbox"
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xs text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors ml-1"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {activeLightboxItem.src ? (
                  /* Specimen Viewer */
                  <div className="md:col-span-6 relative aspect-[4/3] sm:aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/[0.1] bg-[#07080a]">
                    <Image
                      src={activeLightboxItem.src}
                      alt={activeLightboxItem.alt || activeLightboxItem.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover ${activeLightboxItem.objectPosition || "object-center"} ${
                        activeLightboxItem.isReal
                          ? "contrast-[1.04] brightness-[1.01]"
                          : "grayscale contrast-105 opacity-80"
                      }`}
                      priority
                    />
                  </div>
                ) : (
                  /* Archival Dossier Graphic */
                  <div className="md:col-span-6 relative aspect-[4/3] w-full rounded-sm bg-[#07080a] border border-white/[0.08] p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between type-meta text-zinc-500">
                      <span className="text-sky-400">ARCHIVAL SPECIMEN</span>
                      <span>VERIFIED CV ENTRY</span>
                    </div>

                    <div className="my-auto space-y-2">
                      <FileText className="h-8 w-8 text-sky-400/80 mb-2" />
                      <p className="type-meta text-zinc-400">
                        {activeLightboxItem.tag}
                      </p>
                      <h4 className="font-serif text-xl sm:text-2xl font-normal text-zinc-200">
                        {activeLightboxItem.title}
                      </h4>
                    </div>

                    <div className="type-meta text-[10px] text-zinc-500 border-t border-white/[0.06] pt-2">
                      OFFICIAL PORTFOLIO REPOSITORY • AJIN SHIBU
                    </div>
                  </div>
                )}

                {/* Right / Text Narrative Colophon */}
                <div className="md:col-span-6 space-y-4">
                  <div className="space-y-1">
                    <span className="type-meta text-sky-400">
                      {activeLightboxItem.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-100 tracking-tight">
                      {activeLightboxItem.title}
                    </h3>
                    <p className="text-sm font-sans text-zinc-400">
                      {activeLightboxItem.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base font-sans font-light text-zinc-300 leading-[1.75] border-t border-white/[0.06] pt-4">
                    {activeLightboxItem.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between type-meta text-zinc-500">
                    <div>
                      <span className="sm:hidden text-sky-400">Swipe ← / → to browse</span>
                      <span className="hidden sm:inline">Keyboard: ← / → / ESC</span>
                    </div>
                    <span className="text-sky-400">KERALA, INDIA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
