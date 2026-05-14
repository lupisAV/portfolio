"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsCard } from "@/components/ui/StatsCard";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <GlowOrb className="top-1/2 -right-1/4" color="cyan" size={500} />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Sobre mí"
          title="Estudiante & desarrollador"
          description="Construyendo el futuro desde el frontend, combinando diseño, código y creatividad."
          align="center"
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
              Soy{" "}
              <span className="text-white font-medium">Miguel Ávila</span>,
              estudiante de{" "}
              <span className="text-gradient font-medium">
                octavo semestre de Ingeniería de Sistemas
              </span>{" "}
              en la{" "}
              <span className="text-white font-medium">
                Universidad Libre de Colombia
              </span>
              .
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Me apasiona el desarrollo frontend moderno, el diseño de
              interfaces visuales atractivas y la inteligencia artificial.
              Construyo experiencias digitales que combinan creatividad,
              rendimiento y atención al detalle.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Tengo 2 años de experiencia en semillero de investigación en
              T.I., desarrollando proyectos y participando de manera constrante en foros y conferencias.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Mi enfoque está en crear productos digitales que no solo
              funcionen bien, sino que se sientan bien. Creo que el diseño y el
              código son dos caras de la misma moneda, y me esfuerzo por
              dominar ambos.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <MapPin className="w-4 h-4 text-indigo-400" />
                Colombia
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                UniLibre — 8vo semestre
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            <StatsCard value="8vo" label="Semestre en curso" />
            <StatsCard value="B2+" label="Nivel de inglés" />
            <StatsCard value="14+" label="Tecnologías" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
