"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowUpRight, Sparkles, Compass, ShieldCheck } from "lucide-react";

interface IdentityItem {
  id: string;
  number: string;
  word: string;
  tag: string;
  scope: string;
  context: string;
  details: string[];
  ambientColor: string;
}

const identityItems: IdentityItem[] = [
  {
    id: "social-work",
    number: "01",
    word: "SOCIAL WORK",
    tag: "Clinical Healthcare & Community Welfare",
    scope: "Medical & Psychiatric Fieldwork",
    context:
      "Structured psychiatric hospital casework at IQRAA International Hospital, institutional rehabilitation at Good Samaritan, and grassroots welfare under Sahrudeya and Health Dialogue.",
    details: [
      "Psychiatric case assessments & psychosocial intake",
      "Institutional rehabilitation & social reintegration",
      "Kerala Association of Professional Social Workers (KAPS) Member"
    ],
    ambientColor: "from-sky-500/20 via-sky-600/5 to-transparent",
  },
  {
    id: "mental-health",
    number: "02",
    word: "MENTAL HEALTH",
    tag: "Youth Advocacy & De-stigmatization",
    scope: "YUVA Manass & 'Are You Okay?' Campaign",
    context:
      "Mobilizing youth dialogue to dismantle psychological stigma, promote emotional self-awareness, and bridge vulnerable young people with certified counseling networks.",
    details: [
      "Founder of the YUVA Manass youth mental health initiative",
      "Facilitator of Focused Group Discussions on emotional well-being",
      "Advocate for accessible mental health support and human rights"
    ],
    ambientColor: "from-cyan-400/20 via-teal-600/5 to-transparent",
  },
  {
    id: "entrepreneurship",
    number: "03",
    word: "ENTREPRENEURSHIP",
    tag: "Social Ventures & Leadership",
    scope: "AMDG Group Ecosystem",
    context:
      "Founding and guiding AMDG Group to align sustainable entrepreneurship, digital innovation, and media with purposeful civic welfare models.",
    details: [
      "Founder & Chairman, AMDG Group (amdggroup.in)",
      "Incubating digital systems for non-profit and social welfare",
      "Cross-disciplinary volunteer leadership and organizational design"
    ],
    ambientColor: "from-zinc-400/20 via-zinc-600/5 to-transparent",
  },
  {
    id: "creativity",
    number: "04",
    word: "CREATIVITY",
    tag: "Design Direction & Digital Media",
    scope: "AMDG Media & EcoScan",
    context:
      "Synthesizing editorial visual identity, publication layout, digital media strategies, and scientific campus biodiversity archival to advance social sector communication.",
    details: [
      "Creative direction & publication design at AMDG Media",
      "Creator and designer of the EcoScan botanical archival project",
      "Campaign visual identity, typography systems, and executive media"
    ],
    ambientColor: "from-sky-400/20 via-indigo-600/5 to-transparent",
  },
];

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeHovered, setActiveHovered] = useState<string | null>(null);

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const statementY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-16, 24]);
  const bodyY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 18]);
  const identityY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [16, -16]);

  const cubicEase = [0.16, 1, 0.3, 1] as const;

  // Viewport entrance animation variants
  const labelVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicEase },
    },
  };

  const statementLineVariants = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: { duration: 0.9, ease: cubicEase },
    },
  };

  const paragraphContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicEase },
    },
  };

  const identityContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.35,
      },
    },
  };

  const identityItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: cubicEase },
    },
  };

  const currentActive = activeHovered
    ? identityItems.find((item) => item.id === activeHovered)
    : null;

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-14 sm:py-20 md:py-28 lg:py-36 border-t border-white/[0.06] overflow-hidden bg-[#08090b] text-zinc-100 select-none"
      aria-label="About Ajin Shibu and Professional Identity"
    >
      {/* Background Architectural Registration Marks & Dynamic Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Dynamic atmospheric aura that reacts to active hover */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[600px] rounded-full blur-[160px] transition-all duration-700 ease-out bg-gradient-to-b ${
            currentActive ? currentActive.ambientColor : "from-sky-500/10 via-sky-900/5 to-transparent opacity-40"
          }`}
        />

        {/* Faint Architectural Registration Coordinates */}
        <div className="absolute top-12 left-6 sm:left-8 lg:left-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + SECTION / 01 • IDENTITY &amp; PHILOSOPHY
        </div>
        <div className="absolute top-12 right-6 sm:right-8 lg:right-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + MARIAN COLLEGE KUTTIKKANAM
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Step 1: Small Section Label & Meta Header */}
        <motion.div
          variants={labelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.08]"
        >
          <div className="flex items-center gap-3">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] text-sky-400 font-medium">
              01 / ABOUT
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400">
              PHILOSOPHY &amp; PERSPECTIVE
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-sans text-[10px] sm:text-xs uppercase tracking-[0.16em] text-zinc-500 font-medium">
            <span>KERALA, INDIA</span>
            <span className="text-white/20">•</span>
            <span>2022 — 2027</span>
          </div>
        </motion.div>

        {/* Step 2: Huge Editorial Statement (Mask Reveal) */}
        <motion.div
          style={{ y: statementY }}
          className="mt-8 sm:mt-12 md:mt-16 max-w-5xl"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="font-serif italic font-normal text-2xl sm:text-3xl text-zinc-100">About.</span>
            <span className="text-white/20">•</span>
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-sky-400 font-medium">
              Core Perspective
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-zinc-100 leading-[1.08]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={statementLineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="block"
              >
                I work at the
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={statementLineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.1 }}
                className="block text-zinc-200"
              >
                intersection of <span className="font-serif italic text-sky-400">people</span>,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                variants={statementLineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.2 }}
                className="block text-zinc-400"
              >
                ideas and <span className="font-serif italic text-zinc-100">impact.</span>
              </motion.span>
            </span>
          </h2>
        </motion.div>

        {/* Step 3: Asymmetrical Editorial Spread (Left Credentials Colophon + Right Body Paragraphs) */}
        <motion.div
          style={{ y: bodyY }}
          className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
        >
          {/* Left Column: Academic & Practice Anchor Colophon */}
          <motion.div
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="border border-white/[0.08] bg-[#0d0f13] p-5 sm:p-7 rounded-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Compass className="h-3.5 w-3.5 text-sky-400" />
                  <span className="font-sans text-xs uppercase tracking-[0.16em] text-zinc-300 font-medium">
                    Scholarly &amp; Civic Footing
                  </span>
                </div>
                <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-wider font-medium">STANDARDS</span>
              </div>

              {/* Education Anchor 1: MSW */}
              <div className="space-y-0.5">
                <span className="font-sans text-[10px] text-sky-400 uppercase tracking-[0.16em] font-medium">
                  Master of Social Work (MSW) • 2025–2027
                </span>
                <p className="text-sm font-normal text-zinc-200">
                  Marian College Kuttikkanam (Autonomous)
                </p>
                <p className="text-xs font-sans text-zinc-400">
                  Specialization: Medical &amp; Psychiatry
                </p>
              </div>

              {/* Education Anchor 2: BSW */}
              <div className="pt-3 border-t border-white/[0.06] space-y-0.5">
                <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.16em] font-medium">
                  Bachelor of Social Work (BSW) • 2022–2025
                </span>
                <p className="text-sm font-normal text-zinc-200">
                  LISSAH College, Kaithapoyil
                </p>
                <p className="text-xs font-sans text-zinc-400">
                  University of Calicut
                </p>
              </div>

              {/* Verified Registry Badge */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans">
                <div className="flex items-center gap-2 text-zinc-400">
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                  <span>KAPS Registration:</span>
                </div>
                <span className="text-zinc-200 font-medium">{personalInfo.kapsMembership}</span>
              </div>
            </div>

            {/* Editorial Sub-quote */}
            <p className="font-serif italic text-sm text-zinc-400 leading-relaxed px-1">
              “Clinical empathy meets disciplined systems architecture.”
            </p>
          </motion.div>

          {/* Right Column: 3 Short Emotionally Intelligent Editorial Paragraphs */}
          <motion.div
            variants={paragraphContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="lg:col-span-7 space-y-6 text-zinc-300 font-sans font-light text-base sm:text-lg leading-[1.75] max-w-2xl"
          >
            {/* Paragraph 1 */}
            <motion.p variants={paragraphVariants}>
              My work is grounded in direct human reality. Currently pursuing a Master of Social Work specializing in Medical &amp; Psychiatry at Marian College Kuttikkanam, I operate where clinical healthcare, individual emotional turmoil, and institutional rehabilitation meet. Whether inside psychiatric hospital rounds or rehabilitation centers, I observe how deeply structural support shapes human dignity.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p variants={paragraphVariants}>
              Formed through a rigorous Bachelor of Social Work at LISSAH College under Calicut University, my discipline took root through community casework, vulnerable group advocacy, and grassroots social surveys. I approach mental health and social distress not as abstract metrics, but as complex human narratives that demand active listening, empathy, and ethical intervention.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p variants={paragraphVariants} className="text-zinc-400">
              This perspective naturally expanded into leadership and creative communication. As Founder of AMDG Group and the YUVA Manass youth mental health campaign, I integrate psychiatric awareness with digital media, visual identity, and social entrepreneurship—building enduring platforms that convert compassion into organized societal action.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Step 4: Professional Identity Typography Composition */}
        <div id="identity" className="mt-12 sm:mt-20 md:mt-28 pt-8 sm:pt-12 border-t border-white/[0.08]">
          <div id="pillars" className="scroll-mt-24" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 md:mb-12">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-sky-400 font-medium block mb-1.5">
                02 / PROFESSIONAL IDENTITY
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-normal tracking-tight text-zinc-100">
                Four Pillars. <span className="font-serif italic text-zinc-400">One Architecture.</span>
              </h3>
            </div>
            <span className="font-sans text-[11px] text-zinc-500 uppercase tracking-wider font-medium">
              <span className="hidden sm:inline">[ Hover to reveal context ]</span>
              <span className="sm:hidden">[ Tap to reveal context ]</span>
            </span>
          </div>

          {/* The Composition Sculpture */}
          <motion.div
            style={{ y: identityY }}
            variants={identityContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            className="relative"
            onMouseLeave={() => setActiveHovered(null)}
          >
            {/* The 4 Words Stacked Composition */}
            <div className="space-y-1.5 sm:space-y-3">
              {identityItems.map((item) => {
                const isHovered = activeHovered === item.id;
                const isOtherHovered = activeHovered !== null && !isHovered;

                return (
                  <motion.div
                    key={item.id}
                    variants={identityItemVariants}
                    onMouseEnter={() => setActiveHovered(item.id)}
                    onClick={() => setActiveHovered(activeHovered === item.id ? null : item.id)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isHovered}
                    aria-label={`Explore ${item.word}: ${item.tag}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveHovered(activeHovered === item.id ? null : item.id);
                      }
                    }}
                    className={`group relative w-full cursor-pointer py-3.5 sm:py-5 md:py-6 border-b border-white/[0.06] transition-all duration-500 ease-out focus:outline-none min-h-[52px] ${
                      isHovered
                        ? "border-sky-400/50 pl-2 sm:pl-4"
                        : "border-white/[0.06] hover:border-white/20"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8">
                      {/* Left: Number + Massive Typography */}
                      <div className="flex items-baseline gap-3 sm:gap-6 lg:gap-8 min-w-0">
                        <span
                          className={`font-sans text-xs sm:text-sm tracking-[0.2em] font-medium transition-colors duration-300 ${
                            isHovered ? "text-sky-400" : "text-zinc-600"
                          }`}
                        >
                          {item.number}
                        </span>

                        <h4
                          className={`text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal tracking-tight uppercase transition-all duration-500 select-none ${
                            isHovered
                              ? "text-white translate-x-1 sm:translate-x-3 scale-[1.01]"
                              : isOtherHovered
                              ? "text-zinc-600 opacity-25"
                              : "text-zinc-300 group-hover:text-zinc-100"
                          }`}
                        >
                          {item.word}
                        </h4>
                      </div>

                      {/* Right: Subtitle / Tag Descriptor */}
                      <div className="flex items-center gap-3 self-start md:self-baseline pl-8 md:pl-0 mt-1.5 md:mt-0">
                        <span
                          className={`font-sans text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 ${
                            isHovered ? "text-sky-400" : "text-zinc-500"
                          }`}
                        >
                          {item.tag}
                        </span>
                        <ArrowUpRight
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isHovered
                              ? "text-sky-400 translate-x-0.5 -translate-y-0.5"
                              : "text-zinc-600 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Mobile Expandable / Desktop Inline Contextual Reveal */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: cubicEase }}
                          className="mt-4 pt-4 border-t border-white/[0.08] overflow-hidden"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start text-xs sm:text-sm">
                            <div className="md:col-span-4 font-sans text-xs text-sky-400 uppercase tracking-widest font-medium flex items-center gap-2">
                              <Sparkles className="h-3.5 w-3.5" />
                              <span>{item.scope}</span>
                            </div>

                            <p className="md:col-span-5 text-zinc-300 font-light leading-relaxed">
                              {item.context}
                            </p>

                            <ul className="md:col-span-3 space-y-1 font-sans text-[11px] text-zinc-400">
                              {item.details.map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-sky-400">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
