"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: string;
  index: string;
  organization: string;
  department?: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  scopePoints: string[];
  tag: string;
  isRecent?: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    id: "iqraa",
    index: "01",
    organization: "IQRAA International Hospital & Research Centre",
    department: "Department of Psychiatry",
    role: "Psychiatric Social Work Intern",
    period: "01 July 2026 – 31 July 2026",
    duration: "1 Month",
    location: "Kozhikode, Kerala",
    description:
      "Exposure to the psychiatric care environment and the role of social work within mental health services.",
    scopePoints: [
      "Psychiatric case assessments and clinical intake observation",
      "Multi-disciplinary mental health rounds and treatment discussions",
      "Patient psycho-social rehabilitation and caregiver counseling exposure",
    ],
    tag: "NABH Clinical Practicum",
    isRecent: true,
  },
  {
    id: "good-samaritan",
    index: "02",
    organization: "Good Samaritan Rehabilitation & Training Centre",
    department: "Institutional Rehabilitation Centre",
    role: "Social Work Intern",
    period: "03 May 2025 – 05 July 2025",
    duration: "2 Months",
    location: "Kannur, Kerala",
    description:
      "Exposure to rehabilitation-oriented social work, client interaction, programme activities and institutional settings.",
    scopePoints: [
      "Direct engagement with institutional rehabilitation residents",
      "Assisted in vocational and therapeutic developmental activities",
      "Coordinated sports meets and community awareness programs for PwDs",
    ],
    tag: "Rehabilitation Practicum",
  },
  {
    id: "sahrudeya",
    index: "03",
    organization: "Sahrudeya Welfare Services",
    department: "Welfare Services Ernakulam",
    role: "Social Work Intern",
    period: "01 October 2024 – 25 October 2024",
    duration: "1 Month",
    location: "Ernakulam, Kerala",
    description:
      "Exposure to regional social development, non-governmental organizational structure, women empowerment groups, and rural community welfare.",
    scopePoints: [
      "Analyzed community welfare delivery models and SHG networks",
      "Field visits to community intervention sites across Ernakulam",
      "Documentation of non-governmental development interventions",
    ],
    tag: "Welfare Administration",
  },
  {
    id: "health-dialogue",
    index: "04",
    organization: "Health Dialogue",
    department: "Concurrent Fieldwork Practicum",
    role: "Concurrent Fieldwork Trainee",
    period: "14 December 2023 – 07 March 2024",
    duration: "24 Days",
    location: "Kozhikode, Kerala",
    description:
      "Field exposure in community and social development settings, grassroots demographic surveys, and project initiation.",
    scopePoints: [
      "Conducted community needs assessments and household surveys",
      "Initiated and coordinated the AKSHARANILA educational project",
      "Facilitated group work sessions for children and local self-help groups",
    ],
    tag: "Concurrent Fieldwork",
  },
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const cubicEase = [0.16, 1, 0.3, 1] as const;

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicEase },
    },
  };

  const titleMaskVariants = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: { duration: 0.85, ease: cubicEase },
    },
  };

  const itemContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -14 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: cubicEase },
    },
  };

  return (
    <section
      id="work"
      className="relative py-14 sm:py-20 md:py-28 lg:py-36 border-t border-white/[0.06] bg-[#08090b] text-zinc-100 select-none overflow-hidden"
      aria-label="Professional Experience and Clinical Practicums"
    >
      {/* Background Architectural Markings & Subtle Radial Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] rounded-full bg-gradient-to-b from-sky-500/[0.03] to-transparent blur-[160px]" />
        <div className="absolute top-12 left-6 sm:left-8 lg:left-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + SECTION / 03 • PROFESSIONAL PRACTICE
        </div>
        <div className="absolute top-12 right-6 sm:right-8 lg:right-12 font-sans text-[10px] tracking-widest text-white/10 uppercase">
          + CLINICAL &amp; COMMUNITY IMMERSION
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="pb-3 border-b border-white/[0.08]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-sky-400 font-medium">
                03 / EXPERIENCE
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-zinc-400">
                PRACTICUM &amp; FIELD DEPTH
              </span>
            </div>

            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
              4 PRACTICUMS • 2023 — 2026
            </span>
          </div>
        </motion.div>

        {/* Section Title & Editorial Intent */}
        <div className="mt-8 sm:mt-12 mb-10 md:mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight uppercase tracking-tight text-zinc-100 leading-[1.08]">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={titleMaskVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                  className="block"
                >
                  Clinical Depth &amp;
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={titleMaskVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: 0.1 }}
                  className="block text-zinc-400"
                >
                  Community Practice.
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: cubicEase }}
            className="lg:col-span-4 font-light text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            <p>
              Direct professional immersion across NABH psychiatric hospital systems, institutional rehabilitation centers, and non-governmental social development organizations.
            </p>
          </motion.div>
        </div>

        {/* Editorial Experience List (Not Generic Cards) */}
        <motion.div
          variants={itemContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="border-t border-white/[0.08]"
          onMouseLeave={() => setHoveredId(null)}
        >
          {experienceData.map((exp) => {
            const isHovered = hoveredId === exp.id;
            const isOtherHovered = hoveredId !== null && !isHovered;

            return (
              <motion.div
                key={exp.id}
                variants={rowVariants}
                onMouseEnter={() => setHoveredId(exp.id)}
                onClick={() => setHoveredId(hoveredId === exp.id ? null : exp.id)}
                tabIndex={0}
                role="region"
                aria-label={`${exp.organization}, ${exp.role}`}
                className={`group relative py-6 sm:py-10 md:py-12 border-b border-white/[0.08] transition-all duration-500 ease-out focus:outline-none cursor-pointer min-h-[52px] ${
                  isHovered
                    ? "bg-white/[0.015] pl-2 sm:pl-4"
                    : isOtherHovered
                    ? "opacity-35"
                    : "opacity-90 hover:opacity-100"
                }`}
              >
                {/* Subtle Left Accent Line for Hovered State */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-500 ${
                    isHovered
                      ? "bg-sky-400 opacity-100 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                      : exp.isRecent
                      ? "bg-white/20 opacity-40"
                      : "bg-transparent opacity-0"
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start">
                  {/* Left Column: Index, Timeline, Location & Recent Marker */}
                  <div className="lg:col-span-3 space-y-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span
                        className={`font-sans text-sm tracking-widest font-medium transition-colors duration-300 ${
                          isHovered ? "text-sky-400 font-semibold" : "text-zinc-500"
                        }`}
                      >
                        {exp.index}
                      </span>
                      <span className="h-2.5 w-px bg-white/20" />
                      <span className="font-sans text-xs uppercase tracking-wider text-sky-400 font-medium">
                        {exp.duration}
                      </span>
                      {exp.isRecent && (
                        <span className="inline-block px-2 py-0.5 rounded-xs bg-sky-400/10 border border-sky-400/25 font-sans text-[10px] uppercase tracking-wider text-sky-400 font-medium">
                          Recent Practicum
                        </span>
                      )}
                    </div>

                    <div className="space-y-1 text-xs font-sans text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-zinc-500 shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Organization & Role Header */}
                  <div className="lg:col-span-5 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-zinc-400 font-medium">
                      <Building2 className="h-3.5 w-3.5 text-sky-400/80" />
                      <span>{exp.department || exp.tag}</span>
                    </div>

                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-zinc-100 transition-all duration-500 leading-tight ${
                        isHovered ? "text-white translate-x-1 sm:translate-x-2" : "group-hover:text-white"
                      }`}
                    >
                      {exp.organization}
                    </h3>

                    <p className="text-sm sm:text-base font-normal text-sky-400/90 font-sans pt-0.5">
                      {exp.role}
                    </p>
                  </div>

                  {/* Right Column: Description & Specific Field Scope Points */}
                  <div className="lg:col-span-4 space-y-3">
                    <p className="text-sm sm:text-base font-light text-zinc-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Practice Scope Micro-Bullets */}
                    <div className="pt-2 border-t border-white/[0.06] space-y-1 font-sans text-xs text-zinc-300">
                      {exp.scopePoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 leading-snug">
                          <span className="text-sky-400 font-bold shrink-0">•</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-1 flex items-center justify-between text-xs font-sans text-zinc-500">
                      <span className="uppercase tracking-widest text-[10px] text-zinc-400 font-medium">
                        {exp.tag}
                      </span>
                      <ArrowUpRight
                        className={`h-4 w-4 transition-all duration-300 ${
                          isHovered
                            ? "text-sky-400 translate-x-1 -translate-y-1"
                            : "text-zinc-600 opacity-60"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
