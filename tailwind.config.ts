import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      red: 'hsl(14, 86%, 42%)',
      green: 'hsl(159, 69%, 38%)',
      Rose_50: 'hsl(20, 50%, 98%)',
      Rose_100: 'hsl(13, 31%, 94%)',
      Rose_300: 'hsl(14, 25%, 72%)',
      Rose_400: 'hsl(7, 20%, 60%)',
      Rose_500: 'hsl(12, 20%, 44%)',
      Rose_900: 'hsl(14, 65%, 9%)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
