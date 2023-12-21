/** @type {import('tailwindcss').Config} */
export const content = ['./*.html'];
export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  extend: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      alata: ['Alata'],
    },
    letterSpacing: {
      widest: '0.3em',
    },
  },
};
export const plugins = [];
