/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "poppins-regular": "Poppins-Regular",
        "poppins-bold": "Poppins-Bold",
        "poppins-semibold": "Poppins-SemiBold",
        "poppins-medium": "Poppins-Medium",
        "poppins-light": "Poppins-Light",
        "poppins-extralight": "Poppins-ExtraLight",
        "poppins-black": "Poppins-Black",
        "poppins-extrabold": "Poppins-ExtraBold",
      },
    },
  },
  plugins: [],
};
