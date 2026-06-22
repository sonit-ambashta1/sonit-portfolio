import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-glass-border bg-gradient-to-br from-dark-bg2 to-dark-bg3 pb-6 pt-10">
      {/* Background radial gradient */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle,rgba(79,70,229,0.05)_0%,transparent_70%)] opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0, duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text font-space-grotesk text-4xl font-bold text-transparent"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 max-w-2xl leading-relaxed text-text-secondary"
        >
          I&apos;m always open to discussing new projects, research
          opportunities, and collaborations. Feel free to reach out!
        </motion.p>

        <div className="mb-8 flex justify-center gap-6">
          <motion.a
            key="github"
            aria-label="GitHub profile"
            className="bg-white/8 flex h-12 w-12 items-center justify-center rounded-full border border-glass-border text-primary transition-all hover:bg-primary/15 hover:text-text-primary hover:shadow-glow"
            href="https://github.com/csdoge22"
            initial={{ opacity: 0, scale: 0 }}
            rel="noopener noreferrer"
            target="_blank"
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0.5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.77 8.205 11.36.6.11.82-.26.82-.58 0-.29-.01-1.04-.016-2.04-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.334-1.76-1.334-1.76-1.09-.74.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.485.99.108-.77.418-1.3.762-1.6-2.665-.3-5.467-1.33-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.292-1.552 3.296-1.23 3.296-1.23.653 1.654.242 2.874.119 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.479 5.92.43.37.814 1.1.814 2.22 0 1.6-.015 2.89-.015 3.28 0 .32.216.694.825.576C20.565 22.268 24 17.79 24 12.5 24 5.87 18.627.5 12 .5z" />
            </svg>
          </motion.a>

          <motion.a
            key="linkedin"
            aria-label="LinkedIn profile"
            className="bg-white/8 flex h-12 w-12 items-center justify-center rounded-full border border-glass-border text-primary transition-all hover:bg-primary/15 hover:text-text-primary hover:shadow-glow"
            href="https://linkedin.com/in/sonitambashta"
            initial={{ opacity: 0, scale: 0 }}
            rel="noopener noreferrer"
            target="_blank"
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </motion.a>

          <motion.a
            key="email"
            aria-label="Send email"
            className="bg-white/8 flex h-12 w-12 items-center justify-center rounded-full border border-glass-border text-primary transition-all hover:bg-primary/15 hover:text-text-primary hover:shadow-glow"
            href="mailto:sunnyambashta@gmail.com"
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          className="text-sm text-text-secondary"
        >
          © Sonit Ambashta, {year} | Computer Science Portfolio
        </motion.p>
      </div>
    </footer>
  );
}
