/** @type {import('tailwindcss').Config} */
export const content = [
  "./renderer/**/*.{vue,js,ts,jsx,tsx}",
  "./pages/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [require("@tailwindcss/typography")];
