import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { clsx } from 'clsx';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed left-0 top-0 z-50 w-full border-b border-glass-border transition-all duration-300',
        scrolled
          ? 'h-16 bg-dark-bg2/95 shadow-lg shadow-primary/10 backdrop-blur-md'
          : 'bg-dark-bg/92 h-18 shadow-lg shadow-primary/10 backdrop-blur-md'
      )}
    >
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <motion.div
            className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-space-grotesk text-2xl font-bold text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sonit Ambashta
          </motion.div>

          <ul className="hidden items-center space-x-2 md:flex">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + navItems.indexOf(item) * 0.1 }}
              >
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={clsx(
                    'relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all',
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary shadow-md shadow-primary/15'
                      : 'text-text-primary hover:text-primary'
                  )}
                >
                  {item.label}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
