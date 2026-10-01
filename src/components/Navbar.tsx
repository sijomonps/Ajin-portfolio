"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navigationItems, personalInfo } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();

  // Scroll detection for navbar background transition and top hero reset
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // If near top of page, no section is active
      if (window.scrollY < 240) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to detect currently active visible section
  useEffect(() => {
    const observedSections = [
      "about",
      "journey",
      "work",
      "impact",
      "yuva-manass",
      "amdg-group",
      "volunteering",
      "archive",
      "vision",
      "contact",
    ];

    const sectionToNavMap: Record<string, string> = {
      about: "about",
      journey: "journey",
      work: "work",
      impact: "impact",
      "yuva-manass": "impact",
      "amdg-group": "impact",
      volunteering: "impact",
      archive: "impact",
      vision: "contact",
      contact: "contact",
    };

    const intersectingMap = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectingMap.set(entry.target.id, entry.isIntersecting);
        });

        if (window.scrollY < 240) {
          setActiveSection("");
          return;
        }

        for (const id of observedSections) {
          if (intersectingMap.get(id)) {
            const mappedKey = sectionToNavMap[id] || id;
            setActiveSection(mappedKey);
            break;
          }
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0,
      }
    );

    observedSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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

  // Handle Escape key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Entrance Animation */}
      <motion.header
        initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: shouldReduceMotion ? 0 : 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
          scrolled
            ? "bg-[#08090b]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: AJIN SHIBU Brand Wordmark */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-baseline gap-2.5 focus:outline-none"
            aria-label="Ajin Shibu Home"
          >
            <span className="font-serif font-normal text-lg sm:text-xl tracking-tight text-zinc-100 group-hover:text-white transition-colors duration-200">
              AJIN <span className="italic text-zinc-300">SHIBU</span>
            </span>
            <span className="hidden sm:inline-block font-sans text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-medium">
              / KERALA
            </span>
          </Link>

          {/* Right: Minimal Navigation Links with Active State & Micro-interactions */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navigationItems.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-200 py-1 flex items-center gap-1.5 focus:outline-none ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Subtle Active Indicator Dot */}
                  <span
                    className={`w-1 h-1 rounded-full bg-sky-400 transition-all duration-300 ease-out ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                  />

                  {/* Text with subtle 2px hover shift */}
                  <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                    {item.label}
                  </span>

                  {/* Subtle Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-sky-400 transition-all duration-300 ease-out ${
                      isActive ? "w-full opacity-70" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button with Restrained Transition */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xs text-zinc-300 hover:text-white focus:outline-none transition-colors duration-200 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-200 rotate-90 scale-100" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Editorial Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#08090b]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-5 sm:px-8 overflow-y-auto min-h-[100dvh]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
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

              <ul className="space-y-1.5">
                {navigationItems.map((item, idx) => {
                  const targetId = item.href.replace("#", "");
                  const isActive = activeSection === targetId;

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.25 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center justify-between border-b border-white/[0.06] py-3 text-2xl sm:text-3xl font-serif font-normal transition-all duration-200 tracking-tight min-h-[48px] ${
                          isActive
                            ? "text-sky-400 pl-2 border-sky-400/30"
                            : "text-zinc-200 hover:text-white"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div className="flex items-center gap-2.5">
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          )}
                          <span>{item.label}</span>
                        </div>
                        <span
                          className={`font-sans text-xs font-medium tracking-[0.2em] transition-colors ${
                            isActive ? "text-sky-400" : "text-zinc-500 group-hover:text-sky-400"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Mobile Colophon Footer */}
            <div className="pt-6 border-t border-white/[0.08] space-y-3">
              <div className="font-sans text-xs text-zinc-400">
                <span className="text-zinc-500 block mb-1 uppercase tracking-wider text-[10px]">
                  Direct Communication:
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-200 hover:text-sky-400 inline-flex items-center gap-1.5 min-h-[44px] py-1 transition-colors"
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
