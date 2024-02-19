import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5f5 5px, #f5f5f5 100px);',
      },
    },
  },
  plugins: [],
};
export default config;
