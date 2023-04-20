/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
        disabled: 'rgb(var(--color-disabled) / <alpha-value>)'
      }
    }
  },

  /*  Safelist for button component */
  safelist: [
    /* Spacing */
    'p-1',
    'p-2',
    'p-3',

    /* Primary */
    'bg-primary',
    'hover:bg-primary',
    'border-primary',
    'text-primary',

    /* Secondary */
    'bg-secondary',
    'hover:bg-secondary',
    'border-secondary',
    'text-secondary',

    /* Success */
    'bg-success',
    'hover:bg-success',
    'border-success',
    'text-success',

    /* Warning */
    'bg-warning',
    'hover:bg-warning',
    'border-warning',
    'text-warning',

    /* Danger */
    'bg-danger',
    'hover:bg-danger',
    'border-danger',
    'text-danger',

    /* Disabled */
    'bg-disabled',
    'border-disabled',
    'text-disabled',

    /* Hover effect for outline button */
    'hover:text-white'
  ]
}
