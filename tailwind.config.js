/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "var(--primary)",
        btnHover: "var(--hover-clr)",
        selected: "var(--selected-clr)",
        hoverItem: "var(--bg-hover)",
      },
      textColor: {
        primary: "var(--primary-text-color)",
        secondary: "#676879",
      },
      borderRadius: {
        normal: "var(--rounded-normal)",
      },
    },
  },
  plugins: [],
};
