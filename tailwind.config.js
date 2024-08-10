/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      zIndex: {
        150: 150,
      },
      safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
      animation: { "loop-scroll": "loop-scroll 50s linear infinite","typing": "typing 2s steps(20) infinite alternate, blink .7s infinite"},
      keyframes: {
        "loop-scroll": {
          from: { transform: "translate(0)" },
          to: { transform: "translate(-100%)" },
        },"typing": {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        "blink": {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mono: ["MonoRG", "sans-serif"],
        baloo: ["'Baloo Chettan 2'", "sans-serif"],
      },
      colors: {
        light_gray: "#f4f4f4",
        text_gray: "#535253",
        theme_gold: "#bf9966",
        theme_green: "#69b295",
        theme_yellow: "#d8c46f",
        theme_red: "#d35f59",
        theme_black: "#3d3d3d",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animated')
  ],
};
