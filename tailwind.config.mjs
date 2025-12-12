/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        ovo: ["var(--font-ovo)"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(200px,1fr))",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
