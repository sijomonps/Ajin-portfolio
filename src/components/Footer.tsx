"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowUp, ArrowUpRight, Mail, Phone, Globe, MessageCircle } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cubicEase = [0.16, 1, 0.3, 1] as const;

  const titleMaskVariants = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: { duration: 0.95, ease: cubicEase },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicEase },
    },
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#060709] border-t border-white/[0.08] pt-14 sm:pt-20 md:pt-28 lg:pt-36 select-none overflow-hidden text-zinc-100"
      aria-label="Direct Contact and Colophon"
    >
      {/* Background Soft Upward Radial Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[650px] rounded-full bg-gradient-to-t from-sky-500/10 via-blue-950/5 to-transparent blur-[160px]" />
        <div className="absolute top-12 left-6 sm:left-8 lg:left-12 font-sans text-[10px] text-white/20 uppercase tracking-widest">
          + SECTION / 11 • FINAL SCENE
        </div>
        <div className="absolute top-12 right-6 sm:right-8 lg:right-12 font-sans text-[10px] text-white/20 uppercase tracking-widest">
          + DIRECT COMMUNICATION &amp; COLOPHON
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Section Metadata */}
        <div className="pb-4 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="type-meta text-sky-400">
              11 / CONTACT
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="type-meta text-zinc-400">
              DIRECT INQUIRY &amp; DIALOGUE
            </span>
          </div>

          <span className="type-meta text-zinc-500">
            {personalInfo.location}
          </span>
        </div>

        {/* ============================================================== */}
        {/* LARGE EDITORIAL TYPOGRAPHY: LET'S CONNECT.                     */}
        {/* ============================================================== */}
        <div className="my-10 sm:my-16 md:my-24 select-none">
          <span className="type-meta text-sky-400/90 block mb-3">
            [ Final Scene ]
          </span>

          <div className="space-y-1">
            <div className="overflow-hidden leading-[0.88]">
              <motion.h2
                variants={titleMaskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="font-serif text-[13.5vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] font-normal uppercase tracking-tight text-zinc-500"
              >
                LET&apos;S
              </motion.h2>
            </div>

            <div className="overflow-hidden leading-[0.88]">
              <motion.h2
                variants={titleMaskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.15 }}
                className="font-serif text-[13.5vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] font-normal uppercase tracking-tight text-zinc-100"
              >
                CONNECT<span className="text-sky-400 font-serif italic font-normal">.</span>
              </motion.h2>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* ASYMMETRIC CONTACT COMPOSITION: IDENTITY + LARGE LINKS         */}
        {/* ============================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 lg:pb-24 border-b border-white/[0.08]"
        >
          {/* Left Column: Identity & Leadership Standing */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <span className="type-meta text-sky-400">
                Identity &amp; Standing
              </span>
              <h3 className="font-editorial-heading text-2xl sm:text-4xl text-white">
                AJIN SHIBU<span className="text-sky-400">.</span>
              </h3>
            </div>

            <div className="space-y-1.5 font-sans text-xs sm:text-sm text-zinc-400 leading-[1.7]">
              <div className="text-zinc-300 font-medium">Social Work Professional</div>
              <div>Founder &amp; Chairman — AMDG Group</div>
              <div>Founder — YUVA Manass Campaign</div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] space-y-1.5 font-sans text-xs text-zinc-400">
              <div className="flex items-center gap-2 type-meta text-zinc-400">
                <MessageCircle className="h-3.5 w-3.5 text-sky-400" />
                <span>YUVA Manass Outreach:</span>
              </div>
              <p className="text-zinc-200 font-medium pl-5 tracking-wide">
                @yuvamanass_campaign
              </p>
            </div>

            <div className="pt-2 type-meta text-[11px] text-zinc-500">
              {personalInfo.statusBadge}
            </div>
          </motion.div>

          {/* Right Column: Large Clickable Communication Links */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-3 sm:space-y-4">
            <span className="type-meta text-zinc-400 block mb-2">
              Direct Communication
            </span>

            {/* Email Large Clickable Link */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group relative block p-4 sm:p-6 lg:p-7 rounded-sm border border-white/[0.08] bg-[#0c0e12] hover:border-sky-400/40 hover:bg-[#101318] transition-all duration-300 focus:outline-none"
              aria-label={`Send email to ${personalInfo.email}`}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 type-meta text-sky-400">
                    <Mail className="h-3.5 w-3.5" />
                    <span>EMAIL DIRECT</span>
                  </div>
                  <span className="text-base min-[390px]:text-xl sm:text-2xl md:text-3xl font-light text-zinc-100 group-hover:text-white transition-colors block break-all font-sans">
                    {personalInfo.email}
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-3 sm:ml-4" />
              </div>
            </a>

            {/* Phone Large Clickable Link */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="group relative block p-4 sm:p-6 lg:p-7 rounded-sm border border-white/[0.08] bg-[#0c0e12] hover:border-sky-400/40 hover:bg-[#101318] transition-all duration-300 focus:outline-none"
              aria-label={`Call ${personalInfo.phone}`}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 type-meta text-sky-400">
                    <Phone className="h-3.5 w-3.5" />
                    <span>TELEPHONE</span>
                  </div>
                  <span className="text-lg min-[390px]:text-xl sm:text-2xl md:text-3xl font-light text-zinc-100 group-hover:text-white transition-colors block font-sans">
                    {personalInfo.phone}
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-3 sm:ml-4" />
              </div>
            </a>

            {/* AMDG Group Official Website Link */}
            <a
              href="https://amdggroup.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-4 sm:p-6 lg:p-7 rounded-sm border border-white/[0.08] bg-[#0c0e12] hover:border-sky-400/40 hover:bg-[#101318] transition-all duration-300 focus:outline-none"
              aria-label="Visit AMDG Group official website (opens in a new tab)"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 type-meta text-sky-400">
                    <Globe className="h-3.5 w-3.5" />
                    <span>AMDG GROUP ECOSYSTEM</span>
                  </div>
                  <span className="text-lg min-[390px]:text-xl sm:text-2xl md:text-3xl font-light text-zinc-100 group-hover:text-white transition-colors block font-sans">
                    amdggroup.in
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-3 sm:ml-4" />
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* ============================================================== */}
        {/* MINIMAL FOOTER COLOPHON                                        */}
        {/* ============================================================== */}
        <div className="py-8 sm:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          {/* Identity & 4 Core Pillars */}
          <div className="space-y-1.5">
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-white block">
              AJIN SHIBU
            </span>
            <div className="text-xs sm:text-sm font-sans text-zinc-400 space-y-0.5 leading-normal">
              <div>Social Work. Mental Health.</div>
              <div>Entrepreneurship. Creativity.</div>
            </div>
          </div>

          {/* Center / Year */}
          <div className="type-meta text-zinc-500">
            <span>© 2026 AJIN SHIBU • ALL RIGHTS RESERVED</span>
          </div>

          {/* Right: Back to Top Button */}
          <div>
            <MagneticButton
              onClick={scrollToTop}
              strength={0.2}
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 min-h-[44px] rounded-xs border border-white/[0.08] hover:border-sky-400/40 text-zinc-400 hover:text-white transition-all duration-300 type-meta cursor-pointer"
              ariaLabel="Scroll back to top of the page"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5 text-sky-400 transition-transform duration-300 group-hover:-translate-y-1" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
