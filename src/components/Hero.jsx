import { motion } from 'framer-motion';

const techStack = ['React', 'Next.js', 'Supabase', 'Node.js', 'Tailwind', 'OpenAI'];

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark"
    >
      {/* Background blurred circles */}
      <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl top-20 left-10 pointer-events-none" />
      <div className="absolute w-80 h-80 bg-accent/5 rounded-full blur-3xl bottom-20 right-10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 text-accent text-xs px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for freelance work
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-bold text-5xl md:text-7xl leading-tight mb-6"
        >
          <span className="text-white">I Build Things</span>
          <br />
          <span className="text-gradient">That Actually Work.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          18-year-old full-stack &amp; AI developer from Chandigarh. I turn ideas into fast, modern web apps — no fluff, just results.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.4)} className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo('#projects')}
            className="bg-accent hover:bg-accent-dark text-dark font-semibold px-8 py-3 rounded-xl transition-all hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="border border-dark-300 text-white hover:border-accent hover:text-accent px-8 py-3 rounded-xl transition-all"
          >
            Let's Talk
          </button>
        </motion.div>

        {/* Tech stack */}
        <motion.div {...fadeUp(0.6)} className="mt-16">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Built with</p>
          <div className="flex gap-3 justify-center flex-wrap">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-dark-200 border border-dark-300 text-gray-400 text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
