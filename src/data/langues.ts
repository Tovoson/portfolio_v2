import { Code, Brain, Database, LucideProps } from "lucide-react";

// icons
import react from "@/assets/icons/react.svg";
import django from "@/assets/icons/django.svg";
import docker from "@/assets/icons/docker.svg";
import express from "@/assets/icons/express.svg";
import git from "@/assets/icons/git.svg";
import github from "@/assets/icons/github.svg";
import githubActions from "@/assets/icons/githubactions.svg";
import java from "@/assets/icons/Java.svg";
import mongodb from "@/assets/icons/mongodb.svg";
import mysql from "@/assets/icons/mysql.svg";
import next from "@/assets/icons/nextdotjs.svg";
import postgres from "@/assets/icons/postgresql.svg";
import nodejs from "@/assets/icons/nodedotjs.svg";
import { projects } from "./project-data";

type PropsNavBarLangue = {
  menu: {
    name: string;
    href: string;
  }[];
  btnDowload: string;
  btnContact: string;
};

type PropsHeroLanguage = {
  txt: string;
  title: string;
  description: string;
  btnView: string;
  btnTech: string;
};

type PropsExpertiseLanguages = {
  txt: string;
  title: string;
  expertises: {
    title: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    descrpiton: string;
  }[];
};

type PropsStackLanguages = {
  txt: string;
  title: string;
  stacks: {
    frontend: {
      icon: string;
      color: string;
      name: string;
    }[];
    backend: {
      icon: string;
      color: string;
      name: string;
    }[];
    bd: {
      icon: string;
      color: string;
      name: string;
    }[];
    IA: {
      icon: string;
      name: string;
    }[];
    devops: {
      icon: string;
      color: string;
      name: string;
    }[];
    Tools: {
      icon: string;
      color: string;
      name: string;
    }[];
  };
};

export const navBarLangues: Record<"fr" | "ang", PropsNavBarLangue> = {
  fr: {
    menu: [
      {
        name: "Expertise",
        href: "#expertise",
      },
      {
        name: "Stack",
        href: "#stack",
      },
      {
        name: "Formation",
        href: "#education",
      },
      {
        name: "Projets",
        href: "#projects",
      },
    ],
    btnDowload: "Télécharger CV",
    btnContact: "Entrer en contact",
  },
  ang: {
    menu: [
      {
        name: "Expertise",
        href: "#expertise",
      },
      {
        name: "Stack",
        href: "#stack",
      },
      {
        name: "Formation",
        href: "#education",
      },
      {
        name: "Projects",
        href: "#projects",
      },
    ],
    btnDowload: "Download CV",
    btnContact: "Get in touch",
  },
};

export const heroLangues: Record<"fr" | "ang", PropsHeroLanguage> = {
  fr: {
    txt: "Disponible pour des nouveaux projets",
    title: "Conception de systèmes intelligents et de solutions évolutives",
    description:
      "Développeur Fullstack | Ingénieur en systèmes d'IA | Expert en bases de données. Je fais le lien entre les architectures de données complexes, l'orchestration LLM et les expériences utilisateur fluides.",
    btnView: "Voir les projets",
    btnTech: "Stack technique",
  },
  ang: {
    txt: "Available for new projects",
    title: "Architecting Intelligent Systems & Scalable Solutions",
    description:
      "Fullstack Developer | AI Systems Engineer | Database Expert. Bridging the gap between complex data architectures, LLM orchestration, and seamless user experiences.",
    btnView: "View Projects",
    btnTech: "Technical Stack",
  },
};

export const expertiseLangues: Record<"fr" | "ang", PropsExpertiseLanguages> = {
  fr: {
    txt: "Expertise principale",
    title: "Spécialisation technique",
    expertises: [
      {
        title: "Développement Fullstack",
        icon: Code,
        descrpiton:
          "Création d'interfaces utilisateur performantes et accessibles, ainsi que d'une logique côté serveur évolutive à l'aide de frameworks modernes comme React et Node.js.",
      },
      {
        title: "Ingénierie des systèmes d'IA",
        icon: Brain,
        descrpiton:
          "Spécialisation dans l'orchestration LLM, les pipelines RAG et l'intégration du deep learning pour créer des applications véritablement intelligentes.",
      },
      {
        title: "Architecture de bases de données",
        icon: Database,
        descrpiton:
          "Expertise en systèmes distribués, optimisation PostgreSQL et bases de données vectorielles hautes performances pour les charges de travail d'IA.",
      },
    ],
  },
  ang: {
    txt: "Core Expertise",
    title: "Specialized Technical Focus",
    expertises: [
      {
        title: "Fullstack Development",
        icon: Code,
        descrpiton:
          "Building high-performance, accessible UIs and scalable server-side logic using modern frameworks like React and Node.js.",
      },
      {
        title: "AI Systems Engineering",
        icon: Brain,
        descrpiton:
          "Specializing in LLM orchestration, RAG pipelines, and deep learning integration to build truly intelligent applications.",
      },
      {
        title: "Database Architecture",
        icon: Database,
        descrpiton:
          "Expertise in distributed systems, PostgreSQL optimization, and high-performance vector databases for AI workloads.",
      },
    ],
  },
};

export const stackLanguages: Record<"fr" | "ang", PropsStackLanguages> = {
  fr: {
    txt: "L'Arsenal",
    title: "Technologique moderne",
    stacks: {
      frontend: [
        {
          icon: react,
          color: "#61DAFB",
          name: "react",
        },
        {
          icon: react,
          color: "#61DAFB",
          name: "react-native",
        },
        {
          icon: next,
          color: "#000000",
          name: "next.js",
        },
      ],
      backend: [
        {
          icon: express,
          color: "#000000",
          name: "express",
        },
        {
          icon: nodejs,
          color: "#5FA04E",
          name: "nodejs", //#5FA04E
        },
        {
          icon: django,
          color: "#092E20",
          name: "Django", //#092E20
        },
        {
          icon: java,
          color: "#007396",
          name: "Java",
        },
      ],
      bd: [
        {
          icon: postgres,
          color: "#4169E1",
          name: "PostgreSQL",
        },
        {
          icon: mysql,
          color: "#4479A1",
          name: "MySQL",
        },
        {
          icon: mongodb,
          color: "#47A248",
          name: "MongoDB",
        },
      ],
      IA: [
        {
          icon: "",
          name: "Prompt Engineering",
        },
        {
          icon: "",
          name: "RAG",
        },
        {
          icon: "",
          name: "LLM",
        },
      ],
      devops: [
        {
          icon: githubActions,
          color: "#2088FF",
          name: "Github Actions",
        },
        {
          icon: "",
          color: "",
          name: "CI/CD",
        },
      ],
      Tools: [
        {
          icon: docker,
          color: "#2496ED",
          name: "Docker",
        },
        {
          icon: git,
          color: "#F03C2E",
          name: "Git",
        },
        {
          icon: github,
          color: "#181717",
          name: "Github",
        },
      ],
    },
  },
  ang: {
    txt: "The Arsenal",
    title: "Modern Technology Stack",
    stacks: {
      frontend: [
        {
          icon: react,
          color: "#61DAFB",
          name: "react",
        },
        {
          icon: react,
          color: "#61DAFB",
          name: "react-native",
        },
        {
          icon: next,
          color: "#000000",
          name: "next.js",
        },
      ],
      backend: [
        {
          icon: express,
          color: "#000000",
          name: "express",
        },
        {
          icon: nodejs,
          color: "#5FA04E",
          name: "nodejs", //#5FA04E
        },
        {
          icon: django,
          color: "#092E20",
          name: "Django", //#092E20
        },
        {
          icon: java,
          color: "#007396",
          name: "Java",
        },
      ],
      bd: [
        {
          icon: postgres,
          color: "#4169E1",
          name: "PostgreSQL",
        },
        {
          icon: mysql,
          color: "#4479A1",
          name: "MySQL",
        },
        {
          icon: mongodb,
          color: "#47A248",
          name: "MongoDB",
        },
      ],
      IA: [
        {
          icon: "",
          name: "Prompt Engineering",
        },
        {
          icon: "",
          name: "RAG",
        },
        {
          icon: "",
          name: "LLM",
        },
      ],
      devops: [
        {
          icon: githubActions,
          color: "#2088FF",
          name: "Github Actions",
        },
        {
          icon: "",
          color: "",
          name: "CI/CD",
        },
      ],
      Tools: [
        {
          icon: docker,
          color: "#2496ED",
          name: "Docker",
        },
        {
          icon: git,
          color: "#F03C2E",
          name: "Git",
        },
        {
          icon: github,
          color: "#181717",
          name: "Github",
        },
      ],
    },
  },
};

export const projectsLangues = {
  fr: {
    txt: "Études de cas",
    title: "Solutions techniques",
    projects: projects,
  },
  ang: {
    txt: "Case Studies",
    title: "Engineered Solutions",
    projects: projects,
  },
};
