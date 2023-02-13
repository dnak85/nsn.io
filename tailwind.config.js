/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            boxShadow: {
                cs1: '0px 15px 15px rgba(0, 0, 0, 0.2)', //custom 1
                cs2: '0px 0px 0px 2px rgba(255, 255, 255, 0.8)', //custom2
            },
        },
        fontFamily: {
            ptnd: ['Pretendard'],
            dm: ['DM Sans'],
            gm: ['GmarketSans'],
        },
        screens: {
            xsm: { raw: '(max-height: 280px)' },
        },
    },
    plugins: [],
};
