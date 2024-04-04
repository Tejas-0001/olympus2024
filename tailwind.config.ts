import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        green: "#0F9D58",
        yello : "#F4B400",
        red : "#DB4437",
        blue : "#4285F4",
        color : "#f2f2f3",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter", "black"],
  },
};
export default config;
