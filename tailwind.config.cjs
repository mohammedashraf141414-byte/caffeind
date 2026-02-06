/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#f8f5f2',
          100: '#efe6dc',
          200: '#e0cdbb',
          300: '#caa98d',
          400: '#b58b6b',
          500: '#a26f53',
          600: '#835843',
          700: '#6a4636',
          800: '#56392d',
          900: '#43281f',
          950: '#2a1912',
        },
        crema: '#f3eee7',
        caramel: '#c28b62',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Righteous', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        righteous: ['"Righteous"', 'sans-serif'],
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(18px, -12px) scale(1.05)' },
          '66%': { transform: 'translate(-14px, 10px) scale(0.98)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        shimmer: 'shimmer 2.2s linear infinite',
        fadeUp: 'fadeUp 700ms ease-out both',
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(1200px 600px at 10% 10%, rgba(194,139,98,0.25), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(162,111,83,0.24), transparent 55%), radial-gradient(800px 500px at 50% 90%, rgba(67,40,31,0.18), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(162,111,83,0.22), 0 25px 60px rgba(42,25,18,0.35)',
      },
    },
  },
  plugins: [],
}
