"use client";

import React, { useRef } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
  asLink?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  strength = 0.2,
  asLink = false,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const springConfig = { damping: 20, stiffness: 200, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      data-cursor="link"
    >
      {asLink && href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className={className}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={className}
          aria-label={ariaLabel}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
}
