const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import("tailwindcss").Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               "50": "#f7f7f6",
               "100": "#e4e4e3",
               "200": "#c9c9c6",
               "300": "#a7a6a1",
               "400": "#84837d",
               "500": "#696963",
               "600": "#53534e",
               "700": "#454440",
               "800": "#393936",
               "900": "#32322f",
               "950": "#1d1d1b",
            },
            ...defaultTheme.colors,
         },
         fontSize: {
            "2xs": [
               "0.5rem",
               {
                  lineHeight: "0.8rem",
               },
            ],
            "3xs": [
               "0.3rem",
               {
                  lineHeight: "0.75rem",
               },
            ],
            ...defaultTheme.fontSize,
         },
         screens: {
            xs: "475px",
            ...defaultTheme.screens,
         },
         width: {
            128: "32rem",
            144: "36rem",
            ...defaultTheme.width,
         },
         height: {
            128: "32rem",
            144: "36rem",
            ...defaultTheme.height,
         },
         spacing: {
            128: "32rem",
            144: "36rem",
            ...defaultTheme.spacing,
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         animation: {
            rotate: "rotate 20s linear infinite",
            ...defaultTheme.animation,
         },
         keyframes: {
            rotate: {
               "0%": {transform: "rotate(0deg)"},
               "100%": {transform: "rotate(360deg)"},
            },
         },
         fontFamily: {
            cormorant: ["Cormorant SC", "serif"],
            manrope: ["Manrope", "sans-serif"],
            ...defaultTheme.fontFamily,
         },
      },
   },
   plugins: [require("tailwindcss-text-balance")],
}

