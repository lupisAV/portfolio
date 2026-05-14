"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <GlowOrb className="top-0 right-1/3" color="indigo" size={400} />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Proyectos"
          title="Trabajo destacado"
          description="Proyectos que reflejan mi pasión por el desarrollo frontend, la inteligencia artificial y el diseño visual moderno."
          align="center"
        />

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
