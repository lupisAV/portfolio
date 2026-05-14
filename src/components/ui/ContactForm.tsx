"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "./Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group"
        >
          <label className="block text-xs font-medium tracking-wide uppercase text-zinc-500 mb-2 group-focus-within:text-indigo-400 transition-colors">
            Nombre
          </label>
          <input
            type="text"
            required
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300"
            placeholder="Tu nombre"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group"
        >
          <label className="block text-xs font-medium tracking-wide uppercase text-zinc-500 mb-2 group-focus-within:text-indigo-400 transition-colors">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300"
            placeholder="tu@email.com"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="group"
      >
        <label className="block text-xs font-medium tracking-wide uppercase text-zinc-500 mb-2 group-focus-within:text-indigo-400 transition-colors">
          Mensaje
        </label>
        <textarea
          required
          rows={4}
          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
          placeholder="Cuéntame sobre tu proyecto..."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto"
          disabled={status !== "idle"}
        >
          {status === "idle" && (
            <>
              <Send className="w-4 h-4" />
              Enviar mensaje
            </>
          )}
          {status === "sending" && (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
              />
              Enviando...
            </>
          )}
          {status === "sent" && (
            <>
              <Check className="w-4 h-4" />
              Mensaje enviado
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}
