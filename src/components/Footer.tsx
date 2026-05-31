import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { NAV_ITEMS, SOCIALS } from '../data/site';
import { useScrollTo } from '../hooks/useScrollTo';

export function Footer() {
  const scrollTo = useScrollTo(80);

  return (
    <footer className="relative bg-ink-950 text-ink-100/70 pt-20 pb-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sun-400/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-sun-400/10 blur-3xl"
      />

      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-display text-4xl md:text-6xl font-semibold text-white text-balance">
            Ready to do{' '}
            <span className="gradient-text">remarkable work</span> together?
          </h2>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary mt-8"
          >
            Start a project
          </button>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 pt-12 border-t border-white/10">
          <div className="md:col-span-2">
            <div className="text-left">
              <BrandLogo variant="footer" />
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              Blessing Infotainment is a Namibian consultancy delivering
              training, marketing, events and software with heart.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="capitalize text-sm hover:text-sun-300 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-sun-300 hover:text-sun-300 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Blessing Infotainment. Crafted in
            Namibia.
          </p>
          <button
            onClick={() => scrollTo('home')}
            className="inline-flex items-center gap-2 hover:text-sun-300 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
