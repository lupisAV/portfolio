"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { SITE } from "@/lib/constants";

const contactLinks = [
  {
    label: "GitHub",
    href: SITE.github,
    Icon: GithubIcon,
    description: "Mis proyectos open source",
  },
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    Icon: LinkedinIcon,
    description: "Conectemos profesionalmente",
  },
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    Icon: Mail,
    description: SITE.email,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <GlowOrb className="top-0 right-1/4" color="indigo" size={500} />
      <GlowOrb className="bottom-0 left-1/4" color="purple" size={400} />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Contacto"
          title="¿Trabajamos juntos?"
          description="Si tienes un proyecto, una idea o simplemente quieres charlar sobre frontend, estoy a un mensaje de distancia."
          align="center"
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              También puedes encontrarme en
            </h3>

            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 group hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] group-hover:bg-indigo-500/10 transition-colors">
                  <link.Icon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">
                    {link.label}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">
                    {link.description}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/10"
            >
              <p className="text-sm text-zinc-300 leading-relaxed">
                Abierto a oportunidades de colaboración, proyectos freelance y
                conexiones profesionales en el mundo del desarrollo frontend.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
