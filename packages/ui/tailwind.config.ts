import config from "@mini-ui/config-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  plugins: [],
  ...config,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.stories.tsx",
    ".storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}

