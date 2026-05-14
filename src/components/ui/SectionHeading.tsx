"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-16 md:mb-24",
        align === "center" && "text-center",
        className
      )}
    >
      <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-indigo-400 mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed mx-auto">
          {description}
        </p>
      )}
      <div className="mt-8 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
    </motion.div>
  );
}
