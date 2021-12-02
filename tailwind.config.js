// tailwind.config.js
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontsize: {
            '9xl': '20rem'
        },
        extend: {
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}