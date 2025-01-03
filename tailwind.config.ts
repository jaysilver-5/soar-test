import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px', // Mobile
      md: '576px', // Small Tablet
      lg: '768px', // Tablet
      xl: '992px', // Small Desktop
      '2xl': '1200px', // Desktop
      '3xl': '1440px', // Large Desktop
    },
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#343C6A', // Define your primary color
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(to bottom right, #5B5A6F, #000)',
        'white-to-transparent':
          'linear-gradient(to bottom right, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
      },
    },
  },
  plugins: [],
} satisfies Config;
