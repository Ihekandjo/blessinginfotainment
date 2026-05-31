import { motion, useReducedMotion } from 'framer-motion';
import clsx from 'clsx';

type BrandLogoProps = {
  variant?: 'navbar' | 'footer';
  className?: string;
};

export function BrandLogo({ variant = 'navbar', className }: BrandLogoProps) {
  const reduceMotion = useReducedMotion();
  const isNav = variant === 'navbar';

  return (
    <motion.span
      className={clsx(
        'relative inline-flex select-none text-left',
        isNav
          ? 'flex-col leading-[1.05] sm:flex-row sm:items-baseline sm:gap-2.5 sm:leading-none'
          : 'flex-col gap-0.5 leading-[1.08]',
        className,
      )}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.02,
              transition: { type: 'spring', stiffness: 420, damping: 24 },
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <span
        className={clsx(
          'font-display font-bold tracking-tight text-white',
          isNav && 'text-[clamp(1.15rem,2.8vw,1.85rem)]',
          !isNav && 'text-[clamp(1.75rem,5vw,3rem)]',
        )}
      >
        Blessing
      </span>
      <span className="relative inline-block">
        {!reduceMotion && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -inset-x-1 -inset-y-1 rounded-lg bg-sun-400/15 blur-md"
            animate={{ opacity: [0.2, 0.65, 0.2], scale: [0.96, 1.04, 0.96] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
        <span
          className={clsx(
            'relative font-display font-bold tracking-tight bg-clip-text text-transparent',
            'bg-gradient-to-r from-sun-200 via-sun-400 to-sun-300 bg-[length:200%_100%]',
            !reduceMotion && 'animate-gradient-drift',
            isNav && 'text-[clamp(1rem,2.5vw,1.65rem)]',
            !isNav && 'text-[clamp(1.35rem,4.25vw,2.35rem)]',
          )}
        >
          Infotainment
        </span>
      </span>
    </motion.span>
  );
}
