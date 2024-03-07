const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(
            __dirname,
            '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
        ),
        '../../node_modules/flowbite-react/lib/**/*.js',
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            colors: {
                accent: colors.purple[500],
                accentSecondary: colors.pink[500],
            },
            screens: {
                xs: '475px',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
    darkMode: 'class',
};
