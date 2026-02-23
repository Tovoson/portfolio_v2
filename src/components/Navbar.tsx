import { Terminal, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Stack', href: '#stack' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg">
            <Terminal className="text-white size-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">DevExpert AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} className="text-sm font-medium hover:text-primary transition-colors" href={link.href}>
              {link.name}
            </a>
          ))}
          <button onClick={() => window.open('/cv.pdf', '_blank')} className="border border-primary/40 hover:bg-primary/10 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer">
            <Download className="size-4" />
            Download CV
          </button>
          <a href='#contact' className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer">
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-dark/95 backdrop-blur-xl border-b border-primary/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  className="text-lg font-medium hover:text-primary transition-colors" 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <button className="w-full border border-primary/40 hover:bg-primary/10 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <Download className="size-4" />
                  Download CV
                </button>
                <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer">
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
