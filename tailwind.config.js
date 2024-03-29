// colors gives access to all the colors
import colors from "tailwindcss/colors";

// all the colors that we gonna use are now defined
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900],
        },
      },
    },
  },
  // npm i tailwind-scrollbar-hide then add this part in the config to be able to hide scrollbar in classname="scrollbar-hide"
  plugins: [require("tailwind-scrollbar-hide")],
};
