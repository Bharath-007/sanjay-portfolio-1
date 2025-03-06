import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 hidden md:block ${
          scrolled ? 'backdrop-blur-md bg-black/30' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Rocket className="w-6 h-6 text-blue-500" />
              <span className="text-white font-bold">Sanjay I S</span>
            </motion.div>
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-blue-600 text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div className="absolute right-0 top-0 bottom-0 w-64 bg-gray-900 p-6">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.05, x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white text-left hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}