import { motion } from 'framer-motion';

export default function SkillCategory({ title, skills }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-xl border border-glass-border bg-[rgba(16,19,31,0.5)] p-6 text-center transition-all duration-300 hover:border-glass-highlight hover:shadow-secondary"
    >
      <h3 className="relative mb-6 inline-block font-space-grotesk text-2xl font-bold text-secondary">
        {title}
        <span className="absolute bottom-0 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-primary to-secondary"></span>
      </h3>

      <div className="flex flex-wrap justify-center gap-2">{skills}</div>
    </motion.div>
  );
}
