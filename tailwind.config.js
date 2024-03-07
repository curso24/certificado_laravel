import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            height: {
                "10v": "10vh",
                "65v": "65vh",
                "15v": "15vh",
            },
            colors: {
                "header": "#d0cfcf",
                "footer": "#a39da0",
                "main": "#e4eae6",
                "nav": "#dfe5e0"
            }

        },
    },
    plugins: [forms,require("daisyui")],
};
