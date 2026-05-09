import { motion } from 'framer-motion';
import type { MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import { SERVICES, type Service } from '../data/site';
import { SectionHeading } from './SectionHeading';

const ACCENTS: Record<Service['accent'], { ring: string; iconBg: string; iconText: string }> = {
  sun: { ring: 'ring-sun-300/40', iconBg: 'bg-sun-100', iconText: 'text-sun-600' },
  ink: { ring: 'ring-ink-300/40', iconBg: 'bg-ink-100', iconText: 'text-ink-700' },
  savanna: { ring: 'ring-savanna-300/40', iconBg: 'bg-savanna-100', iconText: 'text-savanna-600' },
  emerald: { ring: 'ring-emerald-accent/40', iconBg: 'bg-emerald-accent/15', iconText: 'text-emerald-accent' },
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const accent = ACCENTS[service.accent];

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    target.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      className={clsx(
        'card-glow group hover:-translate-y-1 hover:ring-2',
        accent.ring,
      )}
    >
      <div className="relative">
        <div
          className={clsx(
            'inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-transform group-hover:rotate-[-6deg] group-hover:scale-105',
            accent.iconBg,
            accent.iconText,
          )}
        >
          <Icon className="w-7 h-7" strokeWidth={1.6} />
        </div>

        <h3 className="heading-display text-2xl font-semibold text-ink-900">
          {service.title}
        </h3>
        <p className="mt-3 text-ink-600 leading-relaxed">{service.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {service.highlights.map((h) => (
            <li
              key={h}
              className="text-xs font-medium text-ink-700 bg-ink-50 border border-ink-100 rounded-full px-3 py-1"
            >
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink-900 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          Explore more
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-savanna-50 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-sun-200/40 blur-3xl"
      />
      <div className="container-tight relative">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Four capabilities, <span className="gradient-text">one team</span>.
            </>
          }
          description="Whether you need to up-skill a workforce, launch a product, throw a memorable event or ship software — we can deliver the whole arc, or slot into yours."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
