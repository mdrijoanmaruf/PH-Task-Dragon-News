// tailwind.config.js
export const content = [
    './src/**/*.{html,js,jsx,ts,tsx}',
];
export const theme = {
    extend: {
        colors: {
            D2: '#403F3F', // Your dark gray color
            D3: '#706F6F', // Your medium gray color
            // You can add more colors here following the same pattern
            // Example:
            // primary: '#3B82F6',
            // secondary: '#10B981',
        },
    },
};
export const plugins = [];