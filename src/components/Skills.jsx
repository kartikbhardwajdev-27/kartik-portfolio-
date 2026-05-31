import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export function Skills() {
  return (
    <section id="skills" className="bg-dark section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">What I Work With</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">My Stack.</h2>
        </motion.div>

        {/* Categories */}
        {skills.map(({ category, items }, i) => (
          <motion.div
            key={category}
            {...fadeUp(i * 0.1)}
            className="mb-10"
          >
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-medium">
              {category}
            </p>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-200 border border-dark-300 hover:border-accent hover:text-accent text-gray-300 text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
