import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="bg-dark section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">My Work</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Projects.</h2>
          <p className="text-gray-500 text-lg mt-4">A few things I've built. More on the way.</p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-dark-200 border border-dark-300 hover:border-accent/50 rounded-2xl overflow-hidden transition-all duration-300 group"
            >
              {/* Image area */}
              <div className="w-full h-48 bg-dark-300 flex items-center justify-center relative overflow-hidden">
                <span className="absolute text-8xl font-display font-bold text-dark-400 select-none">
                  0{i + 1}
                </span>
                <span className="relative bg-accent/10 border border-accent/20 text-accent text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-8">
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-dark-300 text-gray-400 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm flex items-center gap-1 hover:underline"
                    >
                      <HiExternalLink /> Live Site
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm flex items-center gap-1 hover:text-accent transition-colors"
                    >
                      <HiCode /> GitHub
                    </a>
                  ) : null}
                  {!project.live && !project.github && (
                    <span className="text-gray-600 text-sm italic">Coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
