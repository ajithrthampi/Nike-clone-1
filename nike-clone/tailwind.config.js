/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        anto: ['Inter', 'sans-serif']
      },
      rotate: {
        '17': '13deg',
      },
      width:{
        21: "8rem",
        42: "25rem",
        100: "80rem",
        99:"50rem",
       
        50: "72rem",
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
       
      },
      height:{
        100: "40rem",
        98:"40rem",
        80:"80px",
        150: "150px",
        225: "225px",
        250: "290px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        "90vh": "90vh",

      },

      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },

      screens: {
        sm: "640px",
        md: "768px",
        slg: "960px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px" ,
      },

      colors: {
        cartBg : "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },

        
    },
  },
  plugins: [],
}

