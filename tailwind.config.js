/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4A5AFF",
                "light-gradient" : "linear-gradient('#111827', '#4A5AFF')",
                "dark-gradient" : "linear-gradient('#414FDA', '#FFFFFF')",
            },
            fontFamily: {
                primary: ["Inter", "sans-serif"],
                graphik: ["Graphik", "sans-serif"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
    ],
    darkMode: "class",
};