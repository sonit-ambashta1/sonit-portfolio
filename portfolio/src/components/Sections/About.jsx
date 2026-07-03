import { motion } from 'framer-motion';

import Section from '../UI/Section';

export default function About() {
  const highlights = [
    'Backend-focused software engineer building scalable, data-driven systems',
    'Experience designing APIs, data workflows, and systems with strong correctness guarantees',
    'Applied knowledge of machine learning and cloud deployment in real-world applications',
    'Strong at debugging complex systems and translating requirements into reliable, production-ready solutions',
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A brief overview of my background and expertise"
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-glass-border bg-glass-bg p-8 backdrop-blur-md">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-lg leading-relaxed text-text-secondary"
          >
            I’m a Computer Science and Applied Math student who builds backend systems and data-driven applications. My work focuses on designing scalable services, modeling data workflows, and ensuring system correctness, with additional experience in applied machine learning and cloud deployment.
          </motion.p>

          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-text-primary">{highlight}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              View My Work →
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-3 font-medium text-primary transition-all hover:bg-primary/10"
            >
              My Experience
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
