/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        message: 'var(--message-z-index)',
        modal: 'var(--modal-z-index)',
        header: 'var(--header-z-index)',
      },
      colors: {
        primary: 'var(--primary-color)',
        blackCLR: 'var(--black-color)',
        grayCLR: 'var(--gray-color)',
      },
      height: {
        header: 'var(--header-height)',
        home_top: 'calc(100vh - var(--header-height))',
        footer: 'var(--footer-height)',
      },
      minHeight: {
        min_content: 'calc(100vh - var(--header-height))',
      },
      boxShadow: {
        sbar_shadow: '0 1px 6px rgba(0, 0, 0, 0.2)',
        footer_shadow: '0 1px 8px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
