import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Years Exp.' },
  { value: '10+', label: 'Projects Built' },
  { value: '3+', label: 'Happy Clients' },
];

export function About() {
  return (
    <section id="about" className="bg-dark-100 section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">About Me</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">I'm Kartik.</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            I'm an 18-year-old self-taught developer from Chandigarh, India. I started coding 2 years ago and never stopped. I build full-stack web apps, AI-powered tools, SaaS products, and software that solves real problems.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I've worked with international clients including a business from the Netherlands. I don't follow a playbook — I vibe-code my way through every problem until it works, looks great, and ships fast.
          </p>

          {/* Stat cards */}
          <div className="flex gap-4 flex-wrap">
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-dark-200 border border-dark-300 rounded-xl px-6 py-4 text-center"
              >
                <p className="text-accent font-display font-bold text-3xl">{value}</p>
                <p className="text-gray-500 text-xs mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-dark-200 border border-dark-300 rounded-2xl p-8">
            <div className="w-full aspect-square max-w-xs mx-auto bg-dark-300 rounded-xl flex items-center justify-center mb-6">
              <span className="text-accent font-display font-bold text-6xl">KB</span>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap mt-4">
            <span className="bg-dark-300 text-gray-400 text-sm px-4 py-2 rounded-full inline-flex items-center gap-2">
              📍 Chandigarh, India
            </span>
            <span className="bg-dark-300 text-gray-400 text-sm px-4 py-2 rounded-full inline-flex items-center gap-2">
              ⚡ Open to remote work
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
