/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        homyz: {
          dark: '#131118',
          darker: '#0D0C10',
          navy: '#1F3E72',
          blue: '#2949C6',
          blueLight: '#3858D6',
          blueSoft: '#EEF2FF',
          orange: '#FF8A00',
          textGray: '#8C8B91',
          whatsapp: '#25D366',
          whatsappDark: '#1DA851',
        },
      },
      boxShadow: {
        'card-active': '0 24px 48px -12px rgba(136, 160, 255, 0.28)',
        'card-hover': '0 20px 40px -15px rgba(31, 62, 114, 0.14)',
        'arch-dark': '0 32px 60px -15px rgba(0, 0, 0, 0.45)',
        'arch-light': '0 28px 55px -12px rgba(31, 62, 114, 0.16)',
        'blue-btn': '0 10px 24px -6px rgba(41, 73, 198, 0.45)',
        'whatsapp-btn': '0 14px 30px -6px rgba(37, 211, 102, 0.4)',
      },
    },
  },
  plugins: [],
};
