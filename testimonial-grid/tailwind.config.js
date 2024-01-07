/** @type {import('tailwindcss').Config} */

export const content = ['./*.html'];

export const screen = {
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1440px',
};

export const theme = {
  extend: {
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif'],
    },
  },
};

export const plugins = [];
