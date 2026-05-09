import { VALUES } from '../data/site';

export function Marquee() {
  const items = [...VALUES, ...VALUES];
  return (
    <section
      aria-label="Our values"
      className="relative py-10 md:py-14 bg-ink-900 text-white overflow-hidden border-y border-white/5"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-20"
      />
      <div className="relative mask-fade-x">
        <div className="flex w-max animate-marquee gap-12 will-change-transform">
          {items.map((v, i) => (
            <div
              key={`${v}-${i}`}
              className="flex items-center gap-12 text-3xl md:text-5xl heading-display font-semibold"
            >
              <span className="text-white/85 hover:text-sun-300 transition-colors">
                {v}
              </span>
              <span className="text-sun-400">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
