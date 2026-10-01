"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen, Trees, MapPin } from "lucide-react";

interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  context: string;
  focus: string;
  points: string[];
  tags: string[];
  location: string;
  coordinates: string;
  themeColor: {
    accent: string;
    border: string;
    glow: string;
    badgeBg: string;
  };
}

const projects: ProjectData[] = [
  {
    id: "aksharanila",
    number: "01",
    title: "AKSHARANILA",
    subtitle: "Education Through Empowerment",
    role: "Project Initiator & Coordinator",
    period: "2023 – 2024",
    context: "Undertaken as part of concurrent fieldwork under Health Dialogue Kozhikode.",
    focus: "Empowering economically disadvantaged students through structured educational reinforcement, youth mentorship, and community learning continuity.",
    points: [
      "Designed tailored educational reinforcement modules for underprivileged school students",
      "Fostered youth self-efficacy, learning continuity, and social empowerment",
      "Coordinated grassroots stakeholder collaboration across families, schools, and local networks",
    ],
    tags: ["Grassroots Fieldwork", "Educational Equity", "Community Mentorship"],
    location: "Kozhikode, Kerala",
    coordinates: "11°15'N 75°46'E",
    themeColor: {
      accent: "text-sky-400",
      border: "border-sky-400/40",
      glow: "from-sky-500/15 via-sky-900/5 to-transparent",
      badgeBg: "bg-sky-400/10 text-sky-400 border-sky-400/20",
    },
  },
  {
    id: "ecoscan",
    number: "02",
    title: "ECOSCAN",
    subtitle: "Documenting College Biodiversity",
    role: "Project Initiator & Designer",
    period: "2023 – 2024",
    context: "LISSAH College, Kaithapoyil · Campus Environmental Initiative.",
    focus: "Identifying plants and trees within the college environment through creative documentation, scientific taxonomy, environmental awareness, and digital communication design.",
    points: [
      "Conducted extensive campus flora and tree identification and taxonomic documentation",
      "Designed communicative informational design assets and QR digital documentation plates",
      "Synthesized environmental science literacy with modern visual communication technology",
    ],
    tags: ["Biodiversity Archival", "Digital Documentation", "Communication Design"],
    location: "Kaithapoyil, Kozhikode",
    coordinates: "11°29'N 75°59'E",
    themeColor: {
      accent: "text-teal-400",
      border: "border-teal-400/40",
      glow: "from-teal-500/15 via-emerald-900/5 to-transparent",
      badgeBg: "bg-teal-400/10 text-teal-400 border-teal-400/20",
    },
  },
];

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Separate mouse positions for cursor-follow effect
  const [mousePos1, setMousePos1] = useState({ x: 0, y: 0 });
  const [mousePos2, setMousePos2] = useState({ x: 0, y: 0 });

  const handleMouseMove1 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos1({ x, y });
  };

  const handleMouseMove2 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos2({ x, y });
  };

  // Scroll tracking for Project 01 (Aksharanila)
  const containerRef1 = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: containerRef1,
    offset: ["start end", "end start"],
  });

  const scale1 = useTransform(scrollYProgress1, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.96, 1, 0.98]);
  const opacity1 = useTransform(scrollYProgress1, [0, 0.25, 0.85, 1], shouldReduceMotion ? [1, 1, 1, 1] : [0.5, 1, 1, 0.7]);

  // Scroll tracking for Project 02 (EcoScan)
  const containerRef2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: containerRef2,
    offset: ["start end", "end start"],
  });

  const scale2 = useTransform(scrollYProgress2, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : [0.96, 1, 0.98]);
  const opacity2 = useTransform(scrollYProgress2, [0, 0.25, 0.85, 1], shouldReduceMotion ? [1, 1, 1, 1] : [0.5, 1, 1, 0.7]);


  const aksharanila = projects[0];
  const ecoscan = projects[1];

  return (
    <section
      id="impact"
      className="relative py-14 sm:py-20 md:py-28 lg:py-36 border-t border-white/[0.06] bg-[#08090b] text-zinc-100 select-none overflow-hidden"
      aria-label="Selected Initiatives and Case Studies"
    >
      {/* Background Architectural Markings */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 left-6 sm:left-8 lg:left-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + SECTION / 04 • SELECTED INITIATIVES
        </div>
        <div className="absolute top-12 right-6 sm:right-8 lg:right-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + CASE STUDY COVERS
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="pb-3 border-b border-white/[0.08] mb-10 md:mb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-sky-400 font-medium">
                04 / INITIATIVES
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-zinc-400">
                COMMUNITY &amp; DESIGN CASE STUDIES
              </span>
            </div>

            <span className="hidden sm:inline-block font-sans text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
              2 INITIATIVES • 2023 — 2024
            </span>
          </div>

          <div className="mt-6 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight uppercase tracking-tight text-zinc-100">
              Structured Interventions. <br />
              <span className="text-zinc-500 font-extralight">Measured Outcomes.</span>
            </h2>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CASE STUDY 01: AKSHARANILA (Typography Left, Visual Right)    */}
        {/* ============================================================== */}
        <div ref={containerRef1} className="mb-12 sm:mb-20 md:mb-28">
          <motion.div
            style={{ scale: scale1, opacity: opacity1 }}
            onMouseMove={handleMouseMove1}
            onMouseEnter={() => setHoveredProject("aksharanila")}
            onMouseLeave={() => {
              setHoveredProject(null);
              setMousePos1({ x: 0, y: 0 });
            }}
            data-cursor="project"
            className="group relative rounded-sm border border-white/[0.08] bg-[#0c0e12] p-4 sm:p-8 lg:p-12 transition-all duration-700 ease-out hover:border-sky-400/30 overflow-hidden"
          >
            {/* Ambient Reactive Glow Behind Card */}
            <div
              className={`pointer-events-none absolute -inset-px transition-opacity duration-700 bg-gradient-to-br ${
                aksharanila.themeColor.glow
              } ${hoveredProject === "aksharanila" ? "opacity-100" : "opacity-30"}`}
            />

            {/* Swiss Coordinate Header */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-sky-400 font-semibold tracking-widest">
                  CASE STUDY / {aksharanila.number}
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="font-sans text-xs uppercase tracking-widest text-zinc-400 font-medium">
                  {aksharanila.period}
                </span>
              </div>

              <div className="flex items-center gap-2 font-sans text-xs text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-sky-400" />
                <span>{aksharanila.location}</span>
                <span className="text-zinc-600">[{aksharanila.coordinates}]</span>
              </div>
            </div>

            {/* Main Editorial Grid: Left Copy & Right Typographic Visual Area */}
            <div className="relative z-10 mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              {/* Left Column: Huge Title, Role & Narrative (Col 1-6) */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 font-sans text-xs uppercase tracking-widest text-sky-400 font-medium">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Education Through Empowerment</span>
                  </div>

                  <h3
                    className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight uppercase text-zinc-100 transition-transform duration-500 group-hover:translate-x-2"
                  >
                    {aksharanila.title}
                  </h3>
                </div>

                {/* Role & Context Colophon */}
                <div className="space-y-1 py-2.5 px-3.5 rounded-xs bg-white/[0.02] border border-white/[0.06] font-sans text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="text-sky-400 font-medium">ROLE:</span>
                    <span className="font-medium text-white">{aksharanila.role}</span>
                  </div>
                  <div className="text-zinc-400 pt-0.5">
                    <span className="text-zinc-500">CONTEXT: </span>
                    {aksharanila.context}
                  </div>
                </div>

                {/* Primary Description */}
                <p className="text-base sm:text-lg font-light text-zinc-300 leading-relaxed">
                  {aksharanila.focus}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {aksharanila.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-zinc-400">
                      <span className="text-sky-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tag Cluster */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {aksharanila.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-xs bg-white/[0.04] border border-white/[0.08] font-sans text-[10px] uppercase tracking-wider text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Sophisticated Typographic Visual Composition (Col 7-12) */}
              <div className="lg:col-span-6">
                <motion.div
                  style={{
                    x: mousePos1.x,
                    y: mousePos1.y,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="relative min-h-[220px] aspect-auto sm:aspect-[4/3] w-full rounded-sm border border-white/[0.1] bg-[#090a0d] p-4 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-sky-400/40"
                >
                  {/* Watermark Typographic Architecture */}
                  <div className="pointer-events-none absolute -bottom-6 -right-6 select-none opacity-5 font-sans text-8xl font-black uppercase tracking-tighter text-white">
                    AKSHARA
                  </div>

                  {/* Top Architectural Specimen Line */}
                  <div className="flex items-center justify-between text-[10px] font-sans text-zinc-500 uppercase tracking-widest border-b border-white/[0.06] pb-2.5 font-medium">
                    <span className="text-sky-400">PRACTICUM ARCHIVE // 01</span>
                    <span>HEALTH DIALOGUE KOZHIKODE</span>
                  </div>

                  {/* Central Typographic Matrix */}
                  <div className="my-auto space-y-3 py-3">
                    <div className="space-y-1">
                      <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-500 font-medium">
                        PRIMARY OBJECTIVE
                      </span>
                      <p className="text-base sm:text-lg font-light text-zinc-100 uppercase tracking-tight">
                        Educational Empowerment &amp; Social Continuity
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2.5 border-t border-white/[0.06] font-sans text-xs">
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">COHORT</span>
                        <span className="text-zinc-300">Marginalized School Youth</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">METHODOLOGY</span>
                        <span className="text-zinc-300">Casework &amp; Group Work</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Colophon Bar */}
                  <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans">
                    <span className="text-zinc-500 uppercase tracking-widest text-[9px]">
                      STATUS: FIELD EVALUATED
                    </span>
                    <span className="text-sky-400 flex items-center gap-1 font-medium">
                      <span>EXPLORE RECORD</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* CASE STUDY 02: ECOSCAN (Inverted: Visual Left, Typography Right)*/}
        {/* ============================================================== */}
        <div ref={containerRef2}>
          <motion.div
            style={{ scale: scale2, opacity: opacity2 }}
            onMouseMove={handleMouseMove2}
            onMouseEnter={() => setHoveredProject("ecoscan")}
            onMouseLeave={() => {
              setHoveredProject(null);
              setMousePos2({ x: 0, y: 0 });
            }}
            data-cursor="project"
            className="group relative rounded-sm border border-white/[0.08] bg-[#0c0e12] p-4 sm:p-8 lg:p-12 transition-all duration-700 ease-out hover:border-teal-400/30 overflow-hidden"
          >
            {/* Ambient Reactive Glow Behind Card */}
            <div
              className={`pointer-events-none absolute -inset-px transition-opacity duration-700 bg-gradient-to-bl ${
                ecoscan.themeColor.glow
              } ${hoveredProject === "ecoscan" ? "opacity-100" : "opacity-30"}`}
            />

            {/* Swiss Coordinate Header */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-teal-400 font-semibold tracking-widest">
                  CASE STUDY / {ecoscan.number}
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="font-sans text-xs uppercase tracking-widest text-zinc-400 font-medium">
                  {ecoscan.period}
                </span>
              </div>

              <div className="flex items-center gap-2 font-sans text-xs text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-teal-400" />
                <span>{ecoscan.location}</span>
                <span className="text-zinc-600">[{ecoscan.coordinates}]</span>
              </div>
            </div>

            {/* Main Editorial Grid: INVERTED (Left Typographic Visual Canvas & Right Typography) */}
            <div className="relative z-10 mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              {/* Left Column: Botanical Typographic Canvas (Col 1-6) */}
              <div className="order-2 lg:order-1 lg:col-span-6">
                <motion.div
                  style={{
                    x: mousePos2.x,
                    y: mousePos2.y,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="relative min-h-[220px] aspect-auto sm:aspect-[4/3] w-full rounded-sm border border-white/[0.1] bg-[#090b0a] p-4 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-teal-400/40"
                >
                  {/* Watermark Typographic Architecture */}
                  <div className="pointer-events-none absolute -bottom-6 -left-6 select-none opacity-5 font-sans text-8xl font-black uppercase tracking-tighter text-white">
                    ECOSCAN
                  </div>

                  {/* Top Architectural Specimen Line */}
                  <div className="flex items-center justify-between text-[10px] font-sans text-zinc-500 uppercase tracking-widest border-b border-white/[0.06] pb-2.5 font-medium">
                    <span className="text-teal-400">BOTANICAL ARCHIVE // 02</span>
                    <span>LISSAH CAMPUS FLORA</span>
                  </div>

                  {/* Central Typographic Matrix: Botanical Schema */}
                  <div className="my-auto space-y-3 py-3">
                    <div className="space-y-1">
                      <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-500 font-medium">
                        TAXONOMIC INTEGRATION
                      </span>
                      <p className="text-base sm:text-lg font-light text-zinc-100 uppercase tracking-tight">
                        Flora Identification &amp; Digital Educational Design
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2.5 border-t border-white/[0.06] font-sans text-xs">
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">TAXONOMY</span>
                        <span className="text-zinc-300">Tree &amp; Plant Classification</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">DELIVERABLE</span>
                        <span className="text-zinc-300">Digital QR Information Plates</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Colophon Bar */}
                  <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans">
                    <span className="text-zinc-500 uppercase tracking-widest text-[9px]">
                      STATUS: DIGITALLY CATALOGED
                    </span>
                    <span className="text-teal-400 flex items-center gap-1 font-medium">
                      <span>VIEW TAXONOMY</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Huge Title, Role & Narrative (Col 7-12) */}
              <div className="order-1 lg:order-2 lg:col-span-6 space-y-4 sm:space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 font-sans text-xs uppercase tracking-widest text-teal-400 font-medium">
                    <Trees className="h-3.5 w-3.5" />
                    <span>Documenting College Biodiversity</span>
                  </div>

                  <h3
                    className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight uppercase text-zinc-100 transition-transform duration-500 group-hover:translate-x-2"
                  >
                    {ecoscan.title}
                  </h3>
                </div>

                {/* Role & Context Colophon */}
                <div className="space-y-1 py-2.5 px-3.5 rounded-xs bg-white/[0.02] border border-white/[0.06] font-sans text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="text-teal-400 font-medium">ROLE:</span>
                    <span className="font-medium text-white">{ecoscan.role}</span>
                  </div>
                  <div className="text-zinc-400 pt-0.5">
                    <span className="text-zinc-500">CONTEXT: </span>
                    {ecoscan.context}
                  </div>
                </div>

                {/* Primary Description */}
                <p className="text-base sm:text-lg font-light text-zinc-300 leading-relaxed">
                  {ecoscan.focus}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {ecoscan.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-zinc-400">
                      <span className="text-teal-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tag Cluster */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {ecoscan.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-xs bg-white/[0.04] border border-white/[0.08] font-sans text-[10px] uppercase tracking-wider text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
