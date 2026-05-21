import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#dbe9ff',
          200: '#b8d5ff',
          300: '#84b4ff',
          400: '#4f89ff',
          500: '#2e68f8',
          600: '#1f4fe2',
          700: '#1b42c1',
          800: '#163599',
          900: '#142f7b'
        }
      }
    }
  },
  plugins: [],
};

export default config;
