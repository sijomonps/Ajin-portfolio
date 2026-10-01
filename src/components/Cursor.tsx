"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "link" | "image" | "project";

function subscribePointerFine(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getPointerFineSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
}

export function Cursor() {
  const isPointerFine = useSyncExternalStore(
    subscribePointerFine,
    getPointerFineSnapshot,
    () => false
  );

  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 380, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) {
        setCursorState("default");
        return;
      }

      if (target.closest('[data-cursor="image"], [data-cursor="gallery"]')) {
        setCursorState("image");
      } else if (target.closest('[data-cursor="project"]')) {
        setCursorState("project");
      } else if (target.closest("a, button, [data-cursor='link'], [data-cursor-hover], input, textarea")) {
        setCursorState("link");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isPointerFine, mouseX, mouseY, isVisible]);

  if (!isPointerFine) return null;

  const isInteractive = cursorState !== "default";

  // Dynamic visual configurations per cursor state
  const haloConfig = {
    default: {
      size: 22,
      border: "1px solid rgba(255, 255, 255, 0.35)",
      bg: "rgba(255, 255, 255, 0)",
      scale: 1,
    },
    link: {
      size: 46,
      border: "1px solid rgba(255, 255, 255, 0.85)",
      bg: "rgba(255, 255, 255, 0.08)",
      scale: 1,
    },
    image: {
      size: 64,
      border: "1px solid rgba(56, 189, 248, 0.75)",
      bg: "rgba(56, 189, 248, 0.12)",
      scale: 1.05,
    },
    project: {
      size: 54,
      border: "1px solid rgba(56, 189, 248, 0.85)",
      bg: "rgba(56, 189, 248, 0.09)",
      scale: 1.02,
    },
  }[cursorState];

  return (
    <>
      {/* Outer subtle halo ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference flex items-center justify-center font-sans text-[9px] uppercase tracking-widest text-sky-400 font-medium"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={false}
        animate={{
          width: haloConfig.size,
          height: haloConfig.size,
          opacity: isVisible ? 1 : 0,
          border: haloConfig.border,
          backgroundColor: haloConfig.bg,
          scale: haloConfig.scale,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 320 }}
      >
        {cursorState === "image" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[8px] tracking-wider text-sky-300 font-sans select-none font-medium"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>

      {/* Inner precise dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? (isInteractive ? 0 : 1) : 0,
          scale: isInteractive ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
