import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gelbe Seiten brand colors (extracted from site)
        'gs-yellow': '#ffdc00',
        'gs-black': '#1E1E1E',
      },
      fontFamily: {
        'thesans': ['theSans', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
