/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './public/index.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(59 130 246)',
        secondary: 'rgb(209 213 219)',
        success: 'rgb(34 197 94)',
        warning: 'rgb(234 179 8)',
        danger: 'rgb(239 68 68)',
        disabled: 'rgb(107 114 128)'
      }
    }
  },
  safelist: [
    'p-1',
    'p-2',
    'p-3',
    'bg-primary',
    'border-primary',
    'text-primary',
    'bg-secondary',
    'border-secondary',
    'text-secondary',
    'bg-success',
    'border-success',
    'text-success',
    'bg-warning',
    'border-warning',
    'text-warning',
    'bg-danger',
    'border-danger',
    'text-danger',
    'bg-disabled',
    'border-disabled',
    'text-disabled',
    'hover:brightness-110',
    'hover:text-white',
    'hover:bg-primary',
    'hover:bg-secondary',
    'hover:bg-success',
    'hover:bg-warning',
    'hover:bg-danger'
  ]
}
