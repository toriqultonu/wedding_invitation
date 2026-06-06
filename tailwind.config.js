/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        gold: '#D4AF37',
        'gold-soft': '#E4CE8F',
        rose: '#C18A7E',
        'rose-dusty': '#D9B3AC',
        sage: '#9CAF88',
        'sage-deep': '#7C9070',
        brown: '#6B5648',
        'brown-soft': '#8A7460',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Montserrat"', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 60s linear infinite',
      },
    },
  },
  plugins: [],
}
