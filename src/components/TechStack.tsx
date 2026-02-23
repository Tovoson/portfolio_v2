import { Database, Cpu, Atom, Server, Container, FileCode } from 'lucide-react';

const stack = [
  { icon: Atom, name: "React", color: "text-blue-500", bg: "bg-blue-500/20" },
  { icon: Server, name: "Express", color: "text-blue-500", bg: "bg-blue-500/20" },
  { icon: FileCode, name: "Python", color: "text-yellow-500", bg: "bg-yellow-500/20" },
  { icon: Database, name: "PostgreSQL/MongoDB", color: "text-blue-300", bg: "bg-blue-300/20" },
  { icon: Cpu, name: "TensorFlow", color: "text-orange-500", bg: "bg-orange-500/20" },
  { icon: Container, name: "Docker", color: "text-cyan-500", bg: "bg-cyan-500/20" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-primary/5" id="stack">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase">The Arsenal</h2>
          <h3 className="text-3xl md:text-4xl font-black text-white">Modern Technology Stack</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stack.map((tech, index) => (
            <div 
              key={index}
              className="glass-card h-32 rounded-xl flex flex-col items-center justify-center gap-3 grayscale hover:grayscale-0 transition-all border-primary/5"
            >
              <div className={`size-8 ${tech.bg} rounded-md flex items-center justify-center`}>
                <tech.icon className={`size-5 ${tech.color}`} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-60 text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
