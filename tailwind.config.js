/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        cs1: "0px 15px 15px rgba(0, 0, 0, 0.2)", //custom 1
        cs2: "0px 0px 0px 2px rgba(255, 255, 255, 0.8)", //custom2
        cs3: "0px 00px 16px rgba(0,0,0, 0.25)", // custom3
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    fontFamily: {
      ptnd: ["Pretendard"],
      dm: ["DM Sans"],
      gm: ["GmarketSans"],
      inter: ["Inter"],
    },
    screens: {
      xsm: { raw: "(max-width: 280px)" },
      lg: "950px",
    },
  },
  plugins: [],
};
