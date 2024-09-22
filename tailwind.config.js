/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        load_box: 'var(--load_box-z-index)',
        message: 'var(--message-z-index)',
        modal: 'var(--modal-z-index)',
        tooltip: 'var(--tooltip-z-index)',
        header: 'var(--header-z-index)',
      },
      colors: {
        primary: 'var(--primary-color)',
        dark: 'var(--dark-color)',
        grey: 'var(--grey-color)',
        dark_grey: 'var(--dark-grey-color)',
        light_grey: 'var(--light-grey-color)',
      },
      height: {
        header: 'var(--header-height)',
        home_top: 'calc(100vh - var(--header-height))',
        notification: 'calc(100vh - 138px)',
      },
      minHeight: {
        content: 'calc(100vh - var(--header-height))',
      },
      boxShadow: {
        tooltip: '0 0 10px 10px rgba(0, 0, 0, 0.06)',
        sidebar: '0 1px 6px rgba(0, 0, 0, 0.2)',
        footer: '0 1px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
