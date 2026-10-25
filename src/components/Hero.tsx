import { ArrowDown, ArrowRight, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import { CONSTANTS } from "@/constants/Constants";
import { heroLangues } from "../data/langues";
import { useLanguageStore } from "../store/useLanguageStore";
import Button from "./ui/Button";

export default function Hero() {
  const { langue } = useLanguageStore();
  const currentLangue = heroLangues[langue];

  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-10 w-full max-w-7xl mx-auto px-6 relative z-10 lg:gap-y-30 lg:w-full lg:items-center lg:justify-center justify-center h-screen items-center pb-5 overflow-hidden hero-glow"
    >
      <div className="flex flex-col items-center gap-10 w-full justify-center">
        <h1
          className={`text-2xl lg:text-5xl font-black leading-[1.1] tracking-tight ${CONSTANTS.Light.TITLE}`}
        >
          {currentLangue.title}
        </h1>

        <p
          className={`text-lg lg:text-lg ${CONSTANTS.Light.DESCRIPTION} leading-relaxed`}
        >
          {currentLangue.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button className={`${CONSTANTS.Light.DESCRIPTION} rounded-2xl`}>
          <a href="">
            {" "}
            <ArrowDown />{" "}
          </a>
        </Button>
      </div>
    </motion.section>
  );
}
