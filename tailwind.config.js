/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grayDark: "#9AA0A6",
        grayDarkSecondary: "#666666",
        grayDarkFill: "#303339",
        darkBackground: "#202124",
        grayLight: "#5F6368",
        blueDark: "#8AB4F8",
        blueDarkFill: "#81A2D0",
      },
    },
  },
  plugins: [],
};
