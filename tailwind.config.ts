import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        lg: '89px'
      },
      screens: {
        xxl: '1536px',
        xs: '450px'
      },
      fontSize: {
        title: '86px',
        subtitle: '24px'
      },
      colors: {
        blue: {
          50: '#6486FF'
        },
        pink: {
          light: '#FF46CB'
        },
        purple: {
          50: '#919CFF',
          200: '#6474FF',
          300: '#4658FF'
        },
        green: {
          light: '#88FF12'
        },
        orange: {
          light: '#E46E00'
        }
      },
      fontFamily: {
        Oi: 'Oi',
        Archivo: 'Archivo'
      }
    },
  },
  plugins: [],
};
export default config;
