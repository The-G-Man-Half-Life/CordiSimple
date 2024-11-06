import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#FDE2E5',
                    dark: '#242038',
                },
                secondary: {
                    DEFAULT: '#E56B79',
                    dark: '#1A1728',
                },
                title: {
                    DEFAULT: '#E56B79',
                    dark: '#3E8989',
                },
                text: {
                  DEFAULT: '#F77E8C',
                  dark: '#3E8989',
              },
            },
            animation: {
              vibrate: 'vibrate 0.7s infinite',
            },
            keyframes: {
              vibrate: {
                '0%': { transform: 'rotate(0deg)' },
                '25%': { transform: 'rotate(5deg)' },
                '50%': { transform: 'rotate(-5deg)' },
                '75%': { transform: 'rotate(2.5deg)' },
                '100%': { transform: 'rotate(0deg)'
              },
            },
          },
        },
    },
    plugins: [forms],
}
