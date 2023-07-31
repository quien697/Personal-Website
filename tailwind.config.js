/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'white': '#FFFFFF',
      'black-1': '#201F2A',
      'black-2': '#23232E',
      'black-3': '#2C2C37',
      'black-4': '#36363D',
      'blue': '#0D6EFD',
      'yellow': '#FFC105',
    },
  },
  plugins: [],
}
