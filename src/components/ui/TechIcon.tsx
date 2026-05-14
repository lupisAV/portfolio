"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiVuedotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiMysql,
  SiFigma,
} from "@icons-pack/react-simple-icons";
import type { Technology } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  angular: SiAngular,
  vue: SiVuedotjs,
  html: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  git: SiGit,
  sql: SiMysql,
  figma: SiFigma,
  claude: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
};

interface TechIconProps {
  tech: Technology;
  className?: string;
  index?: number;
}

export function TechIcon({ tech, className, index = 0 }: TechIconProps) {
  const IconComponent = iconMap[tech.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className={cn(
        "glass rounded-xl p-4 md:p-5 flex flex-col items-center justify-center gap-3 cursor-default transition-all duration-300 group relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      {IconComponent && <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-zinc-400 group-hover:text-white transition-colors duration-300" />}
      <span className="text-xs md:text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
        {tech.name}
      </span>
    </motion.div>
  );
}
