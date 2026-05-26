import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "AIVU",
    description:
      "Sistema inteligente de corrección de postura para entrenamiento físico mediante visión 3D e inteligencia artificial.",
    repo: "https://github.com/lupisAV/aivU",
    tags: ["Angular", "AI", "Typescript"],
    image: "/images/aivu-mockup.png",
    color: "#6366f1",
  },
  {
    title: "NOVA.AI",
    description:
      "Landing page moderna para agente de inteligencia artificial con diseño estilizado y experiencia visual futurista.",
    repo: "https://github.com/lupisAV/Nova.ai",
    tags: ["Next.js", "Landing Page", "Tailwind CSS", "Framer Motion"],
    image: "/images/nova-mockup.png",
    color: "#06b6d4",
  },
    {
    title: "SOLARMIND",
    description:
      "Pipeline de minería de datos para análisis de radiación solar mediante árboles de decisión.",
    repo: "https://github.com/lupisAV/Solarmind",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    image: "/images/solarmind-mockup.png",
    color: "#f59e0b",
  },
];
