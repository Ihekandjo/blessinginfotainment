import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: Props) {
  return (
    <div
      className={
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      }
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className={
          'eyebrow ' + (light ? 'text-sun-300' : 'text-sun-500')
        }
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={
          'mt-4 heading-display text-4xl md:text-5xl lg:text-6xl font-semibold text-balance ' +
          (light ? 'text-white' : 'text-ink-900')
        }
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={
            'mt-5 text-lg leading-relaxed text-balance ' +
            (light ? 'text-ink-100/80' : 'text-ink-600')
          }
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
