"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { ArrowDown, Compass, Sparkles } from "lucide-react";

interface DirectionTheme {
  code: string;
  title: string;
  tag: string;
  dispersedX: number;
  dispersedY: number;
}

const directionThemes: DirectionTheme[] = [
  {
    code: "01",
    title: "SOCIAL WORK",
    tag: "Clinical Healthcare & Community Welfare",
    dispersedX: -36,
    dispersedY: 18,
  },
  {
    code: "02",
    title: "MENTAL HEALTH",
    tag: "Youth Advocacy & Stigma Reduction",
    dispersedX: 32,
    dispersedY: -14,
  },
  {
    code: "03",
    title: "LEADERSHIP",
    tag: "Civic Governance & Team Direction",
    dispersedX: -28,
    dispersedY: -20,
  },
  {
    code: "04",
    title: "ENTREPRENEURSHIP",
    tag: "AMDG Group & Social Ventures",
    dispersedX: 38,
    dispersedY: 16,
  },
  {
    code: "05",
    title: "TECHNOLOGY",
    tag: "Digital Solutions & Systems Architecture",
    dispersedX: -32,
    dispersedY: 12,
  },
  {
    code: "06",
    title: "SOCIAL IMPACT",
    tag: "Ethical Human Transformation",
    dispersedX: 30,
    dispersedY: -18,
  },
];

export function ProfessionalVision() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking across the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const cubicEase = [0.16, 1, 0.3, 1] as const;

  // Title mask reveals
  const titleMaskVariants = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: { duration: 0.95, ease: cubicEase },
    },
  };

  // Settle interpolation factor: starts dispersed at scroll 0.1, settles cleanly by 0.65
  const settleFactor = useTransform(scrollYProgress, [0.1, 0.65], [0, 1]);
  const settledOpacity = useTransform(scrollYProgress, [0.1, 0.45], shouldReduceMotion ? [1, 1] : [0.35, 1]);
  const finalFrameScale = useTransform(scrollYProgress, [0.65, 0.95], shouldReduceMotion ? [1, 1] : [0.98, 1]);

  return (
    <section
      ref={containerRef}
      id="vision"
      className="relative py-14 sm:py-20 md:py-28 lg:py-36 border-t border-white/[0.08] bg-[#07080a] text-zinc-100 select-none overflow-hidden scroll-mt-20 sm:scroll-mt-24"
      aria-label="Professional Vision and Long-Term Direction"
    >
      {/* Background Architectural Markings */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Soft radial glow that gently deepens toward the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1200px] h-[600px] rounded-full bg-gradient-to-t from-sky-950/20 via-blue-950/5 to-transparent blur-[160px]" />

        <div className="absolute top-12 left-6 sm:left-8 lg:left-12 font-sans text-[10px] text-white/20 uppercase tracking-widest">
          + SECTION / 10 • HORIZON &amp; VISION
        </div>
        <div className="absolute top-12 right-6 sm:right-8 lg:right-12 font-sans text-[10px] text-white/20 uppercase tracking-widest">
          + LONG-TERM TRAJECTORY
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-20 lg:space-y-28">
        {/* Top Header Marker */}
        <div className="pb-4 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="type-meta text-sky-400">
              10 / DIRECTION
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="type-meta text-zinc-400">
              PROFESSIONAL TRAJECTORY
            </span>
          </div>

          <div className="flex items-center gap-2 type-meta text-zinc-400">
            <Compass className="h-3.5 w-3.5 text-sky-400" />
            <span>HORIZON 2026+</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mt-8 mb-6 sm:mb-10">
          <h2 className="font-editorial-heading text-3xl sm:text-5xl md:text-6xl text-zinc-100">
            Professional Vision<span className="text-sky-400">.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-serif italic text-zinc-400">
            Synthesis of Social Work, Healthcare &amp; Enterprise.
          </p>
        </div>

        {/* ============================================================== */}
        {/* OPENING MAJOR EDITORIAL STATEMENT: WHERE / I'M / GOING         */}
        {/* ============================================================== */}
        <div className="max-w-5xl">
          <span className="type-meta text-sky-400 block mb-3 sm:mb-4">
            [ Future Horizon ]
          </span>

          <div className="space-y-1 select-none">
            <div className="overflow-hidden leading-[0.88]">
              <motion.h2
                variants={titleMaskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="font-serif text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] font-normal uppercase tracking-tight text-zinc-500"
              >
                WHERE
              </motion.h2>
            </div>

            <div className="overflow-hidden leading-[0.88]">
              <motion.h2
                variants={titleMaskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.15 }}
                className="font-serif italic text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] font-normal uppercase tracking-tight text-zinc-300"
              >
                I&apos;M
              </motion.h2>
            </div>

            <div className="overflow-hidden leading-[0.88]">
              <motion.h2
                variants={titleMaskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.3 }}
                className="font-serif text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] font-normal uppercase tracking-tight text-zinc-100"
              >
                GOING<span className="text-sky-400 font-serif italic font-normal">.</span>
              </motion.h2>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* THE 6 THEMES: DISPERSED GRADUALLY SETTLING INTO ALIGNMENT      */}
        {/* ============================================================== */}
        <div className="pt-4 sm:pt-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6 sm:mb-8 lg:mb-10">
            <span className="type-meta text-zinc-400">
              Converging Disciplines
            </span>
            <span className="type-meta text-sky-400">
              6 CORE PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {directionThemes.map((theme) => (
              <SettlingThemeCard
                key={theme.code}
                theme={theme}
                settleFactor={settleFactor}
                settledOpacity={settledOpacity}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* THE FINAL FRAME: QUIET, VISUALLY POWERFUL VISION MANIFESTO    */}
        {/* ============================================================== */}
        <motion.div
          style={{ scale: finalFrameScale }}
          className="relative rounded-sm border border-white/[0.12] bg-[#0c0e12] p-6 sm:p-10 md:p-14 lg:p-18 overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="pointer-events-none absolute -inset-px bg-gradient-to-b from-sky-400/[0.04] via-transparent to-transparent" />

          <div className="relative z-10 max-w-4xl space-y-5 sm:space-y-7">
            <div className="flex items-center gap-2 type-meta text-sky-400">
              <Sparkles className="h-4 w-4" />
              <span>Long-Term Purpose &amp; Dedication</span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-zinc-100 leading-[1.3] sm:leading-[1.25] tracking-tight">
              “To become a{" "}
              <span className="text-white">social work professional</span>,{" "}
              <span className="text-sky-400 italic">mental health promoter</span>, trainer and{" "}
              <span className="text-white">social entrepreneur</span> who uses knowledge, creativity and technology to create{" "}
              <span className="text-sky-400 italic">meaningful social impact</span>.”
            </blockquote>

            <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 type-meta text-zinc-500">
              <span>AJIN SHIBU • KERALA, INDIA</span>
              <span>SYNTHESIZING THEORY, FIELDWORK &amp; ENTERPRISE</span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* NATURAL TRANSITION INTO CONTACT                                */}
        {/* ============================================================== */}
        <div className="pt-4 sm:pt-6 flex flex-col items-center justify-center text-center space-y-4">
          <a
            href="#contact"
            className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-sky-400 transition-colors cursor-pointer min-h-[44px] py-2 px-3"
            aria-label="Continue to contact and direct inquiry"
          >
            <span className="type-meta text-zinc-400 group-hover:text-sky-400 transition-colors">
              Continue to Dialogue &amp; Inquiry
            </span>
            <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-sky-400/50 flex items-center justify-center transition-all duration-300 group-hover:translate-y-1">
              <ArrowDown className="h-3.5 w-3.5 text-zinc-400 group-hover:text-sky-400" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

interface SettlingThemeCardProps {
  theme: DirectionTheme;
  settleFactor: MotionValue<number>;
  settledOpacity: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}

function SettlingThemeCard({
  theme,
  settleFactor,
  settledOpacity,
  shouldReduceMotion,
}: SettlingThemeCardProps) {
  // Interpolate dispersed offset -> 0 based on scroll; zero out horizontal dispersion on mobile to avoid edge clipping
  const x = useTransform(settleFactor, (v) => {
    if (shouldReduceMotion) return 0;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) return 0;
    return (1 - v) * theme.dispersedX;
  });
  const y = useTransform(settleFactor, (v) => {
    if (shouldReduceMotion) return 0;
    return (1 - v) * theme.dispersedY;
  });

  return (
    <motion.div
      style={{
        x,
        y,
        opacity: settledOpacity,
      }}
      className="group relative p-5 sm:p-6 lg:p-7 rounded-sm border border-white/[0.08] bg-[#0c0e12]/80 hover:border-sky-400/40 hover:bg-[#101217] transition-all duration-500 flex flex-col justify-between space-y-4"
    >
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <span className="type-meta text-sky-400">
          {theme.code} {"//"} AXIS
        </span>
        <span className="type-meta text-zinc-500 text-[10px]">
          INTEGRATION
        </span>
      </div>

      <div className="space-y-1 py-1">
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-zinc-100 group-hover:text-white uppercase tracking-tight transition-colors">
          {theme.title}
        </h3>
        <p className="text-xs font-sans font-light text-zinc-400 leading-[1.7] pt-0.5">
          {theme.tag}
        </p>
      </div>

      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between type-meta text-[10px] text-zinc-500">
        <span>CORE PERSPECTIVE</span>
        <span className="text-sky-400">•</span>
      </div>
    </motion.div>
  );
}
