import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-dark-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <span
          className="font-display font-bold text-2xl cursor-pointer"
          onClick={() => scrollTo('#hero')}
        >
          <span className="text-white">KB</span>
          <span className="text-accent">.</span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="text-sm text-gray-400 hover:text-accent transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="border border-accent text-accent hover:bg-accent hover:text-dark px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-accent transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mx-4 mb-3 bg-dark-100 border border-dark-300 rounded-xl p-4 flex flex-col gap-3">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => { scrollTo(href); setMenuOpen(false); }}
              className="text-sm text-gray-400 hover:text-accent transition-colors text-left"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo('#contact'); setMenuOpen(false); }}
            className="border border-accent text-accent hover:bg-accent hover:text-dark px-4 py-2 rounded-lg text-sm font-medium transition-all text-center mt-1"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
