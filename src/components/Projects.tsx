import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectModal from "./ProjectModal";
import { Project } from "../Types/Project-type";
import { projects } from "../data/project-data";
import { CONSTANTS } from "@/constants/Constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProject = showAll ? projects["fr"] : projects["fr"].slice(0, 4);


  return (
    <section className="py-24" id="projects">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="flex mb-16 justify-center items-center gap-10 w-full">
          <div className="flex flex-col gap-4 items-center">
            <h2
              className={`text-sm font-bold ${CONSTANTS.TEXT.PRIMARY} tracking-[0.2em] uppercase`}
            >
              Case Studies
            </h2>
            <h3
              className={`text-3xl md:text-4xl font-black ${CONSTANTS.TEXT.TITLE}`}
            >
              Engineered Solutions
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {visibleProject.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-5 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className={`aspect-4/3 rounded-2xl overflow-hidden glass-card relative ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></div>
                  <div
                    className={`absolute inset-0 ${CONSTANTS.BACKGROUNDS.PRIMARY_20} opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
                  >
                    <span
                      className={`${CONSTANTS.BACKGROUNDS.WHITE} ${CONSTANTS.TEXT.PRIMARY} px-6 py-2 rounded-lg font-bold`}
                    >
                      Details
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 px-2">
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${CONSTANTS.BACKGROUNDS.PRIMARY_10} ${CONSTANTS.TEXT.PRIMARY}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4
                    className={`text-xl font-bold ${CONSTANTS.TEXT.TITLE} group-hover:${CONSTANTS.TEXT.PRIMARY} transition-colors`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`${CONSTANTS.TEXT.DESCRIPTION} text-sm line-clamp-2 leading-relaxed`}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className={`flex md:block text-sm font-bold ${CONSTANTS.TEXT.PRIMARY} hover:underline transition-all cursor-pointer`}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
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
