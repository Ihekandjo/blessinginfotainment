import { useTranslation } from 'react-i18next';

export function Marquee() {
  const { t } = useTranslation();
  const values = t('values', { returnObjects: true }) as string[];
  const items = [...values, ...values];
  return (
    <section
      aria-label="Our values"
      className="relative py-10 md:py-14 bg-ink-900 text-white overflow-hidden border-y border-white/5"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-20"
      />
      <div className="relative mask-fade-x group/track">
        <div className="flex w-max animate-marquee gap-12 will-change-transform group-hover/track:[animation-play-state:paused]">
          {items.map((v, i) => (
            <div
              key={`${v}-${i}`}
              className="flex items-center gap-12 text-3xl md:text-5xl heading-display font-semibold"
            >
              <span className="text-white/85 hover:text-sun-300 transition-colors duration-300 cursor-default">
                {v}
              </span>
              <span className="text-sun-400 select-none">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
