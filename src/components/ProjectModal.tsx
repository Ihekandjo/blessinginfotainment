import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { PortfolioItem } from '../data/site';

type Props = {
  project: PortfolioItem | null;
  onClose: () => void;
};

const detailVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, delay: 0.25 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ProjectModal({ project, onClose }: Props) {
  const { t } = useTranslation();
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] bg-ink-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 36, scale: 0.94, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 24, scale: 0.96, filter: 'blur(2px)' }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
          >
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-ink-900 shadow-soft transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="relative h-72 md:h-96 overflow-hidden rounded-t-3xl">
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1">
                  {project.tag}
                </span>
                <h3 className="mt-3 heading-display text-3xl md:text-4xl font-semibold leading-tight">
                  {project.title}
                </h3>
              </motion.div>
            </div>

            <div className="p-6 md:p-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="text-ink-700 text-lg leading-relaxed"
              >
                {project.description}
              </motion.p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.details.map((d, i) => (
                  <motion.div
                    key={d.label}
                    custom={i}
                    variants={detailVariants}
                    initial="hidden"
                    animate="visible"
                    className="rounded-xl border border-ink-100 bg-savanna-50/60 p-4"
                  >
                    <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sun-600">
                      {t(`portfolio.detailLabels.${d.label}`, d.label)}
                    </div>
                    <div className="mt-1 text-ink-900 font-semibold">
                      {d.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
