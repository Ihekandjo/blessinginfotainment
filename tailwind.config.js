/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#EEF2FA',
          100: '#D6DEF0',
          200: '#A9B7DA',
          300: '#7C90C4',
          400: '#5269AE',
          500: '#314A92',
          600: '#1F3470',
          700: '#152552',
          800: '#0E1B3D',
          900: '#091128',
          950: '#05091A',
        },
        sun: {
          50: '#FFF8EB',
          100: '#FEEDC7',
          200: '#FDD988',
          300: '#FBBF49',
          400: '#F9A41F',
          500: '#E5860C',
          600: '#BE6307',
          700: '#974709',
          800: '#7B380E',
          900: '#682F10',
        },
        savanna: {
          50: '#FBF7F0',
          100: '#F4ECDC',
          200: '#E7D5B3',
          300: '#D6B780',
          400: '#C4974E',
          500: '#A87A35',
          600: '#876028',
        },
        emerald: {
          accent: '#22C58B',
        },
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        'radial-glow':
          'radial-gradient(60% 60% at 50% 0%, rgba(251,191,73,0.25), transparent 60%)',
      },
      backgroundSize: {
        'grid-faint': '40px 40px',
      },
      keyframes: {
        'gradient-drift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'shine': {
          '100%': { transform: 'translateX(200%)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'gradient-drift': 'gradient-drift 12s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'blob': 'blob 16s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'shine': 'shine 1.4s ease-in-out',
        'float-y': 'float-y 6s ease-in-out infinite',
      },
      boxShadow: {
        'glow-sun': '0 12px 40px -8px rgba(249,164,31,0.45)',
        'glow-ink': '0 12px 40px -8px rgba(31,52,112,0.45)',
        'soft': '0 10px 40px -12px rgba(15,23,42,0.18)',
      },
    },
  },
  plugins: [],
};
