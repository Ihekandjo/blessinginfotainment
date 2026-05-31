import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { STATS } from '../data/site';
import { useCountUp } from '../hooks/useCountUp';
import { SectionHeading } from './SectionHeading';

function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const counted = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative rounded-2xl border border-ink-100/80 bg-white shadow-soft p-6 md:p-7 overflow-hidden group hover:border-sun-200 transition-colors duration-300"
    >
      <span className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-sun-300/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="heading-display text-5xl md:text-6xl font-semibold text-ink-900 tabular-nums">
          {counted}
          <span className="text-sun-400">{suffix}</span>
        </div>
        <div className="mt-2 text-ink-600 text-sm font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

const STAT_KEYS = ['engagements', 'years', 'uplift', 'capabilities'] as const;

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const yArt = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const tags = t('about.tags', { returnObjects: true }) as string[];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-sun-200/40 blur-3xl"
      />

      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow={t('about.eyebrow')}
              title={
                <>
                  {t('about.title')} <span className="text-sun-500">{t('about.titleAccent')}</span>
                  {t('about.titleEnd')}
                </>
              }
              description={t('about.description')}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-white/90 px-4 py-2 text-xs font-medium"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sun-300" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div style={{ y: yArt }} className="relative">
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {STATS.map((s, i) => (
                  <StatCard
                    key={STAT_KEYS[i]}
                    value={s.value}
                    suffix={s.suffix}
                    label={t(`about.stats.${STAT_KEYS[i]}`)}
                    index={i}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 rounded-2xl bg-ink-900 text-white p-6 md:p-8 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-30" />
                <span
                  aria-hidden
                  className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-sun-400/40 blur-3xl"
                />
                <p className="relative text-lg md:text-xl heading-display leading-snug text-balance">
                  &ldquo;{t('about.quote')}&rdquo;
                </p>
                <p className="relative mt-4 text-sm text-white/60">
                  {t('about.quoteAttrib')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
