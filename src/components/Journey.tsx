"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Compass, Sparkles, Building2, GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  periodLabel: string;
  title: string;
  organization: string;
  location: string;
  tag: string;
  category: "Academic" | "Formation" | "Clinical" | "Fieldwork" | "Initiative" | "Venture";
  description: string;
  accentNote?: string;
}

const milestones: Milestone[] = [
  {
    id: "sslc",
    year: "2019",
    periodLabel: "Secondary Formation",
    title: "SSLC & Personal Foundation",
    organization: "Stella Maris International Boarding School",
    location: "Koodaranji, Kerala",
    tag: "CBSE Curriculum",
    category: "Formation",
    description:
      "Secondary education in a boarding environment, cultivating early personal discipline.",
  },
  {
    id: "seminary",
    year: "2019–2022",
    periodLabel: "3-Year Personal Formation",
    title: "Seminary Formation & Ethics",
    organization: "St. Alphonsa Seminary, Diocese of Thamarassery",
    location: "Kerala",
    tag: "Discipline & Living",
    category: "Formation",
    description:
      "Three years of personal formation developing empathy, community living, and service ethics.",
  },
  {
    id: "higher-secondary",
    year: "2022",
    periodLabel: "Higher Secondary",
    title: "Higher Secondary (+2) Humanities",
    organization: "St. Joseph's Higher Secondary School",
    location: "Kodancherry, Kerala",
    tag: "Social Sciences",
    category: "Academic",
    description:
      "Higher secondary education in Humanities, establishing sociological foundations.",
  },
  {
    id: "bsw",
    year: "2022–2025",
    periodLabel: "Undergraduate Degree",
    title: "Bachelor of Social Work (BSW)",
    organization: "LISSAH College · University of Calicut",
    location: "Kaithapoyil, Kozhikode",
    tag: "Professional BSW",
    category: "Academic",
    description:
      "Undergraduate foundation in social casework, group work, community methods, and concurrent fieldwork.",
  },
  {
    id: "fieldwork-aksharanila",
    year: "2023–2024",
    periodLabel: "Concurrent Fieldwork",
    title: "AKSHARANILA Project",
    organization: "Health Dialogue Kozhikode",
    location: "Kozhikode, Kerala",
    tag: "Grassroots Fieldwork",
    category: "Fieldwork",
    description:
      "Educational reinforcement and mentorship project for economically disadvantaged school students.",
  },
  {
    id: "sahrudeya",
    year: "2024",
    periodLabel: "Social Welfare Internship",
    title: "Community Welfare Administration",
    organization: "Welfare Services Ernakulam (Sahrudeya)",
    location: "Ernakulam, Kerala",
    tag: "NGO Governance",
    category: "Fieldwork",
    description:
      "Field exposure in non-governmental administration, self-help groups, and rural community welfare.",
  },
  {
    id: "good-samaritan",
    year: "2025",
    periodLabel: "Rehabilitation Practicum",
    title: "Rehabilitation Social Work",
    organization: "Good Samaritan Rehabilitation & Training Centre",
    location: "Kannur, Kerala",
    tag: "Clinical Practicum",
    category: "Clinical",
    description:
      "Two-month institutional rehabilitation practicum supporting resident recovery and community programs.",
  },
  {
    id: "msw",
    year: "2025–2027",
    periodLabel: "Postgraduate Degree",
    title: "Master of Social Work (MSW)",
    organization: "Marian College Kuttikkanam (Autonomous)",
    location: "Idukki, Kerala",
    tag: "Medical & Psychiatry",
    category: "Academic",
    description:
      "Postgraduate clinical specialization in psychiatric social work, therapeutic intervention, and health systems.",
  },
  {
    id: "iqraa-hospital",
    year: "2026",
    periodLabel: "Clinical Hospital Internship",
    title: "Psychiatric Social Work Intern",
    organization: "IQRAA International Hospital & Research Centre",
    location: "Kozhikode, Kerala",
    tag: "NABH Hospital",
    category: "Clinical",
    description:
      "Clinical psychiatric rounds, intake assessments, and psychosocial rehabilitation in an NABH hospital.",
  },
  {
    id: "yuva-manass",
    year: "2026",
    periodLabel: "Advocacy Campaign",
    title: "YUVA Manass Campaign",
    organization: "Founder · 'Are You Okay?' Campaign",
    location: "Kerala, India",
    tag: "Youth Mental Health",
    category: "Initiative",
    description:
      "Youth mental health initiative destigmatizing emotional distress and connecting youth to support networks.",
  },
  {
    id: "amdg-group",
    year: "2026 onward",
    periodLabel: "Social Entrepreneurship",
    title: "AMDG Group Ecosystem",
    organization: "Founder & Chairman",
    location: "Kerala, India · amdggroup.in",
    tag: "Venture & Media",
    category: "Venture",
    description:
      "Entrepreneurial ecosystem uniting digital media, technology, and social impact models.",
  },
];


export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxScrollX, setMaxScrollX] = useState(3600);

  // Measure track scroll width for calibrated horizontal translation
  useEffect(() => {
    const updateDimensions = () => {
      if (trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const neededScroll = Math.max(0, totalTrackWidth - viewportWidth + 160);
        setMaxScrollX(neededScroll);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Scroll tracking for horizontal progression
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress to horizontal pixel shift
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollX]);
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Detect active milestone index based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = 1 / milestones.length;
    const computedIndex = Math.min(
      milestones.length - 1,
      Math.max(0, Math.floor(latest / step))
    );
    setActiveIndex(computedIndex);
  });

  const getCategoryIcon = (category: Milestone["category"]) => {
    switch (category) {
      case "Academic":
        return <GraduationCap className="h-3.5 w-3.5 text-sky-400" />;
      case "Clinical":
        return <Building2 className="h-3.5 w-3.5 text-teal-400" />;
      case "Formation":
        return <Compass className="h-3.5 w-3.5 text-amber-300" />;
      case "Fieldwork":
        return <HeartHandshake className="h-3.5 w-3.5 text-indigo-400" />;
      case "Initiative":
        return <Sparkles className="h-3.5 w-3.5 text-sky-400" />;
      case "Venture":
        return <ShieldCheck className="h-3.5 w-3.5 text-white" />;
    }
  };

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative bg-[#08090b] text-zinc-100 border-t border-white/[0.08] select-none scroll-mt-20 sm:scroll-mt-24"
      aria-label="The Journey of Ajin Shibu"
    >
      {/* ============================================================== */}
      {/* DESKTOP LAYOUT: Editorial Sticky Horizontal Scroll Experience  */}
      {/* ============================================================== */}
      {!shouldReduceMotion && (
        <div className="hidden md:block relative h-[420vh]">
          {/* Sticky Viewport Frame */}
          <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-10 px-8 lg:px-14">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full bg-gradient-to-b from-sky-500/10 via-sky-900/5 to-transparent blur-[140px]" />
              <div className="absolute top-8 left-8 lg:left-14 font-sans text-[10px] tracking-widest text-white/10 uppercase">
                + SECTION / 02 • CHRONOLOGICAL FORMATION
              </div>
              <div className="absolute top-8 right-8 lg:right-14 font-sans text-[10px] tracking-widest text-white/10 uppercase">
                + 2019 — 2026 ONWARD
              </div>
            </div>

            {/* Top Bar: Section Label, Scrubber Line, and Live Counter */}
            <div className="relative z-10 w-full max-w-7xl mx-auto space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-sky-400 font-medium">
                    02 / THE JOURNEY
                  </span>
                  <span className="h-3 w-px bg-white/20" />
                  <span className="font-serif italic font-normal text-lg sm:text-xl text-zinc-200">
                    A Continuum of Formation &amp; Impact
                  </span>
                </div>

                <div className="flex items-center gap-3 font-sans text-xs">
                  <span className="text-zinc-500 uppercase tracking-[0.16em] text-[11px]">MILESTONE</span>
                  <span className="text-sky-400 font-semibold tracking-wider">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Progress Scrubber Bar */}
              <div className="w-full h-0.5 bg-white/[0.06] overflow-hidden rounded-full">
                <motion.div
                  style={{ width: progressBarWidth }}
                  className="h-full bg-gradient-to-r from-sky-500 to-sky-300"
                />
              </div>
            </div>

            {/* Middle: Horizontal Scroll Motion Track */}
            <div className="relative z-10 my-auto w-full overflow-visible py-4">
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex items-center gap-12 lg:gap-16 pl-4 pr-32 w-max"
              >
                {milestones.map((item, index) => {
                  const isActive = activeIndex === index;
                  const isPast = activeIndex > index;

                  return (
                    <div
                      key={item.id}
                      className="relative shrink-0 w-[340px] lg:w-[400px] flex flex-col justify-center transition-all duration-500 ease-out"
                    >
                      {/* Atmospheric Giant Year Typography */}
                      <div className="relative mb-2 select-none overflow-visible">
                        <span
                          className={`font-serif font-normal text-6xl lg:text-8xl xl:text-9xl tracking-tight transition-all duration-500 block ${
                            isActive
                              ? "text-white scale-105 translate-x-2 drop-shadow-[0_0_24px_rgba(56,189,248,0.25)]"
                              : isPast
                              ? "text-zinc-600/70"
                              : "text-zinc-700/40"
                          }`}
                        >
                          {item.year}
                        </span>

                        {/* Top Micro-Tag */}
                        <div className="mt-1 flex items-center gap-2">
                          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-sky-400 font-medium">
                            {item.periodLabel}
                          </span>
                        </div>
                      </div>

                      {/* Continuous Connecting Line and Node Marker */}
                      <div className="relative my-4 flex items-center">
                        <div
                          className={`h-px w-full transition-colors duration-500 ${
                            isActive ? "bg-sky-400/80" : isPast ? "bg-white/20" : "bg-white/[0.08]"
                          }`}
                        />
                        <div
                          className={`absolute left-0 -translate-y-1/2 top-1/2 w-3 h-3 rounded-full border transition-all duration-500 ${
                            isActive
                              ? "border-sky-400 bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] scale-125"
                              : isPast
                              ? "border-white/40 bg-zinc-700"
                              : "border-white/20 bg-zinc-900"
                          }`}
                        />
                      </div>

                      {/* Editorial Milestone Content Card */}
                      <div
                        className={`p-6 rounded-sm border transition-all duration-500 ${
                          isActive
                            ? "bg-[#111317] border-sky-400/40 shadow-2xl shadow-sky-500/5 translate-y-[-4px]"
                            : "bg-[#0b0c10]/70 border-white/[0.06] opacity-60 hover:opacity-85"
                        }`}
                      >
                        {/* Header: Category Icon + Tag */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(item.category)}
                            <span className="font-sans text-[11px] uppercase tracking-wider text-zinc-300 font-medium">
                              {item.tag}
                            </span>
                          </div>
                          <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-wide">
                            {item.location}
                          </span>
                        </div>

                        {/* Title & Organization */}
                        <div className="mt-3.5 space-y-0.5">
                          <h4 className="text-xl lg:text-2xl font-serif font-normal text-zinc-100 uppercase tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-xs font-sans text-sky-400 font-medium tracking-wide">
                            {item.organization}
                          </p>
                        </div>

                        {/* Short Editorial Context Description */}
                        <p className="mt-3 text-xs sm:text-sm font-sans font-light text-zinc-300 leading-[1.7]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Bottom Bar: Swiss Guidance & Current Milestone Name */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pt-4 border-t border-white/[0.06] font-sans text-xs text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="text-sky-400">●</span>
                <span className="text-zinc-200 font-medium">
                  {milestones[activeIndex].year} — {milestones[activeIndex].title}
                </span>
                <span className="text-white/20">•</span>
                <span>{milestones[activeIndex].organization}</span>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-zinc-500 uppercase tracking-[0.2em] text-[10px] font-medium">
                <span>Scroll vertically to advance horizontally</span>
                <ArrowUpRight className="h-3 w-3 text-sky-400" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MOBILE / REDUCED-MOTION LAYOUT: Vertical Editorial Timeline    */}
      {/* ============================================================== */}
      <div className={`${shouldReduceMotion ? "block" : "block md:hidden"} py-12 sm:py-16 px-5 sm:px-8`}>
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="pb-3 border-b border-white/[0.08] mb-8">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-sky-400 font-medium">
                02 / THE JOURNEY
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-zinc-400">
                2019 — 2026 ONWARD
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-zinc-100">
              The Journey. <span className="font-serif italic text-zinc-400">Formation &amp; Path.</span>
            </h3>
          </div>

          {/* Continuous Vertical Timeline Track */}
          <div className="relative pl-5 sm:pl-7 border-l border-white/[0.1] space-y-6 sm:space-y-8">
            {milestones.map((item) => (
              <div key={item.id} className="relative group">
                {/* Node Dot on the vertical line */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-3 h-3 rounded-full border border-sky-400 bg-[#08090b] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-sky-400" />
                </div>

                {/* Compact Milestone Card */}
                <div className="bg-[#0e1014] border border-white/[0.08] p-4 sm:p-5 rounded-sm space-y-2.5">
                  <div className="flex items-baseline justify-between gap-2 pb-2 border-b border-white/[0.06]">
                    <span className="font-serif text-2xl font-normal text-white tracking-tight">
                      {item.year}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-sky-400 font-medium">
                      {item.periodLabel}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-serif font-normal text-zinc-100 uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs font-sans text-sky-400/90 font-medium mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-sans font-light text-zinc-300 leading-[1.7]">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between font-sans text-[10px] text-zinc-500 uppercase tracking-wider">
                    <span className="text-zinc-400">{item.tag}</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
