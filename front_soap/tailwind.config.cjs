/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./layouts/**/*.jsx",
        "./components/**/*.jsx",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
            },
            spacing: {
                18: "10rem",
                "-17": "-17px",
                "-25": "-25px",
                "-14": "-14px",
                600: "600px",
            },
            colors: {
                red: {
                    600: "#EB2234",
                },
                "J&T": "#E81C23",
                "J&T-low": "#ef4046",
                "J&T-high": "#b7050b",
            },
            screens: {
                extraSmall: "340px",
            },
        },
        "J&T": "#E81C23",
        "J&T-low": "#ef4046",
        "J&T-high": "#b7050b",
    },
    plugins: [require("@tailwindcss/forms")],
};
