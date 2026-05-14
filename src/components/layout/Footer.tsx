"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6">
      <div className="absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="text-zinc-300 font-medium">{SITE.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${SITE.email}`}
            className="p-2 rounded-xl text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors group"
        >
          <span className="hidden sm:inline">Volver arriba</span>
          <div className="p-2 rounded-xl bg-white/[0.03] group-hover:bg-white/[0.06] transition-all duration-300">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  );
}
