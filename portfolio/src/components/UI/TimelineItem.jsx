import { motion } from 'framer-motion';

export default function TimelineItem({
  date,
  title,
  subtitle,
  description,
  achievements = [],
  isEven = false,
}) {
  return (
    <div
      className={`relative py-8 ${isEven ? 'md:pl-8 md:pr-0' : 'md:pl-0 md:pr-8'}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 top-8 z-10 h-4 w-4 transform rounded-full border-4 border-primary bg-dark-bg md:left-1/2 md:-translate-x-1/2"></div>

      <motion.div
        whileHover={{ y: -5 }}
        className="ml-0 overflow-hidden rounded-xl border border-glass-border bg-[rgba(16,19,31,0.5)] p-6 transition-all duration-300 hover:border-glass-highlight hover:shadow-secondary md:ml-8"
      >
        <div className="mb-2 break-words font-semibold text-primary">
          {date}
        </div>
        <h3 className="mb-2 break-words font-space-grotesk text-2xl font-bold text-secondary">
          {title}
        </h3>
        <div className="mb-4 break-words font-medium text-text-tertiary">
          {subtitle}
        </div>
        <p className="mb-4 break-words leading-relaxed text-text-secondary">
          {description}
        </p>

        {achievements.length > 0 && (
          <div className="space-y-2 border-t border-glass-border pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Key Achievements
            </p>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-sm text-text-secondary"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}
