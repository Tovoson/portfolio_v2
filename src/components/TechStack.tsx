import { Atom, Server, Cpu, Code, Database, Container, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONSTANTS } from '@/constants/Constants';
import StackItems from "./StackItems";
import { useLanguageStore } from "../store/useLanguageStore";
import { stackLanguages } from "../data/langues";

export default function TechStack() {

  const {langue} = useLanguageStore()
  const currentLangue = stackLanguages[langue]

  return (
    <section className={`py-24 ${CONSTANTS.BACKGROUNDS.PRIMARY_5}`} id="stack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className={`text-sm font-bold ${CONSTANTS.TEXT.PRIMARY} tracking-[0.2em] uppercase`}>
            {currentLangue.txt}
          </h2>
          <h3 className={`text-3xl md:text-4xl font-black ${CONSTANTS.TEXT.TITLE}`}>
            {currentLangue.title}
          </h3>
        </div>

        <div className="grid gap-6">
          <StackItems title="Frontend" tech={currentLangue.stacks.frontend} desc = {currentLangue.descr} defaultOpen />
          <StackItems title="Backend" tech={currentLangue.stacks.backend} desc = {currentLangue.descr}/>
          <StackItems title="SGBD" tech={currentLangue.stacks.bd} desc = {currentLangue.descr}/>
          <StackItems title="Tools" tech={currentLangue.stacks.Tools} desc = {currentLangue.descr}/>
          <StackItems title="IA" tech={currentLangue.stacks.IA} desc = {currentLangue.descr}/>
          <StackItems title="DevOps" tech={currentLangue.stacks.devops} desc = {currentLangue.descr}/>
        </div>
      </div>
    </section>
  );
}
