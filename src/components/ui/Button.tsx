"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  variant = "primary",
  className,
  href,
  external,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer group",
    variant === "primary" &&
      "bg-white text-black hover:bg-white/90 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
    variant === "outline" &&
      "border border-white/10 text-white hover:border-white/30 hover:bg-white/[0.04]",
    variant === "ghost" &&
      "text-zinc-400 hover:text-white hover:bg-white/[0.04]",
    className
  );

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="contents"
    >
      {variant === "primary" && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
      )}
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
}
