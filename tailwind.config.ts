import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1D3531',
        'green-primary2': '#4A9E4D',
        'green-actived': '#5D8A83',
        'green-border': '#2A4B46',
        'green-btn': '#CCEC60',
        // 'green-title-card': '#719D96',
        'green-title-card': '#4A9E4D',
        'white-section': '#FFF',
      },
      colors2: {
        'green-border': '#2A4B46',
        'green-btn': '#CCEC60',
      },
      maxWidth: {
        grid:
        '77.5rem',
        'text-hero': '66rem',
        'area-icons': '54.625rem',
        'area-mochups': '59.8125rem',
        'area-cards': '82.5rem',
      },
      height: {
        'section-hero': '54.625rem',
        'area-cards': '35.1rem',
      },
      backgroundImage: {
        'hero': "url('/bg-hero.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
