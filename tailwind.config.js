import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    colors: {
      'dark-cyan': 'hsl(185, 75%, 39%)',
      'dark-desaturated-blue': 'hsl(229, 23%, 23%)',
      'dark-grayish-blue': 'hsl(227, 10%, 46%)',
      'dark-gray': 'hsl(0, 0%, 59%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'kumbh-sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      'pattern-card': 'url("./images/bg-pattern-card.svg")',
      'pattern-top': 'url("./images/bg-pattern-top.svg")',
      'pattern-bottom': 'url("./images/bg-pattern-bottom.svg")',
    },
  },
};
