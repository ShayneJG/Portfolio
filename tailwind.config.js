/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora"],
      },
      keyframes: {
        flash: {
          to: {
            visibility: "hidden",
          },
        },
      },
      animation: {
        flash: "flash 1s steps(5, start) infinite",
      },
    },
    plugins: [],
  },
};
