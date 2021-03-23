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
        "darkblue": "#1c0b3b",

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
      width: {
        "1/9": "11.1111111111111111%",
         "2/9": "22.2222222222222222%",
          "3/9": "33.3333333333333333%",
           "4/9": "44.4444444444444444%",
            "5/9": "55.5555555555555555%",
             "6/9": "66.6666666666666666%",
              "7/9": "77.7777777777777777%",
               "8/9": "88.8888888888888888%",
                "9/9": "99.9999999999999999%",
      }
    },
    /// TailwindCSS doesn't have portrait-related breakpoints yet. 
   
  },
  plugins: [],
};
