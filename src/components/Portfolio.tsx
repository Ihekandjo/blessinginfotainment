import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { PORTFOLIO, type PortfolioItem } from '../data/site';
import { SectionHeading } from './SectionHeading';

function PortfolioCard({
  item,
  index,
  onSelect,
}: {
  item: PortfolioItem;
  index: number;
  onSelect: (item: PortfolioItem) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.button
      ref={ref}
      onClick={() => onSelect(item)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
      className="group relative text-left rounded-2xl overflow-hidden bg-ink-900 ring-1 ring-white/10 hover:ring-sun-400/70 hover:shadow-glow-sun transition-all duration-300"
    >
      <div className="relative h-72 md:h-80 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          style={{ y: yImage }}
          className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 contrast-105 saturate-[1.15]"
        />
        {/* warm brand tint */}
        <div className="absolute inset-0 bg-sun-400/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-900/10" />

        <span className="absolute top-4 left-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-white">
          {item.tag}
        </span>

        <span className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-ink-900 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="heading-display text-xl md:text-2xl font-semibold leading-tight">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-white/75 line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.button>
  );
}

type Props = {
  onSelect: (item: PortfolioItem) => void;
};

export function Portfolio({ onSelect }: Props) {
  return (
    <section
      id="work"
      className="relative py-24 md:py-32 bg-ink-950 text-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[28rem] h-[28rem] rounded-full bg-sun-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[20rem] h-[20rem] rounded-full bg-ink-500/30 blur-3xl"
      />

      <div className="container-tight relative">
        <SectionHeading
          light
          eyebrow="Selected work"
          title={
            <>
              Real partners. <span className="gradient-text">Real outcomes.</span>
            </>
          }
          description="A glimpse of recent engagements across training rooms, marketing rollouts and community capacity-building."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((item, i) => (
            <PortfolioCard
              key={item.title}
              item={item}
              index={i}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
