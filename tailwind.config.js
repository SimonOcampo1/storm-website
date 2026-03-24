/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00FFA3',
        background: '#030408',
        'on-surface': '#F4F5F6',
        'on-primary': '#003920',
        'surface-variant': 'rgba(11, 13, 23, 0.7)',
        'surface-container': '#1e1f26',
        'surface-container-low': '#1a1b21',
        'surface-container-high': '#282a30',
        'surface-container-lowest': '#0c0e14',
        'surface-container-highest': 'rgba(51, 52, 59, 0.7)',
        'outline-variant': 'rgba(132,149,136,0.2)',
        'on-surface-variant': '#b9cbbd',
        secondary: '#bcc7dd',
        error: '#ffb4ab',
      },
      fontFamily: {
        headline: ['Nunito Sans', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Noto Serif', 'serif'],
      },
      borderRadius: { DEFAULT: '0px', lg: '0px', xl: '0px', full: '9999px' },
    },
  },
};
