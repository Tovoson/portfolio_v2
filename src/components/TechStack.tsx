import {
  Atom,
  Server,
  Cpu,
  Code,
  Database,
  Container,
  Coffee,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONSTANTS } from "@/constants/Constants";
import StackItems from "./StackItems";
import { useLanguageStore } from "../store/useLanguageStore";
import { stackLanguages } from "../data/langues";

export default function TechStack() {
  const { langue } = useLanguageStore();
  const currentLangue = stackLanguages[langue];

  return (
    <section className={`relative max-w-7xl mx-auto px-6 py-36`} id="stack">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <h3
          className={`text-3xl md:text-4xl font-black ${CONSTANTS.Light.TITLE}`}
        >
          {currentLangue.title}
        </h3>
      </div>

      <div className="grid gap-6">
        <StackItems
          title="Frontend"
          tech={currentLangue.stacks.frontend}
         
          defaultOpen
        />
        <StackItems
          title="Backend"
          tech={currentLangue.stacks.backend}
         
        />
        <StackItems
          title="Base de données"
          tech={currentLangue.stacks.bd}
         
        />
        <StackItems
          title="Outils"
          tech={currentLangue.stacks.Tools}
         
        />
        <StackItems
          title="Intelligence artificielle"
          tech={currentLangue.stacks.IA}
         
        />
        <StackItems
          title="DevOps"
          tech={currentLangue.stacks.devops}
          
        />
      </div>
    </section>
  );
}
