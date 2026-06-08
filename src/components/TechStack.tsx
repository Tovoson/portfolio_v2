import { Atom, Server, Cpu, Code, Database, Container, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONSTANTS } from '@/constants/Constants';
import StackItems, { TechItem } from "./StackItems";

const stack: Record<string, TechItem[]> = {
  frontend: [
  { icon: Atom, name: "React",        color: "text-cyan-400",   bg: "bg-cyan-400/20" },
  { icon: Atom, name: "React-native", color: "text-cyan-400",   bg: "bg-cyan-400/20" },
  { icon: Atom, name: "Next.js",      color: "text-slate-300",  bg: "bg-slate-300/20" },
],
backend: [
  { icon: Server, name: "Express",    color: "text-slate-400",  bg: "bg-slate-400/20" },
  { icon: Cpu,    name: "Nodejs",     color: "text-green-500",  bg: "bg-green-500/20" },
  { icon: Code,   name: "Django",     color: "text-emerald-500",bg: "bg-emerald-500/20" },
  { icon: Database,name:"PostgreSQL", color: "text-sky-400",    bg: "bg-sky-400/20" },
  { icon: Coffee, name: "Java",       color: "text-amber-500",  bg: "bg-amber-500/20" },
],
bd: [
  { icon: Database, name: "PostgreSQL",color: "text-sky-400",   bg: "bg-sky-400/20" },
  { icon: Database, name: "MySQL",     color: "text-amber-400", bg: "bg-amber-400/20" },
  { icon: Database, name: "MongoDB",   color: "bg-green-500",   bg: "bg-green-500/20" },
],
Outils: [
  { icon: Container,name: "Docker",   color: "text-blue-400",   bg: "bg-blue-400/20" },
  { icon: Code,     name: "Git",      color: "text-orange-500", bg: "bg-orange-500/20" },
  { icon: Code,     name: "GitHub",   color: "text-slate-300",  bg: "bg-slate-300/20" },
  { icon: Code,     name: "Jenkins",  color: "text-red-400",    bg: "bg-red-400/20" },
],
};

export default function TechStack() {
  return (
    <section className={`py-24 ${CONSTANTS.BACKGROUNDS.PRIMARY_5}`} id="stack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className={`text-sm font-bold ${CONSTANTS.TEXT.PRIMARY} tracking-[0.2em] uppercase`}>
            The Arsenal
          </h2>
          <h3 className={`text-3xl md:text-4xl font-black ${CONSTANTS.TEXT.WHITE}`}>
            Modern Technology Stack
          </h3>
        </div>

        <div className="grid gap-6">
          <StackItems title="Frontend" tech={stack.frontend} defaultOpen />
          <StackItems title="Backend" tech={stack.backend} />
          <StackItems title="SGBD" tech={stack.bd} />
          <StackItems title="Tools" tech={stack.Outils} />
        </div>
      </div>
    </section>
  );
}
