"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navigationItems, personalInfo } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Entrance Animation: Step 6 of cinematic sequence */}
      <motion.header
        initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: shouldReduceMotion ? 0 : 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#08090b]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5 shadow-2xl"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: AJIN SHIBU / AJIN */}
          <Link
            href="/"
            className="group flex items-baseline gap-2.5 focus:outline-none"
            aria-label="Ajin Shibu Home"
          >
            <span className="font-serif font-normal text-lg sm:text-xl tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              AJIN <span className="italic text-zinc-300">SHIBU</span>
            </span>
            <span className="hidden sm:inline-block font-sans text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-medium">
              / KERALA
            </span>
          </Link>

          {/* Right: Minimal Navigation Links (About, Journey, Work, Impact, Contact) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative font-sans text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-100 font-medium transition-colors py-1"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-sky-400 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Subtle Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-sm text-zinc-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Editorial Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#08090b]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8 overflow-y-auto min-h-[100dvh]"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">
                  Navigation Menu
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-sky-400 font-medium">
                  KERALA, IN
                </span>
              </div>

              <ul className="space-y-2">
                {navigationItems.map((item, idx) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-white/[0.06] py-3.5 text-3xl sm:text-4xl font-serif font-normal text-zinc-200 hover:text-sky-400 transition-colors tracking-tight min-h-[48px]"
                    >
                      <span>{item.label}</span>
                      <span className="font-sans text-xs font-medium text-zinc-500 group-hover:text-sky-400 tracking-[0.2em]">
                        0{idx + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Mobile Colophon Footer */}
            <div className="pt-6 border-t border-white/[0.08] space-y-3">
              <div className="font-sans text-xs text-zinc-400">
                <span className="text-zinc-500 block mb-1 uppercase tracking-wider text-[10px]">Direct Communication:</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-zinc-200 hover:text-sky-400 inline-flex items-center gap-1.5 min-h-[44px] py-1"
                >
                  <span>{personalInfo.email}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] font-sans tracking-wide text-zinc-500 pt-1">
                <span>{personalInfo.kapsMembership}</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
