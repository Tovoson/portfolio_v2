import { Code, Brain, Database, LucideProps } from "lucide-react";

// icons
import react from "@/assets/icons/icons8-48.png"
import dj from "@/assets/icons/icons8-django-24.png"
import docker from "@/assets/icons/icons8-docker-48.png"
import exp from "@/assets/icons/icons8-express-js-50.png"
import github from "@/assets/icons/icons8-github-50.png"
import java from "@/assets/icons/icons8-logo-java-coffee-cup-48.png"
import mongodb from "@/assets/icons/icons8-mongodb-24.png"
import mysql from "@/assets/icons/icons8-mysql-48.png"
import next from "@/assets/icons/icons8-nextjs-48.png"
import node from "@/assets/icons/icons8-nœud-js-48.png"
import pg from "@/assets/icons/icons8-postgresql-96.png"
import reactNative from "@/assets/icons/icons8-react-native-64.png"
import test from "@/assets/icons/icons8-test-chimique-96.png"
import git from "@/assets/icons/icons8-git-96.png"


import { projects } from "./project-data";
import { educationData, PropsEducation } from "../components/Education";

export type languages = "fr" | "en";

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

type StackItem = {
  icon: string | null;
  name: string;
}[];

type PropsStackLanguages = {
  txt: string;
  title: string;
  descr: string;
  stacks: {
   
    frontend: StackItem;
    backend: StackItem;
    IA: StackItem;
    bd: StackItem;
    devops: StackItem;
    Tools: StackItem;
  
  }

};

type PropsEducationLanguages = {
  txt: string;
  title: string;
  education: PropsEducation;
};

type PropsContactLanguages = {
  title: string;
  desc: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  msgPlaceholder: string;
  sendBtn: string;
  positionTxt: string;
  numTxt: string;
};

export const navBarLangues: Record<languages, PropsNavBarLangue> = {
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
  en: {
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

export const heroLangues: Record<languages, PropsHeroLanguage> = {
  fr: {
    txt: "Disponible pour des nouveaux projets",
    title: "Conception de systèmes intelligents et de solutions évolutives",
    description:
      "Développeur Fullstack | Ingénieur en systèmes d'IA | Expert en bases de données. Je fais le lien entre les architectures de données complexes, l'orchestration LLM et les expériences utilisateur fluides.",
    btnView: "Voir les projets",
    btnTech: "Stack technique",
  },
  en: {
    txt: "Available for new projects",
    title: "Architecting Intelligent Systems & Scalable Solutions",
    description:
      "Fullstack Developer | AI Systems Engineer | Database Expert. Bridging the gap between complex data architectures, LLM orchestration, and seamless user experiences.",
    btnView: "View Projects",
    btnTech: "Technical Stack",
  },
};

export const expertiseLangues: Record<languages, PropsExpertiseLanguages> = {
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
  en: {
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

export const stackLanguages: Record<languages, PropsStackLanguages> = {
  fr: {
    txt: "L'Arsenal",
    title: "Technologique moderne",
    descr: "éléments",
    stacks: {
      frontend: [
        { icon: react, name: "react" },
        { icon: reactNative, name: "react-native" },
        { icon: next, name: "next.js" },
      ],
      backend: [
        { icon: exp, name: "express" },
        { icon: node, name: "nodejs" },
        { icon: dj, name: "Django" },
        { icon: java, name: "Java" },
      ],
      bd: [
        {
          icon: pg,
          name: "PostgreSQL",
        },
        { icon: mysql, name: "MySQL" },
        { icon: mongodb, name: "MongoDB" },
      ],
      IA: [
        { icon: null, name: "Prompt Engineering" },
        { icon: null, name: "RAG" },
        { icon: null, name: "LLM" },
      ],
      devops: [
        {
          icon: github,
          name: "Github Actions",
        },
        { icon: test, name: "CI/CD" },
      ],
      Tools: [
        { icon: docker, name: "Docker" },
        { icon: git, name: "Git" },
        { icon: github, name: "Github" },
      ],
    },
  },
  en: {
    txt: "The Arsenal",
    title: "Modern Technology Stack",
    descr: "items",
    stacks: {
      frontend: [
        { icon: react, name: "react" },
        { icon: reactNative, name: "react-native" },
        { icon: next, name: "next.js" },
      ],
      backend: [
        { icon: exp, name: "express" },
        { icon: node, name: "nodejs" },
        { icon: dj, name: "Django" },
        { icon: java, name: "Java" },
      ],
      bd: [
        {
          icon: pg,
          name: "PostgreSQL",
        },
        { icon: mysql, name: "MySQL" },
        { icon: mongodb, name: "MongoDB" },
      ],
      IA: [
        { icon: null, name: "Prompt Engineering" },
        { icon: null, name: "RAG" },
        { icon: null, name: "LLM" },
      ],
      devops: [
        {
          icon: github,
          name: "Github Actions",
        },
        { icon: test, name: "CI/CD" },
      ],
      Tools: [
        { icon: docker, name: "Docker" },
        { icon: git, name: "Git" },
        { icon: github, name: "Github" },
      ],
    },
  },
};

export const projectsLangues = {
  fr: {
    txt: "Études de cas",
    title: "Solutions techniques",
    projects: projects.fr,
  },
  en: {
    txt: "Case Studies",
    title: "Engineered Solutions",
    projects: projects.ang,
  },
};

export const formationLangues: Record<languages, PropsEducationLanguages> = {
  fr: {
    txt: "Excellence académique",
    title: "Formation & Certifications",
    education: educationData.fr,
  },
  en: {
    txt: "Academic Excellence",
    title: "Formation & Certifications",
    education: educationData.en,
  },
};

export const contactLanguages: Record<languages, PropsContactLanguages> = {
  fr: {
    title: "Construisons l’avenir",
    desc: "Vous rencontrez un défi technique complexe ? Je suis prêt à vous aider à le résoudre",
    nameLabel: " Nom complet",
    namePlaceholder: " Nom...",
    emailLabel: "Adresse e-mail",
    msgPlaceholder: "Décrivez votre projet…",
    sendBtn: "Envoyer un message",
    positionTxt: "Lieu de travail",
    numTxt: "Contact direct",
  },
  en: {
    title: "Let's build the future",
    desc: "Have a complex technical challenge? I'm ready to help you solve it.",
    nameLabel: "Full Name",
    namePlaceholder: "Name...",
    emailLabel: "Email Address",
    msgPlaceholder: "Describe your project...",
    sendBtn: "Send Message",
    positionTxt: "Office Location",
    numTxt: "Direct Contact",
  },
};
