"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Parallax Integration
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const typographyScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);
  const typographyY = useTransform(scrollYProgress, [0, 0.8], [0, 40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.2]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const portraitY = useTransform(scrollYProgress, [0, 0.8], [0, -18]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Cinematic Entrance Animation Timing & Bezier
  const cubicEase = [0.16, 1, 0.3, 1] as const;

  // Step 2: Small metadata fades upward
  const metaVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: shouldReduceMotion ? 0 : 0.15,
        ease: cubicEase,
      },
    },
  };

  // Step 3: AJIN SHIBU mask reveal
  const titleMaskVariants = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: {
        duration: 0.95,
        delay: shouldReduceMotion ? 0 : 0.25,
        ease: cubicEase,
      },
    },
  };

  // Step 4: Positioning lines reveal line by line
  const positioningContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.45,
      },
    },
  };

  const lineMaskVariants = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: {
        duration: 0.85,
        ease: cubicEase,
      },
    },
  };

  // Step 5: Supporting statement & bottom elements
  const supportingVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: shouldReduceMotion ? 0 : 0.65,
        ease: cubicEase,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-28 md:pb-10 px-5 sm:px-8 lg:px-12 select-none overflow-hidden"
    >
      {/* BACKGROUND: Soft radial light + slow ambient breath */}
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Soft slow ambient glowing orb */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.035, 0.065, 0.035],
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] sm:w-[850px] h-[500px] rounded-full bg-gradient-to-b from-sky-400 via-sky-600/25 to-transparent blur-[140px]"
        />

        {/* Swiss Architectural Registration Marks */}
        <div className="absolute top-24 left-6 sm:left-8 lg:left-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + 09°55&apos;N
        </div>
        <div className="absolute top-24 right-6 sm:right-8 lg:right-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + 76°58&apos;E
        </div>
        <div className="absolute bottom-10 left-6 sm:left-8 lg:left-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + 2026.01
        </div>
        <div className="absolute bottom-10 right-6 sm:right-8 lg:right-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + MONOGRAPH
        </div>
      </motion.div>

      {/* TOP COMPOSITION: Small location / Identity Marker (Step 2) */}
      <motion.div
        variants={metaVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between border-b border-white/[0.06] pb-3"
      >
        <div className="flex items-center gap-3">
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-sky-400 font-medium">
            KERALA, INDIA
          </span>
          <span className="h-2.5 w-px bg-white/20" />
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400">
            09°55&apos;N 76°58&apos;E
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-sans text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400">
          <span className="text-zinc-500">STANDING:</span>
          <span className="text-zinc-300">MSW SCHOLAR</span>
          <span className="text-white/20">•</span>
          <span className="text-zinc-300">{personalInfo.kapsMembership}</span>
        </div>
      </motion.div>

      {/* CENTER & BELOW: Large Typography Occupying Viewport (Steps 3 & 4) */}
      <motion.div
        style={{
          scale: shouldReduceMotion ? 1 : typographyScale,
          y: shouldReduceMotion ? 0 : typographyY,
          opacity: shouldReduceMotion ? 1 : contentOpacity,
        }}
        className="relative z-10 w-full max-w-7xl mx-auto my-auto py-4 sm:py-6 flex flex-col justify-center"
      >
        {/* Step 3: AJIN SHIBU (Mask Reveal) */}
        <div className="overflow-hidden leading-none mb-4 sm:mb-6">
          <motion.h1
            variants={titleMaskVariants}
            initial="hidden"
            animate="visible"
            className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] xl:text-[8vw] font-extralight uppercase tracking-[-0.04em] text-zinc-100 select-none block"
            style={{ willChange: "transform" }}
          >
            AJIN SHIBU
          </motion.h1>
        </div>

        {/* Step 4: 4-Line / Paired Positioning Statements with Subtle Asymmetric Portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Column: The 4 Positioning Statements */}
          <motion.div
            variants={positioningContainerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-8 lg:col-span-9 space-y-2 sm:space-y-2.5"
          >
            {/* Pair 1: Social Work. Mental Health. */}
            <div className="overflow-hidden leading-tight">
              <motion.div
                variants={lineMaskVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2vw] font-light tracking-tight text-zinc-200"
              >
                <span className="block sm:inline">Social Work.</span>{" "}
                <span className="block sm:inline text-zinc-400 font-extralight">Mental Health.</span>
              </motion.div>
            </div>

            {/* Pair 2: Entrepreneurship. Creativity. */}
            <div className="overflow-hidden leading-tight">
              <motion.div
                variants={lineMaskVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2vw] font-light tracking-tight text-zinc-200"
              >
                <span className="block sm:inline">Entrepreneurship.</span>{" "}
                <span className="block sm:inline text-zinc-400 font-extralight">Creativity.</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Subtle Understated Portrait (Never Dominates) */}
          <motion.div
            variants={supportingVariants}
            initial="hidden"
            animate="visible"
            style={{ y: shouldReduceMotion ? 0 : portraitY }}
            className="hidden md:flex md:col-span-4 lg:col-span-3 justify-end"
          >
            <div className="group relative overflow-hidden rounded-sm border border-white/[0.08] bg-zinc-900/60 p-1 w-24 h-32 lg:w-28 lg:h-36 transition-all duration-500 hover:border-white/20">
              <div className="relative w-full h-full overflow-hidden grayscale contrast-110 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out">
                <Image
                  src="/images/ajin-shibu.png"
                  alt="Ajin Shibu — Authentic Portrait"
                  fill
                  priority
                  sizes="120px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Discreet Micro Badge */}
              <div className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/80 backdrop-blur-xs font-sans text-[9px] uppercase tracking-wider text-zinc-400">
                AS / 26
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* BOTTOM COMPOSITION: Short Descriptor + Refined Scroll Indicator (Step 5) */}
      <motion.div
        variants={supportingVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        {/* Short Supporting Statement + Micro Roles */}
        <div className="space-y-1 max-w-xl">
          <p className="text-sm sm:text-base font-light text-zinc-300 leading-snug">
            Building meaningful impact through people, ideas and innovation.
          </p>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] sm:text-[11px] font-sans tracking-wide text-zinc-400">
            <span>Founder & Chairman, AMDG Group</span>
            <span className="text-white/20">•</span>
            <span>Founder, YUVA Manass</span>
            <span className="text-white/20">•</span>
            <span>MSW Student — Medical & Psychiatry</span>
          </div>
        </div>

        {/* Refined Animated Scroll Indicator */}
        <motion.div
          style={{ opacity: shouldReduceMotion ? 1 : scrollIndicatorOpacity }}
          className="flex items-center gap-3 shrink-0 self-end sm:self-center"
        >
          <MagneticButton
            asLink
            href="#about"
            strength={0.2}
            className="group flex items-center gap-3 text-zinc-400 hover:text-sky-400 transition-colors cursor-pointer min-h-[44px] py-2 px-1"
            ariaLabel="Scroll down to explore"
          >
            <span className="uppercase tracking-widest text-[10px] font-sans font-medium">
              Scroll to explore
            </span>
            <div className="relative w-3.5 h-6 rounded-full border border-white/20 flex items-start justify-center p-0.5 group-hover:border-sky-400 transition-colors">
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, 8, 0],
                        opacity: [0.8, 0.2, 0.8],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-1 rounded-full bg-sky-400"
              />
            </div>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
