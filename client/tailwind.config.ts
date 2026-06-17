import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: '#FBF6EF',
        espresso: '#2C1810',
        gold: '#C8922A',
        sage: '#5A7247',
        cream: '#F5EDE0',
        'gold-light': '#E5B85C',
        'gold-dark': '#A67420',
        // Legacy aliases — existing components use rose-* classes
        rose: '#C8922A',
        'rose-light': '#E5B85C',
        'rose-dark': '#A67420',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
