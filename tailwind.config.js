/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "node_modules/flowbite-react/**/*.js",
    // "node_modules/flowbite/**/*.js",
    "node_modules/preline/dist/*.js",
    "./pages/**/*.{ts,tsx,js}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        dark: "#0F172A",
        primary: "#008640",
        background: "#F6F9FF",
        logout: "#19E8E2",
        subtitle: "#394155",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    // require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    require("preline/plugin"),
  ],
};
