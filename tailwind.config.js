/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            boxShadow: {
                cs1: '0px 15px 15px rgba(0, 0, 0, 0.2)', //custom 1
            },
        },
        fontFamily: {
            ptnd: ['Pretendard'],
            dm: ['DM Sans'],
            gm: ['GmarketSans'],
        },
    },
    plugins: [],
};
