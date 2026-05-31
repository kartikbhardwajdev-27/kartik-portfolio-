import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPaperAirplane, HiCheckCircle, HiMail } from 'react-icons/hi';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'Available on request',
    href: null,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/kartikbhardwajdev-27',
    href: 'https://github.com/kartikbhardwajdev-27',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: '@kartikbhardwaj.in',
    href: 'https://www.instagram.com/kartikbhardwaj.in/',
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  }

  const inputClass =
    'w-full bg-dark-300 border border-dark-300 focus:border-accent focus:outline-none text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm transition-colors';

  return (
    <section id="contact" className="bg-dark-100 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Header */}
        <div className="mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Let's Build Something.</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to work together? Just drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Two column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">

          {/* LEFT — Contact form */}
          <div className="bg-dark-200 border border-dark-300 rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 gap-4 text-center">
                <HiCheckCircle className="text-green-400 text-5xl" />
                <p className="text-white font-semibold text-xl">Message sent!</p>
                <p className="text-gray-400">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="text-gray-400 text-sm mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="mb-6">
                  <label className="text-gray-400 text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="mb-6">
                  <label className="text-gray-400 text-sm mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-accent hover:bg-accent-dark text-dark font-semibold py-3 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <HiPaperAirplane className="rotate-90" />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT — Contact info */}
          <div className="bg-dark-200 border border-dark-300 rounded-2xl p-8">
            <p className="text-white font-semibold text-lg mb-8">Other ways to reach me</p>

            {socialLinks.map(({ icon: Icon, label, value, href }) => {
              const Row = (
                <div className="flex items-center gap-4 mb-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-dark-300 border border-dark-400 group-hover:border-accent rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon className="text-accent text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-accent transition-colors mt-1">
                      {value}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block">
                  {Row}
                </a>
              ) : (
                <div key={label}>{Row}</div>
              );
            })}

            <p className="text-gray-600 text-xs mt-8 border-t border-dark-300 pt-6">
              Based in Chandigarh, India 🇮🇳 · Available for remote work worldwide
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
