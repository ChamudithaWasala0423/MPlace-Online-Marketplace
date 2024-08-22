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
      colors: {
        tertiary: {
          500: "#E0E0E0", // Custom tertiary color
        },
        primary: {
          500: "#7e2ee7", // Custom primary color
        },
        // You can add more custom colors as needed
      },
    },
  },
  plugins: [],
};
export default config;
