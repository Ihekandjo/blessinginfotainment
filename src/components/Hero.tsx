import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

const headline = ['Train.', 'Market.', 'Build.', 'Celebrate.'];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTo = useScrollTo(80);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yVideo = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yShape1 = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  const yShape2 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => undefined);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ink-950 text-white"
    >
      <motion.div
        style={{ y: yVideo }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/logo.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/main.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-900/55 to-ink-950/90" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-[0.18]" />
        <div className="absolute inset-0 bg-radial-glow" />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: yShape1 }}
        className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-sun-400/30 blur-3xl animate-blob"
      />
      <motion.div
        aria-hidden
        style={{ y: yShape2 }}
        className="absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full bg-ink-500/40 blur-3xl animate-blob [animation-delay:-6s]"
      />

      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative container-tight pt-28 pb-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wide"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-accent" />
          </span>
          Namibian-rooted, globally-minded consultancy
        </motion.div>

        <h1 className="mt-8 heading-display font-semibold text-balance leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem]">
          {headline.map((word, i) => (
            <span
              key={word}
              className="inline-block overflow-hidden align-bottom mr-3 last:mr-0"
            >
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  'inline-block ' +
                  (i === headline.length - 1 ? 'gradient-text' : 'text-white')
                }
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-ink-100/85 max-w-2xl mx-auto text-balance"
        >
          Blessing Infotainment partners with bold organisations across Namibia
          to grow people, brands, events and software — beautifully, and on time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={() => scrollTo('contact')} className="btn-primary">
            Start a project
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => scrollTo('work')} className="btn-ghost">
            See our work
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        aria-label="Scroll to next section"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
