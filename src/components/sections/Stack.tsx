"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { technologies } from "@/data/technologies";
import { GlowOrb } from "@/components/ui/GlowOrb";

const categories = [
  { key: "core", label: "Core" },
  { key: "styling", label: "Styling" },
  { key: "tools", label: "Tools & Design" },
] as const;

export function Stack() {
  return (
    <section id="stack" className="relative py-32 px-6">
      <GlowOrb className="top-1/3 -left-1/4" color="purple" size={500} />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Stack"
          title="Tecnologías"
          description="Herramientas y tecnologías con las que construyo experiencias digitales modernas."
          align="center"
        />

        <div className="space-y-16">
          {categories.map((cat, catIdx) => {
            const techs = technologies.filter((t) => t.category === cat.key);
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-600">
                    {cat.label}
                  </span>
                  <div className="flex-1 h-px bg-white/[0.04]" />
                  <span className="text-xs text-zinc-600">
                    {techs.length} herramientas
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4">
                  {techs.map((tech, idx) => (
                    <TechIcon key={tech.name} tech={tech} index={idx} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
