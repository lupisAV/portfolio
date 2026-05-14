"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group"
    >
      <div
        className={cn(
          "grid md:grid-cols-12 gap-8 md:gap-12 items-center",
          !isEven && "md:[direction:rtl]"
        )}
      >
        <div className="md:col-span-7 [direction:ltr] relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] aspect-video bg-zinc-900"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${project.color}20 0%, transparent 50%)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
                    border: `1px solid ${project.color}20`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg"
                    style={{
                      background: project.color,
                      opacity: 0.8,
                    }}
                  />
                </div>
                <span
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: project.color }}
                >
                  {project.title}
                </span>
              </div>
            </div>

            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${project.color}40 0%, ${project.color}15 100%)`,
              }}
            />

            <div className="absolute top-4 left-4 flex gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-zinc-300 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-5 [direction:ltr]">
          <motion.div
            className="mb-2 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: project.color }}
          >
            Proyecto {index + 1}
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
            {project.title}
          </h3>
          <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              href={project.repo}
              external
              variant="outline"
            >
              <FolderGit className="w-4 h-4" />
              GitHub
            </Button>
            {project.demo && (
              <Button href={project.demo} external variant="primary">
                <ExternalLink className="w-4 h-4" />
                Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
