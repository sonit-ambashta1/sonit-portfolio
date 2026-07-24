import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

import profilePic from '../../assets/Sonit_Picture.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-4xl px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 animate-shine bg-gradient-to-r from-text-primary via-primary to-text-primary bg-[200%_auto] bg-clip-text font-space-grotesk text-5xl font-bold leading-tight tracking-tighter text-transparent md:text-7xl"
        >
          Sonit Ambashta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-text-secondary md:text-2xl"
        >
          Computer Science and Applied Mathematics student focused on backend software engineering, data-driven systems, and machine learning applications. Passionate about building reliable software and understanding how complex systems work behind the scenes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            type: 'spring',
            damping: 10,
          }}
          className="relative mx-auto mb-12 h-64 w-64 md:h-72 md:w-72"
        >
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-primary to-secondary opacity-10 blur-lg" />
          <div className="relative h-full w-full animate-float overflow-hidden rounded-full border-4 border-primary shadow-lg shadow-primary/10">
            <img
              alt="Sonit Ambashta"
              className="h-full w-full object-cover"
              height={300}
              onError={(e) => {
                // eslint-disable-next-line no-param-reassign
                e.currentTarget.onerror = null;
                // eslint-disable-next-line no-param-reassign
                e.currentTarget.src =
                  'https://via.placeholder.com/280x280/10131f/4F46E5?text=SA';
              }}
              src={profilePic}
              width={300}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-medium text-white transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            View My Work →
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            duration={500}
            offset={-80}
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-8 py-4 font-medium text-primary transition-all hover:bg-primary/10"
          >
            Learn More
          </ScrollLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
