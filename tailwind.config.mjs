/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline,js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        AreaInktrap: ["AreaInktrap", "sans-serif"],
        AreaNormal: ["AreaNormal", "sans-serif"],
      },
      colors: {
        "desk-gray": {
          300: "#eaecec",
          500: "#bbbdbf",
          700: "#343535",
        },
        "desk-blue": "#2e59a9",
        "desk-brown": "#574a43",
        "desk-orange": "#e36c2a",
        "desk-white": "#ffffff",
        "desk-black": "#050505",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
