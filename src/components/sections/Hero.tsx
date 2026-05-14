"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      <GlowOrb className="-top-40 left-1/4" color="indigo" size={600} />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs font-medium text-zinc-400 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Disponible para colaborar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-semibold tracking-tighter text-white leading-[0.9]"
          >
            SOY MIGUEL
            <br />
            <span className="text-gradient">ÁVILA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 text-2xl sm:text-3xl font-light tracking-wide bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed"
          >
            Construyo interfaces modernas, rápidas y visualmente impactantes.
            Diseño experiencias digitales que combinan estética, funcionalidad
            y la mejor tecnología frontend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#projects" variant="primary" className="relative">
              <FolderGit2 className="w-4 h-4" />
              Ver proyectos
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-500" />
            </Button>
            <Button href="#contact" variant="outline">
              <Mail className="w-4 h-4" />
              Contactarme
            </Button>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
            <div className="relative h-full rounded-3xl overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Miguel Ávila"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#050505] to-transparent" />
              <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#050505] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#050505] to-transparent" />
              <div className="absolute inset-x-0 top-0 h-12 sm:h-16 bg-gradient-to-b from-[#050505] to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-zinc-600">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
