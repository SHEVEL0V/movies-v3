/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/module/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      bgWhiteFirst: "#f1f5f9",
      bgWhiteSecond: "#cbd5e1",

      bgDarkFirst: "#64748b",
      bgDarkSecond: "#334155",
      bgDarkThird: "#1e293b",

      textWhite: "#f1f5f9",
      textBlack: "#1e293b",

      yellow: "#facc15",
      white: "#f8fafc",
      blue: "#2979ff",
    },
  },
  plugins: [],
};
export default config;
