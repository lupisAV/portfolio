"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  color?: string;
  size?: number;
}

export function GlowOrb({ className, color = "indigo", size = 400 }: GlowOrbProps) {
  const colorMap: Record<string, string> = {
    indigo: "rgba(99,102,241,0.15)",
    purple: "rgba(168,85,247,0.12)",
    cyan: "rgba(6,182,212,0.12)",
    amber: "rgba(245,158,11,0.1)",
  };

  return (
    <motion.div
      className={cn("absolute rounded-full pointer-events-none blur-3xl", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colorMap[color] || colorMap.indigo} 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.15, 1, 0.9, 1],
        opacity: [0.5, 0.8, 0.5, 0.7, 0.5],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
