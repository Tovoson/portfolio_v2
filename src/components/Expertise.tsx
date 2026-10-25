import { CONSTANTS } from '@/constants/Constants';
import { Code, Brain, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguageStore } from '../store/useLanguageStore';
import { expertiseLangues } from '../data/langues';

const expertise = [
  {
    icon: Code,
    title: "Fullstack Development",
    description: "Building high-performance, accessible UIs and scalable server-side logic using modern frameworks like React and Node.js."
  },
  {
    icon: Brain,
    title: "AI Systems Engineering",
    description: "Specializing in LLM orchestration, RAG pipelines, and deep learning integration to build truly intelligent applications."
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Expertise in distributed systems, PostgreSQL optimization, and high-performance vector databases for AI workloads."
  }
];

export default function Expertise() {

  const {langue} = useLanguageStore()
  const currentLangue = expertiseLangues[langue]

  return (
    <section className=" relative max-w-7xl mx-auto px-6" id="expertise">
      
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h3 className={`text-3xl md:text-4xl font-black ${CONSTANTS.TEXT.TITLE}`}> {currentLangue.title} </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {currentLangue.expertises.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${CONSTANTS.PADDING} ${CONSTANTS.contour} rounded-2xl flex flex-col gap-6 neon-border-hover transition-all group ${CONSTANTS.BACKGROUNDS.CARD}`}
            >
              <div className={`size-10 rounded-xl ${CONSTANTS.BACKGROUNDS.CARD} ${CONSTANTS.contour} flex items-center justify-center ${CONSTANTS.TEXT.PRIMARY} transition-all ${CONSTANTS.Light.HOVER}`}>
                <item.icon />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className={`${CONSTANTS.TEXT.TITLE} text-xl font-bold`}>{item.title}</h4>
                <p className={`${CONSTANTS.TEXT.DESCRIPTION} leading-relaxed`}>
                  {item.descrpiton}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
    
    </section>
  );
}
