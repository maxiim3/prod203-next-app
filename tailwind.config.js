const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            clrPrimary: {
               50: '#f7f7f6',
               100: '#e4e4e3',
               200: '#c9c9c6',
               300: '#a7a6a1',
               400: '#84837d',
               500: '#696963',
               600: '#53534e',
               700: '#454440',
               800: '#393936',
               900: '#32322f',
               950: '#1d1d1b',
            },
            clrAccent: {
               50: '#edfefd',
               100: '#d2fbf9',
               200: '#aaf7f5',
               300: '#70f0ee',
               400: '#35e3e3',
               500: '#12c5c8',
               600: '#129fa8',
               700: '#167f88',
               800: '#1b666f',
               900: '#1b555e',
               950: '#0c3840',
            },
            clrSuccess: {
               100: '#E8FBD5',
               200: '#CDF7AD',
               300: '#A6E97F',
               400: '#7ED35C',
               500: '#4BB72D',
               600: '#329D20',
               700: '#1E8316',
               800: '#0E6A0E',
               900: '#08570E',
            },
            clrInfo: {
               100: '#CDF2FE',
               200: '#9BDFFE',
               300: '#69C7FD',
               400: '#44AFFB',
               500: '#0788F9',
               600: '#0569D6',
               700: '#034EB3',
               800: '#023790',
               900: '#012777',
            },
            clrWarning: {
               100: '#FDF5CB',
               200: '#FCE898',
               300: '#F7D664',
               400: '#EFC23D',
               500: '#E5A502',
               600: '#C48801',
               700: '#A46D01',
               800: '#845400',
               900: '#6D4200',
            },
            clrDanger: {
               100: '#FFE2D9',
               200: '#FFBFB4',
               300: '#FF948E',
               400: '#FF7278',
               500: '#FF445D',
               600: '#DB3158',
               700: '#B72251',
               800: '#931549',
               900: '#7A0D44',
            },
            ...defaultTheme.colors,
         },
         fontSize: {
            '2xs': [
               '0.5rem',
               {
                  lineHeight: '0.8rem',
               },
            ],
            '3xs': [
               '0.3rem',
               {
                  lineHeight: '0.75rem',
               },
            ],
            ...defaultTheme.fontSize,
         },
         screens: {
            xs: '475px',
            ...defaultTheme.screens,
         },
         width: {
            128: '32rem',
            144: '36rem',
            ...defaultTheme.width,
         },
         height: {
            128: '32rem',
            144: '36rem',
            ...defaultTheme.height,
         },
         spacing: {
            128: '32rem',
            144: '36rem',
            ...defaultTheme.spacing,
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         animation: {
            reveal: 'scaleAndFade 750ms ease-in-out',
            rotate: 'rotate 20s linear infinite',
            revealFromBottom: 'fadeAndSlideFromBottom 450ms ease-in-out 1.45s both',
            ...defaultTheme.animation,
         },
         keyframes: {
            fadeAndSlideFromBottom: {
               '0%': {opacity: '0', transform: 'translateY(100px)'},
               '100%': {opacity: '1', transform: 'translateY(0)'},
            },
            scaleAndFade: {
               '0%': {opacity: '0', transform: 'scale(0.95)'},
               '100%': {opacity: '1', transform: 'scale(1)'},
            },
            fadeIn: {
               '0%': {opacity: '0'},
               '100%': {opacity: '1'},
            },
            rotate: {
               '0%': {transform: 'rotate(0deg)'},
               '100%': {transform: 'rotate(360deg)'},
            },
         },
         fontFamily: {
            cormorant: ['var(--font-cormorant)'],
            manrope: ['var(--font-manrope)'],
            poppins: ['var(--font-poppins)'],
            ...defaultTheme.fontFamily,
         },
      },
   },
   plugins: [require('tailwindcss-text-balance'), require('daisyui')],

   // daisyUI config (optional - here are the default values)
   daisyui: {
      themes: [
         {
            customTheme: {
               primary: '#f7f7f6',
               secondary: '#1b555e',
               accent: '#12c5c8',
               'base-100': '#000000',
               'base-200': '#1d1d1b',
               'base-300': '#32322f',
               neutral: '#84837d',
               info: '#0788F9',
               success: '#4BB72D',
               warning: '#E5A502',
               error: '#FF445D',
            },
         },
         'dark',
      ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: false,
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
      prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
   },
}
