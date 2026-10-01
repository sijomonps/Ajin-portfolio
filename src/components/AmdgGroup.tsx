"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Globe, Layers, Cpu, Palette, Megaphone, Target } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { media } from "@/data/media";

interface PillarItem {
  id: string;
  code: string;
  title: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
}

const amdgPillars: PillarItem[] = [
  {
    id: "media",
    code: "01",
    title: "DIGITAL MEDIA",
    tag: "AMDG Media Direction",
    description: "Creative visual communications, editorial design, and digital distribution tailored for purposeful initiatives.",
    icon: <Megaphone className="h-4 w-4 text-sky-400" />,
  },
  {
    id: "design",
    code: "02",
    title: "DESIGN",
    tag: "Brand & Visual Architecture",
    description: "Modern typographic systems, brand identities, publication layouts, and digital experiences.",
    icon: <Palette className="h-4 w-4 text-sky-400" />,
  },
  {
    id: "technology",
    code: "03",
    title: "TECHNOLOGY",
    tag: "Digital Solutions & Systems",
    description: "Web development, system architecture, and technology-driven platforms for non-profit and community growth.",
    icon: <Cpu className="h-4 w-4 text-sky-400" />,
  },
  {
    id: "entrepreneurship",
    code: "04",
    title: "ENTREPRENEURSHIP",
    tag: "Venture Incubation",
    description: "Synthesizing entrepreneurial models with social responsibility to build sustainable, value-driven civic initiatives.",
    icon: <Target className="h-4 w-4 text-sky-400" />,
  },
  {
    id: "social-impact",
    code: "05",
    title: "SOCIAL IMPACT",
    tag: "Ethical Human Systems",
    description: "Directing digital capability and creative media toward human empowerment, mental health, and community welfare.",
    icon: <Layers className="h-4 w-4 text-sky-400" />,
  },
];

export function AmdgGroup() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for dynamic word reorganization around AMDG anchor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cubicEase = [0.16, 1, 0.3, 1] as const;

  // Horizontal kinetic movement for satellite typography
  const driftRight = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-30, 30]);
  const driftLeft = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [30, -30]);
  const anchorScale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.94, 1.02, 0.98]);

  return (
    <section
      ref={containerRef}
      id="amdg-group"
      className="relative py-14 sm:py-20 md:py-28 lg:py-36 border-t border-white/[0.08] bg-[#07080b] text-zinc-100 select-none overflow-hidden"
      aria-label="AMDG Group — Entrepreneurial & Digital Venture Ecosystem"
    >
      {/* Background Architectural Markings & Cybernetic Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Ambient electric blue glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full bg-gradient-to-r from-sky-500/10 via-blue-600/5 to-cyan-500/10 blur-[150px]" />

        {/* Swiss Coordinates & Sector Identifiers */}
        <div className="absolute top-12 left-6 sm:left-8 lg:left-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + SECTION / 06 • VENTURE &amp; MEDIA ECOSYSTEM
        </div>
        <div className="absolute top-12 right-6 sm:right-8 lg:right-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + AMDG GROUP • EST. 2026
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header & Status Marker */}
        <div className="pb-3 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="type-meta text-sky-400">
              06 / VENTURE
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="type-meta text-zinc-400">
              ENTREPRENEURSHIP &amp; DIGITAL MEDIA
            </span>
          </div>

          <div className="flex items-center gap-2 type-meta text-zinc-400">
            <span className="text-zinc-500">STANDING:</span>
            <span className="text-white font-medium">FOUNDER &amp; CHAIRMAN</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mt-8 mb-6 sm:mb-10">
          <h2 className="font-editorial-heading text-3xl sm:text-5xl md:text-6xl text-zinc-100">
            AMDG Group<span className="text-sky-400">.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-serif italic text-zinc-400">
            Venture Incubation &amp; Digital Innovation Ecosystem.
          </p>
        </div>

        {/* ============================================================== */}
        {/* THE CORE ANCHOR COMPOSITION: HUGE "AMDG" + DYNAMIC SATELLITES  */}
        {/* ============================================================== */}
        <div className="relative my-8 sm:my-14 md:my-20 flex flex-col items-center justify-center overflow-x-clip w-full">
          {/* Top Kinetic Floating Banner (Drifting Right) */}
          <motion.div
            style={{ x: driftRight }}
            className="w-full flex items-center justify-between gap-4 sm:gap-6 pb-3 sm:pb-6 type-meta text-zinc-500 select-none"
          >
            <div className="flex items-center gap-2 text-sky-400/80">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>DIGITAL INNOVATION</span>
            </div>
            <span className="hidden sm:inline-block">CREATIVITY × TECHNOLOGY</span>
            <span className="text-zinc-400">MEDIA LABS</span>
          </motion.div>

          {/* Central Monolithic Anchor Typography: AMDG (Solid, Crisp Instrument Serif) */}
          <div className="relative py-2 sm:py-4 overflow-hidden">
            <motion.h3
              style={{ scale: anchorScale }}
              className="font-serif text-[24vw] sm:text-[20vw] md:text-[17vw] lg:text-[15vw] font-normal uppercase tracking-tight leading-[0.82] select-none text-zinc-100 text-center transition-all duration-700 hover:tracking-normal"
            >
              AMDG
            </motion.h3>

            {/* Sub-label overlay directly under the letters */}
            <div className="mt-1.5 sm:mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 type-meta text-sky-400 text-center">
              <span>AMDG GROUP</span>
              <span className="text-white/20">•</span>
              <span>INNOVATION ECOSYSTEM</span>
            </div>
          </div>

          {/* Bottom Kinetic Floating Banner (Drifting Left) */}
          <motion.div
            style={{ x: driftLeft }}
            className="w-full flex items-center justify-between gap-4 sm:gap-6 pt-3 sm:pt-6 type-meta text-zinc-500 select-none"
          >
            <span className="text-zinc-400">SOCIAL ENTREPRENEURSHIP</span>
            <span className="hidden sm:inline-block">SUSTAINABLE MODELS</span>
            <div className="flex items-center gap-2 text-sky-400">
              <span>SYSTEMS FOR IMPACT</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* VISION & ARCHITECTURE NARRATIVE                                */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-white/[0.08]">
          {/* Left Column: Bold Vision Manifesto */}
          <div className="lg:col-span-7 space-y-3">
            <span className="type-meta text-sky-400 block">
              [ Ecosystem Vision ]
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-zinc-100 leading-snug tracking-tight">
              To build a creative and innovative entrepreneurial ecosystem connecting{" "}
              <span className="text-white">Technology</span>,{" "}
              <span className="italic text-sky-400">Design</span>,{" "}
              <span className="text-white">Media</span>,{" "}
              <span className="italic text-zinc-300">Entrepreneurship</span>, and{" "}
              <span className="text-white">Social Impact</span>.
            </blockquote>
          </div>

          {/* Right Column: Strategic Colophon & Action CTA */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg font-light text-zinc-300 leading-[1.75] max-w-xl">
              Founded and chaired by Ajin Shibu, AMDG Group serves as the entrepreneurial engine connecting modern technological development, creative communication direction through AMDG Media, and structured civic welfare initiatives.
            </p>

            <div className="pt-2 border-t border-white/[0.06] space-y-1.5 font-sans text-xs text-zinc-400">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">LEADERSHIP:</span>
                <span className="text-zinc-200">Ajin Shibu, Founder &amp; Chairman</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">OFFICIAL DOMAIN:</span>
                <span className="text-sky-400 font-medium">amdggroup.in</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">CREATIVE ENGINE:</span>
                <span className="text-zinc-200">AMDG Media</span>
              </div>
            </div>

            {/* Direct Official Link CTA */}
            <div className="pt-2">
              <MagneticButton
                asLink
                href="https://amdggroup.in"
                target="_blank"
                rel="noopener noreferrer"
                strength={0.2}
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-white text-zinc-950 type-meta font-semibold hover:bg-sky-400 transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-sky-400/20 focus:outline-none"
                ariaLabel="Visit official AMDG Group website (opens in a new tab)"
              >
                <Globe className="h-4 w-4" />
                <span>VISIT AMDG GROUP</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* EDITORIAL BRAND & STUDIO ARCHIVE PLATE                         */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: cubicEase }}
          className="my-10 sm:my-14"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-sm border border-white/[0.08] overflow-hidden bg-[#07090d] group shadow-2xl">
            <Image
              src={media.amdg.brand.src}
              alt={media.amdg.brand.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center grayscale contrast-105 opacity-40 group-hover:opacity-65 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              loading="lazy"
            />
            {/* Dark Vignette Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-[#07080b]/50 pointer-events-none" />

            {/* Architectural Specimen Overlay Marks */}
            <div className="absolute top-3 left-4 flex items-center gap-2 type-meta text-sky-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>VENTURE ARCHIVE // AMDG MEDIA &amp; SYSTEMS</span>
            </div>
            <div className="absolute bottom-3 right-4 type-meta text-zinc-400">
              <span>EST. 2026 • OFFICIAL PLATFORM</span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* THE 5 DYNAMIC TYPOGRAPHIC AXES (Not 6 Cards!)                  */}
        {/* ============================================================== */}
        <div className="py-12 sm:py-16">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-8">
            <div>
              <span className="type-meta text-sky-400 block mb-1">
                Integrated Capabilities
              </span>
              <h3 className="font-editorial-heading text-2xl sm:text-3xl text-zinc-100">
                Five Functional Axes<span className="text-sky-400">.</span>
              </h3>
            </div>
            <span className="hidden sm:inline-block type-meta text-zinc-500">
              [ AMDG Operating System ]
            </span>
          </div>

          {/* Dynamic Typographic Rows */}
          <div className="space-y-1">
            {amdgPillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, ease: cubicEase }}
                className="group relative py-4 sm:py-6 border-b border-white/[0.06] hover:border-sky-400/40 transition-all duration-500 cursor-default"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-baseline">
                  {/* Left: Code & Title */}
                  <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                    <span className="font-sans text-xs text-sky-400 font-semibold tracking-wider">
                      {pillar.code}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-normal text-zinc-100 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      {pillar.title}
                    </h4>
                  </div>

                  {/* Center: Tag / Division */}
                  <div className="lg:col-span-3 flex items-center gap-2 type-meta text-zinc-400">
                    {pillar.icon}
                    <span>{pillar.tag}</span>
                  </div>

                  {/* Right: Concise Scope Description */}
                  <div className="lg:col-span-4">
                    <p className="text-xs sm:text-sm font-sans font-light text-zinc-400 leading-[1.7] group-hover:text-zinc-200 transition-colors max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
