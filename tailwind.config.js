/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#07070F',
        surface: '#0D0D1A',
        'surface-2': '#12121E',
        border: '#1A1A2E',
        primary: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#6D28D9',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2',
        },
        accent: {
          DEFAULT: '#FBBF24',
          light: '#FDE68A',
          dark: '#F59E0B',
        },
        text: {
          DEFAULT: '#EDEDF5',
          muted: '#9896B4',
          subtle: '#52506E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        display: '-0.01em',   /* Playfair Display — subtle tighten at large sizes */
        heading: '-0.015em',  /* Montserrat heading */
        label: '0.14em',      /* Mono labels */
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #7C3AED, #06B6D4)',
        'gradient-warm': 'linear-gradient(135deg, #7C3AED, #FBBF24)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'marquee': 'marquee 42s linear infinite',
        'marquee-reverse': 'marqueeReverse 38s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
      },
      boxShadow: {
        'glow-primary': '0 0 32px rgba(124, 58, 237, 0.28)',
        'glow-primary-sm': '0 0 16px rgba(124, 58, 237, 0.22)',
        'glow-secondary': '0 0 32px rgba(6, 182, 212, 0.22)',
        'glow-accent': '0 0 32px rgba(251, 191, 36, 0.22)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.03) inset',
        'card-hover': '0 16px 48px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.05) inset',
        'modal': '0 40px 100px rgba(0,0,0,0.75)',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
