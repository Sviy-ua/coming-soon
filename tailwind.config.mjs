/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        black: "#2A2A2A",

        primary: "#D8CF37",
        secondary: "#F38E32",
        accent: "#F5DEBC",
      },
    },
  },
  plugins: [],
};
