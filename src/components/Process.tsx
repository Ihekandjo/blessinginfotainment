import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PROCESS_STEPS } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-ink-950 text-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-20"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-ink-500/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 -right-32 w-[24rem] h-[24rem] rounded-full bg-sun-400/10 blur-3xl"
      />

      <div className="container-tight relative">
        <SectionHeading
          light
          eyebrow="How we work"
          title={
            <>
              A simple rhythm,{' '}
              <span className="gradient-text">repeatable results</span>.
            </>
          }
          description="Our four-step rhythm keeps every engagement honest, transparent and outcome-driven — from first conversation to final handover."
        />

        <div ref={ref} className="relative mt-16 md:mt-20">
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px bg-white/10"
          />
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px md:-translate-x-px bg-gradient-to-b from-sun-300 via-sun-400 to-emerald-accent"
          />

          <ol className="space-y-12 md:space-y-20">
            {PROCESS_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={step.title} className="relative">
                  <span className="absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-1 z-10">
                    <span className="absolute inset-0 -m-2 rounded-full bg-sun-400/40 blur-md animate-pulse" />
                    <span className="relative block w-3 h-3 rounded-full bg-sun-400 ring-4 ring-ink-950" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -24 : 24, y: 16 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={
                      'pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ' +
                      (isLeft ? '' : '')
                    }
                  >
                    <div
                      className={
                        isLeft
                          ? 'md:text-right md:pr-12'
                          : 'md:col-start-2 md:pl-12'
                      }
                    >
                      <div className="text-sun-300 text-sm font-semibold tracking-[0.2em] uppercase">
                        Step {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="mt-2 heading-display text-3xl md:text-4xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-ink-100/75 max-w-md md:ml-auto leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
