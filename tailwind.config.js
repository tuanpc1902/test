/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,json}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        minHeight: {
            notInclueHeader: 'calc(100vh - 60px)',
        },
        extend: {
            colors: {
                pink: '#F4ABC4',
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};
