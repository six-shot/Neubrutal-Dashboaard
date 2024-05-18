/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash_bold: ["var(--font-clash_bold)"],
        clash_regular: ["var(--font-clash_regular)"],
        clash_medium: ["var(--font-clash_medium)"],
        clash_semibold: ["var(--font-clash_semibold)"],
        clash_extralight: ["var(--font-clash_extralight)"],
        lato: ["var(font--lato)"],
        arcade: ["var(--font-arcade)"],
      },
    },
  },
  plugins: [],
};
