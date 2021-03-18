const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    enabled: false,
    content: ["./dist/*.html"],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        emerald: colors.emerald,
        teal: colors.teal,
        transparent: "transparent",
        pink: {
          default: "#FF3883",
        },
        "bright-blue": "#7D68FF",

        "bg-gradient": {
          first: "#101C65",
          last: "#00062E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
