import { X, ExternalLink, Github, Calendar, Layers, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  longDescription?: string;
  techStack?: string[];
  date?: string;
  lienBackend?: string;
  lienFrontend?: string;
  lienProd?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden glass-card rounded-3xl border border-primary/20 flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-background-dark/50 hover:bg-primary/20 rounded-full text-white transition-colors cursor-pointer"
          >
            <X className="size-6" />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto custom-scrollbar">
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <div className="flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">{project.title}</h2>
              </div>

              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Calendar className="size-5 text-primary" />
                    <span className="text-sm">{project.date || '2023 - 2024'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Layers className="size-5 text-primary" />
                    <span className="text-sm">Architecture: Microservices</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                  <Cpu className="size-4" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || ['React', 'Node.js', 'PostgreSQL', 'TensorFlow']).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            <div className="flex flex-col gap-3 pt-6">
              {project.lienProd && (
                <a 
                  href={project.lienProd} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/20"
                >
                  <ExternalLink className="size-4" /> Live Demo
                </a>
              )}
              <div className="flex gap-3">
                {project.lienFrontend && (
                  <a 
                    href={project.lienFrontend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 glass-card hover:bg-white/5 border border-white/10 text-white h-12 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Github className="size-4" /> Frontend
                  </a>
                )}
                {project.lienBackend && (
                  <a 
                    href={project.lienBackend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 glass-card hover:bg-white/5 border border-white/10 text-white h-12 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Github className="size-4" /> Backend
                  </a>
                )}
              </div>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
  );
}
