/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            'display': ['mulish'],
            'body': ['"Open Sans"'],
        },
        boxShadow: {
        '3xl': '10px 40px 50px 0px rgba(229, 233, 246, 0.40);',
        }
    },
        plugins: [],
}