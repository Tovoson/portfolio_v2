import { GraduationCap, BookOpen, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

const education = [
  {
    icon: GraduationCap,
    period: "2018 - 2025",
    title: "Master II in Software Engineering & Databases",
    school: "ENI Madagascar",
    description: "Specialized in advanced software engineering methodologies and distributed database systems. Focused on building robust, scalable architectures for enterprise-grade applications."
  },
  {
    icon: BookOpen,
    period: "2023 - 2025",
    title: "B.S. in Computer Science",
    school: "ENI Madagascar",
    description: "Core focus on Algorithms, Data Structures, and Distributed Systems."
  },
  {
    icon: BadgeCheck,
    period: "Current",
    title: "Professional Certifications",
    school: "",
    certs: [
      "AWS Certified Solutions Architect",
      "Google Professional ML Engineer",
    ]
  }
];

export default function Education() {
  return (
    <section className="py-24 relative" id="education">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase">Academic Excellence</h2>
          <h3 className="text-3xl md:text-4xl font-black text-white">Formation & Certifications</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col gap-6 neon-border-hover transition-all group border-primary/5"
            >
              <div className="flex justify-between items-start">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  <item.icon className="size-8" />
                </div>
                <span className="text-xs font-bold text-primary py-1 px-3 rounded-full bg-primary/10">{item.period}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                {item.school && <p className="text-sm font-bold text-primary/80">{item.school}</p>}
                {item.description && <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>}
                {item.certs && (
                  <div className="space-y-2 mt-2">
                    {item.certs.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="size-1.5 rounded-full bg-primary"></span> {cert}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
