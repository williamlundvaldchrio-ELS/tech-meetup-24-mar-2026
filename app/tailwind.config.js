/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    black: '#1a1612',
                    white: '#ffffff',
                    cream: '#faf8f4',
                    orange: '#c87941',
                    'orange-light': '#f3e6d8',
                    'orange-pale': '#fdf6ef',
                    muted: '#8a8076',
                    border: '#e4ddd4',
                },
            },
            fontFamily: {
                display: ['"Fraunces"', 'serif'],
                body: ['"Work Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
