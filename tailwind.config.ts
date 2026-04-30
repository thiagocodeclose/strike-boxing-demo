import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sk-red':     'var(--red)',
        'sk-red-d':   'var(--red-dark)',
        'sk-bg':      'var(--bg)',
        'sk-surface': 'var(--surface)',
        'sk-text':    'var(--text)',
        'sk-muted':   'var(--muted)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
