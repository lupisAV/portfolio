"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/data/certificates";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function Certificates() {
  return (
    <section id="certificates" className="relative py-32 px-6">
      <GlowOrb className="top-1/2 -left-1/4" color="amber" size={400} />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Certificados"
          title="Formación continua"
          description="Certificaciones que validan mi conocimiento en herramientas de desarrollo moderno e inteligencia artificial."
          align="center"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 md:-translate-x-px w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white/20 bg-zinc-950 z-10">
                  <div
                    className="absolute inset-0.5 rounded-full"
                    style={{ background: cert.color }}
                  />
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 pt-2 ${
                    index % 2 === 0 ? "ml-8 md:ml-0 md:pr-16" : "ml-8 md:mr-0 md:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="p-3 rounded-xl shrink-0"
                        style={{
                          background: `${cert.color}15`,
                          border: `1px solid ${cert.color}20`,
                        }}
                      >
                        <Award
                          className="w-5 h-5"
                          style={{ color: cert.color }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-zinc-500">
                            {cert.issuer}
                          </span>
                          <span className="text-zinc-700">·</span>
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{
                              background: `${cert.color}10`,
                              color: cert.color,
                            }}
                          >
                            {cert.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
