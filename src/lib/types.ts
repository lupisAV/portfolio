export interface Project {
  title: string;
  description: string;
  repo: string;
  demo?: string;
  tags: string[];
  image: string;
  color: string;
}

export interface Technology {
  name: string;
  category: "core" | "styling" | "tools";
  icon: string;
  level?: number;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}
