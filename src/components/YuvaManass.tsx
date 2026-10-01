"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Heart, MessageCircle, ArrowUpRight } from "lucide-react";
import { media } from "@/data/media";

const campaignThemes = [
  "Mental Health",
  "Youth",
  "Emotional Well-being",
  "Life Skills",
  "Human Rights",
  "Help-Seeking",
  "Awareness",
];

const purposePoints = [
  {
    number: "01",
    title: "Awareness & Literacy",
    description: "Fostering understanding of emotional distress, anxiety, and depressive symptoms across student communities.",
  },
  {
    number: "02",
    title: "Psychologically Safe Spaces",
    description: "Creating non-judgmental environments for young people to express vulnerability and seek guidance.",
  },
  {
    number: "03",
    title: "Stigma Deconstruction",
    description: "Dismantling historical misconceptions and social shame associated with therapy and psychiatric care.",
  },
  {
    number: "04",
    title: "Emotional Resilience",
    description: "Equipping young minds with coping strategies, self-awareness, and psychological grounding.",
  },
  {
    number: "05",
    title: "Counseling Literacy",
    description: "Demystifying professional psychotherapy, clinical psychiatry, and therapeutic intervention.",
  },
  {
    number: "06",
    title: "Help-Seeking as Strength",
    description: "Reframing the act of asking for psychological help as an essential form of self-care.",
  },
  {
    number: "07",
    title: "Mental Health as Human Rights",
    description: "Advocating for accessible, dignified, and rights-based mental health support for every young person.",
  },
  {
    number: "08",
    title: "Support Network Bridges",
    description: "Connecting individuals in distress to verified clinical counselors, hospital departments, and care resources.",
  },
];


export function YuvaManass() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for typography crescendo and parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cubicEase = [0.16, 1, 0.3, 1] as const;

  // Slow, cinematic parallax shifts for the three words
  const word1Y = useTransform(scrollYProgress, [0, 0.5], shouldReduceMotion ? [0, 0] : [20, -10]);
  const word2Y = useTransform(scrollYProgress, [0, 0.5], shouldReduceMotion ? [0, 0] : [40, -15]);
  const word3Y = useTransform(scrollYProgress, [0, 0.5], shouldReduceMotion ? [0, 0] : [60, -20]);

  // Scroll-linked x dispersion that begins offset and settles cleanly — desktop only
  // Each word starts from a different side and converges as the section enters
  const word1X = useTransform(scrollYProgress, [0.05, 0.35], shouldReduceMotion ? [0, 0] : [-24, 0]);
  const word2X = useTransform(scrollYProgress, [0.1, 0.4], shouldReduceMotion ? [0, 0] : [18, 0]);
  const word3X = useTransform(scrollYProgress, [0.15, 0.45], shouldReduceMotion ? [0, 0] : [-16, 0]);

  // Opacity follows convergence — each word fades in as it settles
  const word1Opacity = useTransform(scrollYProgress, [0.05, 0.3], shouldReduceMotion ? [1, 1] : [0.3, 1]);
  const word2Opacity = useTransform(scrollYProgress, [0.1, 0.35], shouldReduceMotion ? [1, 1] : [0.3, 1]);
  const word3Opacity = useTransform(scrollYProgress, [0.15, 0.4], shouldReduceMotion ? [1, 1] : [0.3, 1]);

  // Mask reveal variants (mobile — simpler entrance)
  const maskVariants = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: { duration: 1.1, ease: cubicEase },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: cubicEase },
    },
  };

  // Stagger container for campaign themes flowing reveal
  const themesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const themeItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicEase },
    },
  };

  // Purpose points stagger
  const purposeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const purposeItemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicEase },
    },
  };


  return (
    <section
      ref={containerRef}
      id="yuva-manass"
      className="relative py-14 sm:py-20 md:py-28 lg:py-36 border-t border-white/[0.08] bg-[#060709] text-zinc-100 select-none overflow-hidden scroll-mt-20 sm:scroll-mt-24"
      aria-label="YUVA Manass — Youth Mental Health Awareness Campaign"
    >
      <div id="yuva" className="scroll-mt-20 sm:scroll-mt-24" />
      {/* Background Calm Atmospheric Aura: Deep Indigo & Cyan Mist */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Soft slow ambient breathing glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.06, 1],
                  opacity: [0.035, 0.07, 0.035],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[700px] rounded-full bg-gradient-to-b from-sky-600/15 via-blue-900/10 to-transparent blur-[160px]"
        />

        {/* Swiss Architectural Markings */}
        <div className="absolute top-12 left-6 sm:left-8 lg:left-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + SECTION / 05 • ADVOCACY IMMERSION
        </div>
        <div className="absolute top-12 right-6 sm:right-8 lg:right-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + YUVA MANASS CAMPAIGN
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Meta Line: Campaign Marker */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.08]"
        >
          <div className="flex items-center gap-3">
            <span className="type-meta text-sky-400">
              05 / ADVOCACY
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="type-meta text-zinc-400">
              YUVA MANASS CAMPAIGN
            </span>
          </div>

          <div className="flex items-center gap-2 type-meta text-zinc-500">
            <span>FOUNDER — AJIN SHIBU</span>
            <span className="text-white/20">•</span>
            <span>2026</span>
          </div>
        </motion.div>

        {/* Section Heading */}
        <div className="mt-8 mb-6 sm:mb-10">
          <h2 className="font-editorial-heading text-3xl sm:text-5xl md:text-6xl text-zinc-100">
            Yuva Manass<span className="text-sky-400">.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-serif italic text-zinc-400">
            Youth Mental Health Advocacy &amp; Stigma Reduction.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MAJOR VISUAL TYPOGRAPHY: ARE / YOU / OKAY?                     */}
        {/* Mobile Compact Rule #7: ARE YOU / OKAY? on small screens       */}
        {/* ============================================================== */}
        <div className="my-8 sm:my-14 md:my-20 flex flex-col justify-center">
          <div className="type-meta text-sky-400/90 mb-3 flex items-center gap-2">
            <Heart className="h-3.5 w-3.5 text-sky-400" />
            <span>The Core Question</span>
          </div>

          {/* Mobile Layout (2 Lines: ARE YOU / OKAY?) */}
          <div className="sm:hidden space-y-1 select-none">
            <div className="overflow-hidden leading-[0.9]">
              <motion.div
                variants={maskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="font-serif text-[14vw] font-normal uppercase tracking-tight text-zinc-400"
              >
                ARE <span className="italic text-zinc-300">YOU</span>
              </motion.div>
            </div>
            <div className="overflow-hidden leading-[0.9]">
              <motion.div
                variants={maskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.15 }}
                className="font-serif text-[14vw] font-normal uppercase tracking-tight text-zinc-100"
              >
                OKAY<span className="text-sky-400 font-serif italic font-normal">?</span>
              </motion.div>
            </div>
          </div>

          {/* Desktop Layout (3 Lines: ARE / YOU / OKAY?) */}
          <div className="hidden sm:block space-y-1 sm:space-y-2 select-none">
            {/* Word 1: ARE — enters from left, converges to center */}
            <div className="overflow-hidden leading-[0.88]">
              <motion.div
                style={{ y: word1Y, x: word1X, opacity: word1Opacity }}
                variants={maskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="font-serif text-[13vw] md:text-[11vw] lg:text-[10vw] font-normal uppercase tracking-tight text-zinc-500 hover:text-zinc-300 transition-colors duration-500"
              >
                ARE
              </motion.div>
            </div>

            {/* Word 2: YOU — enters from right, slightly delayed */}
            <div className="overflow-hidden leading-[0.88]">
              <motion.div
                style={{ y: word2Y, x: word2X, opacity: word2Opacity }}
                variants={maskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.15 }}
                className="font-serif italic text-[13vw] md:text-[11vw] lg:text-[10vw] font-normal uppercase tracking-tight text-zinc-300 hover:text-white transition-colors duration-500"
              >
                YOU
              </motion.div>
            </div>

            {/* Word 3: OKAY? — enters from left, last to settle */}
            <div className="overflow-hidden leading-[0.88]">
              <motion.div
                style={{ y: word3Y, x: word3X, opacity: word3Opacity }}
                variants={maskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.3 }}
                className="font-serif text-[13vw] md:text-[11vw] lg:text-[10vw] font-normal uppercase tracking-tight text-zinc-100"
              >
                OKAY<span className="text-sky-400 font-serif italic font-normal">?</span>
              </motion.div>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* CORE VISION & EDITORIAL STORY TRANSITION                       */}
        {/* ============================================================== */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline pb-12 sm:pb-16 border-b border-white/[0.08]"
        >
          {/* Left Column: Vision Manifesto with selective Instrument Serif accent */}
          <div className="lg:col-span-7 space-y-3">
            <span className="type-meta text-sky-400 block">
              [ Core Vision ]
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-zinc-100 leading-snug tracking-tight">
              “A generation where asking <span className="italic text-sky-400">‘Are You Okay?’</span> becomes a normal expression of care.”
            </blockquote>
          </div>

          {/* Right Column: Grounded Editorial Story */}
          <div className="lg:col-span-5 space-y-3 text-zinc-300 font-light text-base sm:text-lg leading-[1.75] max-w-xl">
            <p>
              YUVA Manass is a youth mental health awareness campaign created to foster open dialogues around emotional struggle, dismantle social stigma, and normalize reaching out for psychological support.
            </p>
            <p className="text-sm font-sans text-zinc-400 leading-[1.7]">
              Bridging psychiatric awareness with empathetic youth engagement, the campaign connects emerging student communities with verified counseling and institutional care networks.
            </p>
          </div>
        </motion.div>


        {/* ============================================================== */}
        {/* EDITORIAL CAMPAIGN VISUAL ARCHIVE PLATE                        */}
        {/* ============================================================== */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="my-10 sm:my-14"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-sm border border-white/[0.1] overflow-hidden bg-[#090b0e] group shadow-2xl transition-all duration-500 hover:border-sky-400/30">
            <Image
              src={media.yuvaManass.campaign.src}
              alt={media.yuvaManass.campaign.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className={`object-cover ${media.yuvaManass.campaign.objectPosition || "object-center"} transition-all duration-700 ease-out group-hover:scale-[1.02] ${
                media.yuvaManass.campaign.isReal
                  ? "contrast-[1.03] brightness-[1.01] opacity-90 group-hover:opacity-100"
                  : "grayscale contrast-105 opacity-40 group-hover:opacity-65 group-hover:grayscale-0"
              }`}
              loading="lazy"
            />
            {/* Restrained Vignette Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060709]/90 via-transparent to-[#060709]/30 pointer-events-none" />

            {/* Architectural Specimen Overlay Marks */}
            <div className="absolute top-3 left-4 flex items-center gap-2 type-meta text-sky-400 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>FIELD ARCHIVE // YUVA MANASS ADVOCACY</span>
            </div>
            <div className="absolute bottom-3 right-4 type-meta text-zinc-400 pointer-events-none">
              <span>MENTAL HEALTH AS HUMAN RIGHTS</span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* FLOWING TYPOGRAPHY SYSTEM: CAMPAIGN THEMES (No Badges/Pills)   */}
        {/* ============================================================== */}
        <div className="py-10 sm:py-14 border-b border-white/[0.08]">
          <div className="flex items-center justify-between pb-4">
            <span className="type-meta text-zinc-500">
              Flowing Thematic Focus
            </span>
            <span className="type-meta text-sky-400">
              7 INTEGRATED PILLARS
            </span>
          </div>

          {/* Staggered Flowing Typography System */}
          <motion.div
            variants={themesContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3"
          >
            {campaignThemes.map((theme, i) => (
              <React.Fragment key={theme}>
                <motion.span
                  variants={themeItemVariants}
                  className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-zinc-300 hover:text-sky-400 transition-colors duration-300 cursor-default"
                >
                  {theme}
                </motion.span>
                {i < campaignThemes.length - 1 && (
                  <motion.span
                    variants={themeItemVariants}
                    className="text-zinc-600 font-sans text-base sm:text-xl font-light select-none"
                  >
                    /
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>


        {/* ============================================================== */}
        {/* CORE PURPOSE: 8-POINT EDITORIAL MANIFESTO                     */}
        {/* ============================================================== */}
        <div className="py-12 sm:py-16">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-8">
            <div>
              <span className="type-meta text-sky-400 block mb-1">
                Campaign Mandate
              </span>
              <h3 className="font-editorial-heading text-2xl sm:text-3xl text-zinc-100">
                Core Purpose &amp; Action<span className="text-sky-400">.</span>
              </h3>
            </div>
            <span className="hidden sm:inline-block type-meta text-zinc-500">
              [ Systematic Intervention ]
            </span>
          </div>

          <motion.div
            variants={purposeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-6"
          >
            {purposePoints.map((point) => (
              <motion.div
                key={point.number}
                variants={purposeItemVariants}
                className="group relative pb-4 sm:pb-5 border-b border-white/[0.06] hover:border-sky-400/40 transition-colors duration-500"
              >
                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="font-sans text-xs text-sky-400 font-semibold tracking-wider">
                    {point.number}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-normal text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                    {point.title}
                  </h4>
                </div>

                <p className="pl-6 sm:pl-7 text-xs sm:text-sm font-sans font-light text-zinc-400 leading-[1.7] max-w-xl">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* SOCIAL PRESENCE & CAMPAIGN DIALOGUE CTA                        */}
        {/* ============================================================== */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="pt-8 sm:pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-5"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 type-meta text-sky-400">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Social Outreach &amp; Campaign Presence</span>
            </div>
            <p className="text-xs sm:text-sm font-sans font-light text-zinc-400 leading-[1.7]">
              Follow campaign dialogues, workshop announcements, and mental health advocacy initiatives.
            </p>
          </div>

          {/* Social Presence Handle */}
          <div className="flex items-center gap-3">
            <div className="py-2.5 px-4 rounded-sm bg-white/[0.03] border border-white/[0.1] hover:border-sky-400/50 transition-colors flex items-center gap-2.5 type-meta min-h-[44px]">
              <span className="text-zinc-500 text-[10px]">HANDLE:</span>
              <span className="text-zinc-100 font-medium tracking-wide">
                @yuvamanass_campaign
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-sky-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
