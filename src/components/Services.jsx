import { motion } from 'framer-motion';
import {
  HiCode,
  HiShoppingCart,
  HiDatabase,
  HiCube,
  HiLightningBolt,
} from 'react-icons/hi';
import { services } from '../data/services';

const iconMap = {
  code: HiCode,
  cart: HiShoppingCart,
  database: HiDatabase,
  saas: HiCube,
  ai: HiLightningBolt,
};

export function Services() {
  return (
    <section id="services" className="bg-dark-100 section-padding">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">What I Do</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Services.</h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? HiCode;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-200 border border-dark-300 hover:border-accent/50 rounded-2xl p-8 transition-all duration-300 cursor-default group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <Icon className="text-accent text-xl" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
