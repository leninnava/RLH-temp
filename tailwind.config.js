const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { minWidth } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: {
    enabled: false,
    content: ["./dist/*.html"],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
         fontFamily: {
              sans: ['"Museo Sans Cyrl"', ...defaultTheme.fontFamily.sans],
              display: ['Jost'],
              "MSC": ['"Museo Sans Cyrl"'],
            },
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
        "action-button-gradient": {
          first: "#ff3883",
          last: "#cb2060",
        }
      },
      boxShadow: {
        "blue-glow" : "0px 20px 66px 0px rgba(122, 44, 223, 0.555)",
      },
       screens: {
        'landscape': {'raw': '(max-width: 820px) and (max-height: 420px)'},
        // => @media (orientation: portrait) { ... }
      },
    },
    /// TailwindCSS doesn't have portrait-related breakpoints yet. 
   
  },
  plugins: [],
};
