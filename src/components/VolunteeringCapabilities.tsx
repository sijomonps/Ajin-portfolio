"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, HeartHandshake, Sparkles, Languages } from "lucide-react";
import { media } from "@/data/media";

interface VolunteeringItem {
  number: string;
  activity: string;
  organization: string;
  location: string;
  period?: string;
  context: string;
  highlight?: string;
  mediaKey: keyof typeof media.volunteering;
}

const volunteeringList: VolunteeringItem[] = [
  {
    number: "01",
    activity: "Medical Camp for Transgender Persons",
    organization: "Marivilli Clinic",
    location: "Ernakulam, Kerala",
    context: "Supported patient intake and health screening coordination at a specialized healthcare camp.",
    mediaKey: "medicalCamp",
  },
  {
    number: "02",
    activity: "Government Welfare & Insurance Survey",
    organization: "Puthuppady Grama Panchayat",
    location: "Kozhikode, Kerala",
    context: "Conducted door-to-door community surveys facilitating awareness and enrollment in government welfare schemes.",
    mediaKey: "insuranceSurvey",
  },
  {
    number: "03",
    activity: "Sports Meet & Marathon for Persons with Disabilities",
    organization: "GSRTC Peravoor",
    location: "Peravoor, Kannur",
    context: "Coordinated logistics and participant safety during regional sports events and marathons for persons with disabilities.",
    mediaKey: "pwdSports",
  },
  {
    number: "04",
    activity: "Youth Mental Health & Human Rights Symposium",
    organization: "Dhisha Foundation",
    location: "Ernakulam, Kerala",
    highlight: "Led a Focus Group Discussion",
    context: "Moderated an in-depth Focused Group Discussion exploring youth emotional rights and destigmatization.",
    mediaKey: "mentalHealth",
  },
  {
    number: "05",
    activity: "Voluntary Staff — Institutional Rehabilitation",
    organization: "Good Samaritan Rehabilitation & Training Centre",
    location: "Kannur, Kerala",
    period: "05 July 2025 – 05 February 2027",
    context: "Voluntary service assisting rehabilitation staff, inmate welfare, and developmental community programs.",
    mediaKey: "goodSamaritan",
  },
];


const professionalSkills = [
  "Communication",
  "Active Listening",
  "Problem Solving",
  "Leadership",
  "Decision Making",
  "Project Coordination",
  "Community Engagement",
];

const creativeTechnicalSkills = [
  "Graphic Designing",
  "Creative Thinking",
  "Digital Communication",
  "Documentation",
  "Presentation",
  "Canva",
  "Digital Media",
];

const languages = [
  { name: "English", level: "Professional Working" },
  { name: "Malayalam", level: "Native" },
  { name: "Hindi", level: "Basic Working Knowledge" },
  { name: "Latin", level: "Scholarly Formation" },
];

export function VolunteeringCapabilities() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredVolunteering, setHoveredVolunteering] = useState<string | null>(null);

  const cubicEase = [0.16, 1, 0.3, 1] as const;

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicEase },
    },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: cubicEase },
    },
  };

  return (
    <section
      id="volunteering"
      className="relative py-14 sm:py-20 md:py-28 lg:py-36 border-t border-white/[0.08] bg-[#08090b] text-zinc-100 select-none overflow-hidden scroll-mt-20 sm:scroll-mt-24"
      aria-label="Volunteering and Core Capabilities"
    >
      {/* Background Architectural Markings */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 left-6 sm:left-8 lg:left-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + SECTION / 07 • CIVIC COMMITMENT &amp; CAPABILITIES
        </div>
        <div className="absolute top-12 right-6 sm:right-8 lg:right-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + ADVOCACY &amp; SKILL ARCHITECTURE
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-20 lg:space-y-28">
        {/* ============================================================== */}
        {/* CHAPTER 1: VOLUNTEERING (Editorial Vertical List)              */}
        {/* ============================================================== */}
        <div>
          {/* Section Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="pb-3 border-b border-white/[0.08] mb-8 sm:mb-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="type-meta text-sky-400">
                  07 / VOLUNTEERING
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="type-meta text-zinc-400">
                  CIVIC SERVICE &amp; COMMUNITY ACTION
                </span>
              </div>

              <span className="type-meta text-zinc-500">
                5 DOCUMENTED INITIATIVES
              </span>
            </div>

            <div className="mt-6 max-w-3xl">
              <h2 className="font-editorial-heading text-3xl sm:text-5xl md:text-6xl text-zinc-100">
                Volunteering<span className="text-sky-400">.</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base font-serif italic text-zinc-400">
                Grassroots Civic Service &amp; Vulnerable Community Care.
              </p>
            </div>
          </motion.div>

          {/* Editorial Vertical List (No Standard Cards) */}
          <motion.div
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            onMouseLeave={() => setHoveredVolunteering(null)}
            className="border-t border-white/[0.08]"
          >
            {volunteeringList.map((item) => {
              const isHovered = hoveredVolunteering === item.number;
              const isOtherHovered = hoveredVolunteering !== null && !isHovered;

              return (
                <motion.div
                  key={item.number}
                  variants={listItemVariants}
                  onMouseEnter={() => setHoveredVolunteering(item.number)}
                  className={`group relative py-5 sm:py-7 border-b border-white/[0.06] transition-all duration-500 ease-out cursor-default ${
                    isHovered
                      ? "opacity-100 pl-2 sm:pl-4 bg-white/[0.015]"
                      : isOtherHovered
                      ? "opacity-35"
                      : "opacity-85 hover:opacity-100"
                  }`}
                >
                  {/* Subtle Left Accent Line on Hover */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                      isHovered ? "bg-sky-400 opacity-100 shadow-[0_0_10px_rgba(56,189,248,0.8)]" : "bg-transparent opacity-0"
                    }`}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-start">
                    {/* Number + Organization & Location (Col 1-4) */}
                    <div className="lg:col-span-4 space-y-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-sans text-xs tracking-widest font-semibold transition-colors duration-300 ${
                            isHovered ? "text-sky-400" : "text-zinc-500"
                          }`}
                        >
                          {item.number}
                        </span>
                        <span className="h-2.5 w-px bg-white/20" />
                        <span className="type-meta text-sky-400">
                          {item.organization}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-sans text-zinc-500">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span>{item.location}</span>
                        {item.period && (
                          <>
                            <span className="text-white/20">•</span>
                            <span className="text-zinc-400">{item.period}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Activity Title + Highlight & One-Line Context (Col 5-12) */}
                    <div className="lg:col-span-8 space-y-1.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3
                          className={`font-serif text-xl sm:text-2xl font-normal tracking-tight text-zinc-100 transition-all duration-300 ${
                            isHovered ? "text-white translate-x-1" : "group-hover:text-white"
                          }`}
                        >
                          {item.activity}
                        </h3>

                        {item.highlight && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-sky-400/10 border border-sky-400/20 type-meta text-[10px] text-sky-400">
                            <Sparkles className="h-3 w-3" />
                            <span>{item.highlight}</span>
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm font-sans font-light text-zinc-400 leading-[1.7] max-w-2xl group-hover:text-zinc-300 transition-colors">
                        {item.context}
                      </p>
                    </div>
                  </div>

                  {/* Optional Real Photo Floating Specimen on Desktop Hover (Zero Layout Shift) */}
                  {media.volunteering[item.mediaKey]?.isReal && (
                    <div
                      className={`pointer-events-none hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 translate-x-3 scale-95"
                      }`}
                    >
                      <div className="relative w-24 h-16 rounded-xs overflow-hidden border border-white/20 shadow-2xl bg-black/80">
                        <Image
                          src={media.volunteering[item.mediaKey].src}
                          alt={media.volunteering[item.mediaKey].alt}
                          fill
                          sizes="96px"
                          className={`object-cover ${media.volunteering[item.mediaKey].objectPosition || "object-center"}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        <span className="absolute bottom-1 right-1.5 type-meta text-[8px] text-sky-400">
                          VERIFIED
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* CHAPTER 2: CAPABILITIES (Flowing Typographic Composition)      */}
        {/* ============================================================== */}
        <div id="capabilities" className="pt-4 scroll-mt-20 sm:scroll-mt-24">
          {/* Section Sub-Header */}
          <div className="pb-3 border-b border-white/[0.08] mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="type-meta text-sky-400 block mb-1">
                Capability Matrix
              </span>
              <h3 className="font-editorial-heading text-2xl sm:text-4xl text-zinc-100">
                Skills &amp; Practice Repertoire<span className="text-sky-400">.</span>
              </h3>
            </div>
            <span className="type-meta text-zinc-500">
              [ Continuous Mastery ]
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-10 sm:pb-14 border-b border-white/[0.08]">
            {/* Cluster 1: Professional Skills (Col 1-6) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 type-meta text-zinc-300">
                  <HeartHandshake className="h-4 w-4 text-sky-400" />
                  <span>Professional &amp; Social Practice</span>
                </div>
                <span className="type-meta text-zinc-500 text-[10px]">7 DISCIPLINES</span>
              </div>

              {/* Flowing Typography System (No Badges/Pills/Bars) */}
              <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-5 gap-y-2 sm:gap-y-3">
                {professionalSkills.map((skill, index) => (
                  <React.Fragment key={skill}>
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-zinc-300 hover:text-sky-400 transition-colors duration-300 cursor-default">
                      {skill}
                    </span>
                    {index < professionalSkills.length - 1 && (
                      <span className="text-zinc-600 font-sans text-sm sm:text-base font-light select-none">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-xs font-sans text-zinc-400 leading-[1.7] max-w-xl pt-1">
                Developed through clinical psychiatric practicums, community casework, and youth facilitation.
              </p>
            </div>

            {/* Cluster 2: Creative & Technical Skills (Col 7-12) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 type-meta text-zinc-300">
                  <Sparkles className="h-4 w-4 text-sky-400" />
                  <span>Creative &amp; Technical Capabilities</span>
                </div>
                <span className="type-meta text-zinc-500 text-[10px]">7 DISCIPLINES</span>
              </div>

              {/* Flowing Typography System (No Badges/Pills/Bars) */}
              <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-5 gap-y-2 sm:gap-y-3">
                {creativeTechnicalSkills.map((skill, index) => (
                  <React.Fragment key={skill}>
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-zinc-300 hover:text-white transition-colors duration-300 cursor-default">
                      {skill}
                    </span>
                    {index < creativeTechnicalSkills.length - 1 && (
                      <span className="text-zinc-600 font-sans text-sm sm:text-base font-light select-none">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-xs font-sans text-zinc-400 leading-[1.7] max-w-xl pt-1">
                Applied across editorial design, digital systems, and campaign communications.
              </p>
            </div>

          </div>

          {/* ============================================================== */}
          {/* LANGUAGES: Visually Subordinate Swiss Footer Row              */}
          {/* ============================================================== */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <Languages className="h-3.5 w-3.5 text-zinc-400" />
              <span className="type-meta text-zinc-400 text-[11px]">Language Proficiencies:</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span className="text-zinc-300 font-normal">{lang.name}</span>
                  <span className="text-zinc-500 text-[10px] uppercase tracking-wide">[{lang.level}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
