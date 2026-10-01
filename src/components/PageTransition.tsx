"use client";

import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Page-wide scroll for global atmospheric chapter shifts
  const { scrollYProgress } = useScroll();

  // Slow global background warmth/tone shift across the full scroll journey
  // Early sections (Hero/About): cool blue north
  // Mid sections (Journey/Experience/Projects): deep neutral
  // Impact sections (YUVA/AMDG): deep indigo-blue
  // Late sections (Vision/Contact): near-black close
  const globalAtmosphereOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.4, 0.65, 0.85, 1],
    shouldReduceMotion ? [0, 0, 0, 0, 0, 0] : [0.06, 0.04, 0.03, 0.05, 0.04, 0.06]
  );

  const globalAtmosphereY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-8%"]
  );

  return (
    <div className="relative min-h-screen bg-[#090a0d] text-zinc-100 selection:bg-sky-400 selection:text-black">
      {/* Film Grain Subtle Noise Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] bg-noise"
        aria-hidden="true"
      />

      {/* Global scroll-driven ambient chapter atmosphere — compositor layer */}
      <motion.div
        style={{
          opacity: globalAtmosphereOpacity,
          y: globalAtmosphereY,
        }}
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        {/* Slow radial northern glow that shifts with scroll */}
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-gradient-to-b from-sky-500/60 via-blue-800/30 to-transparent blur-[200px]" />
      </motion.div>

      {/* Subtle Swiss Architectural Grid Lines (very faint vertical hairlines) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid grid-cols-4 lg:grid-cols-12 gap-6 lg:gap-12 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full border-r border-white" />
        <div className="h-full border-r border-white hidden sm:block" />
        <div className="h-full border-r border-white hidden sm:block" />
        <div className="h-full border-r border-white" />
        <div className="h-full border-r border-white hidden lg:block" />
        <div className="h-full border-r border-white hidden lg:block" />
        <div className="h-full border-r border-white hidden lg:block" />
        <div className="h-full border-r border-white hidden lg:block" />
        <div className="h-full border-r border-white hidden lg:block" />
        <div className="h-full border-r border-white hidden lg:block" />
        <div className="h-full border-r border-white hidden lg:block" />
        <div className="h-full border-r border-white hidden lg:block" />
      </div>

      {/* Main Content Motion Container */}
      <motion.main
        id="main-content"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col flex-1 min-h-screen focus:outline-none"
      >
        {children}
      </motion.main>

    </div>
  );
}
