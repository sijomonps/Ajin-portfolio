"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { media } from "@/data/media";
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
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-28 md:pb-10 px-5 sm:px-8 lg:px-12 select-none overflow-hidden scroll-mt-24"
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

        {/* Swiss Architectural Registration Marks (Desktop only, positioned clear of metadata) */}
        <div className="hidden md:block absolute top-28 left-6 sm:left-8 lg:left-12 font-sans text-[10px] tracking-[0.2em] text-white/10 uppercase">
          + 09°55&apos;N
        </div>
        <div className="hidden md:block absolute top-28 right-6 sm:right-8 lg:right-12 font-sans text-[10px] tracking-[0.2em] text-white/10 uppercase">
          + 76°58&apos;E
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
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] text-sky-400 font-medium">
            KERALA, INDIA
          </span>
          <span className="h-2.5 w-px bg-white/20" />
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400">
            09°55&apos;N 76°58&apos;E
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-sans text-[10px] sm:text-xs uppercase tracking-[0.16em] text-zinc-400">
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
        {/* Step 3: AJIN SHIBU (Mask Reveal with subtle editorial contrast) */}
        <div className="overflow-hidden leading-none mb-4 sm:mb-6">
          <motion.h1
            variants={titleMaskVariants}
            initial="hidden"
            animate="visible"
            className="text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] font-serif font-normal tracking-[-0.03em] text-zinc-100 select-none block"
            style={{ willChange: "transform" }}
          >
            <span>AJIN</span>{" "}
            <span className="font-serif italic font-normal text-zinc-300">SHIBU</span>
          </motion.h1>
        </div>

        {/* Step 4: 4-Line / Paired Positioning Statements with Subtle Asymmetric Portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Column: The 4 Positioning Statements in expressive typography */}
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2vw] font-serif font-normal tracking-tight text-zinc-100"
              >
                <span className="block sm:inline font-normal text-white">Social Work.</span>{" "}
                <span className="block sm:inline font-serif italic text-zinc-400 font-normal">Mental Health.</span>
              </motion.div>
            </div>

            {/* Pair 2: Entrepreneurship. Creativity. */}
            <div className="overflow-hidden leading-tight">
              <motion.div
                variants={lineMaskVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2vw] font-serif font-normal tracking-tight text-zinc-100"
              >
                <span className="block sm:inline font-serif italic text-zinc-400 font-normal">Entrepreneurship.</span>{" "}
                <span className="block sm:inline font-normal text-white">Creativity.</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Personal-Brand Portrait Plate */}
          <motion.div
            variants={supportingVariants}
            initial="hidden"
            animate="visible"
            style={{ y: shouldReduceMotion ? 0 : portraitY }}
            className="hidden md:flex md:col-span-4 lg:col-span-3 justify-end"
          >
            <div className="group relative">
              {/* Soft ambient backlight aura */}
              <div className="absolute -inset-1 rounded-sm bg-gradient-to-tr from-sky-500/15 via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700" />

              <div className="relative overflow-hidden rounded-sm border border-white/[0.12] bg-[#0c0e12] p-1.5 w-28 h-36 lg:w-32 lg:h-40 shadow-[0_12px_36px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:border-sky-400/40 group-hover:-translate-y-0.5">
                <div className="relative w-full h-full overflow-hidden rounded-xs bg-[#08090c]">
                  <Image
                    src={media.hero.portrait.src}
                    alt={media.hero.portrait.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 112px, 128px"
                    className={`object-cover ${media.hero.portrait.objectPosition || "object-top"} contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Discreet Micro Colophon */}
                  <div className="absolute bottom-1 left-1.5 right-1.5 flex items-center justify-between pointer-events-none">
                    <span className="font-sans text-[8px] uppercase tracking-[0.16em] text-zinc-300 font-medium">
                      AJIN SHIBU
                    </span>
                    <span className="font-sans text-[8px] uppercase tracking-[0.16em] text-sky-400 font-semibold">
                      2026
                    </span>
                  </div>
                </div>
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
        <div className="space-y-1.5 max-w-xl">
          <p className="text-sm sm:text-base font-sans font-light text-zinc-300 leading-[1.7]">
            Building meaningful impact through people, ideas and innovation.
          </p>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] sm:text-[11px] font-sans tracking-wide text-zinc-400">
            <span>Founder & Chairman, AMDG Group</span>
            <span className="text-white/20">•</span>
            <span>Founder, YUVA Manass</span>
            <span className="text-white/20">•</span>
            <span>MSW Scholar — Medical & Psychiatry</span>
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
            <span className="uppercase tracking-[0.2em] text-[10px] font-sans font-medium">
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
