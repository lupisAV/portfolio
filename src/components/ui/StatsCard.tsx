"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatsCard({ value, label, className }: StatsCardProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "glass rounded-2xl p-6 md:p-8 text-center hover:bg-white/[0.05] transition-colors duration-500",
        className
      )}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
        {isInView ? <CountUp target={value} /> : "0"}
      </div>
      <div className="text-sm text-zinc-500">{label}</div>
    </motion.div>
  );
}

function CountUp({ target }: { target: string }) {
  // Check if the target contains letters before numbers (like "B2+")
  const hasPrefix = /^[A-Za-z]/.test(target);
  
  // If it has a prefix, don't animate and show the full value
  if (hasPrefix) {
    return <span>{target}</span>;
  }

  const numericValue = parseInt(target.replace(/[^0-9]/g, "")) || 0;
  const suffix = target.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (numericValue === 0) return;
    const duration = 1500;
    const steps = 30;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
