import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectModal from './ProjectModal';
import { Project } from '../Types/Project';
import { projects } from '../data/project';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-24" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase">Case Studies</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white">Engineered Solutions</h3>
          </div>
          <button className="hidden md:block text-sm font-bold text-primary hover:underline transition-all cursor-pointer">View All Work</button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-5 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-card relative border-primary/5">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-primary px-6 py-2 rounded-lg font-bold">Details</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-2">
                <div className="flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors text-white">{project.title}</h4>
                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
