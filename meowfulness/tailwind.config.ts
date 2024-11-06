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
        accent: "#A3B18A",
        primary: "#344E41",
        secondary: "#3A5A40",
        tertiary: "#588157",
        text: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
