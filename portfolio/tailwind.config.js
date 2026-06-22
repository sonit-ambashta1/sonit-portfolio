/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
        },
        secondary: '#6B7280',
        dark: {
          bg: '#0f1117',
          bg2: '#10131f',
          bg3: '#1a1e2e',
        },
        glass: {
          bg: 'rgba(15, 17, 23, 0.4)',
          border: 'rgba(79, 70, 229, 0.15)',
          highlight: 'rgba(75, 85, 99, 0.1)',
        },
        text: {
          primary: '#ffffff',
          secondary: '#d1d5db',
          tertiary: '#9ca3af',
        },
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        xl: '24px',
        lg: '16px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shine: {
          to: { 'background-position': '200% center' },
        },
      },
      boxShadow: {
        primary: '0 4px 16px rgba(79, 70, 229, 0.15)',
        secondary: '0 2px 12px rgba(75, 85, 99, 0.1)',
        glow: '0 0 12px rgba(79, 70, 229, 0.2)',
      },
    },
  },
  plugins: [],
};
