/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-blue": {
          50: "#eef1ff",
          100: "#e0e6ff",
          200: "#c6d0ff",
          300: "#a4affd",
          400: "#7f86fa",
          500: "#6562f3",
          600: "#5444e7",
          700: "#4736cc",
          800: "#3b2ea5",
          900: "#342d82",
          950: "#1f1a4c",
        },
      },
    },
  },
  plugins: [],
};
