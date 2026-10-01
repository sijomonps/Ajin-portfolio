"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen bg-[#090a0d] text-zinc-100 selection:bg-sky-400 selection:text-black">
      {/* Film Grain Subtle Noise Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] bg-noise"
        aria-hidden="true"
      />

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
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col flex-1 min-h-screen"
      >
        {children}
      </motion.main>
    </div>
  );
}
