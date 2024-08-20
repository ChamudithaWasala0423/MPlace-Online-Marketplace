import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors:{
        "secondary-50": '#f8feeb',
        "secondary-100": '#E8FBC0',
        "black": '#000',
        "terirary-100":'#F5F5F5',
        "terirary-200":'#F1F1F1',
        "terirary-400":'#E6E6E6',
        
        "limegreen": '#11b62f',
        "purple-600" :'#7E2EE7'
      },
      borderRadius: {
        'corner': '4px',
      },
    },
  },
  plugins: [],
};
export default config;
