import { Code, Brain, Database } from 'lucide-react';
import { motion } from 'motion/react';

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
  return (
    <section className="py-24 relative" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase">Core Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-black text-white">Specialized Technical Focus</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col gap-6 neon-border-hover transition-all group border-primary/5"
            >
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white">
                <item.icon className="size-8" />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
