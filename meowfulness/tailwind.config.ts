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
        accent: "#FFEBED",
        primary: "#2B3A64",
        secondary: "#CCD5AE",
        tertiary: "#93B5F0",
        text: "#000000",
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
