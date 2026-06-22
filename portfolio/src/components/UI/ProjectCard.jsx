import { motion } from 'framer-motion';

import TechTag from './TechTag';

export default function ProjectCard({
  title,
  description,
  problem,
  solution,
  results,
  technologies,
  image,
  link,
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-glass-border bg-[rgba(16,19,31,0.5)] transition-all duration-300 hover:border-primary/40 hover:shadow-secondary"
    >
      {/* Project image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <img
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={image}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="absolute left-0 top-0 h-1 w-full scale-x-0 transform bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />

        <h3 className="mb-3 break-words font-space-grotesk text-2xl font-bold text-primary transition-colors group-hover:text-text-primary">
          {title}
        </h3>

        <p className="mb-4 break-words text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        {problem && (
          <div className="mb-4 border-l-2 border-primary/30 bg-primary/5 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Problem
            </p>
            <p className="mt-1 text-sm text-text-secondary">{problem}</p>
          </div>
        )}

        {solution && (
          <div className="mb-4 border-l-2 border-primary/30 bg-primary/5 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Solution
            </p>
            <p className="mt-1 text-sm text-text-secondary">{solution}</p>
          </div>
        )}

        {results && (
          <div className="mb-6 border-l-2 border-primary/30 bg-primary/5 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Results
            </p>
            <p className="mt-1 text-sm text-text-secondary">{results}</p>
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </div>

        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-auto inline-flex items-center gap-2 font-medium text-primary"
          whileHover={{ x: 5 }}
        >
          View Project →
          <span className="transition-transform group-hover/link:translate-x-1">
            ↗
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}
