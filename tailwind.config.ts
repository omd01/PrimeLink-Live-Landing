import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#0D9488',   /* Darker Teal for Light Mode Contrast */
          amber: '#D97706',  /* Darker Amber for Light Mode */
          dark: '#ffffff',   /* Background -> White */
          card: '#F9FAFB',   /* Surface -> Neutral 50 */
          green: '#052E16',   /* Deep Brand Green (Keep for accents) */
          cyan: '#06B6D4'    /* Data Cyan */
        }
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
