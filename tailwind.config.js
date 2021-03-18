const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    enabled: true,
    content: ["./dist/*.html", "./dist./*.css"],
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
