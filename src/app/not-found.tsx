import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Ajin Shibu",
  description: "The requested page does not exist.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#08090b] text-zinc-100 select-none overflow-hidden p-6 sm:p-12 lg:p-16">
      {/* Noise Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] bg-noise"
        aria-hidden="true"
      />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-lg tracking-tight text-white hover:text-sky-400 transition-colors"
        >
          <span className="font-semibold">AJIN</span>
          <span className="italic text-zinc-400">SHIBU</span>
        </Link>
        <span className="type-meta text-sky-400">404 // ERROR</span>
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-2xl my-auto py-16 space-y-6">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-zinc-500 font-medium">
          [ PAGE NOT FOUND ]
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-zinc-100 leading-[1.08]">
          This page <br />
          <span className="font-serif italic text-zinc-400">does not exist.</span>
        </h1>
        <p className="text-base sm:text-lg font-sans font-light text-zinc-400 leading-relaxed max-w-lg">
          The requested folio document could not be located. It may have been moved, removed, or never existed.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xs bg-white/[0.04] border border-white/[0.12] hover:border-sky-400/40 hover:bg-white/[0.08] text-zinc-200 hover:text-white transition-all text-xs font-sans tracking-[0.16em] uppercase"
          >
            <ArrowLeft className="h-4 w-4 text-sky-400" />
            <span>Back to portfolio</span>
          </Link>
        </div>
      </div>

      {/* Bottom Colophon */}
      <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between type-meta text-zinc-500">
        <span>AJIN SHIBU • OFFICIAL FOLIO</span>
        <span>2026</span>
      </div>
    </div>
  );
}
