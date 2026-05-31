import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { NAV_ITEMS, SOCIALS } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollTo } from '../hooks/useScrollTo';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS);
  const scrollTo = useScrollTo(80);
  const { t } = useTranslation();

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.92]);
  const blur = useTransform(scrollY, [0, 120], [0, 16]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 0.08]);

  const go = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <motion.nav
      style={{
        backgroundColor: useTransform(
          bgOpacity,
          (o) => `rgba(5,9,26,${o})`,
        ),
        backdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(150%)`),
        borderBottomColor: useTransform(
          borderOpacity,
          (o) => `rgba(255,255,255,${o})`,
        ),
      }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="container-tight">
        <div className="flex items-center justify-between min-h-[5rem] py-3 gap-4">
          <button
            onClick={() => go('home')}
            className="group relative shrink-0 rounded-xl px-1 py-1 -mx-1 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-400/80"
            aria-label="Blessing Infotainment — go to top"
          >
            <span className="pointer-events-none absolute -inset-3 rounded-2xl bg-sun-400/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <BrandLogo variant="navbar" className="relative drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]" />
          </button>

          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item;
                return (
                  <li key={item}>
                    <button
                      onClick={() => go(item)}
                      className={clsx(
                        'relative px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors',
                        isActive
                          ? 'text-white'
                          : 'text-white/70 hover:text-white',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-sun-400/20 border border-sun-300/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative">{t(`nav.${item}`)}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              {SOCIALS.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 hover:text-sun-300 transition-colors hover:-translate-y-0.5 transition-transform"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <LanguageSwitcher />
            <button
              onClick={() => go('contact')}
              className="rounded-full bg-sun-400 hover:bg-sun-300 text-ink-900 font-semibold text-sm px-5 py-2.5 transition-all hover:-translate-y-0.5 shadow-glow-sun"
            >
              {t('nav.letsTalk')}
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-white/10 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item}
                    onClick={() => go(item)}
                    className={clsx(
                      'block w-full text-left px-3 py-3 rounded-lg capitalize transition-colors',
                      active === item
                        ? 'bg-white/10 text-white'
                        : 'text-white/80 hover:bg-white/5 hover:text-white',
                    )}
                  >
                    {t(`nav.${item}`)}
                  </button>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10">
                  <LanguageSwitcher />
                </div>
                <div className="flex items-center gap-4 pt-3">
                  {SOCIALS.map(({ Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white/70 hover:text-sun-300 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
