/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStops: {
        "blue-dark": "#1955A5",
        "maroon-dark": "#220D16",
        "blue-light": "#0893DD",
        "color-card1": "#1F83BF",
        "color-card2": "#1C6CB2",
      },
      colors: {
        "blue-dark": "#1955A5",
        "blue-light": "#0893DD",
        "hover-button-card": "#1C6CB2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
