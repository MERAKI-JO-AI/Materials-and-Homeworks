/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (keeping for backward compatibility)
        'meraki-navy': '#0F1A2F',
        'meraki-white': '#FFFFFF',
        'meraki-light-grey': '#D0D5DD',
        'meraki-soft-grey': '#B4B4B4',
        // New high-contrast colors
        'navy': '#0F1A2F',
        'navyDark': '#050B18',
        'accent': '#3B82F6',
        'card': '#F9FAFB',
        'textMain': '#111827',
        'textSub': '#9CA3AF',
      },
    },
  },
  plugins: [],
}

